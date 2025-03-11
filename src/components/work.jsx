import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import { Code2, Server, Brain } from "lucide-react";
import { Robot } from "@phosphor-icons/react";
import projectData from "../scripts/projects.json";

const categories = [
  { name: "Web Dev", icon: <Code2 className="text-blue-600" size={24} /> },
  { name: "DevOps", icon: <Server className="text-green-500" size={24} /> },
  { name: "Data Science", icon: <Brain className="text-yellow-500" size={24} /> },
  { name: "AI/ML", icon: <Robot className="text-purple-500" size={24} /> },
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("Web Dev");
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    Object.keys(projectData["Web Dev"])[0]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 text-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-blue-600">Projects</span>
        </motion.h2>

        {/* Category Tabs - Fully Responsive */}
        <Tab.Group>
          <Tab.List className="flex flex-col sm:flex-row justify-center gap-3 mb-6 p-3 bg-white/80 backdrop-blur-md shadow-md rounded-lg w-full sm:w-max mx-auto">
            {categories.map(({ name, icon }) => (
              <Tab
                key={name}
                className={({ selected }) =>
                  `flex items-center gap-3 px-5 py-2 w-full sm:w-auto text-base font-semibold transition-all rounded-lg 
                  ${selected ? "bg-red-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-200"}`
                }
                onClick={() => {
                  setSelectedCategory(name);
                  setSelectedSubCategory(Object.keys(projectData[name])[0]); // Reset subcategory
                }}
              >
                {icon} {name}
              </Tab>
            ))}
          </Tab.List>

          {/* Subcategory Tabs - Shows All Subcategories Dynamically */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 px-2">
            {Object.keys(projectData[selectedCategory]).map((subCategory) => (
              <button
                key={subCategory}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all text-center
                  ${selectedSubCategory === subCategory ? "bg-yellow-500 text-white shadow-md" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
                onClick={() => setSelectedSubCategory(subCategory)}
              >
                {subCategory}
              </button>
            ))}
          </div>

          {/* Project Cards - Shows All Projects Dynamically */}
          <Tab.Panels>
            {categories.map(({ name }) => (
              <Tab.Panel key={name} className={`${selectedCategory === name ? "block" : "hidden"}`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2"
                >
                  {projectData[selectedCategory]?.[selectedSubCategory]?.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white p-5 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl"
                    >
                      <h4 className="text-lg sm:text-xl font-bold text-blue-500">{project.title}</h4>
                      <p className="text-gray-600 mt-2">{project.description}</p>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-blue-500 hover:text-blue-400 font-semibold transition"
                      >
                        View Project →
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

      </div>
    </div>
  );
}
