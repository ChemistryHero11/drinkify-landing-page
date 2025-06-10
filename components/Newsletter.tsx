'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for SendGrid/Supabase integration
    console.log('Newsletter signup:', email)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail('')
  }
  
  return (
    <section className="py-12 px-6 bg-electric-mint/10">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="text-electric-mint" size={24} />
            <h3 className="font-heading font-bold text-2xl text-white">
              Stay in the Loop
            </h3>
          </div>
          
          <p className="text-slate-silver mb-6">
            Get the latest updates on new features, success stories, and industry insights
          </p>
          
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-electric-mint/30 
                       rounded-full text-white placeholder:text-slate-silver 
                       focus:border-electric-mint focus:outline-none transition-colors"
            />
            <motion.button
              type="submit"
              className="px-6 py-3 bg-electric-mint text-night-ink font-semibold 
                       rounded-full hover:bg-electric-mint/90 transition-all duration-300 
                       flex items-center gap-2"
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={20} />
                  Subscribed!
                </>
              ) : (
                'Subscribe'
              )}
            </motion.button>
          </form>
          
          <p className="text-xs text-slate-silver/70 mt-3">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
