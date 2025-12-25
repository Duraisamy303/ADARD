'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, Monitor, Brain, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 1,
    title: "Website Design",
    content: "Create modern, fast-loading websites from simple pages to full interactive sites.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Mobile Apps",
    content: "Build responsive mobile applications for both iOS and Android platforms.",
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Web App",
    content: "Develop powerful, browser-based applications that work on any operating system.",
    icon: Monitor,
    gradient: "from-green-500 to-teal-500"
  },
  {
    id: 4,
    title: "AI Solutions",
    content: "Leverage artificial intelligence to create smart, automated systems for your business.",
    icon: Brain,
    gradient: "from-orange-500 to-red-500"
  }
]

export default function ServicesSection() {
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="text-center space-y-6">
                <motion.div 
                  className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${service.gradient} p-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <service.icon className="w-full h-full text-white" />
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {service.content}
                  </p>
                  
                  <motion.div 
                    className="inline-flex items-center text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}