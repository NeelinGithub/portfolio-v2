"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "AI App Store",
    description: "An AI-powered marketplace for secure, local AI applications.",
    image: "/ai-app-store.jpg", 
    tech: ["Rust", "Electron", "SQLite", "LLaMA"],
    link: "#",
  },
  {
    title: "GEN-AI Code Assistant",
    description: "Allows users to input prompts to generate code, stored in a MongoDB database and executed using AppScripts.",
    image: "/genai.avif",
    tech: ["AppScripts", "React", "Node.js", "Express.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Smart MFA System",
    description: "Multi-factor authentication with device recognition & biometrics.",
    image: "/authentication.png",
    tech: ["Firebase", "React", "Next.js"],
    link: "#",
  },
  {
    title: "Manga Chapter Predictor",
    description: "Predicts future manga chapters based on previous ones using AI.",
    image: "/mangaapp2.jpg",
    tech: ["Python", "TensorFlow", "OpenAI API"],
    link: "#",
  },
  {
    title: "Finnix - Personal Finance Tool",
    description: "A personal finance tool that helps users track their income, expenses, and savings goals, providing insights and budgeting features to enhance financial literacy and management.",
    image: "/financeapp.jpg",
    tech: ["React", "Node.js", "Javascript"],
    link: "#",
  },
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  
  const projectsPerPage = isMobile ? 1 : 3;
  
  
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      const newTotalPages = Math.ceil(projects.length / (mobile ? 1 : 3));
      if (currentPage >= newTotalPages) {
        setCurrentPage(0);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };


  const getCurrentPageProjects = () => {
    const startIndex = currentPage * projectsPerPage;
    const endIndex = Math.min(startIndex + projectsPerPage, projects.length);
    return projects.slice(startIndex, endIndex);
  };

  const visibleProjects = getCurrentPageProjects();

  return (
    <section id="projects" className="py-20 px-6 sm:px-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      
      <div className="relative max-w-6xl mx-auto">
        {totalPages > 1 && (
          <button 
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-gray-800 hover:bg-gray-700 rounded-full p-2 focus:outline-none"
            aria-label="Previous projects"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        {/* Carousel Container */}
        <div className="overflow-hidden mx-8">
          <div className={`flex ${isMobile ? 'justify-center' : visibleProjects.length < 3 ? 'justify-start' : 'justify-between'} gap-6`}>
            {visibleProjects.map((project, idx) => (
              <motion.a
                key={`${project.title}-${idx}`}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:shadow-2xl hover:bg-gray-800 flex-1 min-w-0 max-w-sm"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 rounded-full bg-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        
        {totalPages > 1 && (
          <button 
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-gray-800 hover:bg-gray-700 rounded-full p-2 focus:outline-none"
            aria-label="Next projects"
          >
            <ChevronRight size={24} />
          </button>
        )}
        
        {/* Indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentPage ? "w-6 bg-white" : "w-2 bg-gray-600"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}