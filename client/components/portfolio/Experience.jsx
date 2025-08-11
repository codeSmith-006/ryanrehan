import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored team of 5 junior developers and established coding standards",
      "Improved application performance by 40% through optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
    icon: "💼",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2020 - 2022",
    description: [
      "Built and deployed 10+ full-stack web applications",
      "Collaborated with design team to create pixel-perfect UIs",
      "Integrated third-party APIs and payment processing systems",
      "Reduced loading times by 50% through code splitting and optimization",
    ],
    icon: "🚀",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "WebSolutions LLC",
    location: "Remote",
    period: "2019 - 2020",
    description: [
      "Developed responsive websites for 20+ clients",
      "Converted design mockups to interactive web experiences",
      "Implemented accessibility standards achieving WCAG 2.1 compliance",
      "Created reusable component library used across projects",
    ],
    icon: "🎨",
  },
  {
    id: 4,
    title: "Junior Developer",
    company: "Digital Agency",
    location: "New York, NY",
    period: "2018 - 2019",
    description: [
      "Maintained and updated existing client websites",
      "Learned modern JavaScript frameworks and best practices",
      "Collaborated with senior developers on complex projects",
      "Contributed to open source projects and internal tools",
    ],
    icon: "📚",
  },
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
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
            Work{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            My professional journey and the amazing teams I've worked with to
            create impactful digital solutions.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Icon */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-lg z-20">
                  {exp.icon}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-8 md:text-right"
                      : "md:ml-8 md:text-left"
                  }`}
                >
                  <motion.div
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`${index % 2 === 0 ? "md:text-right" : ""}`}
                      >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                          <Building className="h-4 w-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul
                      className={`space-y-2 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1.5 flex-shrink-0">
                            •
                          </span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
