import React from "react";
import { FaTools } from "react-icons/fa";

export default function ComingSoon() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
      <FaTools className="text-6xl text-purple-500 mb-4 animate-pulse" />
      <h1 className="text-4xl font-bold">Coming Soon...</h1>
      <p className="text-gray-400 mt-2">We're working on this page. Stay tuned!</p>
    </div>
  );
}
