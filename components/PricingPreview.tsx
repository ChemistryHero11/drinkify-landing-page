'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const pricingPlans = {
  monthly: {
    free: { price: 0, period: 'Free Forever' },
    pro: { price: 199, period: 'per month' },
  },
  annual: {
    free: { price: 0, period: 'Free Forever' },
    pro: { price: 1990, period: 'per year', savings: 'Save 17%' },
  },
}

const features = {
  free: [
    'Up to 50 transactions/day',
    'Basic MarketBar pricing',
    'Email support',
    '1 game mode',
  ],
  pro: [
    'Unlimited transactions',
    'All game modes',
    'Advanced analytics',
    'Priority support',
    'Custom branding',
    'API access',
  ],
}

export default function PricingPreview() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [showModal, setShowModal] = useState(false)
  
  const currentPricing = isAnnual ? pricingPlans.annual : pricingPlans.monthly
  
  return (
    <>
      <section className="py-20 px-6">
        <div className="max-w-[1600px] mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-slate-silver mb-8">
              Start free, scale when you're ready
            </p>
            
            {/* Billing toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-slate-silver'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-14 h-7 bg-white/10 rounded-full transition-colors duration-300 
                         hover:bg-white/20"
              >
                <motion.div
                  className="absolute top-1 w-5 h-5 bg-electric-mint rounded-full"
                  animate={{ x: isAnnual ? 32 : 4 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-white' : 'text-slate-silver'}`}>
                Annual
              </span>
              {isAnnual && (
                <motion.span
                  className="text-xs bg-electric-mint/20 text-electric-mint px-2 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  Save 17%
                </motion.span>
              )}
            </div>
          </motion.div>
          
          {/* Pricing cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Pilot */}
            <motion.div
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 
                       border border-electric-mint/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  Free Pilot
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${currentPricing.free.price}
                  </span>
                  <span className="text-slate-silver ml-2">
                    {currentPricing.free.period}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {features.free.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check size={20} className="text-electric-mint flex-shrink-0" />
                      <span className="text-slate-silver">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 border-2 border-electric-mint text-electric-mint 
                                 font-semibold rounded-full hover:bg-electric-mint hover:text-night-ink 
                                 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>
            </motion.div>
            
            {/* Pro */}
            <motion.div
              className="bg-gradient-to-br from-electric-mint/10 to-aperol-coral/10 rounded-2xl p-8 
                       border border-electric-mint/40 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Popular badge */}
              <div className="absolute top-0 right-6 bg-aperol-coral text-white px-4 py-1 
                           text-sm font-semibold rounded-b-lg">
                Popular
              </div>
              
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  Pro
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${isAnnual ? Math.floor(currentPricing.pro.price / 12) : currentPricing.pro.price}
                  </span>
                  <span className="text-slate-silver ml-2">
                    {isAnnual ? 'per month, billed annually' : currentPricing.pro.period}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {features.pro.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check size={20} className="text-electric-mint flex-shrink-0" />
                      <span className="text-slate-silver">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 bg-electric-mint text-night-ink font-semibold 
                                 rounded-full hover:bg-electric-mint/90 transition-all duration-300">
                  Start Pro Trial
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* CTA for detailed pricing */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => setShowModal(true)}
              className="text-electric-mint hover:text-white transition-colors duration-300 
                       underline underline-offset-4"
            >
              See Detailed Pricing & Enterprise Options
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Detailed pricing modal placeholder */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-night-ink border border-electric-mint/20 rounded-2xl p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Enterprise & Custom Solutions
            </h3>
            <p className="text-slate-silver mb-6">
              For larger venues, chains, or custom integrations, we offer tailored solutions 
              with dedicated support and advanced features.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-electric-mint text-night-ink font-semibold rounded-full"
            >
              Contact Sales
            </button>
          </div>
        </div>
      )}
    </>
  )
}
