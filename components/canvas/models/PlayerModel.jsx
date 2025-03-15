function PlayerModel({ nodes, materials, scale, position, rotation, group }) {
    return (
        <group dispose={null} scale={scale} position={position} ref={group} rotation={rotation}>
            <group>
            <primitive object={nodes.Hips} />
                <skinnedMesh
                    frustumCulled={false}
                    geometry={nodes.avaturn_body.geometry}
                    material={materials.avaturn_body_material}
                    skeleton={nodes.avaturn_body.skeleton}
                />
                <skinnedMesh
                    frustumCulled={false}
                    geometry={nodes.avaturn_hair_0.geometry}
                    material={materials.avaturn_hair_0_material}
                    skeleton={nodes.avaturn_hair_0.skeleton}
                />
                <skinnedMesh
                    frustumCulled={false}
                    geometry={nodes.avaturn_look_0.geometry}
                    material={materials.avaturn_look_0_material}
                    skeleton={nodes.avaturn_look_0.skeleton}
                />
                <skinnedMesh
                    frustumCulled={false}
                    geometry={nodes.avaturn_shoes_0.geometry}
                    material={materials.avaturn_shoes_0_material}
                    skeleton={nodes.avaturn_shoes_0.skeleton}
                />
            </group>
        </group>
    );
}

export default PlayerModel;
