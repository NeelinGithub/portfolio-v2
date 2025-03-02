"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import { FaBriefcase} from "react-icons/fa";

const experience = [
  {
    id: 1,
    title: "AI Trainer - Outlier",
    date: "Feb 2025 - Present",
    description: "Developed and optimized software solutions, contributing to data analysis and automation processes to enhance business performance.",
    icon: <Image src="/outlier-image.jpeg" alt="AI Trainer Icon" width={40} height={40} />,
  },
  {
    id: 2,
    title: "Narayan Exports - Software Developer",
    date: "May 2024 - September 2024",
    description: "Built and maintained custom software applications to streamline export processes and improve operational efficiency.",
    icon: <FaBriefcase />,
  },
  {
    id: 3,
    title: "Kedarnath Industries - SDE Intern",
    date: "May 2023 - September 2023",
    description: " Designed and developed software applications to improve inventory management and operational workflows for the company.",
    icon:<Image src="/kai-icon.jpeg" alt="Kedarnath Industries Icon" width={40} height={40} />,
  },
];

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="relative border-l-4 border-red-500 dark:border-blue-500">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-8 ml-6 relative group"
          >
            {/* Icon */}
            <div className="absolute -left-9 flex items-center justify-center w-10 h-10 text-white bg-black border border-gray-700 rounded-full group-hover:scale-110 transition-transform">
              {exp.icon}
            </div>

            {/* Card */}
            <div className="bg-black/90 p-6 rounded-lg shadow-lg transition-all group-hover:scale-[1.02] group-hover:shadow-red-500/40">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
