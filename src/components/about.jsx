import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 lg:px-20 bg-gradient-to-r from-gray-100 to-white text-gray-900">
      <div className="container mx-auto">

        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-purple-600 flex items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaUser className="text-purple-600" /> About Me
        </motion.h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10 bg-white shadow-lg rounded-2xl p-10 border border-purple-300">

          {/* Profile Image */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-60 h-60 lg:w-72 lg:h-72 rounded-full border-[4px] border-purple-500 shadow-lg shadow-purple-300 transform hover:scale-105 transition-all duration-300">
              <img
                src="https://avatars.githubusercontent.com/u/0000000?v=4"
               
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="lg:w-2/3 space-y-6 p-6 rounded-lg bg-gradient-to-br from-white to-gray-100 shadow-md border border-purple-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900">I'm Divyansh Chauhan</h2>
            <p className="text-lg text-gray-600">🚀 Web, App & Software Developer | DevOps | Data Scientist | AI/Ml</p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-gray-700">
              {/* Phone */}
              <a href="tel:+919719688888" className="flex items-center space-x-2 hover:text-purple-600 transition duration-300">
                <FaPhone className="text-purple-500" />
                <span>+91 9719688888</span>
              </a>

              {/* Email */}
              <a href="mailto:divyansh20060@gmail.com" className="flex items-center space-x-2 hover:text-red-600 transition duration-300">
                <FaEnvelope className="text-red-500" />
                <span>divyansh20060@gmail.com</span>
              </a>

              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bareilly%2C+India+243001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-green-600 transition duration-300"
              >
                <FaMapMarkerAlt className="text-green-500" />
                <span>Bareilly, India - 243001</span>
              </a>
            </div>


            {/* Skills Card */}
            <div className="bg-gray-100 p-5 rounded-xl border border-purple-400 shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600">🚀 Meet Me</h3>
              <p className="text-gray-700">
                Hey there! I'm <span className="font-bold text-purple-700">Divyansh Chauhan</span> (aka <span className="text-purple-500">Duggu⚡</span>), a tech enthusiast who loves building <span className="font-semibold">Web & Mobile Apps</span>, optimizing systems with <span className="font-semibold">DevOps</span>, and exploring the power of <span className="font-semibold">AI/ML & Data Science</span>.
              </p>
              <p className="text-gray-700 mt-2">
                🎓 <span className="font-semibold">BCA Graduate</span> | 💻 Passionate about coding & automation | 🚀 Always exploring new technologies!
              </p>
            </div>


            {/* Download Resume Button */}
            <motion.a
              href="https://divy4nshchauhan.netlify.app/assets/dugguResume.pdf"
              target="_blank"
              download
              className="relative inline-block px-6 py-3 mt-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              <FaDownload className="inline mr-2" /> Download Resume
            </motion.a>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default About;
