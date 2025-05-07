'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    quote: "The AI-powered solutions have transformed our customer service operations. Response times are faster, and customer satisfaction has increased significantly.",
    author: "Sarah Johnson",
    role: "Customer Service Director",
    company: "TechCorp Inc.",
    rating: 5
  },
  {
    quote: "Their 24/7 support team is exceptional. They've helped us maintain high service levels even during peak hours.",
    author: "Michael Chen",
    role: "Operations Manager",
    company: "Global Solutions",
    rating: 5
  },
  {
    quote: "The analytics and reporting tools provide valuable insights that help us make data-driven decisions.",
    author: "Emily Rodriguez",
    role: "Customer Experience Lead",
    company: "InnovateX",
    rating: 5
  },
  {
    quote: "The security measures and compliance standards give us peace of mind when handling sensitive customer data.",
    author: "David Wilson",
    role: "IT Security Manager",
    company: "SecureNet",
    rating: 5
  }
]

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col border border-white/20 hover:bg-white/20 transition-all duration-300"
  >
    <div className="flex mb-6">
      {[...Array(testimonial.rating)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400 w-5 h-5" />
      ))}
    </div>
    <FaQuoteLeft className="text-white/20 w-8 h-8 mb-6" />
    <p className="text-white/90 text-lg leading-relaxed mb-8 flex-grow">{testimonial.quote}</p>
    <div className="mt-auto pt-6 border-t border-white/10">
      <h4 className="text-white font-semibold text-xl mb-1">{testimonial.author}</h4>
      <p className="text-white/80 text-base mb-1">{testimonial.role}</p>
      <p className="text-white/60 text-sm">{testimonial.company}</p>
    </div>
  </motion.div>
)

const Testimonials = () => {
  return (
    <section className="relative py-32 bg-testimonials bg-fixed bg-overlay">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Trusted by leading companies worldwide for exceptional service delivery
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 