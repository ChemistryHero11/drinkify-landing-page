'use client'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import HowItWorks from '@/components/HowItWorks'
import ImpactStats from '@/components/ImpactStats'
import Testimonials from '@/components/Testimonials'
import TechIntegrations from '@/components/TechIntegrations'
import PricingPreview from '@/components/PricingPreview'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

// Konami Code Easter Egg
const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
]

// Cursor glow effect
const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])
  
  return (
    <div
      className="fixed pointer-events-none z-50 w-8 h-8 rounded-full 
               bg-electric-mint/5 blur-lg transition-all duration-100 ease-out"
      style={{
        left: position.x - 16,
        top: position.y - 16,
      }}
    />
  )
}

export default function Home() {
  const [konamiSequence, setKonamiSequence] = useState<string[]>([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [showModal, setShowModal] = useState(false)
  
  // Konami code detection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...konamiSequence, e.code].slice(-KONAMI_CODE.length)
      setKonamiSequence(newSequence)
      
      if (newSequence.join(',') === KONAMI_CODE.join(',')) {
        setShowEasterEgg(true)
        setTimeout(() => setShowEasterEgg(false), 5000)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [konamiSequence])
  
  return (
    <main className="relative min-h-screen">
      {/* Cursor glow effect (desktop only) */}
      <div className="hidden md:block">
        <CursorGlow />
      </div>
      
      {/* Konami Code Easter Egg */}
      {showEasterEgg && (
        <div className="fixed inset-0 z-[999] pointer-events-none flex items-center justify-center">
          <div className="bg-electric-mint text-night-ink px-8 py-4 rounded-2xl font-heading 
                        font-bold text-2xl animate-bounce">
            🍸 Happy Hour Unlocked! 🍸
          </div>
          {/* Confetti effect */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-electric-mint animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Navigation */}
      <Navbar showModal={showModal} setShowModal={setShowModal} />
      
      {/* Main content */}
      <div className="overflow-hidden">
        <Hero setShowModal={setShowModal} />
        <ProductShowcase />
        <HowItWorks />
        <ImpactStats />
        <Testimonials />
        <TechIntegrations />
        <PricingPreview />
        <Newsletter />
        <Footer />
      </div>
    </main>
  )
}