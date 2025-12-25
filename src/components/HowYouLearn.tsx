'use client'

import { motion } from 'framer-motion'
import { MapPin, Code, Wrench, Lightbulb, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MapPin,
    title: 'Choose Your Path',
    content: 'Start your journey your way — use your own idea, get one from our experts, or customize a real-world concept. We guide you step by step.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    number: '02',
    icon: Code,
    title: 'Build Real Projects',
    content: 'Create real apps like social media platforms, e-commerce stores, and management systems that make your profile stand out.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Learn by Doing',
    content: 'Build, test, and improve — understand every concept through real hands-on experience.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    number: '04',
    icon: Lightbulb,
    title: 'Get Project + Core Knowledge',
    content: 'Turn your ideas into real-world solutions with logic, creativity, and confidence to lead your own vision.',
    gradient: 'from-orange-500 to-red-500'
  }
]

export default function HowYouLearn() {
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
            <span className="text-5xl">🚀</span>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              How You'll Learn
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A practical, project-based learning journey
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <span className={`text-6xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                    {step.number}
                  </span>
                  <motion.div 
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} p-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <step.icon className="w-full h-full text-white" />
                  </motion.div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {step.title}
                </h3>
                
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  {step.content}
                </p>

                <motion.div 
                  className={`inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:${step.gradient} transition-all cursor-pointer`}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-lg font-medium">Learn More</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.div>
              </div>

              <div className="flex-1 flex justify-center">
                <motion.div 
                  className={`w-80 h-80 rounded-full bg-gradient-to-r ${step.gradient} p-1`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                    <step.icon className="w-32 h-32 text-gray-400 dark:text-gray-600" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}