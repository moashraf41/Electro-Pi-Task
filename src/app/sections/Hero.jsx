"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

const Hero = () => {
  const containerRef = useRef(null);

  const starPositions = [
    { left: "10%", top: "20%", delay: 0 },
    { left: "85%", top: "15%", delay: 0.5 },
    { left: "20%", top: "60%", delay: 1 },
    { left: "75%", top: "70%", delay: 1.5 },
    { left: "45%", top: "25%", delay: 2 },
    { left: "60%", top: "80%", delay: 0.8 },
    { left: "15%", top: "85%", delay: 1.2 },
    { left: "90%", top: "45%", delay: 1.8 },
    { left: "35%", top: "10%", delay: 0.3 },
    { left: "70%", top: "35%", delay: 1.3 },
    { left: "25%", top: "75%", delay: 0.7 },
    { left: "80%", top: "90%", delay: 1.7 },
    { left: "5%", top: "45%", delay: 0.4 },
    { left: "95%", top: "25%", delay: 1.4 },
    { left: "50%", top: "5%", delay: 0.9 },
    { left: "65%", top: "60%", delay: 1.9 },
    { left: "30%", top: "90%", delay: 0.6 },
    { left: "85%", top: "65%", delay: 1.6 },
    { left: "12%", top: "35%", delay: 0.2 },
    { left: "55%", top: "85%", delay: 1.1 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden pb-10 sm:pb-20"
    >
      <div className="absolute inset-0 bg-[url('/bg-hero.svg')] bg-cover bg-no-repeat opacity-80 mix-blend-screen" />

      <div className="absolute inset-0 overflow-hidden">
        {starPositions.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -120],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: star.delay,
              ease: "easeOut",
            }}
            style={{
              left: star.left,
              top: star.top,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <Navbar />

        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 0.7, scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/2 left-0 -translate-y-1/2 hidden lg:block"
        >
          <Image
            src="/line.svg"
            alt="Decorative line left"
            width={2}
            height={200}
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 0.7, scaleY: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block"
        >
          <Image
            src="/line.svg"
            alt="Decorative line right"
            width={2}
            height={200}
            priority
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <motion.div
            variants={badgeVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-fit mx-auto px-3 sm:px-4 flex gap-2 items-center justify-center py-2 rounded-full bg-white/10 backdrop-blur-sm text-xs sm:text-sm cursor-pointer transition-colors duration-300"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={50}
              height={14}
              className="sm:w-[70px] sm:h-[20px]"
              priority
            />
            <span className="text-slate-300">is currently in beta</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/chevron-right.svg"
                alt="Arrow right"
                width={4}
                height={4}
                className="sm:w-[5px] sm:h-[5px]"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={headingVariants}
            className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-b from-white to-[#BABABA] bg-clip-text text-transparent"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="block"
            >
              AI for teams building
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="block"
            >
              what's next.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-white/50"
          >
            Scout gives you the tools to build custom agents and{" "}
            <br className="hidden sm:block" /> workflows in record time.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-8 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              <Button
                text={
                  <span className="flex items-center gap-2">
                    Get Started
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src="/arrow.svg"
                        alt="Arrow"
                        width={14}
                        height={14}
                        className="sm:w-[16px] sm:h-[16px]"
                        priority
                      />
                    </motion.div>
                  </span>
                }
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            className="mt-8 sm:mt-12 lg:mt-16 flex justify-center"
          >
            <div className="relative">
              <Image
                src="/Hero_img.svg"
                alt="Hero decorative group"
                width={1200}
                height={800}
                className="mx-auto"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="bottom-0 left-0 w-full mt-8 h-[2px] relative"
      >
        <Image
          src="/Bline.png"
          alt="Bottom decorative line"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </section>
  );
};

export default Hero;
