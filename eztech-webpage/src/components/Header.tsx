import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { useScrollTo } from "../hooks/useScrollTo";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/ez-logo.jpg";
import { IoMdMoon } from "react-icons/io";
import { GrSun } from "react-icons/gr";
import { useTheme } from "../contexts/ThemeContext";

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const scrollTo = useScrollTo();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme(); // Use theme context
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = ["home", "about", "services", "products", "contact"];

  const handleNavClick = (item: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollTo(item), 100); // Wait for navigation before scrolling
    } else {
      scrollTo(item);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="ml-2 text-xl font-bold">EZ Tech</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {t(`nav.${item}`)}
              </motion.button>
            ))}
          </nav>

          {/* Utility Buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
              className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {language.toUpperCase()}
            </button>

            {/* Scroll to Contact */}
            <button
              onClick={() => scrollTo("contact")}
              className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              {t("nav.getQuote")}
            </button>

            {/* Theme Toggle */}
            <button onClick={toggleTheme}>
              {isDarkMode ? (
                <GrSun className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <IoMdMoon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {t(`nav.${item}`)}
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
