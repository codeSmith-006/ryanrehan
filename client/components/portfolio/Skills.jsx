import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// frontend
import js from "../../../assets/js.png";
import react from "../../../assets/react.png";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import tailwind from "../../../assets/tailwind.png";

// backend
import nodejs from "../../../assets/nodejs.png";
import mongodb from "../../../assets/mongodb.png";
import express from "../../../assets/express.png";
import firebase from "../../../assets/firebase.png";
import jwt from "../../../assets/jwt.png";
import stripe from "../../../assets/stripe.png";

const skillCategories = {
  Frontend: [
    {
      name: "React",
      level: 80,
      icon: <img src={react} alt="React Icon" className="w-6 h-6" />,
    },
    {
      name: "JavaScript (ES6+)",
      level: 75,
      icon: <img src={js} alt="React Icon" className="w-6 h-6" />,
    },
    {
      name: "HTML5",
      level: 90,
      icon: <img src={html} alt="React Icon" className="w-6 h-6" />,
    },
    {
      name: "CSS3",
      level: 85,
      icon: <img src={css} alt="React Icon" className="w-6 h-6" />,
    },
    {
      name: "Tailwind CSS",
      level: 80,
      icon: <img src={tailwind} alt="React Icon" className="w-6 h-6" />,
    },
    { name: "Responsive Design", level: 80, icon: "📱" },
  ],

  Backend: [
    {
      name: "Node.js",
      level: 80,
      icon: <img src={nodejs} alt="React Icon" className="w-6 h-6" />,
    },
    {
      name: "Express.js",
      level: 78,
      icon: <img src={express} alt="React Icon" className="w-6 h-6" />,
    },
    {
      name: "MongoDB",
      level: 75,
      icon: <img src={mongodb} alt="React Icon" className="w-6 h-6" />,
    },
    {
      name: "Firebase",
      level: 70,
      icon: <img src={firebase} alt="React Icon" className="w-6 h-6" />,
    },
    {
      name: "JWT",
      level: 68,
      icon: <img src={jwt} alt="React Icon" className="w-6 h-6" />,
    },
    {
      name: "Stripe",
      level: 65,
      icon: <img src={stripe} alt="React Icon" className="w-6 h-6" />,
    },
  ],

Tools: [
  { name: "Git & GitHub", level: 85, icon: "🔧" },
  { name: "VS Code", level: 90, icon: "🖊️" },
  { name: "Postman", level: 80, icon: "📬" },
  { name: "Figma", level: 70, icon: "🎯" },
  { name: "Firebase Console", level: 75, icon: "🔥" },
  { name: "Netlify / Vercel", level: 78, icon: "🚀" },
],

};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {Object.keys(skillCategories).map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                className={`relative ${
                  activeCategory === category
                    ? "bg-gray-700 dark:bg-gray-700 shadow-sm"
                    : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white dark:bg-gray-700 rounded-md"
                    style={{ zIndex: -1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>

              <div className="relative">
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    variants={progressVariants}
                    custom={skill.level}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Always Learning
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              "Machine Learning",
              "Rust",
              "Go",
              "Kubernetes",
              "Three.js",
              "React Native",
              "Blockchain",
              "DevOps",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:shadow-md transition-shadow cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
