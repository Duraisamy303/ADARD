'use client'

import { motion } from 'framer-motion'
import { Smartphone, Palette, Zap, GraduationCap, Lightbulb, Code, TestTube, Rocket } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'Cross-Platform Expertise',
    description: 'Reach users on both major platforms without doubling development time.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Palette,
    title: 'Modern & Sleek Design',
    description: 'We create visually appealing designs that ensure your app feels intuitive and professional.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Smooth Performance',
    description: 'Every app is built for speed, stability, and responsiveness across different screen sizes and devices.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: GraduationCap,
    title: 'Educational Focus',
    description: 'You don\'t just receive an app—you learn how it\'s built, step-by-step, with full guidance from our team.',
    gradient: 'from-orange-500 to-red-500'
  }
]

const process = [
  {
    icon: Lightbulb,
    phase: 'Phase 1',
    title: 'Ideation & Design',
    description: 'Transforming your concept into a concrete plan and visual wireframes.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Code,
    phase: 'Phase 2',
    title: 'Collaborative Building',
    description: 'We build the application together—coding key features while explaining everything clearly.',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: TestTube,
    phase: 'Phase 3',
    title: 'Quality Assurance',
    description: 'We test the app thoroughly to ensure smooth performance and a bug-free experience.',
    gradient: 'from-green-500 to-blue-500'
  },
  {
    icon: Rocket,
    phase: 'Phase 4',
    title: 'Launch Preparation',
    description: 'Preparing the necessary documentation and getting your app ready for demo/submission.',
    gradient: 'from-purple-500 to-pink-500'
  }
]

export default function MobileAppsPage() {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ideas on the Go: <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">Mobile App Development</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 opacity-90">
              Design & Develop Seamless Mobile Applications for iOS & Android
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
              We build user-friendly mobile applications that blend modern design with smooth performance. Crafted to highlight your creativity, our process helps you gain real confidence, practical skills, and industry-ready experience.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-2xl">
              Request a Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Mobile Experience Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The Mobile Experience: Crafted for Innovation
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Whether your project is for Android, iOS, or both, AshTech delivers high-quality, reliable mobile apps that stand out during project reviews. We focus on clean, modern interfaces and flawless functionality that make your app impressive and easy to present.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Key Features of Our Mobile Service
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Learn While You Launch: Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We provide complete support from UI design to the final app demo and documentation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.gradient} p-5 mx-auto group-hover:scale-110 transition-transform shadow-lg`}>
                    <step.icon className="w-full h-full text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-bold text-gray-900 dark:text-white shadow-lg">
                    {step.phase}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}