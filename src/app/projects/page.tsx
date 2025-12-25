'use client'

import { motion } from 'framer-motion'
import { Monitor, Smartphone, Globe, Brain, ExternalLink, Github, Play } from 'lucide-react'
import Image from 'next/image'

const projectCategories = [
  {
    icon: Monitor,
    title: 'Web Applications',
    count: '50+',
    description: 'Full-stack web apps with modern frameworks',
    gradient: 'from-blue-500 to-cyan-500',
    projects: ['E-commerce Platform', 'Social Media Dashboard', 'Project Management Tool']
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    count: '35+',
    description: 'Cross-platform mobile applications',
    gradient: 'from-purple-500 to-pink-500',
    projects: ['Food Delivery App', 'Fitness Tracker', 'Chat Application']
  },
  {
    icon: Globe,
    title: 'Websites',
    count: '80+',
    description: 'Responsive and modern websites',
    gradient: 'from-green-500 to-teal-500',
    projects: ['Business Portfolio', 'Educational Platform', 'News Website']
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    count: '25+',
    description: 'AI-powered intelligent applications',
    gradient: 'from-orange-500 to-red-500',
    projects: ['Chatbot Integration', 'Recommendation System', 'Image Recognition']
  }
]

const featuredProjects = [
  {
    id: 1,
    title: 'EduConnect - Learning Management System',
    category: 'Web Application',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    description: 'A comprehensive LMS with real-time chat, video calls, assignment management, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    gradient: 'from-blue-500 to-purple-500',
    features: ['Real-time Communication', 'Assignment Management', 'Progress Analytics', 'Video Integration']
  },
  {
    id: 2,
    title: 'SmartShop - E-commerce Mobile App',
    category: 'Mobile Application',
    tech: ['React Native', 'Firebase', 'Stripe', 'Redux'],
    description: 'Cross-platform shopping app with AI recommendations, secure payments, and inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    gradient: 'from-purple-500 to-pink-500',
    features: ['AI Recommendations', 'Secure Payments', 'Order Tracking', 'Push Notifications']
  },
  {
    id: 3,
    title: 'HealthBot - AI Medical Assistant',
    category: 'AI Solution',
    tech: ['Python', 'TensorFlow', 'NLP', 'Flask'],
    description: 'Intelligent chatbot for preliminary medical consultation with symptom analysis and recommendations.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
    gradient: 'from-green-500 to-teal-500',
    features: ['Symptom Analysis', 'Medical Database', 'Natural Language Processing', 'Report Generation']
  }
]

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Project Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
              Explore our collection of innovative projects that have helped students excel in their academics and launch successful careers in technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg">
                View All Projects
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                Request Custom Project
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Project Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover projects across different technologies and domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 text-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${category.gradient} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-full h-full text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-2`}>
                    {category.count}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {category.description}
                  </p>
                  <div className="space-y-1">
                    {category.projects.map((project, idx) => (
                      <div key={idx} className="text-sm text-gray-500 dark:text-gray-400">
                        • {project}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Showcase of our most successful and innovative student projects
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                        <Github className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                        <Play className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6`}>
                  <div>
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold mb-4`}>
                      {project.category}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mr-3`}></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className={`bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform`}>
                    View Project Details
                  </button>
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
              Ready to Build Your Dream Project?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join hundreds of students who have successfully completed their projects with our expert guidance and support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg">
                Start Your Project
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}