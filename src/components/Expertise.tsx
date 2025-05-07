'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaClipboardList, FaUserCheck, FaSync, FaExclamationTriangle } from 'react-icons/fa'

const features = [
  {
    icon: <FaClipboardList className="w-8 h-8 text-blue-500" />,
    title: 'MLTC Workflow Expertise',
    description: 'Deep understanding of Managed Long-Term Care operations and processes, ensuring efficient and compliant service delivery.',
    details: [
      'Comprehensive MLTC program knowledge',
      'Streamlined care coordination',
      'Efficient documentation management'
    ]
  },
  {
    icon: <FaUserCheck className="w-8 h-8 text-blue-500" />,
    title: 'Eligibility & Enrollment Verification',
    description: 'Thorough verification processes to ensure accurate member eligibility and seamless enrollment experiences.',
    details: [
      'Automated verification systems',
      'Document management expertise',
      'Compliance-focused processes'
    ]
  },
  {
    icon: <FaSync className="w-8 h-8 text-blue-500" />,
    title: 'Proactive Medicaid Renewals',
    description: 'Streamlined renewal processes with proactive outreach to ensure continuous coverage for members.',
    details: [
      'Automated renewal tracking',
      'Proactive member outreach',
      'Documentation assistance'
    ]
  },
  {
    icon: <FaExclamationTriangle className="w-8 h-8 text-blue-500" />,
    title: 'Complex Case Escalation',
    description: 'Structured escalation process for handling complex member needs with specialized attention.',
    details: [
      'Multi-level escalation protocols',
      'Specialized case management',
      'Expert resolution tracking'
    ]
  }
]

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-lg bg-blue-50">
        {feature.icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-neutral-800 mb-1">{feature.title}</h3>
        <p className="text-neutral-600 text-sm">{feature.description}</p>
      </div>
    </div>
    <ul className="mt-4 flex flex-wrap gap-4">
      {feature.details.map((detail, idx) => (
        <li key={idx} className="flex items-center text-neutral-600 text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
          {detail}
        </li>
      ))}
    </ul>
  </motion.div>
)

const Expertise = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">CLINICAL & OPERATIONAL EXPERTISE</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Specialized knowledge and processes to ensure efficient, compliant, and member-focused healthcare operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise 