'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineChartBar, HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineArrowPath } from 'react-icons/hi2'

const features = [
  {
    icon: <HiOutlineChartBar className="text-primary-500" />,
    title: 'Sales Funnel',
    description: 'Optimized conversion process',
    stats: '30% Conversion Rate',
    bullets: ['Lead generation', 'Qualification', 'Conversion tracking']
  },
  {
    icon: <HiOutlineUserGroup className="text-primary-500" />,
    title: 'Community Engagement',
    description: 'Active member involvement',
    stats: '85% Engagement',
    bullets: ['Events', 'Feedback', 'Member support']
  },
  {
    icon: <HiOutlineShieldCheck className="text-primary-500" />,
    title: 'Compliance Expertise',
    description: 'Regulatory compliance focus',
    stats: '100% Compliant',
    bullets: ['Audits', 'Documentation', 'Training']
  },
  {
    icon: <HiOutlineArrowPath className="text-primary-500" />,
    title: 'Retention Strategies',
    description: 'Member retention focus',
    stats: '95% Retention',
    bullets: ['Loyalty programs', 'Feedback loops', 'Personalized care']
  }
]

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow duration-300"
  >
    <div className="flex items-center mb-2">
      <div className="mr-3">
        {React.cloneElement(feature.icon, { className: "text-primary-500 w-8 h-8" })}
      </div>
      <div>
        <h3 className="text-base font-semibold text-neutral-800">{feature.title}</h3>
        <p className="text-xs font-medium text-blue-500">{feature.stats}</p>
      </div>
    </div>
    <p className="text-sm text-neutral-600 mb-2">{feature.description}</p>
    <ul className="space-y-1">
      {feature.bullets.map((bullet, idx) => (
        <li key={idx} className="flex items-center text-neutral-600 text-xs">
          <span className="w-1 h-1 rounded-full bg-blue-500 mr-2"></span>
          {bullet}
        </li>
      ))}
    </ul>
  </motion.div>
)

const Growth = () => {
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
          className="mb-16"
        >
          <h2 className="text-lg font-medium text-primary-500 mb-8">GROWTH & RETENTION FOCUS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Growth 