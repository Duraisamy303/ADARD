'use client'

import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import ServicesSection from '@/components/ServicesSection'
import StudentsJourney from '@/components/StudentsJourney'
import StatsSection from '@/components/StatsSection'
import CoreValues from '@/components/CoreValues'
import HowYouLearn from '@/components/HowYouLearn'
import { useTheme } from '@/components/ThemeProvider'

export default function Home() {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroBanner />
      <ServicesSection />
      <StudentsJourney />
      <StatsSection />
      <CoreValues />
      <HowYouLearn />
    </div>
  )
}