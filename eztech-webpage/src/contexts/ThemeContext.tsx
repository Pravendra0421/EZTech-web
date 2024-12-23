import { createContext, useContext, useState, useEffect, ReactNode } from "react";
type ThemeContextType = {
    isDarkMode: boolean;
    toggleTheme: () => void;
  };

  const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
  export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
      // Load theme from localStorage or default to light mode
      return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
          root.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          root.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [isDarkMode]);
    
      const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);
    
      return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };
    
    export const useTheme = () => {
      const context = useContext(ThemeContext);
      if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
      }
      return context;
    };