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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 h-full relative overflow-hidden"
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                    y: isHovered ? -5 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Simple Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, ${value.color}15 0%, transparent 70%)`
                    }}
                    animate={{
                      opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border"
                    style={{ borderColor: value.color }}
                    animate={{
                      opacity: isHovered ? 0.6 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon & Title Row */}
                    <div className="flex items-start gap-6 mb-6">
                      <motion.div
                        className="relative flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: `${value.color}20` }}
                        animate={{
                          scale: isHovered ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent 
                          className="w-10 h-10" 
                          style={{ color: value.color }}
                        />
                        

                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.h3
                          className="text-3xl font-bold text-white mb-3"
                          animate={{
                            color: isHovered ? value.color : '#ffffff'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {value.title}
                        </motion.h3>
                        <motion.div 
                          className={`w-16 h-1 rounded-full bg-gradient-to-r ${value.gradient}`}
                          animate={{
                            width: isHovered ? '100%' : '64px'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <motion.p
                      className="text-gray-300 leading-relaxed mb-6"
                      animate={{
                        opacity: isHovered ? 1 : 0.8
                      }}
                    >
                      {value.content}
                    </motion.p>

                    {/* Enhanced Progress Indicator */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${value.gradient}`}
                          initial={{ width: '0%' }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.3 }}
                        />
                      </div>
                      <motion.span
                        className="text-sm font-bold text-white/60"
                        animate={{
                          color: isHovered ? value.color : 'rgba(255,255,255,0.6)'
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.span>
                    </div>
                  </div>


                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
            
            <div className="relative z-10">
              <motion.h3
                className="text-4xl font-bold text-white mb-6"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(59,130,246,0.5)',
                    '0 0 40px rgba(139,92,246,0.5)',
                    '0 0 20px rgba(59,130,246,0.5)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Ready to Experience These Values?
              </motion.h3>
              
              <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg">
                Join thousands of students who have transformed their careers through our value-driven approach.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Start Your Journey</span>
                </motion.button>
                
                <motion.button
                  className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}