import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="absolute top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-cinema-black/80 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Globe className="w-4 h-4 text-cosmic-purple group-hover:rotate-180 transition-transform duration-500" />
      <span className="font-mono text-sm tracking-wider">
        {language === "fr" ? "FR" : "EN"}
      </span>
    </motion.button>
  );
};
