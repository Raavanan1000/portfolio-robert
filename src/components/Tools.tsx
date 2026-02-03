import { motion } from "framer-motion";
import { Monitor, Cpu, HardDrive, Palette } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Tools() {
  const { t } = useLanguage();

  const toolCategories = [
    {
      icon: Palette,
      title: t.tools.categories.software,
      tools: ["DaVinci Resolve Studio", "Baselight", "FilmLight Prelight"],
    },
    {
      icon: HardDrive,
      title: t.tools.categories.workflow,
      tools: ["ACES Color Pipeline", "10-bit ProRes 4444", "Synology NAS RAID"],
    },
  ];

  return (
    <section className="py-24 px-4 bg-cinema-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cosmic-blue/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
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
          className="text-center mb-16"
        >
          <span className="text-cosmic-cyan font-mono text-sm tracking-widest uppercase mb-2 block">
            {t.tools.setup}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {t.tools.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-cosmic-cyan">
              {t.tools.title.split(" ").slice(-1)}
            </span>
          </h2>
          <p className="text-cinema-muted text-lg max-w-2xl mx-auto">
            {t.tools.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-cinema-black/50 p-8 rounded-lg border border-cinema-gray/20"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-cosmic-cyan/10 flex items-center justify-center flex-shrink-0">
                  <category.icon className="w-6 h-6 text-cosmic-cyan" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white pt-2">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <li
                    key={toolIndex}
                    className="flex items-center gap-3 text-cinema-muted"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cosmic-cyan flex-shrink-0" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

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
            delay: 0.4,
          }}
          className="mt-12 text-center"
        >
          <p className="text-cinema-muted text-sm max-w-3xl mx-auto leading-relaxed">
            {t.tools.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
