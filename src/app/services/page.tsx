'use client'

import { motion } from 'framer-motion'
import { Package, BookOpen, Eye, Presentation, Sparkles, ArrowRight, Zap, Star, Rocket, Shield } from 'lucide-react'
import ServiceCategories from '@/components/ServiceCategories'

const offerings = [
  {
    icon: Package,
    title: 'Complete Project Package',
    description: 'Source code, docs & demos',
    gradient: 'from-blue-500 to-cyan-500',
    color: '#3b82f6',
    size: 'large'
  },
  {
    icon: BookOpen,
    title: 'Step-by-Step Guidance',
    description: 'Detailed development explanations',
    gradient: 'from-purple-500 to-pink-500',
    color: '#8b5cf6',
    size: 'medium'
  },
  {
    icon: Eye,
    title: 'Project Review',
    description: 'Technical & functional support',
    gradient: 'from-green-500 to-teal-500',
    color: '#10b981',
    size: 'medium'
  },
  {
    icon: Presentation,
    title: 'Presentation Help',
    description: 'Confident project presentation',
    gradient: 'from-orange-500 to-red-500',
    color: '#f59e0b',
    size: 'small'
  }
]

const stats = [
  { number: '500+', label: 'Projects Delivered', icon: Rocket },
  { number: '98%', label: 'Success Rate', icon: Star },
  { number: '24/7', label: 'Support', icon: Shield }
]

export default function ServicesPage() {
  return (
    <div className="pt-24 bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-purple-950/20 to-black"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6 cursor-pointer"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
              </motion.div>
              <span className="text-white text-sm font-semibold">Premium Services</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-6xl md:text-8xl font-black mb-6 text-white"
            >
              What We <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Deliver
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Transform your academic vision into professional reality
            </motion.p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 p-10 relative overflow-hidden cursor-pointer group"
            >
              <motion.div 
                className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative">
                <motion.div 
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 rounded-full border border-blue-400/30 mb-6"
                  whileHover={{ scale: 1.1, borderColor: 'rgba(96, 165, 250, 0.6)' }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Rocket className="w-4 h-4 text-blue-400" />
                  </motion.div>
                  <span className="text-blue-300 text-xs font-bold">Featured</span>
                </motion.div>
                
                <motion.h2 
                  className="text-5xl font-black text-white mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Empowering<br />Student Success
                </motion.h2>
                
                <motion.p 
                  className="text-gray-300 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Transform your academic projects into professional-grade applications with comprehensive development support from concept to deployment.
                </motion.p>

                <motion.button 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl relative overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Start Your Project</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <div className="flex flex-col gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.03, y: -5, borderColor: 'rgba(255,255,255,0.3)' }}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 p-6 flex items-center gap-6 flex-1 cursor-pointer group"
                >
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <motion.div 
                      className="text-4xl font-black text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      {stat.number}
                    </motion.div>
                    <motion.div 
                      className="text-gray-400 font-semibold"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {stat.label}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {offerings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.03, borderColor: 'rgba(255,255,255,0.3)' }}
                className="bg-slate-900/50 backdrop-blur rounded-2xl border border-white/5 p-6 hover:bg-slate-900/70 transition-all cursor-pointer group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(135deg, ${item.color}10, transparent)` }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center relative z-10" 
                  style={{ background: `${item.color}20` }}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </motion.div>
                
                <motion.h3 
                  className="text-lg font-bold text-white mb-2 relative z-10"
                  whileHover={{ x: 3 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 text-sm relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.01, y: -3 }}
            className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur rounded-3xl border border-white/10 p-12 text-center relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            
            <motion.h3 
              className="text-4xl md:text-5xl font-black text-white mb-4 relative z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              Ready to Build Something Amazing?
            </motion.h3>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Join hundreds of students who've transformed their ideas into professional projects
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl relative overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Now 
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <ServiceCategories />
    </div>
  )
}