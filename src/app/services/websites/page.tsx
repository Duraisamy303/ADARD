'use client'

import { motion } from 'framer-motion'
import { Globe, Zap, Palette, FileText, Search, Layers, Code, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Responsive Design',
    description: 'Flawless user experience across desktops, tablets, and smartphones.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Optimized Performance',
    description: 'Sites designed to load quickly, a key factor for user retention and project scores.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: Palette,
    title: 'Clean & Modern Aesthetic',
    description: 'We ensure your project has a professional, contemporary look.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: FileText,
    title: 'Comprehensive Documentation',
    description: 'We provide all the necessary documentation for your project submission.',
    gradient: 'from-orange-500 to-red-500'
  }
]

const process = [
  {
    icon: Search,
    step: 'Step 1',
    title: 'Requirements Gathering',
    description: 'Defining the scope, features, and desired look of your website project.',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: Layers,
    step: 'Step 2',
    title: 'Design & Prototyping',
    description: 'Creating visual layouts and interactive prototypes for review and approval.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Code,
    step: 'Step 3',
    title: 'Development Phase',
    description: 'Building the functional website with clean, understandable code.',
    gradient: 'from-green-500 to-blue-500'
  },
  {
    icon: CheckCircle,
    step: 'Step 4',
    title: 'Review & Handover',
    description: 'Final checks, testing, and comprehensive documentation delivery.',
    gradient: 'from-orange-500 to-red-500'
  }
]

export default function WebsitesPage() {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              A Professional Edge: <span className="text-transparent bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text">Website Development</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 opacity-90">
              Build Modern, Responsive Websites that Reflect Your Ideas with Confidence
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
              At AshTech, we build responsive websites that look great on every device and load fast. Whether it's for a final-year project or a business concept, our sites deliver a smooth user experience and help your project stand out online.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-teal-500 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-2xl">
              View Our Portfolio
            </button>
          </motion.div>
        </div>
      </section>

      {/* Website Solutions Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Stand Out Online: Our Website Solutions
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We focus on clean design, strong functionality, and effortless usability. Your project won't just look professional; it will function flawlessly and be easy for you to manage and present.
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
              What Makes Our Websites Unique?
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Structured Approach to Website Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We guide you through the process, ensuring you are confident in presenting the final product.
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
                    {step.step}
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