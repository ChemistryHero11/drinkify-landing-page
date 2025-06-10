'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'

// Martini glass SVG icon
const MartiniIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M5 7L12 17L19 7H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

interface NavbarProps {
  showModal: boolean
  setShowModal: (show: boolean) => void
}

export default function Navbar({ showModal, setShowModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['How It Works', 'Products', 'For Bars', 'Blog', 'Contact']

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    
    // Special handling for different sections
    if (sectionId === 'products') {
      document.getElementById('product-showcase')?.scrollIntoView({ behavior: 'smooth' })
    } else if (sectionId === 'for-bars') {
      document.getElementById('impact-stats')?.scrollIntoView({ behavior: 'smooth' })
    } else if (sectionId === 'blog') {
      document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })
    } else if (sectionId === 'contact') {
      document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'h-16 glass' : 'h-20 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 text-electric-mint cursor-pointer">
            <MartiniIcon />
            <span className="font-heading font-bold text-xl">Drinkify</span>
          </a>
          
          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => handleNavClick(e, link.toLowerCase().replace(' ', '-'))}
                className="text-slate-silver hover:text-electric-mint transition-colors duration-300 cursor-pointer"
              >
                {link}
              </a>
            ))}
          </div>
          
          {/* CTA Button */}
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-2.5 bg-aperol-coral text-white font-medium rounded-full hover:bg-aperol-coral/90 
                     transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-aperol-coral/25"
          >
            Book a Demo
          </button>
        </div>
      </motion.nav>
      
      {/* Demo Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-night-ink border border-electric-mint/20 rounded-2xl p-8 max-w-md w-full mx-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-heading font-bold text-2xl text-white">Book Your Demo</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-slate-silver hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Bar Name"
                  className="w-full px-4 py-3 bg-white/5 border border-electric-mint/20 rounded-lg 
                           text-white placeholder:text-slate-silver focus:border-electric-mint/50 
                           focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-white/5 border border-electric-mint/20 rounded-lg 
                           text-white placeholder:text-slate-silver focus:border-electric-mint/50 
                           focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-electric-mint text-night-ink font-semibold rounded-lg 
                           hover:bg-electric-mint/90 transition-all duration-300"
                >
                  Get Started
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
