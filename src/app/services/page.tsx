'use client'

import { motion } from 'framer-motion'
import { Package, BookOpen, Eye, Presentation } from 'lucide-react'
import ServiceCategories from '@/components/ServiceCategories'

const offerings = [
  {
    icon: Package,
    title: 'Complete Project Package',
    description: 'including source code, documentation, and demo files',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: BookOpen,
    title: 'Step-by-Step Guidance',
    description: 'detailed explanations for every stage of development',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Eye,
    title: 'Project Concept & Review Support',
    description: 'clear understanding of both technical and functional aspects',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: Presentation,
    title: 'Final Presentation Assistance',
    description: 'helping you present your project with confidence',
    gradient: 'from-orange-500 to-red-500'
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              What We Offer
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                <p>
                  At AshTech, we empower final-year students to bring their academic projects to life with professional-grade quality and practical learning.
                </p>
                <p>
                  We specialize in creating modern websites, innovative web applications, and feature-rich mobile apps — all tailored to meet your project requirements. Our solutions are affordable, scalable, and designed to grow with your vision.
                </p>
                <p>
                  Our team ensures every project is easy to understand, well-documented, and ready for presentation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                We provide:
              </h3>
              <div className="space-y-4">
                {offerings.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} p-3 flex-shrink-0`}>
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {index + 1}. {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-3xl text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              More Than Just a Project
            </h3>
            <p className="text-lg opacity-90 max-w-4xl mx-auto">
              With AshTech, you don't just submit a project — you gain hands-on experience, technical confidence, and career-focused knowledge that supports your long-term growth.
            </p>
          </motion.div>
        </div>
      </section>
      
      <ServiceCategories />
    </div>
  )
}