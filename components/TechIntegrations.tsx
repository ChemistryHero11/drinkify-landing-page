'use client'
import { motion } from 'framer-motion'

const partners = [
  { name: 'Square', logo: 'square' },
  { name: 'Clover', logo: 'clover' },
  { name: 'Toast', logo: 'toast' },
  { name: 'Stripe', logo: 'stripe' },
]

// Simple SVG placeholders for partner logos
const PartnerLogo = ({ name, isHovered }: { name: string; isHovered: boolean }) => {
  const logos: Record<string, JSX.Element> = {
    square: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="20" y="20" width="60" height="60" rx="8" 
              fill={isHovered ? '#00FFC2' : '#ABB1C4'} />
      </svg>
    ),
    clover: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="35" cy="35" r="15" fill={isHovered ? '#00FFC2' : '#ABB1C4'} />
        <circle cx="65" cy="35" r="15" fill={isHovered ? '#00FFC2' : '#ABB1C4'} />
        <circle cx="35" cy="65" r="15" fill={isHovered ? '#00FFC2' : '#ABB1C4'} />
        <circle cx="65" cy="65" r="15" fill={isHovered ? '#00FFC2' : '#ABB1C4'} />
      </svg>
    ),
    toast: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="25" y="30" width="50" height="40" rx="6" 
              fill={isHovered ? '#00FFC2' : '#ABB1C4'} />
        <rect x="30" y="25" width="40" height="6" rx="3" 
              fill={isHovered ? '#00FFC2' : '#ABB1C4'} />
      </svg>
    ),
    stripe: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M20 40 Q50 20 80 40 Q50 60 20 40" 
              fill={isHovered ? '#00FFC2' : '#ABB1C4'} />
        <path d="M20 55 Q50 35 80 55 Q50 75 20 55" 
              fill={isHovered ? '#00FFC2' : '#ABB1C4'} />
      </svg>
    ),
  }
  
  return logos[name.toLowerCase()] || <div />
}

export default function TechIntegrations() {
  return (
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
            Seamless Integrations
          </h2>
          <p className="text-xl text-slate-silver">
            Works with your existing POS system
          </p>
        </motion.div>
        
        {/* Partner logos */}
        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="group relative w-24 h-24 md:w-32 md:h-32"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <PartnerLogo 
                name={partner.name} 
                isHovered={false}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PartnerLogo 
                  name={partner.name} 
                  isHovered={true}
                />
              </div>
              {/* Partner name */}
              <p className="text-center mt-2 text-sm text-slate-silver group-hover:text-electric-mint transition-colors">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
