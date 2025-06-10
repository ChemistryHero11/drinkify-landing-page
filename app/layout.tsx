import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Drinkify - Turn Sips into Shares',
  description: 'Gamify your bar experience with dynamic drink pricing, trivia games, and more. Boost sales and engagement with our tech-forward bar solutions.',
  keywords: 'bar technology, dynamic pricing, cocktail games, MarketBar, bar gamification',
  openGraph: {
    title: 'Drinkify - Turn Sips into Shares',
    description: 'Gamify your bar experience with dynamic drink pricing and interactive games.',
    images: ['/og-cover.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drinkify - Turn Sips into Shares',
    description: 'Gamify your bar experience with dynamic drink pricing and interactive games.',
    images: ['/og-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}
