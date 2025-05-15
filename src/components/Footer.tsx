'use client'

import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Culture', href: '#services' },
  { name: 'About', href: '#about' },
  // { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
]

const services = [
  { name: 'Customer Support', href: '#services' },
  { name: 'Multilingual Support', href: '#services' },
  { name: 'Analytics & Reporting', href: '#services' },
  { name: 'Security & Compliance', href: '#services' }
]

const socialLinks = [
  { icon: <FaFacebook className="text-white" />, href: 'https://facebook.com' },
  { icon: <FaTwitter className="text-white" />, href: 'https://twitter.com' },
  { icon: <FaLinkedin className="text-white" />, href: 'https://linkedin.com' },
  { icon: <FaInstagram className="text-white" />, href: 'https://instagram.com' }
]

const Footer = () => {
  return (
    <footer className="relative bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Reliance Partners</h3>
            <p className="text-neutral-400 mb-4">
              Transforming customer service with innovative solutions and exceptional support
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="glass-card p-3 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  {link.icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-neutral-400">
                <a href="mailto:support@callcenter.com" className="hover:text-white transition-colors">
                  info@reliancepartners.services
                </a>
              </li>
              <li className="text-neutral-400">
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  (917) 704-5580
                </a>
              </li>
              <li className="text-neutral-400">
                175-61 Hillside Avenue Suite 403 <br /> Jamaica, NY 11432
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Reliance IT. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 