'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Clock, BarChart3, Brain, Target } from 'lucide-react'

const products = [
  {
    id: 'marketbar',
    name: 'MarketBar',
    status: 'Live',
    Icon: BarChart3,
    description: 'Turn your bar into a trading floor. Watch patrons engage as MarketBar adjusts drink prices based on popularity and time.',
    features: ['Dynamic drink pricing that moves like the stock market', 'Real-time price updates', 'Demand-based surges'],
    backContent: 'MarketBar gamifies the bar experience with live pricing that responds to demand. Happy hour gets happier when everyone orders the same drink!',
  },
  {
    id: 'triviatap',
    name: 'TriviaTap',
    status: 'Coming Soon',
    Icon: Brain,
    description: 'Boost weeknight traffic with engaging trivia that rewards winners with drink specials and discounts.',
    features: ['Interactive trivia games with drink rewards', 'Team competitions', 'Custom questions'],
    backContent: 'TriviaTap turns slow nights into packed houses. Engage your customers with fun trivia while driving beverage sales.',
  },
  {
    id: 'spinshot',
    name: 'Spin-the-Shot',
    status: 'Beta coming',
    Icon: Target,
    description: 'Digital wheel of fortune for shot specials that gets the whole bar involved and excited.',
    features: ['Customizable prize wheels', 'Group challenges', 'Special event modes'],
    backContent: 'Spin-the-Shot creates memorable moments and drives group sales with an interactive digital wheel that determines shot prices and challenges.',
  },
]

// Live ticker animation for MarketBar
const PriceTicker = () => {
  const drinks = [
    { name: 'Mojito', price: 12.50, change: 1.25, trend: 'up' },
    { name: 'Old Fashioned', price: 14.00, change: -0.75, trend: 'down' },
    { name: 'Margarita', price: 11.25, change: 2.00, trend: 'up' },
  ]
  
  return (
    <div className="space-y-2 mt-4">
      {drinks.map((drink, index) => (
        <motion.div
          key={drink.name}
          className="flex items-center justify-between bg-white/5 rounded px-3 py-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <span className="text-sm font-mono">{drink.name}</span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm">${drink.price}</span>
            <div className={`flex items-center ${drink.trend === 'up' ? 'text-electric-mint' : 'text-aperol-coral'}`}>
              {drink.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span className="text-xs font-mono">{Math.abs(drink.change)}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function ProductShowcase() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null)
  
  return (
    <section id="product-showcase" className="py-20 px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Our Product Suite
          </h2>
          <p className="text-xl text-slate-silver">
            Three ways to transform your bar into an interactive experience
          </p>
        </motion.div>
        
        {/* Product cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative h-[400px] perspective-1000"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer"
                animate={{ rotateY: flippedCard === product.id ? 180 : 0 }}
                onClick={() => setFlippedCard(flippedCard === product.id ? null : product.id)}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden rounded-2xl border border-electric-mint/20 
                             bg-gradient-to-br from-white/5 to-white/0 p-8 overflow-hidden">
                  {/* Status badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      product.status === 'Live' 
                        ? 'bg-electric-mint/20 text-electric-mint' 
                        : 'bg-slate-silver/20 text-slate-silver'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="text-electric-mint mb-4">
                    <product.Icon size={48} strokeWidth={1.5} />
                  </div>
                  
                  {/* Product name */}
                  <h3 className="font-heading font-bold text-2xl text-white mb-3">
                    {product.name === 'Spin-the-Shot' ? 'Spin•the•Shot' : product.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-silver mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Features or ticker */}
                  {product.id === 'marketbar' ? (
                    <PriceTicker />
                  ) : (
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-silver">
                          <div className="w-1 h-1 bg-electric-mint rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Hover hint */}
                  <div className="absolute bottom-4 right-4 text-xs text-slate-silver/50">
                    Click to flip
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl 
                             bg-gradient-to-br from-electric-mint/10 to-aperol-coral/10 
                             border border-electric-mint/30 p-8 flex flex-col justify-center">
                  <h4 className="font-heading font-bold text-xl text-white mb-4">
                    Why {product.name}?
                  </h4>
                  <p className="text-slate-silver mb-6">
                    {product.backContent}
                  </p>
                  <button className="mt-auto px-6 py-3 bg-electric-mint text-night-ink 
                                   font-semibold rounded-full hover:bg-electric-mint/90 
                                   transition-all duration-300">
                    {product.status === 'Live' ? 'Get Started' : 'Join Waitlist'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
