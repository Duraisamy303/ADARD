'use client'

import { motion } from 'framer-motion'
import { Target, Wrench, CheckCircle, BookOpen, Users, Lightbulb, Eye, Shield, Zap, Sparkles } from 'lucide-react'

const whyChooseUs = [
  {
    icon: Wrench,
    title: 'Learn Real Tools',
    description: 'Gain hands-on experience with the same technologies used in real projects.',
    gradient: 'from-blue-500 to-cyan-500',
    color: '#3b82f6'
  },
  {
    icon: CheckCircle,
    title: 'Complete Projects',
    description: 'We guide you to build and finish your projects step by step, ensuring strong submissions.',
    gradient: 'from-green-500 to-teal-500',
    color: '#10b981'
  },
  {
    icon: BookOpen,
    title: 'Easy-to-Follow Guides',
    description: 'Follow our clear instructions to complete your demo projects smoothly.',
    gradient: 'from-purple-500 to-pink-500',
    color: '#8b5cf6'
  },
  {
    icon: Users,
    title: 'Expert Help When Needed',
    description: 'Our mentors provide guidance and feedback on your code, design, and project workflow.',
    gradient: 'from-orange-500 to-red-500',
    color: '#f59e0b'
  },
  {
    icon: Lightbulb,
    title: 'Professional Approach',
    description: 'Learn how to structure and manage your projects like real tech teams.',
    gradient: 'from-indigo-500 to-purple-500',
    color: '#6366f1'
  },
  {
    icon: Users,
    title: 'Collaborative Support',
    description: 'Connect with other students, ask questions, and get quick solutions while working on projects.',
    gradient: 'from-pink-500 to-rose-500',
    color: '#ec4899'
  }
]

const values = [
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We believe trust starts with clarity. Every project comes with clear instructions, timelines, and deliverables — no hidden costs, no surprises.',
    gradient: 'from-blue-500 to-indigo-500',
    color: '#3b82f6'
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Projects need consistent support to succeed. Adard Tech ensures timely guidance, practical help, and continued assistance.',
    gradient: 'from-green-500 to-emerald-500',
    color: '#10b981'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Learning and projects should be engaging and up-to-date. Adard Tech provides practical, hands-on project solutions using the latest technologies.',
    gradient: 'from-purple-500 to-violet-500',
    color: '#8b5cf6'
  }
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-20"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${['#3b82f6', '#8b5cf6', '#10b981'][i % 3]}40, transparent)`
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </motion.div>
              <span className="text-white font-medium">About Us</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-black text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              About{' '}
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                ADARD TECH
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Bridging the gap between academic learning and industry requirements through practical, real-world project experiences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div 
              className="bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/20 dark:border-gray-700/20 relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <div className="relative z-10 space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  We started our journey after working in leading companies and experiencing the corporate culture firsthand. That's when we realized a major challenge — students completing their degrees often struggle to enter the next-generation industry.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Most graduates step out into the world with a blank mind, unsure about what kind of jobs exist, what work they will do, or what skills they need to succeed. Traditional education focuses mainly on subjects and theory, but it doesn't always prepare students for real-world challenges.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  We bridge this gap by providing practical, real-time problem-solving experiences that help students visualize and develop the skills required in a tech career. Think of it this way — we guide you to think and act like a tech engineer.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div 
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.span 
                className="text-4xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎯
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-black text-white">
                Our Mission
              </h2>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-3xl text-white mb-8 relative overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                  "Turning student projects into real learning experiences."
                </h3>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                {[
                  { title: 'Step-by-Step Guidance', desc: 'Our mission is to guide students step by step through their entire project journey.' },
                  { title: 'Complete Understanding', desc: 'We make sure you not only complete your project successfully but also gain clarity on how everything works.' },
                  { title: 'Foundation for Growth', desc: 'Our focus is on helping you learn practically — so your project becomes more than just a submission, it becomes your foundation for growth.' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ 
                      y: -5,
                      backgroundColor: 'rgba(255,255,255,0.15)'
                    }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 300 }}
                  >
                    <h4 className="font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="group"
                >
                  <motion.div
                    className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden"
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      boxShadow: `0 25px 50px -12px ${item.color}40`
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}10, transparent 70%)`
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${item.color}20` }}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          backgroundColor: `${item.color}30`
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <IconComponent 
                          className="w-8 h-8" 
                          style={{ color: item.color }}
                        />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                        whileHover={{ color: item.color }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.title}
                      </motion.h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${Math.random() * 400 + 200}px`,
                height: `${Math.random() * 400 + 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${values[i % 3]?.color}40, transparent)`
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Our Values
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <motion.div
                    className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 h-full relative overflow-hidden"
                    whileHover={{
                      y: -15,
                      scale: 1.03,
                      boxShadow: `0 30px 60px -12px ${value.color}40`
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background: `conic-gradient(from 0deg, ${value.color}60, transparent, ${value.color}60)`,
                        padding: '1px'
                      }}
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className="w-full h-full rounded-3xl bg-slate-900/95" />
                    </motion.div>

                    <div className="relative z-10">
                      <motion.div
                        className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: `${value.color}20` }}
                        whileHover={{ 
                          scale: 1.1,
                          rotateY: 180
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent 
                          className="w-10 h-10" 
                          style={{ color: value.color }}
                        />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-4"
                        whileHover={{ 
                          color: value.color,
                          scale: 1.05
                        }}
                      >
                        {value.title}
                      </motion.h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}