'use client'

import { motion } from 'framer-motion'
import { Brain, Bot, BarChart3, Sparkles, MessageCircle, Cog, TestTube, BookOpen } from 'lucide-react'

const expertise = [
  {
    icon: Bot,
    title: 'Practical Application',
    description: 'We focus on real-world AI features like intelligent chatbots, smart assistants, or data analytics, relevant to your project needs.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Cog,
    title: 'Guided Implementation',
    description: 'Our unique approach means you learn how to use AI to enhance applications during development.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: BookOpen,
    title: 'Documentation Ready',
    description: 'We provide thorough documentation explaining the AI models and integration methods for easy submission.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: Sparkles,
    title: 'Future-Proof Skills',
    description: 'Gain valuable, sought-after skills that prepare you for the job market.',
    gradient: 'from-orange-500 to-red-500'
  }
]

const workflow = [
  {
    icon: MessageCircle,
    title: 'Initial Consultation',
    description: 'Identifying where AI can add the most value to your specific web or mobile project.',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: Brain,
    title: 'Model Selection & Integration',
    description: 'Choosing and implementing the appropriate AI tools or models seamlessly into your application.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: TestTube,
    title: 'Testing & Fine-Tuning',
    description: 'Ensuring the AI features work reliably and effectively within the project scope.',
    gradient: 'from-green-500 to-blue-500'
  },
  {
    icon: BookOpen,
    title: 'Explanation & Documentation',
    description: 'Preparing you to confidently explain your AI features and delivering comprehensive documentation.',
    gradient: 'from-orange-500 to-red-500'
  }
]

export default function AISolutionsPage() {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Smarter Projects: <span className="text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text">AI Integration & Solutions</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 opacity-90">
              Integrate Cutting-Edge AI into Your Project & Impress Your Graders
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
              AshTech brings Artificial Intelligence capabilities directly into your web and mobile development work. We transform standard projects into interactive experiences by integrating features like intelligent chatbots and smart assistants, providing a modern, engaging layer to your applications.
            </p>
            <button className="bg-gradient-to-r from-indigo-500 to-pink-500 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-2xl">
              Discuss My AI Idea
            </button>
          </motion.div>
        </div>
      </section>

      {/* Future of Technology Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The Future of Technology: Made Simple for You
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Achieve a significant competitive advantage in the academic and professional arenas by building projects that are insightful, not just operational. We elevate your work past basic coding exercises, focusing instead on sophisticated applications powered by innovative machine learning capabilities. This approach not only enhances how users interact with your project but clearly demonstrates advanced, industry-ready technical skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our AI Solutions Expertise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
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
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} p-4`}>
                    <item.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-indigo-900/20 dark:to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our AI Project Workflow
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We ensure you understand the "why" and "how" behind the AI integration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
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
                    {index + 1}
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