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
import { Link, NavLink, useNavigate } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";

const projects = [
  // feature project one
  {
    id: 1,
    title: "Medical Camp Management System (MCMS)",
    description:
      "Developed a MERN stack platform to streamline the organization and participation of medical camps. The system allows organizers to create and manage camps, track participant registrations, confirm payments, and view feedback. Participants can browse available camps, register through a secure modal form, complete payments via Stripe, and access personalized dashboards with analytics. The app is responsive across devices, uses JWT for authentication, and leverages TanStack Query for efficient data fetching. A key focus was delivering a smooth user experience with real-time participant counts, search/sort functionality, and clear role-based dashboards.",
    image: [
      "https://i.ibb.co.com/mCmKrXMN/image.png",
      "https://i.ibb.co.com/d0pcP2cP/image.png",
      "https://i.ibb.co.com/zTd79cCX/Screenshot-From-2025-08-11-18-33-02.png",
      "https://i.ibb.co.com/sdWc6Wds/Screenshot-From-2025-08-11-18-32-54.png",
    ],
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Stripe",
      "Tailwind CSS",
      "TanStack Query",
      "JWT",
    ],
    github: "https://github.com/codeSmith-006/medicamp-client",
    live: "https://carecamp-06.web.app/",
    featured: true,
    challenges: [
      "Implementing secure Stripe payment integration with proper status updates for both organizers and participants.",
      "Designing a database structure to handle multiple user roles, camp data, registrations, and feedback efficiently.",
      "Ensuring participants remain logged in on private routes even after page reloads using JWT token persistence.",
      "Managing multiple dashboard routes with role-based access control and maintaining a responsive design for all devices.",
    ],
    improvements: [
      "Add AI-powered health tips and camp recommendations based on user profile and past participation.",
      "Enable real-time notifications for organizers when new participants register or payments are confirmed.",
      "Integrate volunteer and appointment scheduling features to expand the scope beyond current camp management.",
    ],
  },

  // feature project two
  {
    id: 2,
    title: "LostFinder - Lost & Found Platform",
    description:
      "Developed a full-stack Lost & Found management platform that connects people who have lost items with those who have found them. Built with a focus on smooth user experience, secure authentication, and organized data handling. Users can post lost or found items, view detailed item pages, update their listings, and mark items as recovered through a dedicated workflow. The system includes private routes for managing personal items, JWT authentication for security, and dynamic search to filter posts by title or location. A responsive design ensures the site works seamlessly on mobile, tablet, and desktop devices.",
    image: [
      "https://i.ibb.co.com/zhcxkkgY/Screenshot-From-2025-08-11-18-53-49.png",
      "https://i.ibb.co.com/MDVkjBQk/Screenshot-From-2025-08-11-18-54-18.png",
      "https://i.ibb.co.com/1tcgPwLc/Screenshot-From-2025-08-11-18-54-04.png",
      "https://i.ibb.co.com/rfkxqtLr/Screenshot-From-2025-08-11-18-54-32.png",
      "https://i.ibb.co.com/d47Wz21q/Screenshot-From-2025-08-11-18-54-43.png",
    ],
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Firebase Auth",
      "JWT",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/codeSmith-006/Lostfinder-Client",
    live: "https://lostfinder-58605.web.app/",
    featured: true,
    challenges: [
      "Implementing secure JWT-based authentication to ensure private route protection without losing login state on reload.",
      "Designing an intuitive UI/UX for item posting, editing, and recovery workflows while keeping forms pre-filled with logged-in user data.",
      "Managing and displaying multiple data states (active, recovered) across different dashboard views with responsive layouts.",
      "Integrating search and filtering functionality for large datasets without degrading performance.",
    ],
    improvements: [
      "Add real-time notifications when a user’s lost item is marked as recovered by another user.",
      "Integrate image upload functionality instead of using only image URLs.",
      "Add location-based search and mapping features using Google Maps API.",
    ],
  },

  // feature project three
  {
    id: 3,
    title: "Gardening Community & Resource Hub",
    description:
      "Built a full-stack platform for gardening enthusiasts to share tips, connect with local gardeners, and participate in gardening events. The app features secure authentication with Firebase, dynamic user profiles, a rich tip-sharing system with categories and difficulty filtering, and event sliders. Private routes allow users to share, update, and manage their gardening tips. The UI is fully responsive and includes dark/light mode toggle for user preference.",
    image: [
      "https://i.ibb.co.com/84KcWQcd/Screenshot-From-2025-08-11-19-01-36.png",
      "https://i.ibb.co.com/fd9wdgJb/Screenshot-From-2025-08-11-19-02-08.png",
      "https://i.ibb.co.com/3y2fDjL2/Screenshot-From-2025-08-11-19-02-40.png",
      "https://i.ibb.co.com/pv1TMqMp/Screenshot-From-2025-08-11-19-02-45.png",
      "https://i.ibb.co.com/wr09gRJ9/Screenshot-From-2025-08-11-19-02-59.png",
    ],
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Firebase Auth",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/codeSmith-006/Florafy-Client",
    live: "https://assignment-604fb.web.app/",
    featured: true,
    challenges: [
      "Implementing a smooth and responsive slider showcasing gardening events.",
      "Creating a robust filtering system for browsing tips by difficulty level.",
      "Managing secure private routes for tip sharing, updating, and user profiles.",
      "Ensuring dark and light theme toggle works seamlessly across all pages.",
    ],
    improvements: [
      "Add a feature to like and comment on shared gardening tips.",
      "Integrate location-based gardener profiles and event suggestions.",
      "Implement calendar integration for gardening event reminders.",
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

      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mt-12 md:mt-16"
      >
        <Link
          to="https://github.com/codeSmith-006"
          target="_blank"
          rel="noopener noreferrer"
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
        </Link>
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
