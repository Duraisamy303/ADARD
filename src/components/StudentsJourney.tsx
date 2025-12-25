'use client'

import { motion } from 'framer-motion'
import { GraduationCap, TrendingUp, Shield, Users } from 'lucide-react'

export default function StudentsJourney() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            Students Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                From Students to Industry Experts
              </h3>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  We began as computer science students who struggled to connect academic projects with real industry needs. After gaining experience in leading IT companies, we discovered how powerful the right technical knowledge can be.
                </p>
                <p>
                  Our mission is simple — to help students build real-world projects, strengthen logical thinking, and develop hands-on skills that not only earn great grades but also lead to successful tech careers.
                </p>
                <p>
                  Today, we've guided many students through project reviews, helped them master core technologies, and supported them in applying AI tools effectively. Many of our students have landed high-paying jobs in top IT companies.
                </p>
              </div>
            </div>
            
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              We don't just teach projects — we build your confidence, passion, and future in tech.
            </motion.div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
              Why Choose Tech Stack?
            </h3>

            {[
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
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex items-start space-x-6 group"
              >
                <motion.div 
                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${feature.gradient} p-3 flex-shrink-0 group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-full h-full text-white" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12 p-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-white"
            >
              <p className="text-xl font-bold leading-relaxed">
                "Be the Engineer — Let AI Be Your Assistant. Build Smarter, Lead Stronger, and Get Ready for the Future with Tech Stack."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}