'use client'

import { motion } from 'framer-motion'
import { Monitor, Smartphone, Globe, Brain } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Monitor,
    title: 'Web Apps',
    description: 'We turn your ideas into powerful, real-world web applications that reflect innovation and skill. Our apps are fast, secure, and easy to use, helping your project stand out with a professional touch.',
    link: '/services/web-apps',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'We design and develop user-friendly mobile applications that combine modern design with smooth performance. Whether it\'s for Android or iOS, our apps are crafted to deliver a seamless experience.',
    link: '/services/mobile-apps',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Website',
    description: 'At AshTech, we build modern, responsive websites that reflect your ideas with a professional edge. Our sites are designed to load fast, look great on every device, and deliver a smooth user experience.',
    link: '/services/websites',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'We integrate Artificial Intelligence into web and mobile projects to make them smarter and more interactive. Our AI-powered features give your projects a modern and engaging touch.',
    link: '/services/ai-solutions',
    gradient: 'from-orange-500 to-red-500'
  }
]

export default function ServiceCategories() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Professional solutions for your academic and business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={service.link}>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className={`inline-flex items-center text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text font-semibold group-hover:underline`}>
                    Learn More →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}