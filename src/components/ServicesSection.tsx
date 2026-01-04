'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Globe, Smartphone, Monitor, Brain, ArrowRight } from 'lucide-react'
import { useState, useRef } from 'react'

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
  const [activeService, setActiveService] = useState<number | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const sectionRef = useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950"
    >
      {/* Dynamic Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          )
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6 relative"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              Our Services
            </span>
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const isActive = activeService === service.id
            const springX = useSpring(0, { stiffness: 300, damping: 30 })
            const springY = useSpring(0, { stiffness: 300, damping: 30 })
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const centerX = rect.left + rect.width / 2
                  const centerY = rect.top + rect.height / 2
                  springX.set((e.clientX - centerX) * 0.1)
                  springY.set((e.clientY - centerY) * 0.1)
                }}
                style={{
                  x: springX,
                  y: springY,
                  transformStyle: "preserve-3d"
                }}
                className="group cursor-pointer relative"
              >
                {/* Magnetic Field Effect */}
                <motion.div 
                  className="absolute -inset-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={isActive ? {
                    background: [
                      `conic-gradient(from 0deg, transparent, ${service.gradient.includes('blue') ? '#3b82f6' : service.gradient.includes('purple') ? '#8b5cf6' : service.gradient.includes('green') ? '#10b981' : '#f59e0b'}40, transparent)`,
                      `conic-gradient(from 360deg, transparent, ${service.gradient.includes('blue') ? '#3b82f6' : service.gradient.includes('purple') ? '#8b5cf6' : service.gradient.includes('green') ? '#10b981' : '#f59e0b'}40, transparent)`
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <motion.div 
                  className="relative z-10 text-center space-y-6 p-6"
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: 5,
                    z: 50
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Floating Icon */}
                  <motion.div 
                    className="relative mx-auto w-24 h-24"
                    animate={isActive ? {
                      y: [-5, 5, -5],
                      rotateY: [0, 180, 360]
                    } : {}}
                    transition={{ 
                      y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      rotateY: { duration: 3, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <motion.div 
                      className={`w-full h-full rounded-full bg-gradient-to-r ${service.gradient} p-6 shadow-2xl`}
                      whileHover={{ 
                        scale: 1.2,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      style={{
                        filter: isActive ? "brightness(1.2) saturate(1.3)" : "brightness(1)"
                      }}
                    >
                      <service.icon className="w-full h-full text-white" />
                    </motion.div>
                    
                    {/* Orbiting Particles */}
                    {isActive && [
                      { delay: 0, radius: 40 },
                      { delay: 1, radius: 50 },
                      { delay: 2, radius: 35 }
                    ].map((particle, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                        animate={{
                          rotate: 360,
                          x: [particle.radius, -particle.radius, particle.radius],
                          y: [0, particle.radius, -particle.radius, 0]
                        }}
                        transition={{
                          duration: 3 + particle.delay,
                          repeat: Infinity,
                          ease: "linear",
                          delay: particle.delay
                        }}
                        style={{
                          left: "50%",
                          top: "50%",
                          marginLeft: -4,
                          marginTop: -4
                        }}
                      />
                    ))}
                  </motion.div>

                  <motion.div
                    animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative"
                      whileHover={{
                        backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
                        backgroundClip: "text",
                        color: "transparent"
                      }}
                    >
                      {service.title}
                      <motion.div 
                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: "100%" }}
                      />
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
                      animate={isActive ? { 
                        color: "rgb(59 130 246)",
                        textShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                      } : {}}
                    >
                      {service.content}
                    </motion.p>
                    
                    <motion.div 
                      className="inline-flex items-center text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors relative overflow-hidden"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-sm font-medium relative z-10">Learn More</span>
                      <motion.div
                        animate={isActive ? { x: [0, 5, 0] } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.div>
                      
                      {/* Animated underline */}
                      <motion.div 
                        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}