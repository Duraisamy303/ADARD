'use client'

import { motion } from 'framer-motion'
import { Heart, Trophy, Lightbulb, Users } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Student Success First',
    content: 'Your success is our top priority. We help you grow with real projects and career guidance that lead to real results.',
    gradient: 'from-red-500 to-pink-500',
    bgGradient: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20'
  },
  {
    icon: Trophy,
    title: 'Industry-Standard Quality',
    content: 'Every project you do follows real-world standards used by leading companies.',
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
  },
  {
    icon: Lightbulb,
    title: 'Learn by Building',
    content: 'We provide complete hand-holding through your project journey - from initial setup to final deployment - ensuring you gain both the project and the knowledge.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
  },
  {
    icon: Users,
    title: 'Mentorship & Support',
    content: 'We offer complete one-on-one guidance for students — ensuring your project is completed and confidently presentable.',
    gradient: 'from-purple-500 to-indigo-500',
    bgGradient: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20'
  }
]

export default function CoreValues() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl">💎</span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Our Core Values
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The principles that shape your learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${value.bgGradient} p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300`}>
                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} p-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <value.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {value.content}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
            <span>🚀</span>
            <span>Ready to start your journey?</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}