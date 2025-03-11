import React, { useCallback } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaDev, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white">
      <Particles
        id="particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#808080" },
            opacity: { value: 0.3 },
            links: { enable: true, color: "#808080", opacity: 0.2, distance: 150 },
            move: { enable: true, speed: 1.5 },
          },
        }}
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-center px-10 z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-8"> {/* ✅ More space */}
          <h1 className="text-5xl pt-24 md:text-7xl font-extrabold text-blue-900 leading-tight mb-8">
            Hi There, <br /> I'm <span className="text-green-900">Divyansh</span>{" "}
            <span className="text-orange-500">Chauhan</span>
          </h1>

          <p className="text-2xl font-medium text-gray-700">
            I Am Into{" "}
            <TypeAnimation
              sequence={["Web Design", 2000, "Frontend Development", 2000, "Full Stack Web Dev", 2000, "Backend Development", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-red-500 font-bold"
            />
          </p>

          {/* Modern Button */}
          <a
            href="#about"
            className="relative inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <span className="absolute left-0 w-3 h-3 bg-white rounded-full animate-ping"></span>
            <span className="mr-2">About Me</span> ⬇️
          </a>

          {/* Social Icons (Now Circles with Actual Colors) */}
          <div className="flex space-x-4 mt mb-14 justify-center lg:justify-start">
            <a target="_blank" href="https://www.linkedin.com/in/divyansh-chauhan-45b30a34b/" className="text-white bg-blue-600 p-3 rounded-full text-3xl hover:scale-110 transition">
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/Divyansh200600" className="text-white bg-gray-900 p-3 rounded-full text-3xl hover:scale-110 transition">
              <FaGithub />
            </a>
            <a target="_blank" href="https://www.instagram.com/itz_divy4sh/" className="text-white bg-pink-500 p-3 rounded-full text-3xl hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a target="_blank" href="https://dev.to/divyansh20060" className="text-white bg-blue-400 p-3 rounded-full text-3xl hover:scale-110 transition">
              <FaDev />
            </a>
            <a target="_blank" href="https://api.whatsapp.com/send/?phone=9719688888&text&type=phone_number&app_absent=0" className="text-white bg-green-500 p-3 rounded-full text-3xl hover:scale-110 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <img
            src="https://camo.githubusercontent.com/420e98f1074da41c280ac4ffb3fbdbe1a0a1aa2270bf8d21896ed4cb04fdb54f/68747470733a2f2f6d656469612e74656e6f722e636f6d2f685652684665444657366f41414141692f616e696d652d776176652e676966"
            alt="Avatar"
            className="w-64 md:w-80 rounded-full border-4 border-gray-300 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
