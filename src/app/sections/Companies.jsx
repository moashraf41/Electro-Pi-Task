"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../components/Container";

const Companies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.25,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const topRowCompanies = [
    { name: "Statsig", logo: "/logo1.svg", width: 120, height: 30 },
    { name: "Deno", logo: "/logo2.svg", width: 100, height: 30 },
    { name: "Modal", logo: "/logo3.svg", width: 100, height: 30 },
    { name: "Hyper", logo: "/logo4.svg", width: 120, height: 30 },
  ];

  const bottomRowCompanies = [
    { name: "Evidence", logo: "/logo5.svg", width: 120, height: 30 },
    { name: "Dagster", logo: "/logo6.svg", width: 120, height: 30 },
    { name: "Case Status", logo: "/logo7.svg", width: 140, height: 30 },
    { name: "Dig South", logo: "/logo8.svg", width: 120, height: 30 },
  ];

  return (
    <section className="relative pb-10">
      <div className="absolute inset-0 bg-[url('/bg-companies.svg')] bg-cover bg-no-repeat opacity-80 mix-blend-screen -z-10" />
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
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute top-8 left-0 w-full h-[2px] z-20"
      >
        <Image
          src="/Bline.png"
          alt="Top decorative line"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute top-38 left-0 w-full h-[2px] z-20"
      >
        <Image
          src="/Bline.png"
          alt="Top decorative line"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <Container className="relative z-10 pt-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap items-center justify-center mb-12 sm:mb-16"
          >
            {topRowCompanies.map((company) => (
              <motion.div
                key={company.name}
                variants={logoVariants}
                className="group cursor-pointer border border-[#1F1F1F] flex items-center justify-center min-w-[300px] min-h-[110px] sm:min-h-[120px] relative z-20"
              >
                <motion.div variants={imageVariants} whileHover="hover">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={company.width}
                    height={company.height}
                    priority
                    className="transition duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.h2
              variants={titleVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-medium"
            >
              Used by teams at Statsig, Deno,
              <br className="hidden sm:block" />
              Dagster, Evidence and more.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap items-center justify-center"
          >
            {bottomRowCompanies.map((company) => (
              <motion.div
                key={company.name}
                variants={logoVariants}
                className="group cursor-pointer border border-[#1F1F1F] flex items-center justify-center min-w-[300px] min-h-[110px] sm:min-h-[120px] relative z-20"
              >
                <motion.div variants={imageVariants} whileHover="hover">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={company.width}
                    height={company.height}
                    priority
                    className="transition duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute bottom-40 left-0 w-full h-[2px] z-20"
      >
        <Image
          src="/Bline.png"
          alt="Bottom decorative line"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute bottom-10 left-0 w-full h-[2px] z-20"
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

export default Companies;
