'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  // {
  //   name: 'TechCorp',
  //   logo: '/images/clients/techcorp.png',
  //   testimonial: 'Their AI-powered solutions transformed our customer service operations.'
  // },
  {
    name: 'GlobalBank',
    logo: '/images/clients/globalbank.png',
    testimonial: 'Exceptional service and innovative solutions for our banking needs.'
  },
  {
    name: 'RetailPlus',
    logo: '/images/clients/retailplus.png',
    testimonial: 'Helped us scale our customer support while maintaining quality.'
  },
  {
    name: 'HealthCare Solutions',
    logo: '/images/clients/healthcare.png',
    testimonial: 'Reliable and efficient customer service for our healthcare clients.'
  },
  {
    name: 'EduTech',
    logo: '/images/clients/edutech.png',
    testimonial: 'Revolutionized our student support system with AI integration.'
  },
  {
    name: 'FinTech Pro',
    logo: '/images/clients/fintech.png',
    testimonial: 'Cutting-edge solutions for our financial technology services.'
  }
]

const ClientCard = ({ client, index }: { client: typeof clients[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="p-2"
  >
    <div className="relative h-16 mb-2">
      <Image
        src={client.logo}
        alt={client.name}
        fill
        className="object-contain"
      />
    </div>
    <h3 className="text-sm font-medium text-neutral-800 text-center">{client.name}</h3>
  </motion.div>
)

const Clients = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-neutral-50" />
      
      {/* Animated Objects */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-amber-500/10"
        animate={{
          x: [0, -20, 0],
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
        className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-emerald-500/10"
        animate={{
          x: [0, 20, 0],
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
        className="absolute top-1/2 right-1/2 w-32 h-32 rounded-full bg-rose-500/10"
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
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
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">Our Clients</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Trusted by leading companies across various industries for exceptional customer service solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <ClientCard key={index} client={client} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients 