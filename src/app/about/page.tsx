'use client'

import { motion } from 'framer-motion'
import { Target, Wrench, CheckCircle, BookOpen, Users, Lightbulb, Eye, Shield, Zap } from 'lucide-react'

const whyChooseUs = [
  {
    icon: Wrench,
    title: 'Learn Real Tools',
    description: 'Gain hands-on experience with the same technologies used in real projects.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CheckCircle,
    title: 'Complete Projects',
    description: 'We guide you to build and finish your projects step by step, ensuring strong submissions.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: BookOpen,
    title: 'Easy-to-Follow Guides',
    description: 'Follow our clear instructions to complete your demo projects smoothly.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Expert Help When Needed',
    description: 'Our mentors provide guidance and feedback on your code, design, and project workflow.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Lightbulb,
    title: 'Professional Approach',
    description: 'Learn how to structure and manage your projects like real tech teams.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Users,
    title: 'Collaborative Support',
    description: 'Connect with other students, ask questions, and get quick solutions while working on projects.',
    gradient: 'from-pink-500 to-rose-500'
  }
]

const values = [
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We believe trust starts with clarity. Every project comes with clear instructions, timelines, and deliverables — no hidden costs, no surprises. Students know exactly what support they will receive and how it helps them complete their projects successfully.',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Projects need consistent support to succeed. Hash Tech ensures timely guidance, practical help, and continued assistance so students can complete their projects smoothly and confidently.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Learning and projects should be engaging and up-to-date. Hash Tech provides practical, hands-on project solutions using the latest technologies, helping students build impressive, modern projects.',
    gradient: 'from-purple-500 to-violet-500'
  }
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">AshTech</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
              Bridging the gap between academic learning and industry requirements through practical, real-world project experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Our Story
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-8 md:p-12 rounded-3xl">
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  We started our journey after working in leading companies and experiencing the corporate culture firsthand. That's when we realized a major challenge — students completing their degrees often struggle to enter the next-generation industry. While corporate companies know what skills they expect from professionals, the current generation of students often lacks the relevant knowledge, practical scope, and proper guidance to meet these expectations.
                </p>
                <p>
                  Most graduates step out into the world with a blank mind, unsure about what kind of jobs exist, what work they will do, or what skills they need to succeed. Traditional education focuses mainly on subjects and theory, but it doesn't always prepare students for real-world challenges.
                </p>
                <p>
                  We bridge this gap by providing practical, real-time problem-solving experiences that help students visualize and develop the skills required in a tech career. Think of it this way — we guide you to think and act like a tech engineer. And even if you're not fully confident yet, our team will support you every step of the way, providing proper skill guidance to help you succeed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-4xl">🎯</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-3xl text-white mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  "Turning student projects into real learning experiences."
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Step-by-Step Guidance</h4>
                  <p className="text-gray-600 dark:text-gray-300">Our mission is to guide students step by step through their entire project journey.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Complete Understanding</h4>
                  <p className="text-gray-600 dark:text-gray-300">We make sure you not only complete your project successfully but also gain clarity on how everything works.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Foundation for Growth</h4>
                  <p className="text-gray-600 dark:text-gray-300">Our focus is on helping you learn practically — so your project becomes more than just a submission, it becomes your foundation for growth.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} p-4 mb-6`}>
                  <item.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
          </motion.div>

          <div className="space-y-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`w-32 h-32 rounded-3xl bg-gradient-to-r ${value.gradient} p-8 mx-auto lg:mx-0`}>
                    <value.icon className="w-full h-full text-white" />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} text-center lg:text-left`}>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {value.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of students who have transformed their academic projects into real-world skills and successful careers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg">
                Get Started Today
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}