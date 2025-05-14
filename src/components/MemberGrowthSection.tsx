'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineGlobeAlt, HiOutlineClock, HiOutlineCheckCircle, HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineStar, HiOutlineChartBar, HiOutlineShieldCheck, HiOutlineArrowPath, HiOutlineScale, HiOutlineCog, HiOutlineAcademicCap, HiOutlineLanguage, HiOutlineComputerDesktop, HiOutlineCake, HiOutlineTruck, HiOutlineGift, HiOutlineCalendar, HiOutlineHeart } from 'react-icons/hi2'

const memberFeatures = [
  {
    icon: <HiOutlineAcademicCap className="text-primary-500" />,
    title: 'Top Talent Recruitment',
    description: 'Hiring from premier institutions',
    stats: 'Elite Universities',
    bullets: ['Top universities', 'English-medium schools', 'High academic standards']
  },
  {
    icon: <HiOutlineLanguage className="text-primary-500" />,
    title: 'Language Excellence',
    description: 'Superior English proficiency',
    stats: '100% Bilingual',
    bullets: ['Fluent English', 'Written expertise', 'Clear communication']
  },
  {
    icon: <HiOutlineComputerDesktop className="text-primary-500" />,
    title: 'Technical Expertise',
    description: 'Advanced technical skills',
    stats: 'Tech-Savvy Team',
    bullets: ['System adaptability', 'Digital proficiency', 'Quick learning']
  }
]

const growthFeatures = [
  {
    icon: <HiOutlineUserGroup className="text-primary-500" />,
    title: 'Employee Retention',
    description: 'Long-term team stability',
    stats: '98% Retention',
    bullets: ['Career growth', 'Team loyalty', 'Long-term commitment']
  }
]

const transitionFeatures = [
  {
    icon: <HiOutlineCake className="text-primary-500" />,
    title: 'Daily Benefits',
    description: 'Free Meals and Unlimited Snacks, Tea and Coffee',
    stats: 'Full Benefits',
    bullets: ['Free meals', 'Unlimited snacks', 'Beverage service']
  },
  {
    icon: <HiOutlineTruck className="text-primary-500" />,
    title: 'Transportation',
    description: 'Convenient travel support',
    stats: 'Door-to-Door',
    bullets: ['Drop-off service', 'Safe travel', 'Flexible timing']
  },
  {
    icon: <HiOutlineGift className="text-primary-500" />,
    title: 'Performance Rewards',
    description: 'Recognition and incentives',
    stats: 'Annual Bonus',
    bullets: ['Yearly bonus', 'Performance rewards', 'Career growth']
  },
  {
    icon: <HiOutlineCalendar className="text-primary-500" />,
    title: 'U.S. Holiday Schedule',
    description: 'American holiday observance',
    stats: 'Paid Holidays',
    bullets: ['U.S. holidays', 'Paid time off', 'Work-life balance']
  },
  {
    icon: <HiOutlineHeart className="text-primary-500" />,
    title: 'Team Culture',
    description: 'Strong collaborative environment',
    stats: 'Team-Focused',
    bullets: ['Team bonding', 'Supportive culture', 'Positive environment']
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
      <div className="absolute inset-y-0 left-0 w-full bg-black/50" />
      
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
            <h2 className="text-lg font-medium text-white">Our Recruitment Process</h2>
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
            <h2 className="text-lg font-medium text-white">Employee Retention</h2>
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
            <h2 className="text-lg font-medium text-white">Why Employees Stay</h2>
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