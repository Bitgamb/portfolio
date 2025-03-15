import { useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function PlayerModel({ scale, position, rotation, group }) {
    const modelPaths = [
        "/models/player/noddy.gltf",
        "/models/player/gojo.gltf",
        "/models/player/nezuko.gltf",
         "/models/player/thomas.gltf"
    ];

    const [currentModelIndex, setCurrentModelIndex] = useState(0);
    const { scene } = useGLTF(modelPaths[currentModelIndex]);

    // Change model every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentModelIndex((prevIndex) => (prevIndex + 1) % modelPaths.length);
        }, 10000); // Change model every 5 seconds

        return () => clearInterval(interval);
    }, []);

    // Auto-rotate the model
    useFrame(({ clock }) => {
        if (scene) {
            scene.rotation.y = clock.getElapsedTime() * 0.8; // Adjust speed if needed
        }
    });

    if (!scene) {
        console.error("GLTF not loaded correctly");
        return null;
    }

    return (
        <group
            dispose={null}
            scale={scale || [1, 1, 1]}
            position={position || [0, -1, -1]}
            rotation={[0, 0, 0]}
            ref={group}
        >
            <primitive object={scene} />
        </group>
    );
}

export default PlayerModel;
