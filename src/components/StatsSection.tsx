'use client'

import { motion } from 'framer-motion'
import { Rocket, GraduationCap, Briefcase, Building } from 'lucide-react'
import { useEffect, useState } from 'react'

const stats = [
  {
    icon: Rocket,
    number: 200,
    suffix: '+',
    label: 'MERN Projects Built',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: GraduationCap,
    number: 150,
    suffix: '+',
    label: 'Students Trained',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Briefcase,
    number: 50,
    suffix: '+',
    label: 'Job Placements',
    gradient: 'from-amber-600 to-yellow-600'
  },
  {
    icon: Building,
    number: 25,
    suffix: '+',
    label: 'Companies Hiring',
    gradient: 'from-gray-400 to-gray-600'
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
    <span className="text-4xl md:text-6xl font-bold text-white">
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for our commitment to student success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-gray-700/50 transition-all duration-300">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stat.gradient} p-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="mb-4">
                  <Counter target={stat.number} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-gray-300 font-medium text-lg">
                  {stat.label}
                </p>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}