import { motion } from "framer-motion";
import { Film, Tv, Video, Clapperboard, Palette, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Film,
      title: t.services.items.feature.title,
      description: t.services.items.feature.desc,
      color: "cosmic-purple",
    },
    {
      icon: Tv,
      title: t.services.items.episodic.title,
      description: t.services.items.episodic.desc,
      color: "cosmic-pink",
    },
    {
      icon: Video,
      title: t.services.items.commercials.title,
      description: t.services.items.commercials.desc,
      color: "cosmic-blue",
    },
    {
      icon: Clapperboard,
      title: t.services.items.documentary.title,
      description: t.services.items.documentary.desc,
      color: "cinema-amber",
    },
    {
      icon: Palette,
      title: t.services.items.hdr.title,
      description: t.services.items.hdr.desc,
      color: "cosmic-purple",
    },
    {
      icon: Sparkles,
      title: t.services.items.lookdev.title,
      description: t.services.items.lookdev.desc,
      color: "cosmic-pink",
    },
  ];

  return (
    <section className="py-24 px-4 bg-cinema-dark relative overflow-hidden">
      {/* Cosmic accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cosmic-pink/5 rounded-full blur-[120px]" />

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
          className="text-center mb-16"
        >
          <span className="text-cosmic-purple font-mono text-sm tracking-widest uppercase mb-2 block">
            {t.services.whatIDo}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {t.services.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-pink bg-clip-text text-transparent">
              {t.services.title.split(" ").slice(-1)}
            </span>
          </h2>
          <p className="text-cinema-muted text-lg max-w-2xl mx-auto">
            {t.services.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
              className="bg-cinema-black/50 p-6 rounded-lg border border-cinema-gray/20 hover:border-cosmic-purple/40 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:bg-${service.color}/20 transition-colors duration-300`}
              >
                <service.icon className={`w-6 h-6 text-${service.color}`} />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-cinema-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
