// 'use client'

// import { motion } from 'framer-motion'
// import { Rocket, GraduationCap, Briefcase, Building, Zap } from 'lucide-react'
// import { useEffect, useState } from 'react'

// const stats = [
//   {
//     icon: Rocket,
//     number: 200,
//     suffix: '+',
//     label: 'MERN Projects Built',
//     color: '#00ffff',
//     particles: 12
//   },
//   {
//     icon: GraduationCap,
//     number: 150,
//     suffix: '+',
//     label: 'Students Trained',
//     color: '#ff00ff',
//     particles: 10
//   },
//   {
//     icon: Briefcase,
//     number: 50,
//     suffix: '+',
//     label: 'Job Placements',
//     color: '#ffff00',
//     particles: 8
//   },
//   {
//     icon: Building,
//     number: 25,
//     suffix: '+',
//     label: 'Companies Hiring',
//     color: '#ff6600',
//     particles: 6
//   }
// ]

// function Counter({ target, suffix }: { target: number; suffix: string }) {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     const duration = 2000
//     const steps = 60
//     const increment = target / steps
//     const stepDuration = duration / steps

//     let current = 0
//     const timer = setInterval(() => {
//       current += increment
//       if (current >= target) {
//         setCount(target)
//         clearInterval(timer)
//       } else {
//         setCount(Math.floor(current))
//       }
//     }, stepDuration)

//     return () => clearInterval(timer)
//   }, [target])

//   return (
//     <span className="text-4xl font-black">
//       {count}{suffix}
//     </span>
//   )
// }

// export default function StatsSection() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

//   return (
//     <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
//       {/* Holographic Grid */}
//       <div className="absolute inset-0 opacity-30">
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px),
//               radial-gradient(circle at 50% 50%, rgba(0,255,255,0.05) 1px, transparent 1px)
//             `,
//             backgroundSize: '40px 40px, 40px 40px, 20px 20px'
//           }}
//         />
//       </div>

//       <div className="max-w-6xl mx-auto px-4 relative z-10">
//         {/* Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4">
//             HOLOGRAPHIC STATS
//           </h2>
//           <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto" />
//         </motion.div>

//         {/* Floating Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => {
//             const IconComponent = stat.icon
//             return (
//               <motion.div
//                 key={index}
//                 className="relative group"
//                 initial={{ opacity: 0, y: 100, rotateX: -90 }}
//                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2, duration: 0.8 }}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 {/* Holographic Card */}
//                 <motion.div
//                   className="relative p-8 backdrop-blur-xl border border-white/10 overflow-hidden"
//                   style={{
//                     background: `linear-gradient(135deg, 
//                       rgba(255,255,255,0.1) 0%, 
//                       rgba(255,255,255,0.05) 50%, 
//                       transparent 100%)`,
//                     clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
//                   }}
//                   whileHover={{
//                     scale: 1.05,
//                     rotateY: 10,
//                     z: 50
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {/* Particle System */}
//                   {hoveredIndex === index && (
//                     <>
//                       {[...Array(stat.particles)].map((_, i) => (
//                         <motion.div
//                           key={i}
//                           className="absolute w-1 h-1 rounded-full"
//                           style={{ backgroundColor: stat.color }}
//                           initial={{
//                             x: Math.random() * 300 - 150,
//                             y: Math.random() * 300 - 150,
//                             opacity: 0
//                           }}
//                           animate={{
//                             x: Math.random() * 300 - 150,
//                             y: Math.random() * 300 - 150,
//                             opacity: [0, 1, 0],
//                             scale: [0, 1, 0]
//                           }}
//                           transition={{
//                             duration: 3,
//                             repeat: Infinity,
//                             delay: i * 0.1
//                           }}
//                         />
//                       ))}
//                     </>
//                   )}

//                   {/* Holographic Border */}
//                   <motion.div
//                     className="absolute inset-0 border-2"
//                     style={{
//                       borderColor: hoveredIndex === index ? stat.color : 'transparent',
//                       boxShadow: hoveredIndex === index ? `0 0 30px ${stat.color}50, inset 0 0 30px ${stat.color}20` : 'none',
//                       clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
//                     }}
//                     animate={{
//                       borderColor: hoveredIndex === index ? stat.color : 'rgba(255,255,255,0.1)'
//                     }}
//                   />

//                   {/* Scanning Lines */}
//                   {hoveredIndex === index && (
//                     <motion.div
//                       className="absolute inset-0 overflow-hidden"
//                       style={{
//                         clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
//                       }}
//                     >
//                       <motion.div
//                         className="absolute w-full h-0.5 opacity-70"
//                         style={{
//                           background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`
//                         }}
//                         animate={{
//                           y: [0, 250, 0]
//                         }}
//                         transition={{
//                           duration: 2,
//                           repeat: Infinity,
//                           ease: "easeInOut"
//                         }}
//                       />
//                     </motion.div>
//                   )}

//                   {/* Icon with Hologram Effect */}
//                   <motion.div
//                     className="relative mb-6"
//                     animate={{
//                       rotateY: hoveredIndex === index ? 360 : 0
//                     }}
//                     transition={{ duration: 2 }}
//                   >
//                     <div 
//                       className="w-16 h-16 mx-auto relative flex items-center justify-center"
//                       style={{
//                         background: `radial-gradient(circle, ${stat.color}20 0%, transparent 70%)`,
//                         border: `2px solid ${hoveredIndex === index ? stat.color : 'rgba(255,255,255,0.2)'}`,
//                         clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
//                       }}
//                     >
//                       <IconComponent 
//                         className="w-8 h-8" 
//                         style={{ color: hoveredIndex === index ? stat.color : '#ffffff' }}
//                       />
                      
//                       {/* Holographic Glow */}
//                       {hoveredIndex === index && (
//                         <motion.div
//                           className="absolute inset-0"
//                           style={{
//                             background: `radial-gradient(circle, ${stat.color}40 0%, transparent 70%)`,
//                             clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
//                           }}
//                           animate={{
//                             scale: [1, 1.5, 1],
//                             opacity: [0.5, 1, 0.5]
//                           }}
//                           transition={{
//                             duration: 1.5,
//                             repeat: Infinity
//                           }}
//                         />
//                       )}
//                     </div>
//                   </motion.div>

//                   {/* Number Display */}
//                   <motion.div
//                     className="text-center mb-4"
//                     style={{
//                       color: hoveredIndex === index ? stat.color : '#ffffff',
//                       textShadow: hoveredIndex === index ? `0 0 20px ${stat.color}80` : 'none'
//                     }}
//                   >
//                     <Counter target={stat.number} suffix={stat.suffix} />
//                   </motion.div>

//                   {/* Label */}
//                   <p className="text-gray-300 text-sm text-center font-medium">
//                     {stat.label}
//                   </p>

//                   {/* Data Stream */}
//                   {hoveredIndex === index && (
//                     <motion.div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
//                       {[...Array(20)].map((_, i) => (
//                         <motion.div
//                           key={i}
//                           className="absolute w-1 h-1 rounded-full"
//                           style={{ backgroundColor: stat.color }}
//                           initial={{
//                             x: Math.random() * 300,
//                             y: 30,
//                             opacity: 0
//                           }}
//                           animate={{
//                             y: -10,
//                             opacity: [0, 1, 0]
//                           }}
//                           transition={{
//                             duration: 1.5,
//                             repeat: Infinity,
//                             delay: i * 0.1
//                           }}
//                         />
//                       ))}
//                     </motion.div>
//                   )}
//                 </motion.div>
//               </motion.div>
//             )
//           })}
//         </div>

//         {/* Bottom Action */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <motion.button
//             className="relative px-8 py-4 text-white font-bold overflow-hidden"
//             style={{
//               background: 'linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,255,0.2))',
//               border: '2px solid rgba(0,255,255,0.5)',
//               clipPath: 'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)'
//             }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <motion.div
//               className="absolute inset-0"
//               style={{
//                 background: 'linear-gradient(90deg, transparent, rgba(0,255,255,0.3), transparent)'
//               }}
//               animate={{
//                 x: ['-100%', '100%']
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity
//               }}
//             />
//             <span className="relative z-10 flex items-center gap-2">
//               <Zap className="w-5 h-5" />
//               ACCESS FULL DATA
//             </span>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


'use client'

import { motion } from 'framer-motion'
import { Rocket, GraduationCap, Briefcase, Building, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

const stats = [
  {
    icon: Rocket,
    number: 200,
    suffix: '+',
    label: 'MERN Projects Built',
    color: '#00ffff',
    particles: 15
  },
  {
    icon: GraduationCap,
    number: 150,
    suffix: '+',
    label: 'Students Trained',
    color: '#ff00ff',
    particles: 12
  },
  {
    icon: Briefcase,
    number: 50,
    suffix: '+',
    label: 'Job Placements',
    color: '#ffff00',
    particles: 10
  },
  {
    icon: Building,
    number: 25,
    suffix: '+',
    label: 'Companies Hiring',
    color: '#ff6600',
    particles: 8
  }
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span className="text-5xl font-black">
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `radial-gradient(circle, ${stats[i % 4]?.color || '#00ffff'}, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 2
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Epic Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            LEGENDARY STATS
          </motion.h2>
          <motion.div 
            className="w-40 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
        </motion.div>

        {/* Ultra Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                className="relative group perspective-1000"
                initial={{ opacity: 0, rotateX: -90, y: 100 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Holographic Card */}
                <motion.div
                  className="relative p-8 backdrop-blur-xl border border-white/20 overflow-hidden transform-gpu"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(255,255,255,0.1) 0%, 
                      rgba(255,255,255,0.05) 50%, 
                      transparent 100%)`,
                    clipPath: 'polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px))',
                    transformStyle: 'preserve-3d'
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 15,
                    rotateX: 5,
                    z: 100
                  }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  {/* Particle Explosion */}
                  {hoveredIndex === index && (
                    <>
                      {[...Array(stat.particles)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: stat.color }}
                          initial={{
                            x: 150,
                            y: 150,
                            opacity: 0,
                            scale: 0
                          }}
                          animate={{
                            x: Math.random() * 400 - 200,
                            y: Math.random() * 400 - 200,
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.05
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Energy Border */}
                  <motion.div
                    className="absolute inset-0 border-2 rounded-lg"
                    style={{
                      borderColor: hoveredIndex === index ? stat.color : 'transparent',
                      boxShadow: hoveredIndex === index ? 
                        `0 0 40px ${stat.color}80, inset 0 0 40px ${stat.color}30, 0 0 80px ${stat.color}40` : 'none',
                      clipPath: 'polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px))'
                    }}
                    animate={{
                      borderColor: hoveredIndex === index ? [stat.color, `${stat.color}80`, stat.color] : 'rgba(255,255,255,0.1)'
                    }}
                    transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
                  />

                  {/* Matrix Rain Effect */}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px))'
                      }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-0.5 opacity-60"
                          style={{
                            left: `${i * 12.5}%`,
                            background: `linear-gradient(180deg, transparent, ${stat.color}, transparent)`,
                            height: '100%'
                          }}
                          animate={{
                            y: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "linear"
                          }}
                        />
                      ))}
                    </motion.div>
                  )}

                  {/* Holographic Icon */}
                  <motion.div
                    className="relative mb-8"
                    animate={{
                      rotateY: hoveredIndex === index ? [0, 360] : 0,
                      scale: hoveredIndex === index ? [1, 1.2, 1] : 1
                    }}
                    transition={{ 
                      duration: hoveredIndex === index ? 3 : 0.5,
                      repeat: hoveredIndex === index ? Infinity : 0
                    }}
                  >
                    <div 
                      className="w-20 h-20 mx-auto relative flex items-center justify-center"
                      style={{
                        background: `conic-gradient(from 0deg, ${stat.color}40, transparent, ${stat.color}40)`,
                        border: `3px solid ${hoveredIndex === index ? stat.color : 'rgba(255,255,255,0.3)'}`,
                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)',
                        filter: hoveredIndex === index ? `drop-shadow(0 0 20px ${stat.color})` : 'none'
                      }}
                    >
                      <IconComponent 
                        className="w-10 h-10" 
                        style={{ color: hoveredIndex === index ? stat.color : '#ffffff' }}
                      />
                      
                      {/* Rotating Ring */}
                      {hoveredIndex === index && (
                        <motion.div
                          className="absolute inset-0 border-2 rounded-full"
                          style={{ borderColor: stat.color }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* Epic Number Display */}
                  <motion.div
                    className="text-center mb-6"
                    style={{
                      color: hoveredIndex === index ? stat.color : '#ffffff',
                      textShadow: hoveredIndex === index ? `0 0 30px ${stat.color}` : 'none',
                      filter: hoveredIndex === index ? `drop-shadow(0 0 10px ${stat.color})` : 'none'
                    }}
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.1, 1] : 1
                    }}
                    transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
                  >
                    <Counter target={stat.number} suffix={stat.suffix} />
                  </motion.div>

                  {/* Glowing Label */}
                  <motion.p 
                    className="text-gray-300 text-sm text-center font-bold tracking-wider"
                    animate={{
                      color: hoveredIndex === index ? stat.color : '#9ca3af'
                    }}
                  >
                    {stat.label}
                  </motion.p>

                  {/* Energy Streams */}
                  {hoveredIndex === index && (
                    <motion.div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
                      {[...Array(25)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full"
                          style={{ backgroundColor: stat.color }}
                          initial={{
                            x: Math.random() * 300,
                            y: 50,
                            opacity: 0
                          }}
                          animate={{
                            y: -20,
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.05
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Epic Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            className="relative px-12 py-6 text-white font-black text-lg overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, rgba(0,255,255,0.3), rgba(255,0,255,0.3), rgba(255,255,0,0.3))',
              border: '3px solid rgba(0,255,255,0.8)',
              clipPath: 'polygon(30px 0%, 100% 0%, calc(100% - 30px) 100%, 0% 100%)',
              filter: 'drop-shadow(0 0 20px rgba(0,255,255,0.5))'
            }}
            whileHover={{ 
              scale: 1.1,
              filter: 'drop-shadow(0 0 30px rgba(0,255,255,0.8))'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
              }}
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
            <span className="relative z-10 flex items-center gap-3">
              <Zap className="w-6 h-6" />
              UNLOCK FULL POWER
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}



