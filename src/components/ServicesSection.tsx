'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, Monitor, Brain, Check } from 'lucide-react'

const services = [
  {
    id: 1,
    title: "Website Design",
    content: "Create modern, fast-loading websites from simple pages to full interactive sites.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Static Websites",
      "Dynamic Websites", 
      "Performance Optimization",
      "Responsive Design"
    ]
  },
  {
    id: 2,
    title: "Mobile Apps",
    content: "Build responsive mobile applications for both iOS and Android platforms.",
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-Platform Apps",
      "UI & UX Design"
    ]
  },
  {
    id: 3,
    title: "Web App",
    content: "Develop powerful, browser-based applications that work on any operating system.",
    icon: Monitor,
    gradient: "from-green-500 to-teal-500",
    features: [
      "Frontend Development",
      "Backend Development",
      "Progressive Web Apps",
      "API Integration"
    ]
  },
  {
    id: 4,
    title: "AI Solutions",
    content: "Leverage artificial intelligence to create smart, automated systems for your business.",
    icon: Brain,
    gradient: "from-orange-500 to-red-500",
    features: [
      "AI prompt Suggestion",
      "Chatbots & Virtual Assistants",
      "Mid-level Auto respond Assistants",
      "AI Implementation in upgrade"
    ]
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.content}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mr-3 flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}