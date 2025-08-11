import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Code,
  Globe,
  Zap,
  TrendingUp,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    tech: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
      "Redux",
      "JWT",
    ],
    github: "https://github.com/example/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    featured: true,
    challenges: [
      "Implementing secure payment processing with Stripe",
      "Optimizing database queries for large product catalogs",
      "Managing complex state with Redux for cart and user sessions",
    ],
    improvements: [
      "Add AI-powered product recommendations",
      "Implement real-time inventory tracking",
      "Add progressive web app (PWA) features",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag & drop functionality, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Socket.io",
      "Framer Motion",
      "TailwindCSS",
    ],
    github: "https://github.com/example/task-manager",
    live: "https://taskmanager-pro.vercel.app",
    featured: true,
    challenges: [
      "Implementing real-time collaboration with Socket.io",
      "Creating smooth drag & drop interactions",
      "Managing complex TypeScript interfaces for team permissions",
    ],
    improvements: [
      "Add time tracking and reporting features",
      "Implement AI-powered task prioritization",
      "Add mobile app with React Native",
    ],
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Interactive dashboard with AI-driven insights, data visualization, and predictive analytics for business intelligence.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    tech: ["React", "Python", "TensorFlow", "D3.js", "FastAPI", "PostgreSQL"],
    github: "https://github.com/example/analytics-dashboard",
    live: "https://analytics-pro.vercel.app",
    featured: true,
    challenges: [
      "Integrating TensorFlow.js for client-side predictions",
      "Creating complex D3.js visualizations",
      "Optimizing API performance for large datasets",
    ],
    improvements: [
      "Add more ML models for different data types",
      "Implement real-time data streaming",
      "Add custom dashboard builder",
    ],
  },
  {
    id: 4,
    title: "Social Media Platform",
    description:
      "A modern social media platform with real-time messaging, content sharing, and advanced privacy controls.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&crop=center",
    tech: ["Vue.js", "Express", "MongoDB", "Redis", "WebRTC"],
    github: "https://github.com/example/social-platform",
    live: "https://social-connect.vercel.app",
    featured: false,
    challenges: [
      "Implementing WebRTC for video calls",
      "Managing real-time notifications",
      "Creating efficient content moderation system",
    ],
    improvements: [
      "Add AI-powered content recommendations",
      "Implement stories feature",
      "Add advanced privacy controls",
    ],
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center",
    tech: ["React Native", "Node.js", "OpenWeather API", "Maps SDK"],
    github: "https://github.com/example/weather-app",
    live: "https://weather-pro.vercel.app",
    featured: false,
    challenges: [
      "Implementing accurate location services",
      "Creating smooth map interactions",
      "Managing offline functionality",
    ],
    improvements: [
      "Add weather-based activity suggestions",
      "Implement push notifications for alerts",
      "Add weather history and trends",
    ],
  },
  {
    id: 6,
    title: "Cryptocurrency Tracker",
    description:
      "Real-time cryptocurrency tracking with portfolio management, price alerts, and market analysis tools.",
    image:
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&h=400&fit=crop&crop=center",
    tech: ["React", "GraphQL", "CoinGecko API", "Chart.js"],
    github: "https://github.com/example/crypto-tracker",
    live: "https://crypto-portfolio.vercel.app",
    featured: false,
    challenges: [
      "Handling real-time price updates",
      "Creating complex chart visualizations",
      "Managing large amounts of historical data",
    ],
    improvements: [
      "Add DeFi protocol integration",
      "Implement advanced trading strategies",
      "Add social sentiment analysis",
    ],
  },
];

// ProjectDetails = ({ project, onBack }) => {

// };

const ProjectCard = ({ project, onViewDetails, index }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/project-details`, { state: { project } });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Shining Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
      </div>

      {/* Project Image */}
      <div className="relative overflow-hidden h-48 md:h-56">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full"
          >
            Featured
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium border border-blue-200 dark:border-blue-800"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-md text-xs">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <motion.button
          // onClick={() => onViewDetails(project)}
          onClick={handleViewDetails}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative z-10 w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          style={{ pointerEvents: "auto" }}
        >
          <span className="flex items-center justify-center pointer-events-none">
            View Details
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

const ProjectsGrid = ({ projects, onViewDetails }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Here are some of my recent projects that showcase my skills and
          passion for creating innovative solutions.
        </motion.p>
      </motion.div>

      {/* Featured Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={onViewDetails}
            index={index}
          />
        ))}
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={onViewDetails}
                index={index + featuredProjects.length}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mt-12 md:mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl group"
        >
          View All Projects
          <motion.span
            className="ml-2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  console.log("selected post: ", selectedProject);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800/50"
    >
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ProjectDetails
            key="project-details"
            project={selectedProject}
            onBack={handleBackToProjects}
          />
        ) : (
          <motion.div
            key="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectsGrid
              projects={projects}
              onViewDetails={handleViewDetails}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
