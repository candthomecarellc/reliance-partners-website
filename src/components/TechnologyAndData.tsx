'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineCpuChip, HiOutlineShieldCheck, HiOutlineChatBubbleLeftRight, HiOutlineSparkles, HiOutlineChartBar, HiOutlinePhone, HiOutlineServer } from 'react-icons/hi2'

const technologyFeatures = [
  {
    icon: <HiOutlineCpuChip className="text-primary-500" />,
    title: 'System Integration',
    description: 'Seamless technology integration',
    stats: '100% Integration',
    bullets: ['API connectivity', 'Data sync', 'System compatibility']
  },
  {
    icon: <HiOutlineShieldCheck className="text-primary-500" />,
    title: 'HIPAA Compliance',
    description: 'Secure data handling',
    stats: '100% Compliant',
    bullets: ['Data encryption', 'Access control', 'Audit trails']
  },
  {
    icon: <HiOutlineChatBubbleLeftRight className="text-primary-500" />,
    title: 'Omnichannel Support',
    description: 'Multi-channel communication',
    stats: '5+ Channels',
    bullets: ['Phone', 'Email', 'Chat', 'SMS']
  },
  {
    icon: <HiOutlineSparkles className="text-primary-500" />,
    title: 'Intelligent Tools',
    description: 'Advanced support solutions',
    stats: 'AI-Powered',
    bullets: ['Chatbots', 'Analytics', 'Automation']
  }
]

const dataFeatures = [
  {
    icon: <HiOutlineChartBar className="text-primary-500" />,
    title: 'Real-time KPI Dashboards',
    description: 'Live performance monitoring',
    stats: 'Real-time Updates',
    bullets: ['Custom metrics', 'Visual analytics', 'Performance tracking']
  },
  {
    icon: <HiOutlinePhone className="text-primary-500" />,
    title: 'Call & Sales Analytics',
    description: 'Comprehensive call metrics',
    stats: 'Detailed Insights',
    bullets: ['Call volume', 'Conversion rates', 'Quality scores']
  },
  {
    icon: <HiOutlineServer className="text-primary-500" />,
    title: 'Advanced Data Integration',
    description: 'Seamless data connectivity',
    stats: '100% Integration',
    bullets: ['API connections', 'Data sync', 'System compatibility']
  }
]

const FeatureCard = ({ feature, index }: { feature: typeof technologyFeatures[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`p-4 ${index % 2 === 1 ? 'ml-24' : ''}`}
  >
    <div className="flex items-center gap-3">
      <div>
        {React.cloneElement(feature.icon, { className: "text-primary-500 w-10 h-10" })}
      </div>
      <div>
        <h3 className="text-base font-semibold text-neutral-800">{feature.title}</h3>
        <p className="text-xs font-medium text-blue-500">{feature.stats}</p>
      </div>
    </div>
    <p className="text-sm text-neutral-600 mt-2">{feature.description}</p>
  </motion.div>
)

const TechnologyAndData = () => {
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
        {/* Technology Section */}
        <div className="relative">
          <div className="flex items-stretch justify-between">
            <div className="flex-1 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-xl md:text-2xl font-bold text-neutral-800 mb-2">TECHNOLOGY INTEGRATION & SECURITY</h2>
                <p className="text-sm text-neutral-600">
                  Advanced technology solutions ensuring secure, efficient, and seamless member support across all channels
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                {technologyFeatures.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} index={index} />
                ))}
              </div>
            </div>
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <HiOutlineCpuChip className="text-primary-500/40 w-48 h-48" />
            </div>
          </div>
        </div>

        {/* Data Section */}
        <div className="relative">
          <div className="flex items-stretch justify-between min-h-[600px]">
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <HiOutlineChartBar className="text-primary-500/40 w-48 h-48" />
            </div>
            <div className="flex-1 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-xl md:text-2xl font-bold text-neutral-800 mb-2">DATA & REPORTING CAPABILITIES</h2>
                <p className="text-sm text-neutral-600">
                  Comprehensive analytics and reporting solutions providing actionable insights for informed decision-making
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                {dataFeatures.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologyAndData 