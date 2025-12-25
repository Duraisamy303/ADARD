'use client'

import { motion } from 'framer-motion'
import { Heart, Trophy, Lightbulb, Users } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Student Success First',
    content: 'Your success is our top priority. We help you grow with real projects and career guidance that lead to real results.',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: Trophy,
    title: 'Industry-Standard Quality',
    content: 'Every project you do follows real-world standards used by leading companies.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Lightbulb,
    title: 'Learn by Building',
    content: 'We provide complete hand-holding through your project journey - from initial setup to final deployment - ensuring you gain both the project and the knowledge.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Mentorship & Support',
    content: 'We offer complete one-on-one guidance for students — ensuring your project is completed and confidently presentable.',
    gradient: 'from-purple-500 to-indigo-500'
  }
]

export default function CoreValues() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-5xl">💎</span>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Our Core Values
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The principles that shape your learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group text-center"
            >
              <motion.div 
                className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${value.gradient} p-5 mb-8 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <value.icon className="w-full h-full text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {value.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}