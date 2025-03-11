import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

const educationData = [
  {
    year: "2019 - 2020",
    title: "High School",
    institution: "Jai Narayan Vidya Mandir Inter College",
    description: "Completed 10th grade with excellence in Science & Math.",
    icon: <FaSchool />,
    iconColor: "bg-yellow-500",
    image: "https://res.cloudinary.com/dke7sg7em/image/upload/v1741695026/duggu-portfolio/mvw6885ozxbcorhpxehn.jpg",
  },
  {
    year: "2020 - 2022",
    title: "Senior Secondary",
    institution: "Jai Narayan Vidya Mandir Inter College",
    description: "Completed 12th grade with a focus on Computer Science.",
    icon: <FaGraduationCap />,
    iconColor: "bg-red-500",
    image: "https://res.cloudinary.com/dke7sg7em/image/upload/v1741695026/duggu-portfolio/mvw6885ozxbcorhpxehn.jpg",
  },
  {
    year: "2022 - 2025",
    title: "Bachelor’s in Computer Application",
    institution: "KCMT College",
    description: "Specialized in Web Development, AI, and Cloud Computing.",
    icon: <FaUniversity />,
    iconColor: "bg-purple-500",
    image: "https://res.cloudinary.com/dke7sg7em/image/upload/v1741695026/duggu-portfolio/l9rtogjm2eb3szqwxmg1.jpg",
  },
  {
    year: "2025 - 2027",
    title: "Master’s in Computer Application",
    institution: "XYZ University",
    description: "Advanced studies in AI, Machine Learning, and Data Science.",
    icon: <FaUniversity />,
    iconColor: "bg-blue-500",
    image: "https://source.unsplash.com/400x300/?university,technology",
  },
];

export default function ModernTimeline() {
  return (
    <section className="relative py-16 bg-gray-950 text-white min-h-screen flex justify-center items-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-purple-600 opacity-40 blur-3xl rounded-full top-20 left-20 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-600 opacity-30 blur-3xl rounded-full bottom-10 right-10 animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center text-purple-400 mb-10 flex justify-center items-center gap-3"
        >
          <FaGraduationCap className="text-purple-500 animate-spin-slow" /> My Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1 w-1 h-full bg-gray-700 hidden sm:block"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col sm:flex-row items-center ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              } mb-12`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              {/* Icon with Glow Effect */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 sm:translate-y-0 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg z-10 border-4 border-gray-900 bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-purple-500">
                <span className={`p-3 rounded-full ${edu.iconColor}`}>{edu.icon}</span>
              </div>

              {/* Content Box with Hover Animation */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-700 max-w-lg w-full sm:w-5/12 mt-6 sm:mt-0 ${
                  index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
                } relative overflow-hidden`}
              >
                {/* Image with Overlay Hover Effect */}
                <div className="relative">
                  <img
                    src={edu.image}
                    alt={edu.title}
                    className="w-full h-48 object-cover rounded-lg transition-all duration-300 transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
                    {edu.title}
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-4">{edu.year}</p>
                <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                <h4 className="text-md text-purple-400">{edu.institution}</h4>
                <p className="text-gray-300">{edu.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Quote with Fade-In Animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center text-gray-400 mt-8 italic text-lg"
        >
          "Education is not the learning of facts, but the training of the mind to think."
        </motion.p>
      </div>
    </section>
  );
}
