// components/CertificationCard.jsx
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../utils/motion";

function CertificationCard({ index, name, issuer, date, image, certificate_link }) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl sm:w-[370px] w-full h-fit shadow-sm shadow-primary"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="certificate_image"
            width={370}
            height={230}
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
            Issued by: {issuer} <br /> Date: {date}
          </p>
        </div>

        <div className="mt-4">
          <a
            href={certificate_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Certificate
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default CertificationCard;
