'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import MemberGrowthSection from '@/components/MemberGrowthSection'
import Workforce from '@/components/Workforce'
import TechnologyAndData from '@/components/TechnologyAndData'
import Compliance from '@/components/Compliance'
import Results from '@/components/Results'
import Team from '@/components/Team'
import Clients from '@/components/Clients'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="member-growth">
          <MemberGrowthSection />
        </section>
        <section id="technology">
          <TechnologyAndData />
        </section>
        <section id="results">
          <Results />
        </section>
        {/* <section id="team">
          <Team />
        </section> */}
        {/* <section id="workforce">
          <Workforce />
        </section> */}
        <section id="clients">
          <Clients />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
} 