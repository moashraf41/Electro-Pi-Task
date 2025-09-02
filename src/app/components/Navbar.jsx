"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Features", "Pricing", "Docs", "Blog"];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-50"
    >
      <motion.div
        variants={itemVariants}
        className="flex gap-3 sm:gap-5 items-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={90}
            height={16}
            className="sm:w-[110px] sm:h-[20px]"
            priority
          />
        </motion.div>

        <ul className="hidden lg:flex gap-3 xl:gap-5 text-slate-300">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href={`#${item.toLowerCase()}`}
                className="relative text-sm xl:text-base hover:text-white transition-colors duration-300 py-2 px-1"
                whileHover="hover"
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                  initial={{ scaleX: 0 }}
                  variants={{
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="hidden sm:flex gap-3 lg:gap-5 items-center"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button text="Login" outline />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button text="Sign Up" />
        </motion.div>
      </motion.div>

      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden flex flex-col gap-1 p-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Toggle menu"
      >
        <motion.div
          className="w-5 h-0.5 bg-white"
          animate={{
            rotate: isMenuOpen ? 45 : 0,
            y: isMenuOpen ? 4 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-5 h-0.5 bg-white"
          animate={{
            opacity: isMenuOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-5 h-0.5 bg-white"
          animate={{
            rotate: isMenuOpen ? -45 : 0,
            y: isMenuOpen ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      <motion.div
        variants={mobileMenuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden sm:hidden"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <motion.a
              key={item}
              variants={mobileItemVariants}
              href={`#${item.toLowerCase()}`}
              className="block text-slate-300 hover:text-white transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </motion.a>
          ))}
          <motion.div
            variants={mobileItemVariants}
            className="flex flex-col gap-3 pt-4 border-t border-white/10"
          >
            <Button text="Login" outline />
            <Button text="Sign Up" />
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
