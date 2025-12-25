'use client'

import { motion } from 'framer-motion'
import { GraduationCap, TrendingUp, Shield, Users } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: "In-Demand Skills",
    content: "Tech Stack experts are highly sought after — top companies offer excellent roles and salary packages for professionals with strong technical knowledge.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: GraduationCap,
    title: "Next-Level Capability",
    content: "Master AI implementation within the Tech Stack ecosystem. Learn how to think like an engineer, apply logic, and build smarter with real-time learning.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Industry-Proven Tools",
    content: "Tech Stack is trusted by leading IT companies worldwide. We don't just teach AI — we show you how to use it effectively, the way industry professionals do.",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Users,
    title: "Your Role & Responsibility",
    content: "You're the Engineer, and AI is your Assistant. Be the expert who leads AI, manages it smartly, and corrects its mistakes. True engineers don't follow AI — they guide it.",
    gradient: "from-orange-500 to-red-500"
  }
]

export default function StudentsJourney() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Students Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                From Students to Industry Experts
              </h3>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  We began as computer science students who struggled to connect academic projects with real industry needs. After gaining experience in leading IT companies, we discovered how powerful the right technical knowledge can be.
                </p>
                <p>
                  Our mission is simple — to help students build real-world projects, strengthen logical thinking, and develop hands-on skills that not only earn great grades but also lead to successful tech careers.
                </p>
                <p>
                  Today, we've guided many students through project reviews, helped them master core technologies, and supported them in applying AI tools effectively. Many of our students have landed high-paying jobs in top IT companies.
                </p>
                <p>
                  We're here to share real tech knowledge through projects that match your interests and passion.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-2xl text-white">
              <p className="text-lg font-semibold">
                We don't just teach projects — we build your confidence, passion, and future in tech.
              </p>
            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Why Choose Tech Stack?
            </h3>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-2xl text-white text-center mt-8"
            >
              <p className="text-lg md:text-xl font-bold leading-relaxed">
                "Be the Engineer — Let AI Be Your Assistant. Build Smarter, Lead Stronger, and Get Ready for the Future with Tech Stack."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}