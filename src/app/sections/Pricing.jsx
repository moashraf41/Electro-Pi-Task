"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Container from "../components/Container";

const Pricing = () => {
  const plans = [
    {
      name: "Hobby",
      price: "$0",
      description:
        "Great for personal use or a first step to explore the Scout platform.",
      features: [
        "100 Interactions (GPT-3.5 Only)",
        "Deploy 1 App",
        "Connect 1 Collection",
        "10GB of Storage",
        "Community Support (Discord)",
      ],
      icon: "/heart.svg",
    },
    {
      name: "Pro",
      popular: true,
      price: "$50",
      description:
        "Perfect for building and scaling models with limited context.",
      features: [
        "Unlimited Interactions",
        "$0.09 per Interaction",
        "Deploy 10 Apps",
        "Connect 10 Collections",
        "1TB of Storage",
        "Community & Email Support",
      ],
      icon: "/stars.svg",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description:
        "For large scale models with large and ever-changing context.",
      features: [
        "Unlimited Interactions",
        "Custom Interaction Pricing",
        "Unlimited Apps",
        "Unlimited Collections",
        "Unlimited Storage",
        "Dedicated Support",
      ],
      icon: "/building.svg",
    },
  ];

  const dedicatedSupportPlan = {
    name: "Add-on",
    price: "$750",
    priceFrequency: "monthly",
    description:
      "We are here to help get you started with a dedicated support engineer who can assist with scoping your first models and getting them deployed.",
    features: [
      "Shared Slack Channel",
      "Dedicated Support Engineer",
      "Prompt Engineering Guidance",
      "Context Sourcing Guidance",
    ],
    icon: "/add.svg",
    note: "No long term contract obligation.",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bg-pricing.svg')] bg-cover bg-no-repeat opacity-80 mix-blend-screen" />

      <Container className="relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
            A plan for every need.
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto px-4">
            Whether you are just starting or require massive scale, we have a
            solution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col min-h-[520px] sm:min-h-[550px] ${
                plan.popular
                  ? "ring-1 ring-white/30 bg-[url('/pro.svg')] bg-cover bg-center"
                  : "bg-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <span
                    className="text-white text-xs sm:text-sm font-semibold px-4 sm:px-6 py-1.5 sm:py-2 rounded-full"
                    style={{
                      background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(27, 27, 27, 0) 0%, #1B1B1B 49.48%), linear-gradient(37deg, rgba(195, 140, 245, 0.28) 11.56%, rgba(0, 0, 0, 0) 86.3%), linear-gradient(222deg, rgba(255, 255, 255, 0.2) 8.7%, rgba(0, 0, 0, 0) 37.9%)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      boxShadow:
                        "0px 1px 0px 0px rgba(255,255,255,0.06) inset, 0px 4px 10px 0px rgba(0,0,0,0.3)",
                    }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 mb-4 sm:mb-6 bg-white/10 border border-white/20 pe-3 sm:pe-4 ps-2 py-1 rounded-full w-fit">
                <Image
                  src={plan.icon}
                  alt="Plan icon"
                  width={20}
                  height={20}
                  className="sm:w-[25px] sm:h-[25px]"
                />
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {plan.name}
                </h3>
              </div>

              <div className="mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  {plan.price}
                </div>
                <p className="text-white/60 mt-2 text-sm sm:text-base leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6 sm:mb-8 w-full">
                <Button
                  text={index === 2 ? "Request Access" : "Sign Up"}
                  outline={index === 0 || index === plans.length - 1}
                  padding="px-4 sm:px-6 py-2.5 sm:py-3 w-full text-sm sm:text-base"
                />
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <Image
                      src="/check.svg"
                      alt="Check icon"
                      width={16}
                      height={16}
                      className="mt-0.5 flex-shrink-0 sm:w-[18px] sm:h-[18px]"
                    />
                    <span className="text-white/80 text-sm sm:text-base leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            className="sm:block lg:hidden relative backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col min-h-[520px] sm:min-h-[550px] bg-white/5"
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-6 bg-white/10 border border-white/20 pe-3 sm:pe-4 ps-2 py-1 rounded-full w-fit">
              <Image
                src={dedicatedSupportPlan.icon}
                alt="Plan icon"
                width={20}
                height={20}
                className="sm:w-[25px] sm:h-[25px]"
              />
              <h3 className="text-sm sm:text-base font-semibold text-white">
                Dedicated Support
              </h3>
            </div>

            <div className="mb-4 sm:mb-6">
              <div className="text-3xl sm:text-4xl font-bold text-white">
                {dedicatedSupportPlan.price}
              </div>
              <div className="text-white/60 text-sm sm:text-base mb-2">
                {dedicatedSupportPlan.priceFrequency}
              </div>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                {dedicatedSupportPlan.description}
              </p>
            </div>

            <div className="mb-6 sm:mb-8 w-full">
              <Button
                text="Request Access"
                padding="px-4 sm:px-6 py-2.5 sm:py-3 w-full text-sm sm:text-base"
              />
            </div>

            <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 flex-grow">
              {dedicatedSupportPlan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <Image
                    src="/check.svg"
                    alt="Check icon"
                    width={16}
                    height={16}
                    className="mt-0.5 flex-shrink-0 sm:w-[18px] sm:h-[18px]"
                  />
                  <span className="text-white/80 text-sm sm:text-base leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-white/50 text-xs sm:text-sm mt-auto">
              {dedicatedSupportPlan.note}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden lg:block mt-8 sm:mt-12 max-w-7xl mx-auto"
        >
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 xl:p-10 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:grid lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-xl xl:text-2xl font-bold text-white mb-4">
                  Dedicated Support
                </h3>
                <p className="text-white/70 max-w-xl leading-relaxed mb-4 text-sm xl:text-base">
                  We are here to help get you started with a dedicated{" "}
                  <br className="hidden xl:block" /> support engineer who can
                  assist with scoping your <br className="hidden xl:block" />
                  first models and getting them deployed.
                </p>

                <h4 className="text-white/70 font-semibold mb-6 text-sm xl:text-base">
                  What's included
                </h4>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-3 xl:gap-y-4 gap-x-6 xl:gap-x-8">
                  {dedicatedSupportPlan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Image
                        src="/check.svg"
                        alt="Check"
                        width={16}
                        height={16}
                        className="xl:w-[18px] xl:h-[18px]"
                      />
                      <span className="text-white/80 text-sm xl:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center lg:border-l lg:border-white/10 lg:pl-6 xl:pl-8">
                <div className="flex items-center gap-2 mb-4 xl:mb-6 bg-white/10 border border-white/20 pe-3 xl:pe-4 ps-2 py-1 rounded-full w-fit">
                  <Image
                    src={dedicatedSupportPlan.icon}
                    alt="Addon plan icon"
                    width={20}
                    height={20}
                    className="xl:w-[25px] xl:h-[25px]"
                  />
                  <h3 className="font-semibold text-white text-sm xl:text-base">
                    {dedicatedSupportPlan.name}
                  </h3>
                </div>

                <div className="text-3xl xl:text-4xl font-bold text-white mb-2">
                  {dedicatedSupportPlan.price}
                </div>
                <div className="text-white/60 mb-4 xl:mb-6 text-sm xl:text-base">
                  {dedicatedSupportPlan.priceFrequency}
                </div>

                <Button
                  text="Request Access"
                  padding="px-4 xl:px-6 py-2.5 xl:py-3 w-full text-sm xl:text-base"
                />

                <p className="text-white/50 text-xs xl:text-sm mt-3 xl:mt-4 w-full text-left">
                  {dedicatedSupportPlan.note}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Pricing;
