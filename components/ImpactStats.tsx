'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  {
    value: 27,
    suffix: '%',
    label: 'Avg. Check Size',
    prefix: '+',
  },
  {
    value: 3,
    suffix: '×',
    label: 'Return Patrons',
    prefix: '',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Guest Engagement',
    prefix: '',
  },
]

// Counter animation component
const AnimatedCounter = ({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })
  
  useEffect(() => {
    if (inView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = value / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      
      return () => clearInterval(timer)
    }
  }, [inView, value])
  
  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="font-mono text-5xl md:text-6xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {prefix}{count}{suffix}
      </motion.div>
    </div>
  )
}

export default function ImpactStats() {
  return (
    <section id="impact-stats" className="py-20 px-6 bg-gradient-to-b from-transparent via-electric-mint/5 to-transparent">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Proven Impact
          </h2>
          <p className="text-xl text-slate-silver">
            Real results from bars using Drinkify
          </p>
        </motion.div>
        
        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-electric-mint/20 blur-3xl opacity-50" />
              
              {/* Stat card */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/0 
                           rounded-2xl p-8 border border-electric-mint/20 
                           hover:border-electric-mint/40 transition-colors duration-300">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
                <p className="text-center text-lg text-slate-silver">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
