import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Coffee, Film, Award } from 'lucide-react';
export function About() {
  return (
    <section className="py-24 px-4 bg-cinema-dark relative overflow-hidden">
      {/* Cosmic decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cosmic-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cosmic-purple/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            x: -30
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="relative">

          <div className="aspect-[3/4] rounded-lg overflow-hidden bg-cinema-gray relative z-10 cosmic-glow">
            <img
              src="https://images.unsplash.com/photo-1542553458-79a13aebfda6?q=80&w=1000&auto=format&fit=crop"
              alt="Anton Robert at grading console in Paris studio"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />

            <div className="absolute inset-0 bg-gradient-to-t from-cinema-black/80 via-cosmic-purple/20 to-transparent" />

            {/* Floating cosmic particles */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute top-10 right-10 w-2 h-2 bg-cosmic-purple rounded-full" />

            <motion.div
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
              className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-cosmic-pink rounded-full" />

          </div>
          {/* Offset border effect with cosmic glow */}
          <div className="absolute top-4 left-4 w-full h-full border border-cosmic-purple/30 rounded-lg -z-0" />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 30
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}>

          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-cosmic-purple" />
            <span className="text-cosmic-purple font-mono text-sm tracking-widest uppercase">
              À Propos
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Painting with{' '}
            <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-pink bg-clip-text text-transparent">
              Light & Shadow
            </span>
          </h2>
          <div className="space-y-6 text-cinema-muted font-light text-lg leading-relaxed">
            <p>
              I fell in love with color grading in a tiny Parisian cinema,
              watching <em>Blade Runner 2049</em> for the first time. The way
              Roger Deakins and his colorist sculpted light—it was pure magic.
              That night, I knew this was my calling.
            </p>
            <p>
              Now, from my studio in the 11th arrondissement, I work with
              filmmakers across Europe and beyond. My approach? Technical
              precision meets artistic intuition. I don't just "correct"
              footage—I breathe life into it, finding the emotional core of
              every frame.
            </p>
            <p className="text-cosmic-cyan italic">
              "Color is the keyboard, the eyes are the harmonies, the soul is
              the piano with many strings." — Kandinsky (my studio mantra)
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{
                scale: 1.05
              }}
              className="border-l-2 border-cosmic-purple pl-4 cosmic-glow-hover">

              <div className="flex items-center gap-2 mb-1">
                <Film className="w-4 h-4 text-cosmic-purple" />
                <h4 className="text-white font-bold font-display text-xl">
                  8+ Years
                </h4>
              </div>
              <p className="text-sm text-cinema-muted">Grading Experience</p>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05
              }}
              className="border-l-2 border-cosmic-pink pl-4 cosmic-glow-hover">

              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-cosmic-pink" />
                <h4 className="text-white font-bold font-display text-xl">
                  50+ Projects
                </h4>
              </div>
              <p className="text-sm text-cinema-muted">
                Features & Commercials
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.6
            }}
            className="mt-8 flex items-center gap-3 text-sm text-cinema-muted">

            <Coffee className="w-4 h-4 text-cinema-amber" />
            <span>Fueled by espresso and late-night grading sessions</span>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}