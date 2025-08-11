import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// frontend
import js from "../../../assets/js.png";
import react from "../../../assets/react.png";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import tailwind from "../../../assets/tailwind.png";
import responsiveLogo from "../../../assets/responsive.png";

// backend
import nodejs from "../../../assets/nodejs.png";
import mongodb from "../../../assets/mongodb.png";
import express from "../../../assets/express.png";
import firebase from "../../../assets/firebase.png";
import jwt from "../../../assets/jwt.png";
import stripe from "../../../assets/stripe.png";
import git from "../../../assets/git.png";
import vsCode from "../../../assets/vscode.png";
import postman from "../../../assets/postman.png";
import figma from "../../../assets/figma.png";
import netlify from "../../../assets/netlify.png";

const skillCategories = {
  Frontend: [
    {
      name: "HTML5",
      icon: <img src={html} alt="HTML Icon" className="w-8 h-8" />,
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "CSS3",
      icon: <img src={css} alt="CSS Icon" className="w-8 h-8" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Tailwind CSS",
      icon: <img src={tailwind} alt="Tailwind Icon" className="w-8 h-8" />,
      color: "from-cyan-400 to-cyan-600",
    },
    {
      name: "JavaScript (ES6+)",
      icon: <img src={js} alt="JavaScript Icon" className="w-8 h-8" />,
      color: "from-yellow-400 to-yellow-600",
    },

    {
      name: "React",
      icon: <img src={react} alt="React Icon" className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
    },

    {
      name: "Responsive Design",
      icon: (
        <img src={responsiveLogo} alt="Tailwind Icon" className="w-8 h-8" />
      ),
      color: "from-purple-400 to-purple-600",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: <img src={nodejs} alt="Node.js Icon" className="w-8 h-8" />,
      color: "from-green-400 to-green-600",
    },
    {
      name: "Express.js",
      icon: <img src={express} alt="Express Icon" className="w-8 h-8" />,
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "MongoDB",
      icon: <img src={mongodb} alt="MongoDB Icon" className="w-8 h-8" />,
      color: "from-green-500 to-green-700",
    },
    {
      name: "Firebase",
      icon: <img src={firebase} alt="Firebase Icon" className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600",
    },
    {
      name: "JWT",
      icon: <img src={jwt} alt="JWT Icon" className="w-8 h-8" />,
      color: "from-red-400 to-red-600",
    },
    {
      name: "Stripe",
      icon: <img src={stripe} alt="Stripe Icon" className=" h-8" />,
      color: "from-indigo-400 to-indigo-600",
    },
  ],
  Tools: [
    {
      name: "Git & GitHub",
      icon: <img src={git} alt="Git Icon" className=" h-8 w-8" />,
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "VS Code",
      icon: <img src={vsCode} alt="Vs Code" className=" h-8 w-8" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Postman",
      icon: <img src={postman} alt="Postman" className=" h-8 w-8" />,
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "Figma",
      icon: <img src={figma} alt="figma" className=" h-8 w-8" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Firebase Console",
      icon: "🔥",
      color: "from-yellow-500 to-orange-600",
    },
    {
      name: "Netlify / Vercel",
      icon: <img src={netlify} alt="netlify" className=" h-8 w-8" />,
      color: "from-cyan-400 to-cyan-600",
    },
  ],
};

const alwaysLearning = [
  "Machine Learning",
  ".NET",
  "Go",
  "Kubernetes",
  "JAVA",
  "Blockchain",
  "DevOps",
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Here are the technologies and tools I work with to create amazing
            digital experiences.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            {Object.keys(skillCategories).map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                className={`relative px-6 py-3 font-semibold text-base transition-all duration-300 ${
                  activeCategory === category
                    ? "text-white dark:text-gray-800 shadow-lg"
                    : "text-gray-800 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
                    style={{ zIndex: -1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {skillCategories[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="group relative"
            >
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:shadow-2xl flex flex-col items-center text-center min-h-[140px]">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                />

                {/* Icon Container */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="flex justify-center mb-3"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-xl">
                      {typeof skill.icon === "string" ? skill.icon : skill.icon}
                    </span>
                  </div>
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                  {skill.name}
                </h3>

                {/* Animated Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Always Learning Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Always{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning
            </span>
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {alwaysLearning.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300 cursor-default border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
      </div>
    </section>
  );
}
