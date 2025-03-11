import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaServer, FaRobot } from "react-icons/fa";
import skillsData from "../scripts/skills.json";

const categories = [
  { name: "Web Dev", icon: <FaCode size={20} />, color: "bg-blue-500", glow: "shadow-blue-400" },
  { name: "Data Scientist", icon: <FaDatabase size={20} />, color: "bg-green-500", glow: "shadow-green-400" },
  { name: "DevOps", icon: <FaServer size={20} />, color: "bg-orange-500", glow: "shadow-orange-400" },
  { name: "AI/ML", icon: <FaRobot size={20} />, color: "bg-purple-500", glow: "shadow-purple-400" },
];

const SkillTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Dev");

  const filteredSkills = skillsData.filter((skill) => skill.category === selectedCategory);
  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.subCategory]) acc[skill.subCategory] = [];
    acc[skill.subCategory].push(skill);
    return acc;
  }, {});

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen ">
      <div className="container mx-auto text-center backdrop-blur-lg  p-6 sm:p-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-purple-400 mb-8 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🔥 My Skills
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
          {categories.map((category) => {
            const skillCount = skillsData.filter((s) => s.category === category.name).length;
            return (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 sm:px-6 py-2 text-sm sm:text-lg font-semibold rounded-full flex items-center gap-2 transition-all duration-300 ${
                  selectedCategory === category.name
                    ? `${category.color} text-white shadow-md ${category.glow}`
                    : "text-gray-300 hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon} {category.name} ({skillCount})
              </motion.button>
            );
          })}
        </div>

        {/* Skills List */}
        <motion.div
          key={selectedCategory}
          className="p-6 sm:p-8 bg-purple-800/40 backdrop-blur-lg shadow-lg rounded-lg border border-gray-700/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {Object.entries(groupedSkills).map(([subCategory, skills]) => (
            <div key={subCategory} className="mb-6">
              {/* Subcategory Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-purple-300 mb-4 text-left border-l-4 border-green-500 pl-3 uppercase">
                {subCategory} ⬇️
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-gray-900/50 backdrop-blur-lg rounded-lg shadow-lg border border-gray-700 transition-all duration-300 w-full"
                    whileHover={{ scale: 1.05, y: -5 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                  >
                    <img src={skill.icon} alt={skill.name} className="w-12 sm:w-14 h-12 sm:h-14 mb-2" />
                    <p className="text-sm sm:text-md font-semibold text-white text-center">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillTabs;
