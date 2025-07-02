import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import { Code, Coffee, Globe, Heart } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+", icon: Code },
  { label: "Projects Completed", value: "50+", icon: Globe },
  { label: "Cups of Coffee", value: "1000+", icon: Coffee },
  { label: "Happy Clients", value: "25+", icon: Heart },
];

const interests = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Open Source",
  "Machine Learning",
  "Photography",
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Photo */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-2 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="/placeholder.svg"
                    alt="Alex Johnson"
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Right side - Content */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Me
              </span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm a passionate full-stack developer with over 5 years of
                experience creating digital solutions that make a difference. My
                journey started with a simple "Hello World" and has evolved into
                building complex, scalable applications.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                I specialize in React, Node.js, and modern web technologies.
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source projects, or capturing moments
                through photography.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                I believe in writing clean, maintainable code and creating user
                experiences that are both beautiful and functional. Let's work
                together to bring your ideas to life!
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Interests & Hobbies
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </motion.div>
              <motion.div
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
