import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rnd } from "react-rnd";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBriefcase, FaCode, FaFolder, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Check if we're on the client side before using window
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Inicio", icon: FaHome, path: "/" },
    { name: "Sobre Mí", icon: FaUser, path: "/about" },
    { name: "Habilidades", icon: FaCode, path: "/skills" },
    { name: "Experiencia", icon: FaBriefcase, path: "/experience" },
    { name: "Proyectos", icon: FaFolder, path: "/projects" },
    { name: "Contacto", icon: FaEnvelope, path: "/contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/" },
    { name: "Twitter", icon: FaTwitter, url: "https://twitter.com/" },
  ];

  return (
    <div className="hidden">
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 256,
          height: "100%",
        }}
        enableResizing={false}
        dragHandleClassName="handle"
      >
        <motion.div
          initial={{ x: isMobile ? -280 : 0 }}
          animate={{ x: isMobile && !isOpen ? -280 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed left-0 top-0 z-40 rounded-4xl h-auto w-64 bg-white dark:bg-gray-800 shadow-xl transition-transform transform ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}`}
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="p-4 handle cursor-move">
                <div className="flex flex-col items-center">
                  <h1 className="uppercase text-gray-300 ">Menu de navegacion</h1>
                 <h1 className="font-light text-center pt-2 text-gray-200 ">Bienvenido a mi portafolio web, este es el menu de navegacion utilizalo para interactuar en esta experiencia</h1>
                </div>
              </div>

              <div className="p-4">
                <ul>
                  {navItems.map((item) => (
                    <li key={item.name} className="mb-4">
                      <Link to={item.path} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={toggleTheme}
                  className="bg-gray-200 text-white dark:text-dark dark:bg-gray-700 p-2 rounded-full shadow-lg"
                >
                  {theme === 'light' ? <FaMoon size={24} /> : <FaSun size={24} />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </Rnd>
    </div>
  );
}

