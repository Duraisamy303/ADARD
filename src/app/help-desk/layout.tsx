'use client'

import Navbar from '@/components/Navbar'
import { useTheme } from '@/components/ThemeProvider'

export default function HelpDeskLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {children}
    </div>
  )
}