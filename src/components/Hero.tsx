import { motion } from "framer-motion";
import { ChevronDown, Sparkles, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Cosmic Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cosmic-purple/20 rounded-full blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cosmic-pink/20 rounded-full blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[40%] left-[30%] w-[50%] h-[50%] bg-cosmic-blue/15 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Sparkles className="w-5 h-5 text-cosmic-purple" />
          <span className="text-cosmic-purple font-mono text-sm tracking-[0.2em] uppercase">
            {t.hero.role}
          </span>
          <Sparkles className="w-5 h-5 text-cosmic-purple" />
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight leading-none"
          style={{
            textShadow:
              "0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(139, 92, 246, 0.3)",
          }}
        >
          Anton Robert
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <MapPin className="w-4 h-4 text-cosmic-cyan" />
          <span className="text-cosmic-cyan font-mono text-sm tracking-wider">
            {t.hero.location}
          </span>
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="font-sans text-lg md:text-2xl text-cinema-text max-w-2xl mx-auto font-light leading-relaxed mb-8 italic"
        >
          "{t.hero.quote}"
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="flex items-center justify-center gap-4"
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
            className="w-2 h-2 rounded-full bg-cosmic-purple"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-1.5 h-1.5 rounded-full bg-cosmic-pink"
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-2.5 h-2.5 rounded-full bg-cosmic-blue"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.8,
          duration: 1,
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-cosmic-purple tracking-widest uppercase">
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 text-cosmic-purple" />
        </motion.div>
      </motion.div>
    </section>
  );
}
