import { motion } from "framer-motion";
import {
  Mail,
  Instagram,
  Linkedin,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <footer className="py-24 px-4 bg-cinema-dark border-t border-cosmic-purple/20 relative overflow-hidden">
      {/* Cosmic background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-purple/5 to-cosmic-pink/5" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-cosmic-purple/10 rounded-full blur-[150px]"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-12 h-12 text-cosmic-purple" />
          </motion.div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">
            {t.contact.spark.split(" ").slice(0, 3).join(" ")}{" "}
            <span className="bg-gradient-to-r from-cosmic-purple via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent">
              {t.contact.spark.split(" ").slice(3).join(" ")}
            </span>
          </h2>
          <p className="text-xl text-cinema-muted mb-4 font-light">
            {t.contact.availability}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-cinema-muted">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cosmic-cyan" />
              <span>{t.contact.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cosmic-purple" />
              <span>{t.contact.timezone}</span>
            </div>
          </div>

          <motion.a
            href="mailto:robertvfx95@gmail.com"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cosmic-purple to-cosmic-pink text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 mb-16 cosmic-glow"
          >
            {t.contact.cta} <ArrowRight className="w-5 h-5" />
          </motion.a>

          <div className="flex justify-center gap-8 mb-12">
            {[
              {
                icon: Instagram,
                href: "https://instagram.com/antonrobert.color",
                label: "Instagram",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/antonrobert",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:robertvfx95@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="text-cinema-muted hover:text-cosmic-purple transition-colors duration-300 cosmic-glow-hover"
              >
                <social.icon className="w-6 h-6" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-cosmic-purple" />
            <div className="w-1.5 h-1.5 rounded-full bg-cosmic-pink" />
            <div className="w-2.5 h-2.5 rounded-full bg-cosmic-blue" />
          </motion.div>

          <div className="text-sm text-cinema-gray font-mono">
            {t.contact.footer}
          </div>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
            }}
            className="mt-4 text-xs text-cinema-gray/60 italic"
          >
            "{t.contact.quote}"
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
