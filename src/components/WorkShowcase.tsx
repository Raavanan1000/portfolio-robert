import { motion } from "framer-motion";
import { BeforeAfter } from "./BeforeAfter";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function WorkShowcase() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t.work.project1.title,
      description: t.work.project1.desc,
      before: "/images/project1-before.png",
      after: "/images/project1-after.png",
    },
    {
      id: 2,
      title: t.work.project2.title,
      description: t.work.project2.desc,
      before: "/images/project2-before.png",
      after: "/images/project2-after.png",
    },
  ];

  return (
    <section className="py-24 px-4 bg-cinema-black relative overflow-hidden">
      {/* Cosmic accent elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-cosmic-purple/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-cosmic-pink/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
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
            duration: 0.6,
          }}
          className="mb-16 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-5 h-5 text-cosmic-purple" />
            <span className="text-cosmic-purple font-mono text-sm tracking-widest uppercase">
              {t.work.selectedWorks}
            </span>
            <Sparkles className="w-5 h-5 text-cosmic-purple" />
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-white via-cosmic-purple to-cosmic-pink bg-clip-text text-transparent mb-4">
            {t.work.title}
          </h2>
          <p className="text-cinema-muted text-lg max-w-2xl mx-auto">
            {t.work.dragSlider}
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
            >
              <BeforeAfter
                beforeImage={project.before}
                afterImage={project.after}
                title={project.title}
                description={project.description}
              />
            </motion.div>
          ))}
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
          className="mt-16 text-center"
        >
          <p className="text-cinema-muted text-sm italic">{t.work.moreWork}</p>
        </motion.div>
      </div>
    </section>
  );
}
