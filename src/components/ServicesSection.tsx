'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, Smartphone, Globe, Brain, Play, ChevronRight, Star } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    id: 1,
    icon: Monitor,
    title: 'Website Design',
    description: 'Create modern, fast-loading websites from simple pages to full interactive sites.',
    features: ['Static Websites', 'Dynamic Websites', 'Performance Optimization', 'Responsive Design'],
    gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    bgColor: 'bg-indigo-500/20',
    number: '01'
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Build responsive mobile applications for both iOS and Android platforms.',
    features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'UI & UX Design'],
    gradient: 'from-pink-600 via-rose-600 to-orange-600',
    bgColor: 'bg-pink-500/20',
    number: '02'
  },
  {
    id: 3,
    icon: Globe,
    title: 'Web App',
    description: 'Develop powerful, browser-based applications that work on any operating system.',
    features: ['Frontend Development', 'Backend Development', 'Progressive Web Apps', 'API Integration'],
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    bgColor: 'bg-emerald-500/20',
    number: '03'
  },
  {
    id: 4,
    icon: Brain,
    title: 'AI Solutions',
    description: 'Leverage artificial intelligence to create smart, automated systems for your business.',
    features: ['AI prompt Suggestion', 'Chatbots & Virtual Assistants', 'Mid-level Auto respond Assistants', 'AI Implementation in upgrade'],
    gradient: 'from-amber-600 via-orange-600 to-red-600',
    bgColor: 'bg-amber-500/20',
    number: '04'
  }
]

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="min-h-screen bg-black relative overflow-hidden py-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(120,119,198,0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255,119,198,0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(120,219,255,0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(120,119,198,0.4) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"
          animate={{ 
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-full border border-white/20 mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
          >
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-medium">Premium Services</span>
            <Star className="w-4 h-4 text-yellow-400" />
          </motion.div>

          <motion.h2
            className="text-7xl md:text-9xl font-black mb-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span 
              className="block text-white"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 40px rgba(120,119,198,0.8)',
                  '0 0 20px rgba(255,255,255,0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              CRAFT
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              DIGITAL
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Morphing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isActive = activeCard === service.id
            const isHovered = hoveredCard === service.id

            return (
              <motion.div
                key={service.id}
                className="relative group"
                initial={{ opacity: 0, rotateY: -90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className={`relative h-96 cursor-pointer ${service.bgColor} backdrop-blur-xl border border-white/10 overflow-hidden`}
                  style={{
                    borderRadius: isHovered ? '60px' : '30px',
                    transformStyle: 'preserve-3d'
                  }}
                  animate={{
                    rotateX: isHovered ? 5 : 0,
                    rotateY: isHovered ? 5 : 0,
                    scale: isHovered ? 1.05 : 1,
                    borderRadius: isHovered ? '60px' : '30px'
                  }}
                  transition={{ duration: 0.6, type: "spring" }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setActiveCard(activeCard === service.id ? null : service.id)}
                >
                  {/* Morphing Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20`}
                    animate={{
                      opacity: isHovered ? 0.3 : 0,
                      scale: isHovered ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Floating Number */}
                  <motion.div
                    className="absolute top-6 right-6 text-8xl font-black text-white/5"
                    animate={{
                      rotate: isHovered ? 360 : 0,
                      scale: isHovered ? 1.2 : 1
                    }}
                    transition={{ duration: 1 }}
                  >
                    {service.number}
                  </motion.div>

                  {/* Content Container */}
                  <div className="relative z-10 h-full p-8 flex flex-col">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl`}
                        animate={{
                          rotate: isHovered ? [0, 360] : 0,
                          scale: isHovered ? 1.2 : 1,
                          borderRadius: isHovered ? '50%' : '24px'
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>

                      <div>
                        <motion.h3
                          className="text-2xl font-bold text-white"
                          animate={{
                            color: isHovered ? '#ffffff' : '#e5e7eb'
                          }}
                        >
                          {service.title}
                        </motion.h3>
                      </div>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-300 leading-relaxed mb-6 flex-1"
                      animate={{
                        opacity: isHovered ? 1 : 0.8
                      }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Features - Expandable */}
                    <AnimatePresence>
                      {(isActive || isHovered) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {service.features.map((feature, i) => (
                              <motion.div
                                key={i}
                                className="flex items-center gap-2 text-sm text-gray-400"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <motion.div
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                                  animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5]
                                  }}
                                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                />
                                <span className="font-medium">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Action Button */}
                    <motion.button
                      className={`flex items-center justify-between w-full py-4 px-6 rounded-2xl bg-gradient-to-r ${service.gradient} text-white font-semibold shadow-xl`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      animate={{
                        boxShadow: isHovered 
                          ? '0 20px 40px rgba(0,0,0,0.3)' 
                          : '0 10px 20px rgba(0,0,0,0.2)'
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        {isActive ? 'Hide Details' : 'Explore Service'}
                      </span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Hover Particles */}
                  {isHovered && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white/80 rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            y: [0, -50, -100]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-xl rounded-full overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-3">
              🚀 Launch Your Vision
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}