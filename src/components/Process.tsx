import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Sliders, MonitorPlay } from 'lucide-react';
const steps = [
{
  icon: Eye,
  title: 'Look Development',
  description:
  'Collaborating with the director and DP to establish the visual language and mood boards before grading begins.'
},
{
  icon: Sliders,
  title: 'Grading & Balancing',
  description:
  'Technical correction followed by creative grading. Balancing shots, refining skin tones, and shaping light.'
},
{
  icon: MonitorPlay,
  title: 'Final Delivery',
  description:
  'Ensuring color consistency across all deliverables, from cinema DCPs to web-ready formats.'
}];

export function Process() {
  return (
    <section className="py-24 px-4 bg-cinema-black relative overflow-hidden">
      {/* Cosmic constellation lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        style={{
          pointerEvents: 'none'
        }}>

        <motion.line
          x1="20%"
          y1="30%"
          x2="50%"
          y2="50%"
          stroke="url(#cosmic-gradient)"
          strokeWidth="1"
          initial={{
            pathLength: 0
          }}
          whileInView={{
            pathLength: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut'
          }} />

        <motion.line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="30%"
          stroke="url(#cosmic-gradient)"
          strokeWidth="1"
          initial={{
            pathLength: 0
          }}
          whileInView={{
            pathLength: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            ease: 'easeInOut'
          }} />

        <defs>
          <linearGradient
            id="cosmic-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%">

            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

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

          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-cosmic-purple via-cosmic-pink to-cosmic-blue bg-clip-text text-transparent">
            Workflow
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cosmic-purple via-cosmic-pink to-cosmic-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) =>
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
              delay: index * 0.2
            }}
            whileHover={{
              y: -10
            }}
            className="bg-cinema-dark/50 p-8 rounded-lg border border-cinema-gray/20 hover:border-cosmic-purple/50 transition-all duration-300 group relative overflow-hidden">

              {/* Cosmic glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/0 to-cosmic-pink/0 group-hover:from-cosmic-purple/10 group-hover:to-cosmic-pink/10 transition-all duration-300" />

              <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.1
              }}
              transition={{
                duration: 0.6
              }}
              className="w-12 h-12 bg-cinema-gray/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-cosmic-purple/20 transition-colors duration-300 relative z-10">

                <step.icon className="w-6 h-6 text-cinema-text group-hover:text-cosmic-purple transition-colors duration-300" />
              </motion.div>

              <h3 className="text-xl font-display font-bold text-white mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="text-cinema-muted leading-relaxed relative z-10">
                {step.description}
              </p>

              {/* Constellation dot */}
              <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute top-4 right-4 w-2 h-2 bg-cosmic-purple rounded-full" />

            </motion.div>
          )}
        </div>
      </div>
    </section>);

}