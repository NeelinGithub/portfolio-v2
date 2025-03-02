
"use client";

import { FaReact, FaNodeJs, FaPython, FaRust, FaDatabase, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiTypescript, SiJavascript } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-500" /> },
  { name: "Python", icon: <FaPython size={40} className="text-yellow-400" /> },
  { name: "Rust", icon: <FaRust size={40} className="text-orange-500" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
  { name: "Firebase", icon: <SiFirebase size={40} className="text-yellow-400" /> },
  { name: "SQL", icon: <FaDatabase size={40} className="text-gray-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-blue-400" /> },
  { name: "AWS", icon: <FaAws size={40} className="text-blue-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-8 max-w-4xl w-full text-center">
      <h2 className="text-2xl text-pretty font-mono font-bold mb-4">Technical Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 p-4">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            {skill.icon}
            <p className="text-pretty font-mono text-sm mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
