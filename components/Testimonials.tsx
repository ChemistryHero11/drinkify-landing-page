'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "MarketBar transformed our Tuesday nights from dead to packed. Watching customers trade drinks like stocks is pure entertainment.",
    author: "Mike Chen",
    role: "Owner, The Copper Mug",
    rating: 5,
  },
  {
    id: 2,
    quote: "The gamification aspect brings in a younger crowd without alienating our regulars. Sales are up 35% on game nights.",
    author: "Sarah Williams",
    role: "Bar Manager, Neon Nights",
    rating: 5,
  },
  {
    id: 3,
    quote: "Setup was incredibly easy. We were live in 20 minutes and the support team is fantastic. This is the future of bar tech.",
    author: "James Rodriguez",
    role: "Head Bartender, The Social",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Bartenders Love Us
          </h2>
          <p className="text-xl text-slate-silver">
            Join hundreds of bars already using Drinkify
          </p>
        </motion.div>
        
        {/* Testimonial stack */}
        <div className="relative max-w-3xl mx-auto h-[300px]">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`absolute inset-0 ${index === currentIndex ? 'z-20' : 'z-10'}`}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0.3,
                  scale: index === currentIndex ? 1 : 0.95,
                  y: index === currentIndex ? 0 : 20,
                }}
                exit={{ opacity: 0, scale: 0.9, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-full bg-gradient-to-br from-white/10 to-white/5 
                             rounded-2xl p-8 md:p-12 border border-electric-mint/20 
                             backdrop-blur-sm">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={20} className="fill-electric-mint text-electric-mint" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-slate-silver">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Navigation dots */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-electric-mint' 
                    : 'bg-electric-mint/30 hover:bg-electric-mint/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
