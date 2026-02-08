'use client'

import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { GraduationCap, TrendingUp, Shield, Users, Rocket, Star, Zap, ArrowRight, BookOpen, Target, Sparkles, Brain } from 'lucide-react'
import { useState, useEffect } from 'react'

const journeyNodes = [
  {
    id: "student",
    title: "Student Struggles",
    description: "Academic projects disconnected from industry reality",
    icon: BookOpen,
    position: { x: 20, y: 80 },
    color: "#3b82f6",
    connections: ["discovery"]
  },
  {
    id: "discovery", 
    title: "Industry Discovery",
    description: "Real-world experience in leading IT companies",
    icon: Rocket,
    position: { x: 80, y: 60 },
    color: "#8b5cf6",
    connections: ["mission", "student"]
  },
  {
    id: "mission",
    title: "Mission Defined",
    description: "Bridging the gap between academia and industry",
    icon: Target,
    position: { x: 80, y: 20 },
    color: "#10b981",
    connections: ["success", "discovery"]
  },
  {
    id: "success",
    title: "Success Stories",
    description: "Students landing dream jobs in top companies",
    icon: Star,
    position: { x: 20, y: 40 },
    color: "#f59e0b",
    connections: ["mission"]
  }
]

const techFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Master cutting-edge AI tools while maintaining human expertise and critical thinking",
    color: "#3b82f6",
    particles: 8
  },
  {
    icon: TrendingUp,
    title: "Industry Demand",
    description: "High-paying roles await professionals with strong technical foundations",
    color: "#8b5cf6", 
    particles: 6
  },
  {
    icon: Shield,
    title: "Proven Methods",
    description: "Battle-tested approaches used by leading tech companies worldwide",
    color: "#10b981",
    particles: 7
  },
  {
    icon: Users,
    title: "Engineer Mindset",
    description: "Lead AI as your assistant, not the other way around",
    color: "#f59e0b",
    particles: 9
  }
]

export default function StudentsJourney() {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-black via-purple-950 to-black">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="neural" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.3"/>
              <line x1="50" y1="50" x2="100" y2="25" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
              <line x1="50" y1="50" x2="100" y2="75" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
              <line x1="50" y1="50" x2="0" y2="25" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural)" className="text-blue-400"/>
        </svg>
        
        {/* Floating Data Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Dynamic Cursor Effect */}
      <motion.div 
        className="fixed w-32 h-32 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePos.x - 64,
          top: mousePos.y - 64,
        }}
        animate={{
          scale: activeNode || hoveredFeature !== null ? 1.5 : 1,
          rotate: 360
        }}
        transition={{
          scale: { duration: 0.3 },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" }
        }}
      >
        <div className="w-full h-full border border-white/20 rounded-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Morphing Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8"
            animate={{
              borderRadius: ["50px", "20px", "50px"],
              background: [
                "rgba(255,255,255,0.05)",
                "rgba(59,130,246,0.1)", 
                "rgba(139,92,246,0.1)",
                "rgba(255,255,255,0.05)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <GraduationCap className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-sm font-bold text-white">Journey of Innovation</span>
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span 
              className="text-white"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 40px rgba(120,119,198,0.8)',
                  '0 0 20px rgba(255,255,255,0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Students{' '}
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Journey
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Interactive Timeline Story */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            From Students to Industry Experts
          </h3>
          
          {/* Vertical Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 to-orange-500 transform -translate-x-1/2 rounded-full" />
            
            <div className="space-y-20">
              {journeyNodes.map((node, index) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                >
                  {/* Content Card */}
                  <motion.div 
                    className={`flex-1 max-w-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
                    animate={{
                      scale: activeNode === node.id ? 1.05 : 1,
                      y: activeNode === node.id ? -10 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
                      <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <motion.div 
                          className="w-16 h-16 rounded-2xl p-4 shadow-lg flex-shrink-0"
                          style={{ background: `linear-gradient(135deg, ${node.color}, ${node.color}80)` }}
                          animate={{
                            scale: activeNode === node.id ? 1.2 : 1,
                            rotate: activeNode === node.id ? 10 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <node.icon className="w-full h-full text-white" />
                        </motion.div>
                        
                        <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                          <h4 className="text-2xl font-bold text-white mb-3">
                            {node.title}
                          </h4>
                          <p className="text-white/80 leading-relaxed">
                            {node.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Timeline Node */}
                  <motion.div 
                    className="relative z-10 flex-shrink-0"
                    animate={{
                      scale: activeNode === node.id ? 1.3 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full border-4 border-white/30 shadow-lg flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${node.color}, ${node.color}80)` }}
                    >
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    
                    {/* Pulse Effect */}
                    {activeNode === node.id && (
                      <motion.div 
                        className="absolute inset-0 rounded-full opacity-30"
                        style={{ background: `radial-gradient(circle, ${node.color}60, transparent)` }}
                        animate={{
                          scale: [1, 2.5],
                          opacity: [0.3, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                    )}
                  </motion.div>
                  
                  {/* Spacer */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
            
            {/* Story Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
                <motion.div 
                  className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-4"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  "We don't just teach projects — we build your confidence, passion, and future in tech."
                </motion.div>
                <p className="text-white/70 leading-relaxed">
                  Our comprehensive approach combines real-world experience with academic excellence, 
                  ensuring every student is prepared for the challenges and opportunities in the tech industry.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Hexagonal Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-5xl font-bold text-white text-center mb-16">
            Why Choose Tech Stack?
          </h3>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, rotateY: -45, z: -100 }}
                whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{ perspective: 1000 }}
              >
                {/* Hexagonal Container */}
                <motion.div
                  className="relative h-80 overflow-hidden"
                  animate={{
                    rotateX: hoveredFeature === index ? 10 : 0,
                    rotateY: hoveredFeature === index ? 5 : 0,
                    scale: hoveredFeature === index ? 1.05 : 1
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* Background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"
                    animate={{
                      background: hoveredFeature === index ?
                        `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)` :
                        "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))"
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Particle System */}
                  {hoveredFeature === index && (
                    <>
                      {[...Array(feature.particles)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full"
                          style={{
                            background: feature.color,
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            x: [0, (Math.random() - 0.5) * 100],
                            y: [0, (Math.random() - 0.5) * 100]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </>
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-center text-center">
                    <motion.div 
                      className="mb-6"
                      animate={{
                        scale: hoveredFeature === index ? 1.2 : 1,
                        rotate: hoveredFeature === index ? [0, 360] : 0
                      }}
                      transition={{
                        scale: { duration: 0.3 },
                        rotate: { duration: 2, repeat: hoveredFeature === index ? Infinity : 0, ease: "linear" }
                      }}
                    >
                      <div 
                        className="w-16 h-16 mx-auto rounded-full p-4 relative overflow-hidden"
                        style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}80)` }}
                      >
                        <feature.icon className="w-full h-full text-white" />
                      </div>
                    </motion.div>
                    
                    <motion.h4 
                      className="text-2xl font-bold text-white mb-4"
                      animate={{
                        color: hoveredFeature === index ? feature.color : "#ffffff",
                        y: hoveredFeature === index ? -5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.title}
                    </motion.h4>
                    
                    <motion.p 
                      className="text-white/80 leading-relaxed"
                      animate={{
                        y: hoveredFeature === index ? -3 : 0,
                        color: hoveredFeature === index ? "#ffffff" : "rgba(255,255,255,0.8)"
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </motion.div>
                
                {/* Hexagonal Border */}
                <div 
                  className="absolute inset-0 border-2 border-white/20"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Liquid CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="relative p-16 rounded-full bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 overflow-hidden max-w-2xl mx-auto"
            whileHover={{ scale: 1.05, rotate: 2 }}
            animate={{
              borderRadius: ["50%", "40%", "50%"],
              background: [
                "radial-gradient(circle, rgba(249,115,22,0.2), rgba(239,68,68,0.2))",
                "radial-gradient(circle, rgba(239,68,68,0.2), rgba(236,72,153,0.2))",
                "radial-gradient(circle, rgba(236,72,153,0.2), rgba(249,115,22,0.2))"
              ]
            }}
            transition={{ 
              scale: { duration: 0.3 },
              rotate: { duration: 0.3 },
              borderRadius: { duration: 4, repeat: Infinity },
              background: { duration: 3, repeat: Infinity }
            }}
          >
            <div className="relative z-10">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-8"
              >
                <Brain className="w-20 h-20 text-orange-400 mx-auto" />
              </motion.div>
              
              <h4 className="text-4xl font-bold text-white mb-6">
                "Engineer the Future"
              </h4>
              
              <p className="text-xl text-white/90 mb-8">
                Lead AI, Don't Follow It
              </p>
              
              <motion.button
                className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl overflow-hidden relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(249,115,22,0.5)",
                    "0 0 50px rgba(239,68,68,0.7)",
                    "0 0 30px rgba(249,115,22,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>Begin Journey</span>
                <motion.div
                  animate={{ x: [0, 8, 0], rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}