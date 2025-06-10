'use client'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

// Animated bubbles background
const AnimatedBubbles = () => {
  const bubbles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 5,
  }))
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-white/5"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: '-100px',
          }}
          animate={{
            y: [0, -1200],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

interface HeroProps {
  setShowModal: (show: boolean) => void
}

export default function Hero({ setShowModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10" />
      
      {/* Animated bubbles */}
      <AnimatedBubbles />
      
      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tagline */}
          <motion.p
            className="text-electric-mint font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Gamify Your Bar
          </motion.p>
          
          {/* Main headline */}
          <motion.h1
            className="font-heading font-bold text-6xl md:text-8xl text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Turn Sips into{' '}
            <span className="text-gradient">Shares</span>
          </motion.h1>
          
          {/* Sub-copy */}
          <motion.p
            className="text-xl md:text-2xl text-slate-silver mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Transform your bar into an interactive experience where drink prices 
            move like stocks and every round is an adventure.
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button 
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-aperol-coral text-white font-semibold rounded-full 
                           hover:bg-aperol-coral/90 transition-all duration-300 hover:scale-105 
                           hover:shadow-lg hover:shadow-aperol-coral/25">
              Book Demo
            </button>
            <button 
              onClick={() => {
                // Placeholder for video functionality
                alert('Video coming soon! For now, explore our product showcase below.')
                document.getElementById('product-showcase')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 border-2 border-electric-mint text-electric-mint 
                           font-semibold rounded-full hover:bg-electric-mint hover:text-night-ink 
                           transition-all duration-300 flex items-center justify-center gap-2">
              <Play size={20} />
              Watch 60-sec Overview
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-electric-mint/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric-mint rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
