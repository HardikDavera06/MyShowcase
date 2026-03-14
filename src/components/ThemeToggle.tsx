import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

type ViewTransitionDocument = Document & {
  startViewTransition?: (updateCallback: () => void) => void;
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const applyTheme = (nextDark: boolean) => {
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    document.documentElement.classList.add("theme-transition");

    const doc = document as ViewTransitionDocument;
    if (doc.startViewTransition) {
      doc.startViewTransition(() => applyTheme(nextDark));
    } else {
      applyTheme(nextDark);
    }

    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 450);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center overflow-hidden hover:border-primary transition-colors"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Moon className="w-5 h-5 text-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Sun className="w-5 h-5 text-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
