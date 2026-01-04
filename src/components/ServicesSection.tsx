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
// -------------------------------------------***----------------------------------

//   'use client'

// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
// import { Globe, Smartphone, Monitor, Brain, ArrowRight } from 'lucide-react'
// import { useState, useRef } from 'react'

// const services = [
//   {
//     id: 1,
//     title: "Website Design",
//     content: "Create modern, fast-loading websites from simple pages to full interactive sites.",
//     icon: Globe,
//     gradient: "from-blue-500 to-cyan-500"
//   },
//   {
//     id: 2,
//     title: "Mobile Apps",
//     content: "Build responsive mobile applications for both iOS and Android platforms.",
//     icon: Smartphone,
//     gradient: "from-purple-500 to-pink-500"
//   },
//   {
//     id: 3,
//     title: "Web App",
//     content: "Develop powerful, browser-based applications that work on any operating system.",
//     icon: Monitor,
//     gradient: "from-green-500 to-teal-500"
//   },
//   {
//     id: 4,
//     title: "AI Solutions",
//     content: "Leverage artificial intelligence to create smart, automated systems for your business.",
//     icon: Brain,
//     gradient: "from-orange-500 to-red-500"
//   }
// ]

// export default function ServicesSection() {
//   const [activeService, setActiveService] = useState<number | null>(null)
//   const mouseX = useMotionValue(0)
//   const mouseY = useMotionValue(0)
//   const sectionRef = useRef<HTMLElement>(null)

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!sectionRef.current) return
//     const rect = sectionRef.current.getBoundingClientRect()
//     mouseX.set(e.clientX - rect.left)
//     mouseY.set(e.clientY - rect.top)
//   }

//   return (
//     <section 
//       ref={sectionRef}
//       onMouseMove={handleMouseMove}
//       className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950"
//     >
//       {/* Dynamic Background Elements */}
//       <motion.div 
//         className="absolute inset-0 opacity-30"
//         style={{
//           background: useTransform(
//             [mouseX, mouseY],
//             ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
//           )
//         }}
//       />
      
//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <motion.h2 
//             className="text-5xl md:text-7xl font-bold mb-6 relative"
//             whileHover={{ scale: 1.02 }}
//           >
//             <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
//               Our Services
//             </span>
//             <motion.div 
//               className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             />
//           </motion.h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Comprehensive solutions for your digital needs
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//           {services.map((service, index) => {
//             const isActive = activeService === service.id
//             const springX = useSpring(0, { stiffness: 300, damping: 30 })
//             const springY = useSpring(0, { stiffness: 300, damping: 30 })
            
//             return (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 60, rotateX: -15 }}
//                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ 
//                   delay: index * 0.15, 
//                   duration: 0.8,
//                   type: "spring",
//                   stiffness: 100
//                 }}
//                 onMouseEnter={() => setActiveService(service.id)}
//                 onMouseLeave={() => setActiveService(null)}
//                 onMouseMove={(e) => {
//                   const rect = e.currentTarget.getBoundingClientRect()
//                   const centerX = rect.left + rect.width / 2
//                   const centerY = rect.top + rect.height / 2
//                   springX.set((e.clientX - centerX) * 0.1)
//                   springY.set((e.clientY - centerY) * 0.1)
//                 }}
//                 style={{
//                   x: springX,
//                   y: springY,
//                   transformStyle: "preserve-3d"
//                 }}
//                 className="group cursor-pointer relative"
//               >
//                 {/* Magnetic Field Effect */}
//                 <motion.div 
//                   className="absolute -inset-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   animate={isActive ? {
//                     background: [
//                       `conic-gradient(from 0deg, transparent, ${service.gradient.includes('blue') ? '#3b82f6' : service.gradient.includes('purple') ? '#8b5cf6' : service.gradient.includes('green') ? '#10b981' : '#f59e0b'}40, transparent)`,
//                       `conic-gradient(from 360deg, transparent, ${service.gradient.includes('blue') ? '#3b82f6' : service.gradient.includes('purple') ? '#8b5cf6' : service.gradient.includes('green') ? '#10b981' : '#f59e0b'}40, transparent)`
//                     ]
//                   } : {}}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 />
                
//                 <motion.div 
//                   className="relative z-10 text-center space-y-6 p-6"
//                   whileHover={{ 
//                     rotateY: 5,
//                     rotateX: 5,
//                     z: 50
//                   }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   {/* Floating Icon */}
//                   <motion.div 
//                     className="relative mx-auto w-24 h-24"
//                     animate={isActive ? {
//                       y: [-5, 5, -5],
//                       rotateY: [0, 180, 360]
//                     } : {}}
//                     transition={{ 
//                       y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
//                       rotateY: { duration: 3, repeat: Infinity, ease: "linear" }
//                     }}
//                   >
//                     <motion.div 
//                       className={`w-full h-full rounded-full bg-gradient-to-r ${service.gradient} p-6 shadow-2xl`}
//                       whileHover={{ 
//                         scale: 1.2,
//                         boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
//                       }}
//                       style={{
//                         filter: isActive ? "brightness(1.2) saturate(1.3)" : "brightness(1)"
//                       }}
//                     >
//                       <service.icon className="w-full h-full text-white" />
//                     </motion.div>
                    
//                     {/* Orbiting Particles */}
//                     {isActive && [
//                       { delay: 0, radius: 40 },
//                       { delay: 1, radius: 50 },
//                       { delay: 2, radius: 35 }
//                     ].map((particle, i) => (
//                       <motion.div
//                         key={i}
//                         className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
//                         animate={{
//                           rotate: 360,
//                           x: [particle.radius, -particle.radius, particle.radius],
//                           y: [0, particle.radius, -particle.radius, 0]
//                         }}
//                         transition={{
//                           duration: 3 + particle.delay,
//                           repeat: Infinity,
//                           ease: "linear",
//                           delay: particle.delay
//                         }}
//                         style={{
//                           left: "50%",
//                           top: "50%",
//                           marginLeft: -4,
//                           marginTop: -4
//                         }}
//                       />
//                     ))}
//                   </motion.div>

//                   <motion.div
//                     animate={isActive ? { scale: 1.05 } : { scale: 1 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <motion.h3 
//                       className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative"
//                       whileHover={{
//                         backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
//                         backgroundClip: "text",
//                         color: "transparent"
//                       }}
//                     >
//                       {service.title}
//                       <motion.div 
//                         className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
//                         initial={{ scaleX: 0 }}
//                         whileHover={{ scaleX: 1 }}
//                         transition={{ duration: 0.3 }}
//                         style={{ width: "100%" }}
//                       />
//                     </motion.h3>
                    
//                     <motion.p 
//                       className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
//                       animate={isActive ? { 
//                         color: "rgb(59 130 246)",
//                         textShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
//                       } : {}}
//                     >
//                       {service.content}
//                     </motion.p>
                    
//                     <motion.div 
//                       className="inline-flex items-center text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors relative overflow-hidden"
//                       whileHover={{ x: 10 }}
//                     >
//                       <span className="text-sm font-medium relative z-10">Learn More</span>
//                       <motion.div
//                         animate={isActive ? { x: [0, 5, 0] } : {}}
//                         transition={{ duration: 1, repeat: Infinity }}
//                       >
//                         <ArrowRight className="w-4 h-4 ml-2" />
//                       </motion.div>
                      
//                       {/* Animated underline */}
//                       <motion.div 
//                         className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-500 to-purple-500"
//                         initial={{ width: 0 }}
//                         whileHover={{ width: "100%" }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </motion.div>
//                   </motion.div>
//                 </motion.div>
//               </motion.div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }



// // -------------------------------------------***----------------------------------
// 'use client'

// import { motion, useMotionValue, useTransform } from 'framer-motion'
// import { Globe, Smartphone, Monitor, Brain, ArrowRight, Zap, Star } from 'lucide-react'
// import { useState } from 'react'

// const services = [
//   {
//     id: 1,
//     title: "Website Design",
//     content: "Create modern, fast-loading websites from simple pages to full interactive sites.",
//     icon: Globe,
//     gradient: "from-blue-500 to-cyan-500"
//   },
//   {
//     id: 2,
//     title: "Mobile Apps",
//     content: "Build responsive mobile applications for both iOS and Android platforms.",
//     icon: Smartphone,
//     gradient: "from-purple-500 to-pink-500"
//   },
//   {
//     id: 3,
//     title: "Web App",
//     content: "Develop powerful, browser-based applications that work on any operating system.",
//     icon: Monitor,
//     gradient: "from-green-500 to-teal-500"
//   },
//   {
//     id: 4,
//     title: "AI Solutions",
//     content: "Leverage artificial intelligence to create smart, automated systems for your business.",
//     icon: Brain,
//     gradient: "from-orange-500 to-red-500"
//   }
// ]

// export default function ServicesSection() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null)
//   const mouseX = useMotionValue(0)
//   const mouseY = useMotionValue(0)

//   return (
//     <section 
//       className="py-32 relative overflow-hidden"
//       onMouseMove={(e) => {
//         mouseX.set(e.clientX)
//         mouseY.set(e.clientY)
//       }}
//     >
//       {/* Dynamic Background */}
//       <motion.div 
//         className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950"
//         style={{
//           background: useTransform(
//             [mouseX, mouseY],
//             ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.1), transparent 70%)`
//           )
//         }}
//       />
      
//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
//             animate={{
//               y: [-20, -100],
//               opacity: [0, 1, 0],
//               scale: [0, 1, 0]
//             }}
//             transition={{
//               duration: Math.random() * 3 + 2,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "easeOut"
//             }}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <motion.div 
//             className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/30 dark:border-gray-700/30 mb-8"
//             whileHover={{ scale: 1.05, y: -2 }}
//             animate={{ 
//               boxShadow: [
//                 "0 0 20px rgba(59, 130, 246, 0.1)",
//                 "0 0 30px rgba(147, 51, 234, 0.2)",
//                 "0 0 20px rgba(59, 130, 246, 0.1)"
//               ]
//             }}
//             transition={{ duration: 3, repeat: Infinity }}
//           >
//             <Star className="w-5 h-5 text-blue-600" />
//             <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Premium Services
//             </span>
//           </motion.div>
          
//           <motion.h2 
//             className="text-6xl md:text-8xl font-black mb-6 relative"
//             initial={{ scale: 0.8 }}
//             whileInView={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 100 }}
//           >
//             <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
//               Our Services
//             </span>
//             <motion.div 
//               className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl -z-10"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//             />
//           </motion.h2>
          
//           <motion.p 
//             className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Transform your digital presence with our cutting-edge solutions designed for the modern world
//           </motion.p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {services.map((service, index) => {
//             const isActive = activeIndex === index
            
//             return (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -15 : 15 }}
//                 whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ 
//                   delay: index * 0.2, 
//                   duration: 0.8,
//                   type: "spring",
//                   stiffness: 80
//                 }}
//                 onMouseEnter={() => setActiveIndex(index)}
//                 onMouseLeave={() => setActiveIndex(null)}
//                 className="group relative"
//               >
//                 <motion.div
//                   className="relative p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 overflow-hidden"
//                   animate={{
//                     y: isActive ? -10 : 0,
//                     scale: isActive ? 1.02 : 1,
//                     rotateX: isActive ? 2 : 0,
//                     boxShadow: isActive 
//                       ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
//                       : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
//                   }}
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 >
//                   {/* Animated Background Pattern */}
//                   <motion.div 
//                     className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`}
//                     animate={{
//                       scale: isActive ? 1.1 : 1,
//                       rotate: isActive ? 2 : 0
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
                  
//                   {/* Glowing Border */}
//                   <motion.div 
//                     className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 blur-xl`}
//                     animate={{
//                       opacity: isActive ? 0.3 : 0
//                     }}
//                     transition={{ duration: 0.3 }}
//                   />
                  
//                   <div className="relative z-10 flex items-start gap-6">
//                     {/* Icon Section */}
//                     <motion.div 
//                       className="flex-shrink-0"
//                       animate={{
//                         scale: isActive ? 1.1 : 1,
//                         rotate: isActive ? [0, -5, 5, 0] : 0
//                       }}
//                       transition={{
//                         scale: { duration: 0.3 },
//                         rotate: { duration: 2, repeat: isActive ? Infinity : 0 }
//                       }}
//                     >
//                       <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} p-5 shadow-lg relative overflow-hidden`}>
//                         <service.icon className="w-full h-full text-white relative z-10" />
//                         <motion.div 
//                           className="absolute inset-0 bg-white/20"
//                           animate={{
//                             x: isActive ? ["-100%", "100%"] : "-100%"
//                           }}
//                           transition={{
//                             duration: 1.5,
//                             repeat: isActive ? Infinity : 0,
//                             repeatDelay: 1
//                           }}
//                         />
//                       </div>
                      
//                       {/* Orbiting Dots */}
//                       {isActive && (
//                         <>
//                           {[0, 1, 2].map((i) => (
//                             <motion.div
//                               key={i}
//                               className="absolute w-2 h-2 bg-blue-500 rounded-full"
//                               animate={{
//                                 rotate: 360,
//                                 scale: [1, 1.5, 1]
//                               }}
//                               transition={{
//                                 rotate: { duration: 3, repeat: Infinity, ease: "linear" },
//                                 scale: { duration: 1, repeat: Infinity, delay: i * 0.3 }
//                               }}
//                               style={{
//                                 left: "50%",
//                                 top: "50%",
//                                 transformOrigin: `${30 + i * 10}px 0px`,
//                                 marginLeft: -4,
//                                 marginTop: -4
//                               }}
//                             />
//                           ))}
//                         </>
//                       )}
//                     </motion.div>
                    
//                     {/* Content Section */}
//                     <div className="flex-1 min-w-0">
//                       <motion.h3 
//                         className="text-3xl font-bold text-gray-900 dark:text-white mb-4 relative"
//                         animate={{
//                           color: isActive ? "transparent" : undefined,
//                           backgroundImage: isActive ? `linear-gradient(135deg, ${service.gradient.includes('blue') ? '#3b82f6, #8b5cf6' : service.gradient.includes('purple') ? '#8b5cf6, #ec4899' : service.gradient.includes('green') ? '#10b981, #06b6d4' : '#f59e0b, #ef4444'})` : "none",
//                           backgroundClip: isActive ? "text" : "border-box"
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {service.title}
                        
//                         {/* Animated Underline */}
//                         <motion.div 
//                           className={`absolute -bottom-1 left-0 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
//                           animate={{
//                             scaleX: isActive ? 1 : 0,
//                             opacity: isActive ? 1 : 0
//                           }}
//                           transition={{ duration: 0.4 }}
//                           style={{ width: "100%", transformOrigin: "left" }}
//                         />
//                       </motion.h3>
                      
//                       <motion.p 
//                         className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg"
//                         animate={{
//                           y: isActive ? -2 : 0,
//                           color: isActive ? "rgb(59 130 246)" : undefined
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {service.content}
//                       </motion.p>
                      
//                       {/* CTA Button */}
//                       <motion.div 
//                         className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 font-medium cursor-pointer overflow-hidden relative"
//                         whileHover={{ scale: 1.05 }}
//                         animate={{
//                           background: isActive 
//                             ? `linear-gradient(135deg, ${service.gradient.includes('blue') ? '#3b82f6, #8b5cf6' : service.gradient.includes('purple') ? '#8b5cf6, #ec4899' : service.gradient.includes('green') ? '#10b981, #06b6d4' : '#f59e0b, #ef4444'})`
//                             : undefined,
//                           color: isActive ? "white" : undefined
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <Zap className="w-4 h-4" />
//                         <span>Get Started</span>
//                         <motion.div
//                           animate={{
//                             x: isActive ? [0, 5, 0] : 0
//                           }}
//                           transition={{
//                             duration: 1,
//                             repeat: isActive ? Infinity : 0
//                           }}
//                         >
//                           <ArrowRight className="w-4 h-4" />
//                         </motion.div>
                        
//                         {/* Shine Effect */}
//                         <motion.div 
//                           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//                           animate={{
//                             x: isActive ? ["-100%", "100%"] : "-100%"
//                           }}
//                           transition={{
//                             duration: 1.5,
//                             repeat: isActive ? Infinity : 0,
//                             repeatDelay: 2
//                           }}
//                         />
//                       </motion.div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

// // -------------------------------------------***----------------------------------


// 'use client'

// import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
// import { Globe, Smartphone, Monitor, Brain, ArrowRight, Hexagon, Sparkles, Zap } from 'lucide-react'
// import { useState, useEffect } from 'react'

// const services = [
//   {
//     id: 1,
//     title: "Website Design",
//     content: "Create modern, fast-loading websites from simple pages to full interactive sites.",
//     icon: Globe,
//     gradient: "from-blue-500 to-cyan-500",
//     color: "#3b82f6"
//   },
//   {
//     id: 2,
//     title: "Mobile Apps",
//     content: "Build responsive mobile applications for both iOS and Android platforms.",
//     icon: Smartphone,
//     gradient: "from-purple-500 to-pink-500",
//     color: "#8b5cf6"
//   },
//   {
//     id: 3,
//     title: "Web App",
//     content: "Develop powerful, browser-based applications that work on any operating system.",
//     icon: Monitor,
//     gradient: "from-green-500 to-teal-500",
//     color: "#10b981"
//   },
//   {
//     id: 4,
//     title: "AI Solutions",
//     content: "Leverage artificial intelligence to create smart, automated systems for your business.",
//     icon: Brain,
//     gradient: "from-orange-500 to-red-500",
//     color: "#f59e0b"
//   }
// ]

// export default function ServicesSection() {
//   const [selectedService, setSelectedService] = useState<number | null>(null)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const mouseX = useMotionValue(0)
//   const mouseY = useMotionValue(0)

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//       mouseX.set(e.clientX)
//       mouseY.set(e.clientY)
//     }
//     window.addEventListener('mousemove', handleMouseMove)
//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [mouseX, mouseY])

//   return (
//     <section className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900">
//       {/* Dynamic Mesh Background */}
//       <div className="absolute inset-0">
//         <svg className="absolute inset-0 w-full h-full opacity-10">
//           <defs>
//             <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
//               <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
        
//         {/* Floating Orbs */}
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-32 h-32 rounded-full blur-3xl opacity-20"
//             style={{
//               background: `linear-gradient(45deg, ${services[i % 4].color}40, transparent)`
//             }}
//             animate={{
//               x: [0, 100, -50, 0],
//               y: [0, -80, 60, 0],
//               scale: [1, 1.5, 0.8, 1]
//             }}
//             transition={{
//               duration: 15 + i * 2,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//             style={{
//               left: `${20 + (i * 15)}%`,
//               top: `${10 + (i * 10)}%`
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <motion.div 
//             className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8"
//             whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
//           >
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//             >
//               <Hexagon className="w-5 h-5 text-blue-400" />
//             </motion.div>
//             <span className="text-sm font-semibold text-white/80">Digital Excellence</span>
//           </motion.div>
          
//           <motion.h2 
//             className="text-6xl md:text-8xl font-black text-white mb-6 relative"
//             initial={{ scale: 0.5, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
//           >
//             Our Services
//             <motion.div 
//               className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10"
//               animate={{ 
//                 rotate: [0, 360],
//                 scale: [1, 1.1, 1]
//               }}
//               transition={{ 
//                 rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
//               }}
//             />
//           </motion.h2>
          
//           <motion.p 
//             className="text-xl text-white/60 max-w-3xl mx-auto"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             Experience the future of digital innovation with our revolutionary approach
//           </motion.p>
//         </motion.div>

//         {/* Services Hexagonal Grid */}
//         <div className="relative">
//           {/* Central Hub */}
//           <motion.div 
//             className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-20"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//           >
//             <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center">
//               <Sparkles className="w-8 h-8 text-white" />
//             </div>
//           </motion.div>

//           {/* Service Nodes */}
//           <div className="grid grid-cols-2 gap-16 max-w-4xl mx-auto">
//             {services.map((service, index) => {
//               const isSelected = selectedService === index
//               const angle = (index * 90) - 45
//               const radius = 200
              
//               return (
//                 <motion.div
//                   key={service.id}
//                   className="relative group cursor-pointer"
//                   initial={{ 
//                     opacity: 0, 
//                     scale: 0,
//                     rotate: -180
//                   }}
//                   whileInView={{ 
//                     opacity: 1, 
//                     scale: 1,
//                     rotate: 0
//                   }}
//                   viewport={{ once: true }}
//                   transition={{ 
//                     delay: index * 0.2,
//                     type: "spring",
//                     stiffness: 100,
//                     damping: 15
//                   }}
//                   onMouseEnter={() => setSelectedService(index)}
//                   onMouseLeave={() => setSelectedService(null)}
//                 >
//                   {/* Magnetic Field Effect */}
//                   <motion.div 
//                     className="absolute -inset-8 rounded-full opacity-0"
//                     animate={{
//                       opacity: isSelected ? 0.3 : 0,
//                       scale: isSelected ? 1.2 : 1,
//                       background: isSelected ? 
//                         `conic-gradient(from 0deg, ${service.color}40, transparent, ${service.color}40)` : 
//                         "transparent"
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />

//                   {/* Main Service Card */}
//                   <motion.div
//                     className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 overflow-hidden"
//                     animate={{
//                       y: isSelected ? -20 : 0,
//                       scale: isSelected ? 1.05 : 1,
//                       rotateX: isSelected ? 10 : 0,
//                       rotateY: isSelected ? 5 : 0,
//                       boxShadow: isSelected ? 
//                         `0 25px 50px -12px ${service.color}40` : 
//                         "0 10px 25px -5px rgba(0,0,0,0.3)"
//                     }}
//                     transition={{ 
//                       type: "spring", 
//                       stiffness: 300, 
//                       damping: 30 
//                     }}
//                     style={{ transformStyle: "preserve-3d" }}
//                   >
//                     {/* Animated Background Waves */}
//                     <motion.div 
//                       className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}
//                       animate={{
//                         scale: isSelected ? [1, 1.1, 1] : 1,
//                         rotate: isSelected ? [0, 5, -5, 0] : 0
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: isSelected ? Infinity : 0,
//                         ease: "easeInOut"
//                       }}
//                     />

//                     {/* Morphing Icon Container */}
//                     <motion.div 
//                       className="mb-6 relative"
//                       animate={{
//                         scale: isSelected ? 1.2 : 1,
//                         rotate: isSelected ? [0, 360] : 0
//                       }}
//                       transition={{
//                         scale: { duration: 0.3 },
//                         rotate: { 
//                           duration: 3, 
//                           repeat: isSelected ? Infinity : 0,
//                           ease: "linear"
//                         }
//                       }}
//                     >
//                       <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} p-5 relative overflow-hidden`}>
//                         <service.icon className="w-full h-full text-white relative z-10" />
                        
//                         {/* Liquid Animation */}
//                         <motion.div 
//                           className="absolute inset-0 bg-white/20"
//                           animate={{
//                             clipPath: isSelected ? 
//                               ["circle(0% at 50% 50%)", "circle(100% at 50% 50%)", "circle(0% at 50% 50%)"] :
//                               "circle(0% at 50% 50%)"
//                           }}
//                           transition={{
//                             duration: 2,
//                             repeat: isSelected ? Infinity : 0,
//                             ease: "easeInOut"
//                           }}
//                         />
//                       </div>

//                       {/* Energy Rings */}
//                       {isSelected && (
//                         <>
//                           {[1, 2, 3].map((ring) => (
//                             <motion.div
//                               key={ring}
//                               className="absolute inset-0 rounded-2xl border-2 border-white/20"
//                               initial={{ scale: 1, opacity: 0.8 }}
//                               animate={{
//                                 scale: [1, 1.5 + ring * 0.3],
//                                 opacity: [0.8, 0]
//                               }}
//                               transition={{
//                                 duration: 2,
//                                 repeat: Infinity,
//                                 delay: ring * 0.3,
//                                 ease: "easeOut"
//                               }}
//                             />
//                           ))}
//                         </>
//                       )}
//                     </motion.div>

//                     {/* Content */}
//                     <div className="relative z-10">
//                       <motion.h3 
//                         className="text-2xl font-bold text-white mb-4 relative"
//                         animate={{
//                           color: isSelected ? service.color : "#ffffff",
//                           textShadow: isSelected ? `0 0 20px ${service.color}60` : "none"
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {service.title}
                        
//                         {/* Morphing Underline */}
//                         <motion.div 
//                           className={`absolute -bottom-1 left-0 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
//                           animate={{
//                             scaleX: isSelected ? 1 : 0,
//                             height: isSelected ? 4 : 2
//                           }}
//                           transition={{ duration: 0.4 }}
//                           style={{ width: "100%", transformOrigin: "left" }}
//                         />
//                       </motion.h3>
                      
//                       <motion.p 
//                         className="text-white/70 leading-relaxed mb-6"
//                         animate={{
//                           y: isSelected ? -5 : 0,
//                           color: isSelected ? "#ffffff" : "rgba(255,255,255,0.7)"
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {service.content}
//                       </motion.p>
                      
//                       {/* Interactive CTA */}
//                       <motion.div 
//                         className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium cursor-pointer overflow-hidden relative group"
//                         whileHover={{ scale: 1.05 }}
//                         animate={{
//                           background: isSelected ? 
//                             `linear-gradient(135deg, ${service.color}60, ${service.color}40)` :
//                             "rgba(255,255,255,0.1)",
//                           borderColor: isSelected ? service.color : "transparent"
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <Zap className="w-4 h-4" />
//                         <span>Explore</span>
//                         <motion.div
//                           animate={{
//                             x: isSelected ? [0, 5, 0] : 0,
//                             rotate: isSelected ? [0, 15, -15, 0] : 0
//                           }}
//                           transition={{
//                             duration: 1.5,
//                             repeat: isSelected ? Infinity : 0,
//                             ease: "easeInOut"
//                           }}
//                         >
//                           <ArrowRight className="w-4 h-4" />
//                         </motion.div>
                        
//                         {/* Plasma Effect */}
//                         <motion.div 
//                           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
//                           animate={{
//                             x: isSelected ? ["-100%", "100%"] : "-100%",
//                             skewX: isSelected ? [-20, 20] : 0
//                           }}
//                           transition={{
//                             duration: 2,
//                             repeat: isSelected ? Infinity : 0,
//                             repeatDelay: 1,
//                             ease: "easeInOut"
//                           }}
//                         />
//                       </motion.div>
//                     </div>

//                     {/* Connection Lines */}
//                     {isSelected && (
//                       <motion.div 
//                         className="absolute inset-0 pointer-events-none"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                       >
//                         <svg className="absolute inset-0 w-full h-full">
//                           <motion.path
//                             d="M 50 50 Q 150 25 250 50"
//                             stroke={service.color}
//                             strokeWidth="2"
//                             fill="none"
//                             initial={{ pathLength: 0 }}
//                             animate={{ pathLength: 1 }}
//                             transition={{ duration: 1, ease: "easeInOut" }}
//                           />
//                         </svg>
//                       </motion.div>
//                     )}
//                   </motion.div>
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



// -------------------------------------------***----------------------------------
// 'use client'

// import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
// import { Globe, Smartphone, Monitor, Brain, ArrowRight, Hexagon, Sparkles, Zap } from 'lucide-react'
// import { useState, useEffect } from 'react'

// const services = [
//   {
//     id: 1,
//     title: "Website Design",
//     content: "Create modern, fast-loading websites from simple pages to full interactive sites.",
//     icon: Globe,
//     gradient: "from-blue-500 to-cyan-500",
//     color: "#3b82f6"
//   },
//   {
//     id: 2,
//     title: "Mobile Apps",
//     content: "Build responsive mobile applications for both iOS and Android platforms.",
//     icon: Smartphone,
//     gradient: "from-purple-500 to-pink-500",
//     color: "#8b5cf6"
//   },
//   {
//     id: 3,
//     title: "Web App",
//     content: "Develop powerful, browser-based applications that work on any operating system.",
//     icon: Monitor,
//     gradient: "from-green-500 to-teal-500",
//     color: "#10b981"
//   },
//   {
//     id: 4,
//     title: "AI Solutions",
//     content: "Leverage artificial intelligence to create smart, automated systems for your business.",
//     icon: Brain,
//     gradient: "from-orange-500 to-red-500",
//     color: "#f59e0b"
//   }
// ]

// export default function ServicesSection() {
//   const [selectedService, setSelectedService] = useState<number | null>(null)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const mouseX = useMotionValue(0)
//   const mouseY = useMotionValue(0)

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//       mouseX.set(e.clientX)
//       mouseY.set(e.clientY)
//     }
//     window.addEventListener('mousemove', handleMouseMove)
//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [mouseX, mouseY])

//   return (
//     <section className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900">
//       {/* Dynamic Mesh Background */}
//       <div className="absolute inset-0">
//         <svg className="absolute inset-0 w-full h-full opacity-10">
//           <defs>
//             <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
//               <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
        
//         {/* Floating Orbs */}
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-32 h-32 rounded-full blur-3xl opacity-20"
//             style={{
//               background: `linear-gradient(45deg, ${services[i % 4].color}40, transparent)`
//             }}
//             animate={{
//               x: [0, 100, -50, 0],
//               y: [0, -80, 60, 0],
//               scale: [1, 1.5, 0.8, 1]
//             }}
//             transition={{
//               duration: 15 + i * 2,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//             style={{
//               left: `${20 + (i * 15)}%`,
//               top: `${10 + (i * 10)}%`
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <motion.div 
//             className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8"
//             whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
//           >
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//             >
//               <Hexagon className="w-5 h-5 text-blue-400" />
//             </motion.div>
//             <span className="text-sm font-semibold text-white/80">Digital Excellence</span>
//           </motion.div>
          
//           <motion.h2 
//             className="text-6xl md:text-8xl font-black text-white mb-6 relative"
//             initial={{ scale: 0.5, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
//           >
//             Our Services
//             <motion.div 
//               className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10"
//               animate={{ 
//                 rotate: [0, 360],
//                 scale: [1, 1.1, 1]
//               }}
//               transition={{ 
//                 rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
//               }}
//             />
//           </motion.h2>
          
//           <motion.p 
//             className="text-xl text-white/60 max-w-3xl mx-auto"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             Experience the future of digital innovation with our revolutionary approach
//           </motion.p>
//         </motion.div>

//         {/* Services Single Row */}
//         <div className="relative">
//           {/* Connection Line */}
//           <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0" />
          
//           <div className="flex justify-center items-center gap-8 lg:gap-16">
//             {services.map((service, index) => {
//               const isSelected = selectedService === index
              
//               return (
//                 <motion.div
//                   key={service.id}
//                   className="relative group cursor-pointer"
//                   initial={{ 
//                     opacity: 0, 
//                     y: 100,
//                     rotateY: -90
//                   }}
//                   whileInView={{ 
//                     opacity: 1, 
//                     y: 0,
//                     rotateY: 0
//                   }}
//                   viewport={{ once: true }}
//                   transition={{ 
//                     delay: index * 0.15,
//                     type: "spring",
//                     stiffness: 100,
//                     damping: 15
//                   }}
//                   onMouseEnter={() => setSelectedService(index)}
//                   onMouseLeave={() => setSelectedService(null)}
//                 >
//                   {/* Magnetic Aura */}
//                   <motion.div 
//                     className="absolute -inset-12 rounded-full opacity-0"
//                     animate={{
//                       opacity: isSelected ? 0.4 : 0,
//                       scale: isSelected ? 1.3 : 1,
//                       background: isSelected ? 
//                         `radial-gradient(circle, ${service.color}30, transparent 70%)` : 
//                         "transparent"
//                     }}
//                     transition={{ duration: 0.6 }}
//                   />

//                   {/* Main Service Node */}
//                   <motion.div
//                     className="relative w-64 h-80 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 overflow-hidden"
//                     animate={{
//                       y: isSelected ? -30 : 0,
//                       scale: isSelected ? 1.1 : 1,
//                       rotateX: isSelected ? 15 : 0,
//                       rotateZ: isSelected ? 2 : 0,
//                       boxShadow: isSelected ? 
//                         `0 30px 60px -12px ${service.color}50, 0 0 0 1px ${service.color}30` : 
//                         "0 10px 25px -5px rgba(0,0,0,0.3)"
//                     }}
//                     transition={{ 
//                       type: "spring", 
//                       stiffness: 300, 
//                       damping: 30 
//                     }}
//                     style={{ transformStyle: "preserve-3d" }}
//                   >
//                     {/* Flowing Background */}
//                     <motion.div 
//                       className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}
//                       animate={{
//                         scale: isSelected ? [1, 1.2, 1] : 1,
//                         rotate: isSelected ? [0, 10, -10, 0] : 0,
//                         opacity: isSelected ? [0.1, 0.2, 0.1] : 0.1
//                       }}
//                       transition={{
//                         duration: 3,
//                         repeat: isSelected ? Infinity : 0,
//                         ease: "easeInOut"
//                       }}
//                     />

//                     {/* Floating Icon */}
//                     <motion.div 
//                       className="flex justify-center pt-8 mb-6"
//                       animate={{
//                         y: isSelected ? [-5, 5, -5] : 0,
//                         scale: isSelected ? 1.2 : 1
//                       }}
//                       transition={{
//                         y: { duration: 2, repeat: isSelected ? Infinity : 0, ease: "easeInOut" },
//                         scale: { duration: 0.4 }
//                       }}
//                     >
//                       <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.gradient} p-6 relative overflow-hidden`}>
//                         <service.icon className="w-full h-full text-white relative z-10" />
                        
//                         {/* Shimmer Effect */}
//                         <motion.div 
//                           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
//                           animate={{
//                             x: isSelected ? ["-100%", "200%"] : "-100%"
//                           }}
//                           transition={{
//                             duration: 1.5,
//                             repeat: isSelected ? Infinity : 0,
//                             repeatDelay: 2,
//                             ease: "easeInOut"
//                           }}
//                         />
//                       </div>
//                     </motion.div>

//                     {/* Orbiting Particles */}
//                     {isSelected && (
//                       <>
//                         {[0, 1, 2, 3].map((i) => (
//                           <motion.div
//                             key={i}
//                             className="absolute w-2 h-2 rounded-full"
//                             style={{
//                               background: service.color,
//                               left: "50%",
//                               top: "40%",
//                               marginLeft: -4,
//                               marginTop: -4
//                             }}
//                             animate={{
//                               rotate: 360,
//                               scale: [1, 1.5, 1]
//                             }}
//                             transition={{
//                               rotate: { duration: 4, repeat: Infinity, ease: "linear" },
//                               scale: { duration: 1, repeat: Infinity, delay: i * 0.25 }
//                             }}
//                             style={{
//                               ...{
//                                 left: "50%",
//                                 top: "40%",
//                                 marginLeft: -4,
//                                 marginTop: -4
//                               },
//                               transformOrigin: `${40 + i * 8}px ${20 + i * 5}px`
//                             }}
//                           />
//                         ))}
//                       </>
//                     )}

//                     {/* Content */}
//                     <div className="px-6 pb-6 text-center relative z-10">
//                       <motion.h3 
//                         className="text-2xl font-bold text-white mb-4 relative"
//                         animate={{
//                           color: isSelected ? service.color : "#ffffff",
//                           textShadow: isSelected ? `0 0 20px ${service.color}60` : "none",
//                           y: isSelected ? -3 : 0
//                         }}
//                         transition={{ duration: 0.4 }}
//                       >
//                         {service.title}
                        
//                         {/* Dynamic Underline */}
//                         <motion.div 
//                           className={`absolute -bottom-1 left-1/2 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
//                           animate={{
//                             scaleX: isSelected ? 1 : 0,
//                             width: isSelected ? "100%" : "0%",
//                             x: "-50%"
//                           }}
//                           transition={{ duration: 0.5 }}
//                         />
//                       </motion.h3>
                      
//                       <motion.p 
//                         className="text-white/70 text-sm leading-relaxed mb-6"
//                         animate={{
//                           y: isSelected ? -3 : 0,
//                           color: isSelected ? "#ffffff" : "rgba(255,255,255,0.7)",
//                           opacity: isSelected ? 1 : 0.8
//                         }}
//                         transition={{ duration: 0.4, delay: 0.1 }}
//                       >
//                         {service.content}
//                       </motion.p>
                      
//                       {/* Morphing CTA */}
//                       <motion.div 
//                         className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium cursor-pointer overflow-hidden relative"
//                         whileHover={{ scale: 1.05 }}
//                         animate={{
//                           background: isSelected ? 
//                             `linear-gradient(135deg, ${service.color}70, ${service.color}50)` :
//                             "rgba(255,255,255,0.1)",
//                           y: isSelected ? -2 : 0,
//                           boxShadow: isSelected ? 
//                             `0 10px 25px -5px ${service.color}40` :
//                             "none"
//                         }}
//                         transition={{ duration: 0.4 }}
//                       >
//                         <Zap className="w-4 h-4" />
//                         <span>Discover</span>
//                         <motion.div
//                           animate={{
//                             x: isSelected ? [0, 3, 0] : 0,
//                             rotate: isSelected ? [0, 10, -10, 0] : 0
//                           }}
//                           transition={{
//                             duration: 2,
//                             repeat: isSelected ? Infinity : 0,
//                             ease: "easeInOut"
//                           }}
//                         >
//                           <ArrowRight className="w-4 h-4" />
//                         </motion.div>
                        
//                         {/* Energy Wave */}
//                         <motion.div 
//                           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//                           animate={{
//                             x: isSelected ? ["-100%", "100%"] : "-100%",
//                             skewX: isSelected ? [0, 15, -15, 0] : 0
//                           }}
//                           transition={{
//                             duration: 2.5,
//                             repeat: isSelected ? Infinity : 0,
//                             repeatDelay: 1.5,
//                             ease: "easeInOut"
//                           }}
//                         />
//                       </motion.div>
//                     </div>

//                     {/* Connection Beam */}
//                     {isSelected && index < services.length - 1 && (
//                       <motion.div 
//                         className="absolute top-1/2 -right-8 w-16 h-px bg-gradient-to-r from-white/50 to-transparent"
//                         initial={{ scaleX: 0, opacity: 0 }}
//                         animate={{ scaleX: 1, opacity: 1 }}
//                         exit={{ scaleX: 0, opacity: 0 }}
//                         transition={{ duration: 0.8, ease: "easeOut" }}
//                         style={{ transformOrigin: "left" }}
//                       />
//                     )}
//                   </motion.div>
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



// // -------------------------------------------***----------------------------------
// 'use client'

// import { motion, useMotionValue, useTransform } from 'framer-motion'
// import { Globe, Smartphone, Monitor, Brain, ArrowRight, Sparkles, Zap } from 'lucide-react'
// import { useState, useRef } from 'react'

// const services = [
//   {
//     id: 1,
//     title: "Website Design",
//     content: "Create modern, fast-loading websites from simple pages to full interactive sites.",
//     icon: Globe,
//     gradient: "from-blue-500 to-cyan-500"
//   },
//   {
//     id: 2,
//     title: "Mobile Apps",
//     content: "Build responsive mobile applications for both iOS and Android platforms.",
//     icon: Smartphone,
//     gradient: "from-purple-500 to-pink-500"
//   },
//   {
//     id: 3,
//     title: "Web App",
//     content: "Develop powerful, browser-based applications that work on any operating system.",
//     icon: Monitor,
//     gradient: "from-green-500 to-teal-500"
//   },
//   {
//     id: 4,
//     title: "AI Solutions",
//     content: "Leverage artificial intelligence to create smart, automated systems for your business.",
//     icon: Brain,
//     gradient: "from-orange-500 to-red-500"
//   }
// ]

// export default function ServicesSection() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const mouseX = useMotionValue(0)
//   const mouseY = useMotionValue(0)

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!containerRef.current) return
//     const rect = containerRef.current.getBoundingClientRect()
//     mouseX.set(e.clientX - rect.left)
//     mouseY.set(e.clientY - rect.top)
//   }

//   return (
//     <section 
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950"
//     >
//       {/* Dynamic Background */}
//       <motion.div 
//         className="absolute inset-0 opacity-30"
//         style={{
//           background: useTransform(
//             [mouseX, mouseY],
//             ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.1), transparent 70%)`
//           )
//         }}
//       />
      
//       {/* Floating Elements */}
//       <div className="absolute inset-0">
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
//             animate={{
//               y: [0, -100, 0],
//               opacity: [0, 1, 0],
//               scale: [0, 1, 0]
//             }}
//             transition={{
//               duration: Math.random() * 3 + 2,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "easeInOut"
//             }}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <motion.div 
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-blue-200/50 dark:border-gray-700/50 mb-8"
//             whileHover={{ scale: 1.05, y: -2 }}
//             animate={{
//               boxShadow: [
//                 "0 0 20px rgba(59, 130, 246, 0.1)",
//                 "0 0 30px rgba(147, 51, 234, 0.2)",
//                 "0 0 20px rgba(59, 130, 246, 0.1)"
//               ]
//             }}
//             transition={{ duration: 3, repeat: Infinity }}
//           >
//             <Sparkles className="w-4 h-4 text-blue-600" />
//             <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Our Expertise
//             </span>
//           </motion.div>
          
//           <motion.h2 
//             className="text-6xl md:text-8xl font-black mb-6 relative"
//             initial={{ scale: 0.8, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
//           >
//             <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
//               Services
//             </span>
//             <motion.div 
//               className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl -z-10"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             />
//           </motion.h2>
          
//           <motion.p 
//             className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             Comprehensive solutions for your digital needs with cutting-edge technology
//           </motion.p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => {
//             const isHovered = hoveredIndex === index
            
//             return (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 60, rotateX: -15 }}
//                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ 
//                   delay: index * 0.15, 
//                   duration: 0.8,
//                   type: "spring",
//                   stiffness: 100
//                 }}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className="group cursor-pointer relative"
//               >
//                 {/* Glow Effect */}
//                 <motion.div 
//                   className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${service.gradient} blur-xl`}
//                   animate={{
//                     opacity: isHovered ? 0.3 : 0,
//                     scale: isHovered ? 1.1 : 1
//                   }}
//                   transition={{ duration: 0.4 }}
//                 />
                
//                 {/* Card */}
//                 <motion.div
//                   className="relative p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 overflow-hidden"
//                   animate={{
//                     y: isHovered ? -15 : 0,
//                     scale: isHovered ? 1.02 : 1,
//                     rotateY: isHovered ? 5 : 0,
//                     rotateX: isHovered ? 5 : 0,
//                     boxShadow: isHovered 
//                       ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
//                       : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
//                   }}
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   style={{ transformStyle: "preserve-3d" }}
//                 >
//                   {/* Animated Background */}
//                   <motion.div 
//                     className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`}
//                     animate={{
//                       scale: isHovered ? 1.1 : 1,
//                       rotate: isHovered ? 3 : 0
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
                  
//                   {/* Floating Particles */}
//                   {isHovered && (
//                     <>
//                       {[...Array(4)].map((_, i) => (
//                         <motion.div
//                           key={i}
//                           className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
//                           initial={{ 
//                             x: Math.random() * 200,
//                             y: Math.random() * 200,
//                             opacity: 0
//                           }}
//                           animate={{
//                             y: [null, -30],
//                             opacity: [0, 1, 0]
//                           }}
//                           transition={{
//                             duration: 2,
//                             repeat: Infinity,
//                             delay: i * 0.3
//                           }}
//                         />
//                       ))}
//                     </>
//                   )}
                  
//                   <div className="relative z-10 text-center space-y-6">
//                     {/* Icon */}
//                     <motion.div 
//                       className="relative mx-auto w-20 h-20"
//                       animate={{
//                         scale: isHovered ? 1.15 : 1,
//                         y: isHovered ? [-2, 2, -2] : 0
//                       }}
//                       transition={{
//                         scale: { duration: 0.3 },
//                         y: { duration: 2, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }
//                       }}
//                     >
//                       <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${service.gradient} p-5 shadow-lg relative overflow-hidden`}>
//                         <service.icon className="w-full h-full text-white relative z-10" />
                        
//                         {/* Shine Effect */}
//                         <motion.div 
//                           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
//                           animate={{
//                             x: isHovered ? ["-100%", "200%"] : "-100%"
//                           }}
//                           transition={{
//                             duration: 1.5,
//                             repeat: isHovered ? Infinity : 0,
//                             repeatDelay: 2
//                           }}
//                         />
//                       </div>
                      
//                       {/* Orbiting Ring */}
//                       {isHovered && (
//                         <motion.div
//                           className="absolute inset-0 border-2 border-blue-400/30 rounded-2xl"
//                           animate={{ rotate: 360 }}
//                           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                         />
//                       )}
//                     </motion.div>

//                     {/* Content */}
//                     <motion.div
//                       animate={{
//                         y: isHovered ? -3 : 0
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <motion.h3 
//                         className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative"
//                         animate={{
//                           color: isHovered ? "transparent" : undefined,
//                           backgroundImage: isHovered ? "linear-gradient(135deg, #3b82f6, #8b5cf6)" : "none",
//                           backgroundClip: isHovered ? "text" : "border-box"
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {service.title}
                        
//                         {/* Underline */}
//                         <motion.div 
//                           className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r ${service.gradient} rounded-full`}
//                           animate={{
//                             scaleX: isHovered ? 1 : 0,
//                             width: isHovered ? "80%" : "0%",
//                             x: "-50%"
//                           }}
//                           transition={{ duration: 0.4 }}
//                         />
//                       </motion.h3>
                      
//                       <motion.p 
//                         className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
//                         animate={{
//                           color: isHovered ? "rgb(59 130 246)" : undefined
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {service.content}
//                       </motion.p>
                      
//                       {/* CTA Button */}
//                       <motion.div 
//                         className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium cursor-pointer overflow-hidden relative"
//                         whileHover={{ scale: 1.05 }}
//                         animate={{
//                           background: isHovered 
//                             ? `linear-gradient(135deg, ${service.gradient.includes('blue') ? '#3b82f6, #8b5cf6' : service.gradient.includes('purple') ? '#8b5cf6, #ec4899' : service.gradient.includes('green') ? '#10b981, #06b6d4' : '#f59e0b, #ef4444'})`
//                             : undefined,
//                           color: isHovered ? "white" : undefined
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <Zap className="w-4 h-4" />
//                         <span>Explore</span>
//                         <motion.div
//                           animate={{
//                             x: isHovered ? [0, 3, 0] : 0
//                           }}
//                           transition={{
//                             duration: 1,
//                             repeat: isHovered ? Infinity : 0
//                           }}
//                         >
//                           <ArrowRight className="w-4 h-4" />
//                         </motion.div>
                        
//                         {/* Button Shine */}
//                         <motion.div 
//                           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//                           animate={{
//                             x: isHovered ? ["-100%", "100%"] : "-100%"
//                           }}
//                           transition={{
//                             duration: 1.5,
//                             repeat: isHovered ? Infinity : 0,
//                             repeatDelay: 2
//                           }}
//                         />
//                       </motion.div>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }