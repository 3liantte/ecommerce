"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <button
      className={`relative inline-flex items-center p-3 my-2.5 font-medium 
    text-center text-indigo-900 dark:text-yellow-500 bg-transparent rounded-lg hover:bg-green-300  
    dark:hover:bg-green-700`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <Moon />
      ) : (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        >
          <Sun />
        </motion.div>
      )}
    </button>
  );
}
