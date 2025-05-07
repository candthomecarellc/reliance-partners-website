'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaHospital, FaUserShield, FaLanguage, FaChartLine } from 'react-icons/fa'

const features = [
  {
    icon: <FaHospital className="w-8 h-8 text-blue-500" />,
    title: 'Healthcare-specialized BPO',
    description: 'Dedicated to providing exceptional healthcare support services with deep industry expertise and understanding of medical processes.'
  },
  {
    icon: <FaUserShield className="w-8 h-8 text-blue-500" />,
    title: 'Compliant, Member-centered & Tech-enabled',
    description: 'Combining regulatory compliance with cutting-edge technology to deliver personalized, efficient, and secure healthcare support.'
  },
  {
    icon: <FaLanguage className="w-8 h-8 text-blue-500" />,
    title: 'Culturally Competent, Bilingual Staff',
    description: 'Our diverse team of professionals is fluent in multiple languages and trained in cultural sensitivity to serve all members effectively.'
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-blue-500" />,
    title: 'Transparent & Reliable Performance Metrics',
    description: 'Comprehensive tracking and reporting systems ensure accountability and continuous improvement in service delivery.'
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
      <div className="p-3 rounded-lg bg-blue-50 mr-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-800">{feature.title}</h3>
    </div>
    <p className="text-neutral-600">{feature.description}</p>
  </motion.div>
)

const Profile = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">RELIANCE PARTNERS PROFILE</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A trusted partner in healthcare support services, delivering excellence through specialized expertise and innovative solutions.
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

export default Profile 