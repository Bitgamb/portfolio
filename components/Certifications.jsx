// components/Certifications.jsx
import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { certifications } from "../constants/certifications";
import CertificationCard from "./CertificationCard";

function Certifications() {
  return (
    <section className="xl:my-36 md:mx-36 p-8" id="certifications">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="sectionSubText">My Certifications</p>
        <h2 className="sectionHeadText">Certifications.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          These certifications validate my expertise in various technologies and domains. Each certification includes details about the issuing organization, date of completion, and a link to view the certificate.
        </motion.p>
      </div>

      <div className="md:mt-20 mt-10 flex justify-center flex-wrap gap-7">
        {certifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </section>
  );
}

export default Certifications;
