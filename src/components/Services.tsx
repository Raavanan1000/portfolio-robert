import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Film, Tv, Video, Clapperboard, Palette, Sparkles } from 'lucide-react';
const services = [
{
  icon: Film,
  title: 'Feature Films',
  description:
  'Theatrical releases deserve theatrical color. From intimate indie dramas to big-budget spectacles, I bring the same obsessive attention to every frame.',
  color: 'cosmic-purple'
},
{
  icon: Tv,
  title: 'Episodic & Series',
  description:
  'Consistency is king in episodic work. I create look books and maintain visual continuity across episodes, seasons, and story arcs.',
  color: 'cosmic-pink'
},
{
  icon: Video,
  title: 'Commercials & Music Videos',
  description:
  "Fast turnarounds, high impact. Whether it's 30 seconds or 3 minutes, every frame needs to pop. I specialize in bold, memorable looks.",
  color: 'cosmic-blue'
},
{
  icon: Clapperboard,
  title: 'Documentary',
  description:
  "Naturalistic doesn't mean boring. I enhance reality without betraying it—making doc footage feel cinematic while staying authentic.",
  color: 'cinema-amber'
},
{
  icon: Palette,
  title: 'HDR Mastering',
  description:
  'Dolby Vision, HDR10+, HLG—I speak all the HDR dialects. Premium streaming and theatrical require premium color science. I deliver both.',
  color: 'cosmic-purple'
},
{
  icon: Sparkles,
  title: 'Look Development & LUTs',
  description:
  'Need a custom look for your production? I create bespoke LUTs and visual style guides that your whole team can use on set and in post.',
  color: 'cosmic-pink'
}];

export function Services() {
  return (
    <section className="py-24 px-4 bg-cinema-dark relative overflow-hidden">
      {/* Cosmic accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cosmic-pink/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center mb-16">

          <span className="text-cosmic-purple font-mono text-sm tracking-widest uppercase mb-2 block">
            What I Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Color Grading{' '}
            <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-pink bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-cinema-muted text-lg max-w-2xl mx-auto">
            From narrative features to 30-second spots, I bring technical
            precision and artistic vision to every project. No two films are
            alike—neither are my grades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="bg-cinema-black/50 p-6 rounded-lg border border-cinema-gray/20 hover:border-cosmic-purple/40 transition-all duration-300 group">

              <div
              className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:bg-${service.color}/20 transition-colors duration-300`}>

                <service.icon className={`w-6 h-6 text-${service.color}`} />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-cinema-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}