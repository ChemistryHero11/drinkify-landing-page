'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'

// Martini glass icon with bubble easter egg
const MartiniIconWithBubble = () => {
  const [showBubble, setShowBubble] = useState(false)
  
  const triggerBubble = () => {
    setShowBubble(true)
    setTimeout(() => setShowBubble(false), 1000)
  }
  
  return (
    <div className="relative" onMouseEnter={triggerBubble}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-electric-mint">
        <path d="M5 7L12 17L19 7H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      {showBubble && (
        <motion.div
          className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 
                   bg-electric-mint rounded-full"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -20, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )}
    </div>
  )
}

const footerLinks = {
  products: [
    { name: 'MarketBar', href: '#' },
    { name: 'TriviaTap', href: '#' },
    { name: 'Spin-the-Shot', href: '#' },
    { name: 'All Products', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press Kit', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#' },
  ],
  social: [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'GitHub', href: '#', icon: Github },
  ],
}

export default function Footer() {
  const [showBubble, setShowBubble] = useState(false)
  
  return (
    <footer id="footer" className="bg-night-ink border-t border-electric-mint/10 py-16 px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-silver hover:text-electric-mint transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-silver hover:text-electric-mint transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-silver hover:text-electric-mint transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Social</h3>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-slate-silver hover:text-electric-mint transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-electric-mint/10 pt-8 flex flex-col md:flex-row 
                      justify-between items-center gap-4">
          {/* Logo and copyright */}
          <div className="flex items-center gap-3">
            <MartiniIconWithBubble />
            <span className="font-heading font-bold text-electric-mint">Drinkify</span>
            <span className="text-slate-silver"> 2025 Drinkify. All rights reserved.</span>
          </div>
          
          {/* Legal links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-slate-silver hover:text-electric-mint transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-slate-silver hover:text-electric-mint transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-slate-silver hover:text-electric-mint transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
