'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '/images/team/sarah.jpg',
    description: 'With over 15 years of experience in healthcare management, Sarah leads our company with a vision to revolutionize customer service in the healthcare industry.',
    experience: [
      'Led multiple healthcare organizations through digital transformation initiatives.',
      'Developed and executed strategic plans for healthcare service delivery.',
      'Built and mentored high-performing leadership teams across multiple locations.',
      'Established key partnerships with healthcare technology providers.'
    ],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: '/images/team/michael.jpg',
    description: 'Michael brings 12 years of technology leadership experience, specializing in AI and machine learning solutions for customer service automation.',
    experience: [
      'Architected and deployed AI-powered customer service solutions.',
      'Led development of machine learning models for customer behavior prediction.',
      'Designed scalable system architectures for enterprise applications.',
      'Mentored engineering teams in AI and ML best practices.'
    ],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Customer Success',
    image: '/images/team/emily.jpg',
    description: 'Emily has a proven track record in building and managing high-performing customer service teams, with expertise in healthcare customer experience.',
    experience: [
      'Implemented customer experience strategies across healthcare organizations.',
      'Led teams of 50+ customer service representatives to exceed performance metrics.',
      'Developed and optimized customer service processes and workflows.',
      'Established quality assurance frameworks for customer interactions.'
    ],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'David Wilson',
    role: 'Lead AI Engineer',
    image: '/images/team/david.jpg',
    description: 'David is an expert in developing AI solutions for customer service, with a focus on natural language processing and predictive analytics.',
    experience: [
      'Developed advanced NLP models for customer service automation.',
      'Created predictive analytics systems for customer behavior analysis.',
      'Implemented AI solutions across multiple healthcare platforms.',
      'Conducted research in machine learning for customer service applications.'
    ],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  }
]

const TeamCard = ({ member, index }: { member: typeof teamMembers[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex items-start gap-8"
  >
    <div className="flex-shrink-0 w-96">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-square">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-neutral-800 mb-2">{member.name}</h3>
          <p className="text-lg text-neutral-600 mb-4">{member.role}</p>
          <div className="flex space-x-4">
            <a href={member.social.linkedin} className="text-neutral-400 hover:text-blue-500 transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href={member.social.twitter} className="text-neutral-400 hover:text-sky-500 transition-colors">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href={member.social.github} className="text-neutral-400 hover:text-neutral-800 transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-1 pt-6">
      <p className="text-lg text-neutral-600 leading-relaxed max-w-xl mb-6">{member.description}</p>
      <div className="space-y-2">
        {member.experience.map((item, idx) => (
          <p key={idx} className="text-neutral-600">
            → {item}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
)

const Team = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
      
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
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">Our Team</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Meet the passionate professionals behind our success, dedicated to delivering exceptional customer service solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team 