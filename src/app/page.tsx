"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";
import Quote from "./Quote"
import Contact from "./contact";

export default function Home() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-cover text-white" style={{ backgroundImage: "url('/space8.jpeg')" }}>
      <div className="absolute top-6 left-24 sm:top-8 sm:left-36">
        <Image
          src="/profilepic2.jpg" 
          alt="Profile Photo"
          width={100} 

          height={100}
          className="rounded-full"
        />
      </div>

      {/* Navigation*/}
      <nav className="flex space-x-4 p-4 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition duration-300 text-pretty font-mono">
        <a onClick={() => scrollToSection('projects')} className="text-sm sm:text-base hover:text-blue-400 cursor-pointer">Projects</a>
        <a onClick={() => scrollToSection('experience')} className="text-sm sm:text-base hover:text-blue-400 cursor-pointer">Experience</a>
        <a href="https://docs.google.com/document/d/1t1xbhbCzpP2ffwsMntz0hicKQn43VxnS/edit?usp=drive_link&ouid=100322184178297813561&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base hover:text-blue-400">Resume</a>
        <a onClick={() => scrollToSection('contact')} className="text-sm sm:text-base hover:text-blue-400 cursor-pointer">Contact Me</a>
      </nav>
      
      
      <main className="w-full flex flex-col gap-8 items-center">
        {/* Introduction section*/}
        <div className="max-w-2xl text-center sm:text-left">
          <h1 className="text-4xl font-bold flex items-center gap-2">
            Hello, I am <span className="gradient-text gradient-animation">Neel Patel</span>!
            <motion.span
              animate={{ rotate: [0, 20, 0, -20, 0] }} // Waving effect
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              👋
            </motion.span>
          </h1>
              
          <p className="mt-6 text-pretty font-mono text-smt">
            I am a Full Stack Developer passionate about AI, security, and open-source innovation. Focused on building AI-powered platforms, enhancing privacy, and optimizing user experiences. Enthusiastic about Rust, Next.js, and intelligent authentication systems.
          </p>
              
          <div className="flex items-center justify-center sm:justify-center gap-4 mt-4">
            <a href="https://github.com/NeelinGithub" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com/in/neelvirenpatel" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="hover:text-gray-400" />
            </a>
          </div>
        </div>
        {/* Skills section*/}
        <div className="w-full max-w-4xl">
          <Skills />
        </div>

        {/* Projects section*/}
        <div id="projects" className="w-full max-w-10xl">
          <Projects />
        </div>

        <div id="experience" className="w-full max-w-6xl">
          <Experience />
        </div>

        <div id="contact" className="w-full max-w-6xl pt-20">
          <Contact />
        </div>
        <div className="w-full max-w-4xl mt-8">
          <Quote />
        </div>
      </main>
    </div>
  );
}