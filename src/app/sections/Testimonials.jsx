"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import Container from "../components/Container";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.9,
    margin: "-100px 0px",
  });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 0,
      logo: "/testimonials1.svg",
      quote:
        "Scout is an indispensable tool for our Engineering, DS and Sales teams to engage with our customers. We rely on Scout daily, making it an integral part of our operations.",
      person: "/person.svg",
      name: "Vijaye Raji",
      title: "CEO of Statsig",
    },
    {
      id: 1,
      logo: "/testimonials2.svg",
      quote:
        "The AI capabilities have transformed how we approach data analysis. Scout has become essential to our workflow and decision-making process.",
      person: "/person.svg",
      name: "Sarah Chen",
      title: "CTO of Modal",
    },
    {
      id: 2,
      logo: "/testimonials3.svg",
      quote:
        "Implementation was seamless and the results were immediate. Our team productivity has increased significantly since adopting Scout.",
      person: "/person.svg",
      name: "Mike Johnson",
      title: "Head of Engineering at Deno",
    },
    {
      id: 3,
      logo: "/testimonials4.svg",
      quote:
        "Scout's intuitive interface and powerful features make it a game-changer for our development process. Highly recommend it.",
      person: "/person.svg",
      name: "Emily Davis",
      title: "Product Manager at Hyper",
    },
    {
      id: 4,
      logo: "/testimonials5.svg",
      quote:
        "The automation capabilities have saved us countless hours. Scout is now an integral part of our daily operations.",
      person: "/person.svg",
      name: "Alex Rodriguez",
      title: "VP of Engineering at Evidence",
    },
    {
      id: 5,
      logo: "/testimonials6.svg",
      quote:
        "Outstanding platform that delivers on its promises. The team support and feature set are exceptional.",
      person: "/person.svg",
      name: "David Kim",
      title: "Technical Lead at Dagster",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8"
        >
          <div className="flex flex-row lg:flex-col gap-4 order-2 lg:order-1">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={logoVariants}
                className="cursor-pointer"
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 border-2 flex items-center justify-center transition-all duration-300 ${
                    activeTestimonial === index
                      ? "border-white"
                      : "border-neutral-600"
                  }`}
                >
                  <Image
                    src={testimonial.logo}
                    alt={`Company ${index + 1} logo`}
                    width={50}
                    height={50}
                    className={`transition-all duration-300 ${
                      activeTestimonial === index ? "brightness-0 invert" : ""
                    }`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="relative max-w-lg mx-auto order-1 lg:order-2">
            <div className="relative">
              <Image
                src="/testimonialsBg.svg"
                alt="Testimonials background"
                width={500}
                height={300}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-center space-y-4 sm:space-y-6"
                  >
                    <motion.blockquote className="text-sm sm:text-base md:text-xl font-medium leading-relaxed text-white">
                      "{testimonials[activeTestimonial].quote}"
                    </motion.blockquote>
                    <motion.div className="flex flex-col items-center space-y-2 sm:space-y-3">
                      <Image
                        src={testimonials[activeTestimonial].person}
                        alt={testimonials[activeTestimonial].name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {testimonials[activeTestimonial].name}
                        </h3>
                        <p className="text-xs text-gray-300">
                          {testimonials[activeTestimonial].title}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex flex-row lg:flex-col gap-4 order-3">
            {testimonials.slice(3, 6).map((testimonial, index) => {
              const actualIndex = index + 3;
              return (
                <motion.div
                  key={testimonial.id}
                  variants={logoVariants}
                  className="cursor-pointer"
                  onClick={() => setActiveTestimonial(actualIndex)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 border-2 flex items-center justify-center transition-all duration-300 ${
                      activeTestimonial === actualIndex
                        ? "border-white"
                        : "border-neutral-600"
                    }`}
                  >
                    <Image
                      src={testimonial.logo}
                      alt={`Company ${actualIndex + 1} logo`}
                      width={50}
                      height={50}
                      className={`transition-all duration-300 ${
                        activeTestimonial === actualIndex
                          ? "brightness-0 invert"
                          : ""
                      }`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute bottom-0 left-0 w-full h-[2px] z-20"
      >
        <Image
          src="/Bline.png"
          alt="Bottom decorative line"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Testimonials;
