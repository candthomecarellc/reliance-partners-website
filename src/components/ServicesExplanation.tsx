'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ServicesExplanation = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100" />
      
      {/* Animated Circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sky-200/10"
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
        className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] rounded-full bg-blue-200/10"
        animate={{
          x: [0, -20, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-left mb-12 max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">Our Services</h2>
          <p className="text-xl text-neutral-700 leading-relaxed">
            Comprehensive solutions for your customer service needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="prose prose-lg prose-blue">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              At Reliance Partners, we offer a comprehensive suite of healthcare support services designed to enhance member experience and operational efficiency. Our specialized BPO solutions are tailored specifically for the healthcare industry, combining deep domain expertise with cutting-edge technology to deliver exceptional results.
            </p>
            
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Our member services team is trained to handle a wide range of healthcare-related inquiries with sensitivity and accuracy. From benefits verification to claims assistance, our bilingual staff ensures clear communication and cultural competence in every interaction. We understand the complexities of healthcare navigation and are committed to making the process as smooth as possible for members.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Compliance and security are at the core of everything we do. Our operations are built on a foundation of strict regulatory adherence, with robust protocols for HIPAA compliance and data protection. We maintain rigorous quality control measures and comprehensive audit trails to ensure the highest standards of service delivery and data security.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed">
              Through our advanced analytics and reporting systems, we provide transparent performance metrics and actionable insights. This data-driven approach enables continuous improvement and helps our clients make informed decisions about their member service strategies. Our commitment to excellence is reflected in our consistently high satisfaction ratings and our ability to adapt to the evolving needs of the healthcare industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesExplanation 