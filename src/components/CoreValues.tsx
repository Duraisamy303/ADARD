'use client'

import { motion } from 'framer-motion'
import { Heart, Trophy, Lightbulb, Users, Sparkles } from 'lucide-react'
import { useState } from 'react'

const values = [
  {
    icon: Heart,
    title: 'Student Success First',
    content: 'Your success is our top priority. We help you grow with real projects and career guidance that lead to real results.',
    color: '#3b82f6',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Trophy,
    title: 'Industry-Standard Quality',
    content: 'Every project you do follows real-world standards used by leading companies.',
    color: '#10b981',
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    icon: Lightbulb,
    title: 'Learn by Building',
    content: 'We provide complete hand-holding through your project journey - from initial setup to final deployment - ensuring you gain both the project and the knowledge.',
    color: '#f59e0b',
    gradient: 'from-amber-500 to-yellow-500'
  },
  {
    icon: Users,
    title: 'Mentorship & Support',
    content: 'We offer complete one-on-one guidance for students — ensuring your project is completed and confidently presentable.',
    color: '#8b5cf6',
    gradient: 'from-purple-500 to-pink-500'
  }
]

export default function CoreValues() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${values[i % 4]?.color}40, transparent)`
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </motion.div>
            <span className="text-white font-medium">Our Foundation</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </motion.div>
          </motion.div>
          
          <motion.h2
            className="text-6xl md:text-7xl font-black text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Core{' '}
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Values
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            The principles that drive our commitment to excellence and student success
          </motion.p>
        </motion.div>

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => {
            const IconComponent = value.icon
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div 
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 p-6 h-full relative overflow-hidden"
                  whileHover={{
                    y: -20,
                    rotateY: 12,
                    rotateX: 8,
                    scale: 1.05,
                    boxShadow: `0 40px 80px -20px ${value.color}50`
                  }}
                  animate={{
                    borderColor: isHovered ? `${value.color}60` : 'rgba(255,255,255,0.2)'
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Liquid Background */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `conic-gradient(from ${isHovered ? '360deg' : '0deg'}, ${value.color}40, transparent, ${value.color}20, transparent, ${value.color}40)`,
                      filter: 'blur(20px)'
                    }}
                    animate={{
                      rotate: isHovered ? [0, 360] : 0,
                      scale: isHovered ? [1, 1.3, 1] : 1,
                      opacity: isHovered ? [0.3, 0.8, 0.3] : 0.1
                    }}
                    transition={{
                      rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity },
                      opacity: { duration: 2, repeat: Infinity }
                    }}
                  />

                  {/* Electric Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(45deg, ${value.color}80, transparent, ${value.color}80, transparent, ${value.color}80)`,
                      backgroundSize: '400% 400%',
                      padding: '2px'
                    }}
                    animate={{
                      backgroundPosition: isHovered ? ['0% 0%', '100% 100%', '0% 0%'] : '0% 0%',
                      opacity: isHovered ? 1 : 0
                    }}
                    transition={{
                      backgroundPosition: { duration: 2, repeat: Infinity },
                      opacity: { duration: 0.3 }
                    }}
                  >
                    <div className="w-full h-full rounded-3xl bg-slate-900/90 backdrop-blur-xl" />
                  </motion.div>
                  {/* Content */}
                  <div className="relative z-20">
                    {/* Icon & Title Row */}
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center relative"
                        style={{ backgroundColor: `${value.color}15` }}
                        whileHover={{ 
                          scale: 1.2,
                          rotateY: 360,
                          backgroundColor: `${value.color}25`
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      >
                        {/* Multiple Pulsing Rings */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute inset-0 rounded-2xl border-2"
                            style={{ borderColor: `${value.color}60` }}
                            animate={{
                              scale: isHovered ? [1, 1.5 + i * 0.3, 1] : 1,
                              opacity: isHovered ? [0.8, 0, 0.8] : 0
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.3
                            }}
                          />
                        ))}
                        
                        <motion.div
                          animate={{
                            rotateY: isHovered ? [0, 180, 360] : 0,
                            scale: isHovered ? [1, 1.3, 1] : 1
                          }}
                          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                        >
                          <IconComponent 
                            className="w-8 h-8" 
                            style={{ color: value.color }}
                          />
                        </motion.div>
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.h3 
                          className="text-2xl font-bold text-white mb-2"
                          whileHover={{ 
                            color: value.color,
                            scale: 1.05,
                            textShadow: `0 0 20px ${value.color}60`
                          }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          {value.title.split('').map((char, i) => (
                            <motion.span
                              key={i}
                              className="inline-block"
                              whileHover={{
                                y: -8,
                                rotateZ: Math.random() * 20 - 10,
                                scale: 1.2
                              }}
                              transition={{ delay: i * 0.03 }}
                            >
                              {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                          ))}
                        </motion.h3>
                        <motion.div 
                          className={`w-12 h-1 rounded-full bg-gradient-to-r ${value.gradient} relative overflow-hidden`}
                          whileHover={{ width: "100%", height: "4px" }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                          {isHovered && (
                            <>
                              <motion.div
                                className="absolute inset-0 bg-white/50 rounded-full"
                                animate={{
                                  x: ["-100%", "100%"]
                                }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                              <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{ backgroundColor: `${value.color}40` }}
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0.5, 0, 0.5]
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity
                                }}
                              />
                            </>
                          )}
                        </motion.div>
                      </div>
                    </div>

                    {/* Content */}
                    <motion.p 
                      className="text-gray-300 leading-relaxed mb-4 text-sm"
                      whileHover={{ 
                        color: "#f3f4f6",
                        x: 4
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {value.content}
                    </motion.p>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden relative">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${value.gradient} relative overflow-hidden`}
                          initial={{ width: '0%' }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.2,
                            ease: "easeOut"
                          }}
                        >
                          {/* Shimmer Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            animate={{
                              x: ["-100%", "100%"]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1
                            }}
                          />
                          
                          {/* Pulse Effect */}
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: `${value.color}30` }}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.7, 0.3]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 0.5
                            }}
                          />
                        </motion.div>
                        
                        {/* Background Glow */}
                        <motion.div
                          className="absolute inset-0 rounded-full blur-sm"
                          style={{ backgroundColor: `${value.color}20` }}
                          animate={{
                            opacity: [0.2, 0.6, 0.2]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity
                          }}
                        />
                      </div>
                      <motion.span 
                        className="text-sm font-bold text-white/70 px-2 py-1 rounded-lg border border-white/20"
                        whileHover={{ 
                          color: value.color,
                          scale: 1.1,
                          borderColor: `${value.color}60`,
                          backgroundColor: `${value.color}15`
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.span>
                    </div>
                  </div>

                  {/* Explosive Particles */}
                  {isHovered && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: value.color,
                            left: '50%',
                            top: '50%'
                          }}
                          animate={{
                            x: Math.cos((i * 30) * Math.PI / 180) * (100 + Math.random() * 100),
                            y: Math.sin((i * 30) * Math.PI / 180) * (100 + Math.random() * 100),
                            opacity: [1, 0],
                            scale: [0, 1.5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1
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

        {/* Enhanced CTA Section */}
        
      </div>
    </section>
  )
}