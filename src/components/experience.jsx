import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
       <motion.h1
        className="text-4xl font-bold  p-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       Experience
      </motion.h1>
      
      {/* Skeleton Loader */}
      <motion.div
        className="w-20 h-20 rounded-full bg-gray-700 animate-pulse"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />

      {/* Coming Soon Text */}
      <motion.h1
        className="text-4xl font-bold mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Coming Soon...
      </motion.h1>

      {/* Placeholder for Page Content */}
      <motion.div
        className="w-80 h-6 bg-gray-700 rounded mt-4 animate-pulse"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />

      <motion.div
        className="w-64 h-6 bg-gray-700 rounded mt-2 animate-pulse"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
}
