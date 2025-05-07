'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineUserGroup, HiOutlineAcademicCap, HiOutlineBuildingOffice2, HiOutlineChartBar } from 'react-icons/hi2'

const features = [
  {
    icon: <HiOutlineUserGroup className="text-primary-500" />,
    title: 'Low Turnover',
    description: 'Stable and experienced team',
    stats: '<5% Turnover Rate',
    bullets: ['Employee satisfaction', 'Career growth', 'Strong retention']
  },
  {
    icon: <HiOutlineAcademicCap className="text-primary-500" />,
    title: 'Ongoing Training',
    description: 'Continuous skill development',
    stats: '100% Certified',
    bullets: ['Regular training', 'QA processes', 'Skill enhancement']
  },
  {
    icon: <HiOutlineBuildingOffice2 className="text-primary-500" />,
    title: 'US-Based Teams',
    description: 'Local expertise and support',
    stats: '100% US-Based',
    bullets: ['Hybrid model', 'Local knowledge', 'Cultural alignment']
  },
  {
    icon: <HiOutlineChartBar className="text-primary-500" />,
    title: 'Transparent Management',
    description: 'Clear performance tracking',
    stats: 'Real-time Metrics',
    bullets: ['Performance tracking', 'Clear goals', 'Regular feedback']
  }
]

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
  >
    <div className="flex items-center mb-4">
      <div className="mr-4">
        {React.cloneElement(feature.icon, { className: "text-primary-500 w-10 h-10" })}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-neutral-800">{feature.title}</h3>
        <p className="text-sm font-medium text-blue-500">{feature.stats}</p>
      </div>
    </div>
    <p className="text-neutral-600 mb-4">{feature.description}</p>
    <ul className="space-y-2">
      {feature.bullets.map((bullet, idx) => (
        <li key={idx} className="flex items-center text-neutral-600">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
          {bullet}
        </li>
      ))}
    </ul>
  </motion.div>
)

const Workforce = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-blue-50 to-sky-50" />
      
      {/* Animated Objects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-sky-400/10"
        animate={{
          x: [0, 20, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-400/10"
        animate={{
          x: [0, -20, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-cyan-400/10"
        animate={{
          x: [0, 15, 0],
          y: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">WORKFORCE QUALITY & CONTINUITY</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Building and maintaining a high-performing team through stability, training, and advanced management tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Workforce 