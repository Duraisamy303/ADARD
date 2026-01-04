'use client'

import { motion } from 'framer-motion'
import { Rocket, GraduationCap, Briefcase, Building, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const stats = [
  {
    icon: Rocket,
    number: 200,
    suffix: '+',
    label: 'MERN Projects Built',
    color: '#3b82f6',
    bgColor: 'bg-blue-50',
    darkBgColor: 'dark:bg-blue-900/20'
  },
  {
    icon: GraduationCap,
    number: 150,
    suffix: '+',
    label: 'Students Trained',
    color: '#10b981',
    bgColor: 'bg-emerald-50',
    darkBgColor: 'dark:bg-emerald-900/20'
  },
  {
    icon: Briefcase,
    number: 50,
    suffix: '+',
    label: 'Job Placements',
    color: '#f59e0b',
    bgColor: 'bg-amber-50',
    darkBgColor: 'dark:bg-amber-900/20'
  },
  {
    icon: Building,
    number: 25,
    suffix: '+',
    label: 'Companies Hiring',
    color: '#8b5cf6',
    bgColor: 'bg-purple-50',
    darkBgColor: 'dark:bg-purple-900/20'
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
    <span className="text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-4xl">📊</span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Our Impact
            </h2>
          </motion.div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real numbers that showcase our commitment to student success
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                {/* Card */}
                <div className={`relative p-8 rounded-3xl ${stat.bgColor} ${stat.darkBgColor} border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  {/* Floating Icon */}
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      style={{ backgroundColor: stat.color }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ 
                        backgroundColor: stat.color,
                        filter: 'blur(8px)',
                        transform: 'scale(1.2)'
                      }}
                    />
                  </motion.div>

                  {/* Number */}
                  <motion.div 
                    className="mb-3 text-gray-900 dark:text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Counter target={stat.number} suffix={stat.suffix} />
                  </motion.div>

                  {/* Label */}
                  <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                    {stat.label}
                  </p>

                  {/* Animated Border */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: stat.color }}
                  />
                  
                  {/* Progress Indicator */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 rounded-b-3xl transition-all duration-500"
                    style={{ backgroundColor: stat.color }}
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <TrendingUp className="w-5 h-5" />
            <span>View Detailed Analytics</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}