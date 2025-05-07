'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineClock, HiOutlineCheckCircle, HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineClipboardDocument, HiOutlineCheck, HiOutlineArrowPath, HiOutlineScale, HiOutlineAcademicCap, HiOutlinePause } from 'react-icons/hi2'

const stats = [
  {
    icon: <HiOutlineClock className="text-accent-500" />,
    value: '24x7',
    label: 'Help Desk'
  },
  {
    icon: <HiOutlineCheckCircle className="text-accent-500" />,
    value: '>95%',
    label: 'First Call Resolution'
  },
  {
    icon: <HiOutlineLightBulb className="text-accent-500" />,
    value: '<30s',
    label: 'Average Response Time'
  },
  {
    icon: <HiOutlineUserGroup className="text-accent-500" />,
    value: '<5%',
    label: 'Agent Turnover Rate'
  }
]

const techStack = [
  {
    icon: <HiOutlineClipboardDocument className="w-10 h-10 text-primary-500" />,
    title: 'MLTC Workflow Expertise',
    description: 'Deep understanding of Managed Long-Term Care operations and processes, ensuring efficient and compliant service delivery.',
    features: ['Comprehensive MLTC program knowledge', 'Streamlined care coordination', 'Efficient documentation management']
  },
  {
    icon: <HiOutlineCheck className="w-10 h-10 text-primary-500" />,
    title: 'Eligibility & Enrollment Verification',
    description: 'Thorough verification processes to ensure accurate member eligibility and seamless enrollment experiences.',
    features: ['Automated verification systems', 'Document management expertise', 'Compliance-focused processes']
  },
  {
    icon: <HiOutlineArrowPath className="w-10 h-10 text-primary-500" />,
    title: 'Proactive Medicaid Renewals',
    description: 'Streamlined renewal processes with proactive outreach to ensure continuous coverage for members.',
    features: ['Automated renewal tracking', 'Proactive member outreach', 'Documentation assistance']
  },
  {
    icon: <HiOutlineScale className="w-10 h-10 text-primary-500" />,
    title: 'Complex Case Escalation',
    description: 'Structured escalation process for handling complex member needs with specialized attention.',
    features: ['Multi-level escalation protocols', 'Specialized case management', 'Expert resolution tracking']
  }
]

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  return (
    <div className="relative">
      <section className="relative overflow-hidden">
        {/* Background Image Section */}
        <div className="relative min-h-[70vh]">
          {/* Background Image */}
          <div className="absolute inset-0 bg-about bg-[position:center_center] bg-cover bg-fixed" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-y-0 left-0 w-full md:w-3/4 lg:w-3/4 bg-gradient-to-r from-neutral-900 via-neutral-900 to-transparent" />
          
          {/* Side Content */}
          <div className="absolute inset-y-0 left-0 w-full md:w-1/2 lg:w-1/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h2>
              <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
                Leading the way in customer service innovation with cutting-edge technology and dedicated expertise.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  >
                    <div className="text-2xl text-sky-400 mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-neutral-300 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* White Gradient with Feature Cards */}
        <div className="relative bg-gradient-to-b from-white via-white/95 to-white">
          {/* Animated Objects */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-sky-200/20"
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
            className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-200/20"
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
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-indigo-200/20"
            animate={{
              x: [0, 10, 0],
              y: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Feature Cards */}
          <div className="container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto relative"
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
                <HiOutlineAcademicCap className="w-64 h-64 text-primary-500/20" />
              </div>
              <h3 className="text-lg font-medium text-primary-500 mb-8">Our Expertise</h3>
              <div className="grid grid-cols-1 gap-12">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-4 ${index % 2 === 1 ? 'md:ml-16' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="shrink-0">
                        {tech.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-neutral-800 mb-1">{tech.title}</h3>
                        <p className="text-sm text-neutral-600">{tech.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Call Section */}
      <section className="bg-gradient-to-b from-white to-sky-50 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">Listen to Our Service Quality</h2>
            <p className="text-lg text-neutral-600 mb-12">
              Experience our customer service excellence through this sample call recording.
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <audio
                ref={audioRef}
                src="/demo-call.mp3"
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
              />
              <div className="flex items-center justify-center gap-4 mb-4">
                <button 
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  {isPlaying ? (
                    <HiOutlinePause className="w-6 h-6" />
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>
                <div className="flex-1 h-1 bg-neutral-200 rounded-full">
                  <div 
                    className="h-full bg-primary-500 rounded-full transition-all duration-100"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-neutral-600">{formatTime(currentTime)}</span>
              </div>
              <p className="text-sm text-neutral-500">Sample Call: Member Enrollment Process</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 