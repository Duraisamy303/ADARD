'use client'

import { motion } from 'framer-motion'
import { Heart, Trophy, Lightbulb, Users } from 'lucide-react'
import { useState } from 'react'

const values = [
  {
    icon: Heart,
    title: 'Student Success First',
    content: 'Your success is our top priority. We help you grow with real projects and career guidance that lead to real results.',
    color: '#ff1744',
    spiral: { angle: 0, radius: 180 }
  },
  {
    icon: Trophy,
    title: 'Industry-Standard Quality',
    content: 'Every project you do follows real-world standards used by leading companies.',
    color: '#ff9100',
    spiral: { angle: 90, radius: 180 }
  },
  {
    icon: Lightbulb,
    title: 'Learn by Building',
    content: 'We provide complete hand-holding through your project journey - from initial setup to final deployment - ensuring you gain both the project and the knowledge.',
    color: '#2196f3',
    spiral: { angle: 180, radius: 180 }
  },
  {
    icon: Users,
    title: 'Mentorship & Support',
    content: 'We offer complete one-on-one guidance for students — ensuring your project is completed and confidently presentable.',
    color: '#9c27b0',
    spiral: { angle: 270, radius: 180 }
  }
]

export default function CoreValues() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Quantum Field Background */}
      <div className="absolute inset-0">
        {/* DNA Helix Strands */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="helixGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff1744" stopOpacity="0.3" />
              <stop offset="25%" stopColor="#ff9100" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#2196f3" stopOpacity="0.3" />
              <stop offset="75%" stopColor="#9c27b0" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ff1744" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Helix Path 1 */}
          <motion.path
            d="M 200 100 Q 400 200 600 100 T 1000 100 T 1400 100"
            stroke="url(#helixGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            animate={{
              d: [
                "M 200 100 Q 400 200 600 100 T 1000 100 T 1400 100",
                "M 200 200 Q 400 100 600 200 T 1000 200 T 1400 200",
                "M 200 100 Q 400 200 600 100 T 1000 100 T 1400 100"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Helix Path 2 */}
          <motion.path
            d="M 200 200 Q 400 100 600 200 T 1000 200 T 1400 200"
            stroke="url(#helixGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            animate={{
              d: [
                "M 200 200 Q 400 100 600 200 T 1000 200 T 1400 200",
                "M 200 100 Q 400 200 600 100 T 1000 100 T 1400 100",
                "M 200 200 Q 400 100 600 200 T 1000 200 T 1400 200"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>

        {/* Quantum Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-5xl">💎</span>
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-cyan-400">
              Our Core Values
            </h2>
          </motion.div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The principles that shape your learning journey
          </p>
        </motion.div>

        {/* DNA Spiral Layout */}
        <div className="relative h-[800px] flex items-center justify-center">
          {/* Central Core */}
          <motion.div
            className="absolute w-32 h-32 rounded-full border-4 border-white/20 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
          </motion.div>

          {/* Spiral Value Cards */}
          {values.map((value, index) => {
            const IconComponent = value.icon
            const spiralX = Math.cos((value.spiral.angle * Math.PI) / 180) * value.spiral.radius
            const spiralY = Math.sin((value.spiral.angle * Math.PI) / 180) * value.spiral.radius
            
            return (
              <motion.div
                key={index}
                className="absolute cursor-pointer"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(${spiralX}px, ${spiralY}px)`
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Quantum Bubble */}
                <motion.div
                  className="relative w-64 h-80 p-6 backdrop-blur-xl border border-white/10 overflow-hidden"
                  style={{
                    background: `radial-gradient(circle at center, ${value.color}20 0%, transparent 70%)`,
                    borderRadius: '50% 20% 50% 20%'
                  }}
                  animate={{
                    borderRadius: [
                      '50% 20% 50% 20%',
                      '20% 50% 20% 50%',
                      '40% 30% 60% 10%',
                      '50% 20% 50% 20%'
                    ],
                    rotate: activeIndex === index ? 360 : 0
                  }}
                  transition={{
                    borderRadius: { duration: 6, repeat: Infinity },
                    rotate: { duration: 2 }
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -20
                  }}
                >
                  {/* Energy Field */}
                  <motion.div
                    className="absolute inset-0 border-2 opacity-0"
                    style={{
                      borderColor: value.color,
                      borderRadius: 'inherit',
                      boxShadow: `0 0 30px ${value.color}60`
                    }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      scale: activeIndex === index ? [1, 1.1, 1] : 1
                    }}
                    transition={{ duration: 1, repeat: activeIndex === index ? Infinity : 0 }}
                  />

                  {/* Quantum Dots */}
                  {activeIndex === index && (
                    <>
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full"
                          style={{ backgroundColor: value.color }}
                          initial={{
                            x: 120,
                            y: 160,
                            opacity: 0
                          }}
                          animate={{
                            x: 120 + Math.cos((i * 45 * Math.PI) / 180) * 80,
                            y: 160 + Math.sin((i * 45 * Math.PI) / 180) * 80,
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-center text-center">
                    {/* Floating Icon */}
                    <motion.div
                      className="mb-6"
                      animate={{
                        y: [-5, 5, -5],
                        rotateY: activeIndex === index ? 360 : 0
                      }}
                      transition={{
                        y: { duration: 2, repeat: Infinity },
                        rotateY: { duration: 1.5 }
                      }}
                    >
                      <div 
                        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center relative"
                        style={{
                          background: `linear-gradient(45deg, ${value.color}40, ${value.color}20)`,
                          border: `2px solid ${value.color}`,
                          boxShadow: `0 0 20px ${value.color}60`
                        }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                        
                        {/* Orbital Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border border-white/30"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                    </motion.div>

                    <h3 
                      className="text-xl font-bold text-white mb-4"
                      style={{
                        textShadow: `0 0 10px ${value.color}80`
                      }}
                    >
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {value.content}
                    </p>
                  </div>

                  {/* Plasma Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 pointer-events-none"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${value.color}40, transparent, ${value.color}20, transparent)`,
                      borderRadius: 'inherit'
                    }}
                    animate={{
                      opacity: activeIndex === index ? 0.6 : 0,
                      rotate: 360
                    }}
                    transition={{
                      opacity: { duration: 0.3 },
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" }
                    }}
                  />
                </motion.div>

                {/* Connection Line to Center */}
                <motion.div
                  className="absolute w-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  style={{
                    height: value.spiral.radius,
                    left: '50%',
                    top: '50%',
                    transformOrigin: '0 0',
                    transform: `rotate(${value.spiral.angle + 180}deg)`
                  }}
                  animate={{
                    opacity: activeIndex === index ? 0.8 : 0.2
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}