import Link from "next/link";
import { motion } from "framer-motion";
export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white px-6 text-center">
      {/* Animated 404 Text */}
      <motion.h1
        className="text-8xl font-bold text-purple-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="text-2xl mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.h2>

      {/* Decorative Line */}
      <motion.div
        className="w-32 h-1 bg-purple-500 mt-4 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />

      {/* Back to Home Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Link href="/">
          <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 transition text-white font-semibold rounded-lg shadow-lg">
            🔙 Go Back Home
          </button>
        </Link>
      </motion.div>
    
    </div>
  );
}
