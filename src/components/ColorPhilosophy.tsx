import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Eye, Heart, Lightbulb } from 'lucide-react';
const principles = [
{
  icon: Eye,
  title: 'Story First, Always',
  description:
  "I don't grade to show off—I grade to serve the narrative. Every color choice must amplify the emotion and meaning the director intended. Technical wizardry means nothing if it doesn't support the story."
},
{
  icon: Heart,
  title: 'Emotion is Everything',
  description:
  "Warm amber for intimacy. Cool steel for isolation. Saturated primaries for joy. Desaturated tones for melancholy. Color is an emotional language, and I'm fluent in it. My job is to make audiences *feel* without them knowing why."
},
{
  icon: Palette,
  title: 'Craft Before Creativity',
  description:
  "Perfect skin tones. Balanced exposures. Shot-to-shot continuity. These aren't optional—they're the foundation. Only after mastering the technical can you break the rules with intention. (And I love breaking rules with intention.)"
},
{
  icon: Lightbulb,
  title: 'Collaboration is Key',
  description:
  "The best work happens in conversation. I listen to DPs talk about their lighting setups, directors describe their vision, editors explain their rhythm. Then I translate all of that into color. It's a dialogue, not a monologue."
}];

export function ColorPhilosophy() {
  return (
    <section className="py-24 px-4 bg-cinema-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cosmic-purple rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cosmic-pink rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-cosmic-blue rounded-full animate-pulse delay-200" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-cosmic-purple via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent">
              Philosophy
            </span>
          </h2>
          <p className="text-cinema-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Color grading isn't just pushing sliders—it's visual storytelling.
            Here's what I believe, learned from 8 years of late nights,
            espresso, and obsessing over every frame.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -30 : 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15
            }}
            className="flex gap-6 bg-cinema-dark/30 p-6 rounded-lg border border-cinema-gray/10 hover:border-cosmic-purple/30 transition-colors duration-300">

              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-cosmic-purple/10 flex items-center justify-center">
                  <principle.icon className="w-7 h-7 text-cosmic-purple" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-cinema-muted leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>

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
            delay: 0.8
          }}
          className="mt-16 text-center">

          <blockquote className="text-xl md:text-2xl font-display italic text-white max-w-3xl mx-auto leading-relaxed">
            "I don't just color grade films. I help filmmakers finish their
            sentences."
          </blockquote>
          <p className="mt-4 text-cosmic-purple font-mono text-sm">
            — Anton Robert
          </p>
        </motion.div>
      </div>
    </section>);

}