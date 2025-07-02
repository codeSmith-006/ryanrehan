import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Alex Johnson - Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Full Stack Developer specializing in React, Node.js, and modern web technologies. Creating beautiful, scalable web applications."
        />
        <meta
          name="keywords"
          content="full stack developer, react developer, web developer, portfolio, javascript, typescript, node.js"
        />
        <meta name="author" content="Alex Johnson" />
        <meta
          property="og:title"
          content="Alex Johnson - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Full Stack Developer creating amazing web experiences"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-hidden"
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </motion.main>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-300">
                  © 2024 Alex Johnson. All rights reserved.
                </p>
                <p className="text-gray-400 text-sm">
                  Built with React, TypeScript, and Tailwind CSS
                </p>
              </div>
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Top
                </motion.button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
