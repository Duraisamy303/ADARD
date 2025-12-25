'use client'

import { motion } from 'framer-motion'
import { Code, Shield, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react'

const advantages = [
  {
    icon: Code,
    title: 'Real-World Ready',
    description: 'We develop applications using industry-standard tools and best practices, ensuring your project is functional, polished, and showcases the real knowledge you\'ve gained.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Speed & Security',
    description: 'Every app is optimized for fast performance and built with secure development practices—so your presentation is smooth, safe, and stress-free.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Effortless Usability',
    description: 'We design clean, intuitive user interfaces that make your application easy to use, easy to understand, and impressive during demonstrations.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: Shield,
    title: 'Complete Support',
    description: 'From idea brainstorming to final documentation and demo preparation, we support you throughout the entire journey.',
    gradient: 'from-orange-500 to-red-500'
  }
]

const process = [
  {
    step: '1',
    title: 'Concept & Planning',
    description: 'We refine your idea, highlight key features, and create a clear development roadmap.'
  },
  {
    step: '2',
    title: 'Building & Guidance',
    description: 'Our team works alongside you to build the application, explaining key decisions and structures.'
  },
  {
    step: '3',
    title: 'Testing & Refinement',
    description: 'We rigorously test the application to eliminate bugs and ensure smooth performance.'
  },
  {
    step: '4',
    title: 'Documentation & Demo Prep',
    description: 'We help you create professional documentation and prepare for your final project presentation with confidence.'
  }
]

export default function WebAppsPage() {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 py-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                What We Offer: <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Beyond the Code
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
                We transform your project ideas into powerful, dynamic web applications that not only impress your professors but also help you build real development skills. Our focus is on practical learning, hands-on guidance, and creating functional, high-quality projects.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg">
                Start Your Project
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              The AshTech Web App Advantage
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${advantage.gradient} p-4`}>
                    <advantage.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Guided Development Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We follow a hands-on, collaborative approach where you learn as we build—step by step.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}