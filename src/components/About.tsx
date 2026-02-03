import { motion } from "framer-motion";
import { Sparkles, Coffee } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 bg-cinema-dark relative overflow-hidden">
      {/* Cosmic decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cosmic-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cosmic-purple/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-lg overflow-hidden bg-cinema-gray relative z-10 cosmic-glow">
            <img
              src="/images/about.jpeg"
              alt="Anton Robert at grading console in Paris studio"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-cinema-black/80 via-cosmic-purple/20 to-transparent" />

            {/* Floating cosmic particles */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 right-10 w-2 h-2 bg-cosmic-purple rounded-full"
            />

            <motion.div
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-cosmic-pink rounded-full"
            />
          </div>
          {/* Offset border effect with cosmic glow */}
          <div className="absolute top-4 left-4 w-full h-full border border-cosmic-purple/30 rounded-lg -z-0" />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-cosmic-purple" />
            <span className="text-cosmic-purple font-mono text-sm tracking-widest uppercase">
              {t.about.title}
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            {t.about.paintingQuery.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-pink bg-clip-text text-transparent">
              {t.about.paintingQuery.split(" ").slice(2).join(" ")}
            </span>
          </h2>
          <div className="space-y-6 text-cinema-muted font-light text-lg leading-relaxed">
            <p>{t.about.intro}</p>
            <p className="text-cosmic-cyan italic">"{t.about.quote}"</p>
          </div>

          <motion.div
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
              delay: 0.6,
            }}
            className="mt-8 flex items-center gap-3 text-sm text-cinema-muted"
          >
            <Coffee className="w-4 h-4 text-cinema-amber" />
            <span>{t.about.fuel}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
