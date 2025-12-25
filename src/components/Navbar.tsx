"use client";

import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Services", "Projects", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="relative">
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
          <svg
            className="absolute bottom-0 w-full h-8"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q600,40 1200,0 L1200,40 L0,40 Z"
              fill="currentColor"
              className="text-white dark:text-gray-900"
            />
          </svg>
        </div>

        <div className="relative px-4 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ADARD
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                "Home",
                "Services",
                "Projects",
                "Help Desk",
                "About",
                "Contact",
              ].map((item, index) => (
                <motion.a
                  key={item}
                  href={
                    item === "Help Desk"
                      ? "/help-desk"
                      : item == "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              {[
                "Home",
                "Services",
                "Projects",
                "Help Desk",
                "About",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={
                    item === "Help Desk"
                      ? "/help-desk"
                      : `#${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}
