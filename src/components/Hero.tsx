'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiOutlineBuildingOffice2, HiOutlineShieldCheck, HiOutlineLanguage, HiOutlineChartBar } from 'react-icons/hi2'

const features = [
  {
    icon: <HiOutlineBuildingOffice2 className="text-primary-500" />,
    title: 'Healthcare-specialized BPO',
    description: 'Dedicated to providing exceptional healthcare support services with deep industry expertise and understanding of medical processes.'
  },
  {
    icon: <HiOutlineShieldCheck className="text-primary-500" />,
    title: 'Compliant, Member-centered & Tech-enabled',
    description: 'Combining regulatory compliance with cutting-edge technology to deliver personalized, efficient, and secure healthcare support.'
  },
  {
    icon: <HiOutlineLanguage className="text-primary-500" />,
    title: 'Culturally Competent, Bilingual Staff',
    description: 'Our diverse team of professionals is fluent in multiple languages and trained in cultural sensitivity to serve all members effectively.'
  },
  {
    icon: <HiOutlineChartBar className="text-primary-500" />,
    title: 'Transparent & Reliable Performance Metrics',
    description: 'Comprehensive tracking and reporting systems ensure accountability and continuous improvement in service delivery.'
  }
]

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-no-repeat bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/images/backgrounds/hero-bg-2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="fixed inset-0 bg-black/50" />
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        {/* Animated Circles */}
        <motion.div
          className="absolute top-1/6 left-1/4 w-32 md:w-64 h-32 md:h-64 rounded-full bg-primary-500/10"
          animate={{
            x: [0, 15, 0],
            y: [0, 15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 md:w-96 h-48 md:h-96 rounded-full bg-secondary-500/10"
          animate={{
            x: [0, -15, 0],
            y: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col gap-8 md:gap-12 items-start">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
                Transform Your Customer Service with Reliance Partners
              </h1>
              <p className="text-lg md:text-xl text-neutral-200 mb-6 md:mb-8">
                A trusted partner in healthcare support services, delivering excellence through specialized expertise and innovative solutions.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 border border-white/10"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xl md:text-2xl mb-2 text-primary-500">{feature.icon}</div>
                  <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 