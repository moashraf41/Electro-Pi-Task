"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../components/Container";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative pt-0 lg:pt-8 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/footer_bg.svg')] bg-cover bg-center bg-no-repeat opacity-80 mix-blend-screen" />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 lg:mt-8 mt-0"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:items-start w-full lg:w-2/5 text-center lg:text-left"
          >
            <div className="mb-8 w-full flex justify-center lg:justify-start">
              <Image
                src="/test.svg"
                alt="Scout Logo with decorative element"
                width={400}
                height={400}
                className="hidden lg:block w-full max-w-[420px] h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 flex-1"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-white/70 font-semibold mb-4 text-lg">
                Links
              </h3>
              <ul className="space-y-3">
                {["Features", "Pricing", "Docs", "Blog"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white hover:text-white/80 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-white/70 font-semibold mb-4 text-lg">
                Solutions
              </h3>
              <ul className="space-y-3">
                {["Slack Bot", "Discord Bot", "Command", "Onsite Chat"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white hover:text-white/80 transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-white/70 font-semibold mb-4 text-lg">
                Legal
              </h3>
              <ul className="space-y-3">
                {["Terms of Service", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white hover:text-white/80 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 mt-10 gap-4"
        >
          <div className="text-white/60 text-sm text-center md:text-left">
            Copyright © 2024 Scout. All rights reserved.
          </div>
          <div className="flex gap-4">
            {["footer1", "footer2", "footer3"].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <Image
                  src={`/${social}.svg`}
                  alt={`${social} icon`}
                  width={18}
                  height={18}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-[2px] z-20"
      >
        <Image
          src="/Bline.png"
          alt="Top decorative line"
          fill
          className="object-cover"
        />
      </motion.div>
    </footer>
  );
};

export default Footer;
