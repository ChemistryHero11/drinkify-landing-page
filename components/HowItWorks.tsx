'use client'
import { motion } from 'framer-motion'
import { Plug, Settings, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Connect POS',
    description: 'Seamlessly integrate with Square, Clover, Toast, or any major POS system in minutes.',
    icon: Plug,
  },
  {
    number: '02',
    title: 'Configure Game Rules',
    description: 'Set pricing boundaries, happy hour triggers, and customize the experience for your venue.',
    icon: Settings,
  },
  {
    number: '03',
    title: 'Launch & Watch Sales Climb',
    description: 'Go live instantly and watch as patrons engage with dynamic pricing and interactive features.',
    icon: Rocket,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-silver">
            Get up and running in three simple steps
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-electric-mint/20 transform -translate-x-1/2" />
          
          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`relative flex items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <motion.div
                  className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 
                           border border-electric-mint/10 hover:border-electric-mint/30 
                           transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                    <step.icon className="w-8 h-8 text-electric-mint flex-shrink-0" />
                    <h3 className="font-heading font-bold text-2xl text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-silver">
                    {step.description}
                  </p>
                </motion.div>
              </div>
              
              {/* Node - positioned at the center on desktop, left on mobile */}
              <motion.div
                className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 
                         w-16 h-16 bg-night-ink border-4 border-electric-mint 
                         rounded-full flex items-center justify-center z-10
                         -ml-8 md:ml-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <span className="font-mono font-bold text-electric-mint">
                  {step.number}
                </span>
              </motion.div>
              
              {/* Mobile spacer */}
              <div className="md:hidden w-8 flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
