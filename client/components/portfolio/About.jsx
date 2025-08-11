import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import { Code, Coffee, Globe, Heart } from "lucide-react";

const stats = [
  { label: "Months Learning", value: "8+", icon: Code },
  { label: "Projects Built", value: "10+", icon: Globe },
  { label: "Cups of Coffee", value: "200+", icon: Coffee },
  { label: "Skills Acquired", value: "10+", icon: Heart },
];

const interests = [
  "Backend Development",
  "Strong Logic",
  "Problem Solving",
  "Scalable Software",
  "Microservices",
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
                    src="https://i.ibb.co.com/0jjL78R9/Rehan.jpg"
                    alt="Ryan Rehan"
                    className="w-full h-96 object-cover object-top rounded-xl"
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
                I began my programming journey in 2019, learning Python entirely
                on my mobile through the Pydroid app. Without a laptop at the
                time, I had to pause due to academic pressures. In 2024, while
                starting my BSc in Computer Science and Engineering, I committed
                fully to web development, diving into the MERN stack through
                Programming Hero and building several full-stack projects.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                I’m passionate about backend systems, frontend logic, and
                especially debugging and problem-solving. I focus on writing
                clean, structured, and well-commented code that’s easy to read
                and maintain. Facing and resolving challenging errors has
                strengthened my foundation and built patience and resilience.
                While I currently work independently, I’m eager to gain team
                collaboration experience to enhance my skills and adaptability.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                Beyond coding, I enjoy photography, music, and cooking. I’m
                naturally curious, a deep learner, and adaptable — whether it’s
                handling pressure, adjusting to a new codebase, or mastering new
                skills as needed.
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
      </div>
    </section>
  );
}
