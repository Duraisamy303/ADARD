'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    title: "Get Your Final Year Project Ready on Time",
    content: "Get real-time help to choose your project, build it smoothly, and prepare a perfect demo for your final review",
    buttons: [
      { text: "Our Service", variant: "primary" },
      { text: "View Projects", variant: "secondary" }
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=center",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    title: "We Handle Everything — You Focus on Learning",
    content: "From idea selection to final report, we guide you through every step. Get full project files, documentation, presentation tips, and a detailed Project Execution Guide — plus bonus career growth tips at the end of your project.",
    buttons: [
      { text: "Ask Doubt", variant: "primary" }
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=1080&fit=crop&crop=center",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    id: 3,
    title: "Present Your Project with Confidence",
    content: "Make your project stand out with a clear concept, neat design, and real-time working demo. Our expert team ensures your presentation looks professional and easy to explain.",
    buttons: [
      { text: "Contact Us", variant: "primary" }
    ],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop&crop=center",
    gradient: "from-pink-600 to-red-600"
  }
]

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} opacity-70`} />
        </motion.div>
      </AnimatePresence>
      
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-20 w-full">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {slides[currentSlide].content}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {slides[currentSlide].buttons.map((button, index) => (
                <button
                  key={index}
                  className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    button.variant === 'primary'
                      ? 'bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 shadow-lg'
                      : 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white'
                  : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}