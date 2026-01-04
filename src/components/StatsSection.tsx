'use client'

import { motion } from 'framer-motion'
import { Rocket, GraduationCap, Briefcase, Building, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

const stats = [
  {
    icon: Rocket,
    number: 200,
    suffix: '+',
    label: 'MERN Projects Built',
    color: '#ff6b35',
    neon: '#ff6b35'
  },
  {
    icon: GraduationCap,
    number: 150,
    suffix: '+',
    label: 'Students Trained',
    color: '#4ecdc4',
    neon: '#4ecdc4'
  },
  {
    icon: Briefcase,
    number: 50,
    suffix: '+',
    label: 'Job Placements',
    color: '#45b7d1',
    neon: '#45b7d1'
  },
  {
    icon: Building,
    number: 25,
    suffix: '+',
    label: 'Companies Hiring',
    color: '#f9ca24',
    neon: '#f9ca24'
  }
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span className="text-5xl md:text-6xl font-black">
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Cyberpunk Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 mb-8"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(0,255,255,0.1), transparent)',
              border: '1px solid rgba(0,255,255,0.3)',
              clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
            }}
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400 tracking-wider">PERFORMANCE METRICS</span>
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              STATS
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real numbers, real impact, real success stories
          </p>
        </motion.div>

        {/* Hexagonal Stats Cards */}
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hexagonal Container */}
              <motion.div
                className="relative w-64 h-80"
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                  y: hoveredIndex === index ? -10 : 0
                }}
                transition={{ duration: 0.3 }}
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                }}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gray-800/90 backdrop-blur-sm" />
                
                {/* Neon Border */}
                <motion.div 
                  className="absolute inset-0 border-2"
                  style={{
                    borderColor: hoveredIndex === index ? stat.neon : 'rgba(255,255,255,0.2)',
                    boxShadow: hoveredIndex === index ? `0 0 20px ${stat.neon}60, inset 0 0 20px ${stat.neon}20` : 'none',
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}
                  animate={{
                    borderColor: hoveredIndex === index ? stat.neon : 'rgba(255,255,255,0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Scanning Line */}
                {hoveredIndex === index && (
                  <motion.div 
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                    }}
                  >
                    <motion.div
                      className="absolute w-full h-1 opacity-80"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${stat.neon}, transparent)`,
                        boxShadow: `0 0 10px ${stat.neon}`
                      }}
                      animate={{
                        y: [0, 320, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                )}

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
                  {/* Icon */}
                  <motion.div 
                    className="mb-8"
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      rotateY: hoveredIndex === index ? 360 : 0
                    }}
                    transition={{ 
                      scale: { duration: 0.3 },
                      rotateY: { duration: 1, repeat: hoveredIndex === index ? Infinity : 0, ease: "linear" }
                    }}
                  >
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center relative"
                      style={{
                        background: hoveredIndex === index ? 
                          `linear-gradient(45deg, ${stat.color}40, ${stat.color}20)` : 
                          'rgba(255,255,255,0.1)',
                        border: hoveredIndex === index ? `2px solid ${stat.neon}` : '2px solid rgba(255,255,255,0.2)',
                        boxShadow: hoveredIndex === index ? `0 0 15px ${stat.neon}60` : 'none'
                      }}
                    >
                      <stat.icon 
                        className="w-8 h-8"
                        style={{ color: hoveredIndex === index ? stat.neon : '#ffffff' }}
                      />
                    </div>
                  </motion.div>

                  {/* Number */}
                  <motion.div 
                    className="mb-4"
                    style={{
                      color: hoveredIndex === index ? stat.neon : '#ffffff',
                      textShadow: hoveredIndex === index ? `0 0 20px ${stat.neon}80` : 'none'
                    }}
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Counter target={stat.number} suffix={stat.suffix} />
                  </motion.div>

                  {/* Label */}
                  <motion.p 
                    className="text-gray-300 font-medium text-sm leading-tight tracking-wide"
                    style={{
                      color: hoveredIndex === index ? '#ffffff' : '#9ca3af'
                    }}
                    animate={{
                      y: hoveredIndex === index ? -5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.label}
                  </motion.p>

                  {/* Corner Accents */}
                  {hoveredIndex === index && (
                    <>
                      <div 
                        className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2"
                        style={{ borderColor: stat.neon }}
                      />
                      <div 
                        className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2"
                        style={{ borderColor: stat.neon }}
                      />
                      <div 
                        className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2"
                        style={{ borderColor: stat.neon }}
                      />
                      <div 
                        className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2"
                        style={{ borderColor: stat.neon }}
                      />
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold cursor-pointer relative"
            whileHover={{ scale: 1.05 }}
            style={{
              background: 'linear-gradient(45deg, rgba(0,255,255,0.1), rgba(0,100,255,0.1))',
              border: '2px solid rgba(0,255,255,0.5)',
              clipPath: 'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)',
              boxShadow: '0 0 20px rgba(0,255,255,0.3)'
            }}
          >
            <span>VIEW DETAILED ANALYTICS</span>
            <Zap className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}