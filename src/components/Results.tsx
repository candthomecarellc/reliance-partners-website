'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineChartBar, HiOutlineUserGroup, HiOutlineUserPlus, HiOutlineClipboardDocument } from 'react-icons/hi2'

const outcomes = [
  {
    icon: <HiOutlineChartBar className="w-10 h-10 text-primary-500" />,
    title: 'Enhanced Operational Efficiency',
    description: 'Streamlined processes and optimized workflows leading to improved productivity',
    stats: 'Performance Boost',
    details: [
      'Process optimization',
      'Resource utilization',
      'Cost reduction',
      'Quality improvement'
    ]
  },
  {
    icon: <HiOutlineUserGroup className="w-10 h-10 text-primary-500" />,
    title: 'Improved Member Experience',
    description: 'Enhanced service quality and satisfaction through dedicated support and care',
    stats: 'Member Satisfaction',
    details: [
      'Personalized support',
      '24/7 availability',
      'Multilingual assistance',
      'Quick resolution'
    ]
  },
  {
    icon: <HiOutlineUserPlus className="w-10 h-10 text-primary-500" />,
    title: 'Increased Enrollment & Retention',
    description: 'Strategic approaches to attract and maintain member participation',
    stats: 'Growth Focus',
    details: [
      'Targeted outreach',
      'Engagement programs',
      'Retention strategies',
      'Member loyalty'
    ]
  },
  {
    icon: <HiOutlineClipboardDocument className="w-10 h-10 text-primary-500" />,
    title: 'NYS Regulatory Compliance',
    description: 'Comprehensive adherence to state regulations and industry standards',
    stats: 'Compliance Excellence',
    details: [
      'Regulatory alignment',
      'Documentation management',
      'Audit readiness',
      'Policy adherence'
    ]
  }
]

const OutcomeCard = ({ outcome, index }: { outcome: typeof outcomes[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`${index % 2 === 1 ? 'ml-16' : ''}`}
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        {outcome.icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{outcome.title}</h3>
        <p className="text-sm font-medium text-blue-300 mb-1">{outcome.stats}</p>
        <p className="text-sm text-gray-200">{outcome.description}</p>
      </div>
    </div>
  </motion.div>
)

const Results = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-results bg-[position:center_center] bg-cover bg-fixed" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/4 lg:w-3/4 bg-gradient-to-r from-neutral-900 via-neutral-900 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white">EXPECTED RESULTS</h2>
        </motion.div>

        <div className="space-y-12">
          {outcomes.map((outcome, index) => (
            <OutcomeCard key={index} outcome={outcome} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results 