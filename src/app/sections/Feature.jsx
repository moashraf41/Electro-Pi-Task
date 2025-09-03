"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "../components/Container";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.9,
    margin: "-100px 0px",
  });
  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/bg-bento.svg')] bg-cover bg-center bg-no-repeat opacity-80 mix-blend-screen" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full h-auto">
            <Image
              src="/features.svg"
              alt="Features"
              width={1200}
              height={800}
              className="mx-auto"
              priority
            />
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={
          isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
        }
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute bottom-0 left-0 w-full h-[2px] z-20"
      >
        <Image
          src="/Bline.png"
          alt="Bottom decorative line"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
};

export default Features;
