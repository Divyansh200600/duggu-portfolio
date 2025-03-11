import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBolt, FaReact, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setActiveSection("home");
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      {/* Inline CSS for Animations */}
      <style>
        {`
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spinSlow 5s linear infinite;
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }

          @keyframes slideIn {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-in {
            animation: slideIn 0.5s ease-in-out;
          }
        `}
      </style>

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold text-gray-900">
          <FaReact className="animate-spin-slow text-3xl mr-1 text-blue-500" />
          <span className="font-extrabold">Divyansh</span>
          <FaBolt className="text-orange-500 text-2xl mx-1 animate-blink" />
          <span className="font-extrabold">Chauhan</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          {["Home", "About", "Skills", "Education", "Work", "Experience", "Contact"].map((item, index) => (
            <li key={index} className="relative cursor-pointer text-gray-700 hover:text-blue-600">
              <Link
                activeClass="text-blue-600 font-bold after:w-full after:bg-blue-600"
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveSection(item.toLowerCase())}
                className={`relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                  activeSection === item.toLowerCase() ? "text-blue-600 font-bold after:w-full after:bg-blue-600" : ""
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-2xl text-gray-800 transition-transform duration-300 hover:scale-110">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-screen w-64 bg-yellow-400 shadow-lg transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl text-gray-800 transition-transform duration-300 hover:scale-110">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 text-lg font-medium animate-slide-in">
          {["Home", "About", "Skills", "Education", "Work", "Experience", "Contact"].map((item, index) => (
            <li key={index} className="cursor-pointer text-gray-700 hover:text-blue-600">
              <Link
                activeClass="text-blue-600 font-bold"
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setIsOpen(false);
                }}
                className={activeSection === item.toLowerCase() ? "text-blue-600 font-bold" : ""}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
