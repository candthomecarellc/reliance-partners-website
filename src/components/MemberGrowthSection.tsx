'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineGlobeAlt, HiOutlineClock, HiOutlineCheckCircle, HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineStar, HiOutlineChartBar, HiOutlineShieldCheck, HiOutlineArrowPath, HiOutlineScale, HiOutlineCog } from 'react-icons/hi2'

const memberFeatures = [
  {
    icon: <HiOutlineGlobeAlt className="text-primary-500" />,
    title: 'Multilingual Support',
    description: 'Comprehensive language assistance',
    stats: '15+ Languages',
    bullets: ['Native speakers', 'Cultural understanding', 'Accurate translations']
  },
  {
    icon: <HiOutlineClock className="text-primary-500" />,
    title: '24x7 Help Desk',
    description: 'Round-the-clock assistance',
    stats: '99.9% Uptime',
    bullets: ['Always available', 'Quick response', 'Emergency support']
  },
  {
    icon: <HiOutlineCheckCircle className="text-primary-500" />,
    title: 'High First-Call Resolution',
    description: 'Efficient problem solving',
    stats: '95% Resolution Rate',
    bullets: ['Expert agents', 'Comprehensive training', 'Efficient processes']
  },
  {
    icon: <HiOutlineLightBulb className="text-primary-500" />,
    title: 'Rapid Response Time',
    description: 'Quick assistance delivery',
    stats: '< 30s Average',
    bullets: ['Optimized workflows', 'Smart routing', 'Priority handling']
  },
  {
    icon: <HiOutlineUserGroup className="text-primary-500" />,
    title: 'Personalized Teams',
    description: 'Dedicated support specialists',
    stats: '100% Dedicated',
    bullets: ['Custom protocols', 'Team consistency', 'Member familiarity']
  },
  {
    icon: <HiOutlineStar className="text-primary-500" />,
    title: 'Strong Satisfaction',
    description: 'Exceptional member feedback',
    stats: '98% NPS Score',
    bullets: ['Quality focus', 'Continuous improvement', 'Member feedback']
  }
]

const growthFeatures = [
  {
    icon: <HiOutlineChartBar className="text-primary-500" />,
    title: 'Sales Funnel',
    description: 'Optimized conversion process',
    stats: '30% Conversion Rate',
    bullets: ['Lead generation', 'Qualification', 'Conversion tracking']
  },
  {
    icon: <HiOutlineUserGroup className="text-primary-500" />,
    title: 'Community Engagement',
    description: 'Active member involvement',
    stats: '85% Engagement',
    bullets: ['Events', 'Feedback', 'Member support']
  },
  {
    icon: <HiOutlineShieldCheck className="text-primary-500" />,
    title: 'Compliance Expertise',
    description: 'Regulatory compliance focus',
    stats: '100% Compliant',
    bullets: ['Audits', 'Documentation', 'Training']
  },
  {
    icon: <HiOutlineArrowPath className="text-primary-500" />,
    title: 'Retention Strategies',
    description: 'Member retention focus',
    stats: '95% Retention',
    bullets: ['Loyalty programs', 'Feedback loops', 'Personalized care']
  }
]

const transitionFeatures = [
  {
    icon: <HiOutlineArrowPath className="text-primary-500" />,
    title: 'Smooth Transition',
    description: 'Seamless process transfer',
    stats: '100% Success',
    bullets: ['Planning', 'Execution', 'Monitoring']
  },
  {
    icon: <HiOutlineScale className="text-primary-500" />,
    title: 'Scalable Solutions',
    description: 'Flexible growth options',
    stats: 'Unlimited Scale',
    bullets: ['Resource allocation', 'Capacity planning', 'Growth support']
  },
  {
    icon: <HiOutlineChartBar className="text-primary-500" />,
    title: 'Performance Tracking',
    description: 'Continuous monitoring',
    stats: 'Real-time Metrics',
    bullets: ['KPIs', 'Progress tracking', 'Performance analysis']
  },
  {
    icon: <HiOutlineCog className="text-primary-500" />,
    title: 'Process Optimization',
    description: 'Efficiency improvements',
    stats: '30% Efficiency',
    bullets: ['Workflow analysis', 'Process refinement', 'Continuous improvement']
  }
]

const FeatureCard = ({ feature, index }: { feature: typeof memberFeatures[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 hover:bg-white/20 transition-all duration-300"
  >
    <div className="flex items-center mb-2">
      <div className="mr-3">
        {React.cloneElement(feature.icon, { className: "text-white w-8 h-8" })}
      </div>
      <div>
        <h3 className="text-base font-semibold text-white">{feature.title}</h3>
        <p className="text-xs font-medium text-white/80">{feature.stats}</p>
      </div>
    </div>
    <p className="text-sm text-white/80">{feature.description}</p>
  </motion.div>
)

const MemberGrowthSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url(/images/backgrounds/member-growth.jpg)'
        }}
      />
        
      {/* Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-full md:w-3/4 lg:w-3/4 bg-gradient-to-r from-neutral-900 via-neutral-900 to-transparent" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Member Experience Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-lg font-medium text-white">EXCELLENT MEMBER EXPERIENCE</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {memberFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Growth Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-lg font-medium text-white">GROWTH & RETENTION FOCUS</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {growthFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Transition & Scalability Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-lg font-medium text-white">TRANSITION & SCALABILITY</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {transitionFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemberGrowthSection 