'use client'

import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import ServicesSection from '@/components/ServicesSection'
import StudentsJourney from '@/components/StudentsJourney'
import StatsSection from '@/components/StatsSection'
import CoreValues from '@/components/CoreValues'
import HowYouLearn from '@/components/HowYouLearn'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('darkMode')
    if (saved) {
      setDarkMode(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('darkMode', JSON.stringify(darkMode))
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [darkMode, mounted])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  if (!mounted) {
    return <div className="min-h-screen bg-white"></div>
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <HeroBanner />
        <ServicesSection />
        <StudentsJourney />
        <StatsSection />
        <CoreValues />
        <HowYouLearn />
        <Footer />
      </div>
    </div>
  )
}