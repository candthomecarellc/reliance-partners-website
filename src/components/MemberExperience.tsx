'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineGlobeAlt, HiOutlineClock, HiOutlineCheckCircle, HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineStar } from 'react-icons/hi2'

const features = [
  {
    icon: <HiOutlineGlobeAlt className="text-primary-500" />,
    title: 'Multilingual Support',
    description: 'Comprehensive language assistance',
    stats: '15+ Languages',
    bullets: ['Native speakers', 'Cultural understanding', 'Accurate translations']
  },
  {
    icon: <HiOutlineClock className="text-primary-500" />,
    title: '24x7 Help Desk',
    description: 'Round-the-clock assistance',
    stats: '99.9% Uptime',
    bullets: ['Always available', 'Quick response', 'Emergency support']
  },
  {
    icon: <HiOutlineCheckCircle className="text-primary-500" />,
    title: 'High First-Call Resolution',
    description: 'Efficient problem solving',
    stats: '95% Resolution Rate',
    bullets: ['Expert agents', 'Comprehensive training', 'Efficient processes']
  },
  {
    icon: <HiOutlineLightBulb className="text-primary-500" />,
    title: 'Rapid Response Time',
    description: 'Quick assistance delivery',
    stats: '< 30s Average',
    bullets: ['Optimized workflows', 'Smart routing', 'Priority handling']
  },
  {
    icon: <HiOutlineUserGroup className="text-primary-500" />,
    title: 'Personalized Teams',
    description: 'Dedicated support specialists',
    stats: '100% Dedicated',
    bullets: ['Custom protocols', 'Team consistency', 'Member familiarity']
  },
  {
    icon: <HiOutlineStar className="text-primary-500" />,
    title: 'Strong Satisfaction',
    description: 'Exceptional member feedback',
    stats: '98% NPS Score',
    bullets: ['Quality focus', 'Continuous improvement', 'Member feedback']
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
    <p className="text-sm text-neutral-600">{feature.description}</p>
  </motion.div>
)

const MemberExperience = () => {
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
          <h2 className="text-lg font-medium text-primary-500 mb-8">EXCELLENT MEMBER EXPERIENCE</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MemberExperience 