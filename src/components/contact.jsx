import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhoneAlt, FaPhone, FaComment, FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaInstagram, FaDev, FaWhatsapp } from "react-icons/fa";

export default function ContactFooter() {
  return (
    <>
      {/* Contact Section */}
      <section className="relative py-16 bg-gradient-to-r from-gray-100 to-purple-100 text-gray-900 flex justify-center items-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-center text-gray-900 mb-6 flex items-center justify-center space-x-3"
          >
            <FaPhoneAlt className="text-purple-500" />
            <span className="text-black">Get In</span>
            <span className="text-purple-600">Touch</span>
          </motion.h2>

          <div className="bg-white rounded-2xl shadow-xl flex flex-col sm:flex-row p-8 sm:p-12 items-center">
            {/* Left Side Image */}
            <div className="hidden sm:block w-1/2">
              <img
                src="https://jigarsable.netlify.app/assets/images/contact1.png"
                alt="Contact Illustration"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Right Side Form */}
            <div className="w-full sm:w-1/2">
              <form className="space-y-5">
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full pl-12 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full pl-12 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
                  />
                </div>

                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="w-full pl-12 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
                  />
                </div>

                <div className="relative">
                  <FaComment className="absolute left-4 top-4 text-gray-500" />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full pl-12 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-purple-600 text-white py-3 px-8 rounded-xl flex items-center justify-center w-full shadow-lg hover:bg-purple-700 transition transform hover:scale-105"
                >
                  Send Message <FaTelegramPlane className="ml-2" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 mt-0">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold">Divyansh's Portfolio</h3>
            <p className="text-gray-400 mt-3">
              Thank you for visiting my personal portfolio website. Feel free to connect on my socials.
            </p>
            <p className="mt-2 text-gray-300">Keep Rising 🚀</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <ul className="mt-3 text-gray-400 space-y-2">
              <li><a href="#home" className="hover:text-purple-400 cursor-pointer">⚡ Home</a></li>
              <li><a href="#about" className="hover:text-purple-400 cursor-pointer">📌 About</a></li>
              <li><a href="#skills" className="hover:text-purple-400 cursor-pointer">🎯 Skills</a></li>
              <li><a href="#education" className="hover:text-purple-400 cursor-pointer">📖 Education</a></li>
              <li><a href="#work" className="hover:text-purple-400 cursor-pointer">💼 Work</a></li>
              <li><a href="#experience" className="hover:text-purple-400 cursor-pointer">🔗 Experience</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold">Contact Info</h3>
            <p className="text-gray-400 mt-3">
              📞 <a href="tel:+919719688888" className="hover:text-blue-500">+91 9719688888</a>
            </p>
            <p className="text-gray-400">
              📧 <a href="mailto:divyansh20060@gmail.com" className="hover:text-blue-500">divyansh20060@gmail.com</a>
            </p>
            <p className="text-gray-400">
              📍 <a href="https://www.google.com/maps/search/?api=1&query=Bareilly,India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500">
                Bareilly, India - 243001
              </a>
            </p>


            {/* Social Icons */}
            <div className="flex space-x-4 mt-5">
              <a target="_blank" href="https://www.linkedin.com/in/divyansh-chauhan-45b30a34b/" className="text-white bg-blue-600 p-3 rounded-full text-3xl hover:scale-110 transition shadow-md">
                <FaLinkedin />
              </a>
              <a target="_blank" href="https://github.com/Divyansh200600" className="text-white bg-gray-800 p-3 rounded-full text-3xl hover:scale-110 transition shadow-md">
                <FaGithub />
              </a>
              <a target="_blank" href="https://www.instagram.com/itz_divy4sh/" className="text-white bg-pink-500 p-3 rounded-full text-3xl hover:scale-110 transition shadow-md">
                <FaInstagram />
              </a>
              <a target="_blank" href="https://dev.to/divyansh20060" className="text-white bg-blue-400 p-3 rounded-full text-3xl hover:scale-110 transition shadow-md">
                <FaDev />
              </a>
              <a target="_blank" href="https://api.whatsapp.com/send/?phone=9719688888&text&type=phone_number&app_absent=0" className="text-white bg-green-500 p-3 rounded-full text-3xl hover:scale-110 transition shadow-md">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-5">
          Designed With ❤️ By <span className="text-orange-400">Divyansh Chauhan</span>
        </div>
      </footer>
    </>
  );
}
