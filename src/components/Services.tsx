'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineBuildingOffice2, HiOutlineComputerDesktop, HiOutlineClock } from 'react-icons/hi2'

const services = [
  {
    icon: <HiOutlineBuildingOffice2 className="text-secondary-500" />,
    title: 'In-Person Operations',
    description: 'All staff work in-person at our Dhaka office',
    features: ['Dedicated Workspace', 'Team Collaboration', 'Quality Control']
  },
  {
    icon: <HiOutlineComputerDesktop className="text-secondary-500" />,
    title: 'Advanced Infrastructure',
    description: 'High-end technology and infrastructure',
    features: ['Modern Equipment', 'Secure Network', 'Backup Systems']
  },
  {
    icon: <HiOutlineClock className="text-secondary-500" />,
    title: 'U.S. Business Hours',
    description: 'Operating on New York City business hours',
    features: ['U.S. Holiday Schedule', '24/7 Coverage', 'Time Zone Alignment']
  }
]

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
  >
    <div className="text-4xl mb-6 text-sky-500">{service.icon}</div>
    <h3 className="text-2xl font-semibold mb-4 text-neutral-900">{service.title}</h3>
    <p className="text-neutral-700 mb-6 text-lg">{service.description}</p>
    <ul className="space-y-3 mt-auto">
      {service.features.map((feature, i) => (
        <li key={i} className="flex items-center text-neutral-700 text-lg">
          <svg className="w-5 h-5 mr-3 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
)

const Services = () => {
  return (
    <section className="relative py-32 overflow-hidden">
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
          className="text-left mb-24 max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">How We Operate</h2>
          <p className="text-xl text-neutral-700 leading-relaxed">
            Our Dhaka office provides professional services aligned with U.S. business standards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 