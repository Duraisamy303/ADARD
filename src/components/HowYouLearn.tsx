'use client'

import { motion } from 'framer-motion'
import { MapPin, Code, Wrench, Lightbulb } from 'lucide-react'

const steps = [
  {
    number: '1️⃣',
    icon: MapPin,
    title: 'Choose Your Path',
    content: 'Start your journey your way — use your own idea, get one from our experts, or customize a real-world concept. We guide you step by step.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    number: '2️⃣',
    icon: Code,
    title: 'Build Real Projects',
    content: 'Create real apps like social media platforms, e-commerce stores, and management systems that make your profile stand out.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    number: '3️⃣',
    icon: Wrench,
    title: 'Learn by Doing',
    content: 'Build, test, and improve — understand every concept through real hands-on experience.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    number: '4️⃣',
    icon: Lightbulb,
    title: 'Get Project + Core Knowledge',
    content: 'Turn your ideas into real-world solutions with logic, creativity, and confidence to lead your own vision.',
    gradient: 'from-orange-500 to-red-500'
  }
]

export default function HowYouLearn() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl">🚀</span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              How You'll Learn
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A practical, project-based learning journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                {/* Step number and icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-bold">
                    {step.number}
                  </div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} p-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <step.icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {step.content}
                </p>

                {/* Progress line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600"></div>
                )}

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-3xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Learning Experience?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of students who've built amazing projects and landed their dream jobs
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg">
              Start Your Journey Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}