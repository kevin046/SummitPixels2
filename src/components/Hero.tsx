import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, TrendingUp, Users, DollarSign, Award } from 'lucide-react'

const Hero = () => {
  const statsConfig = [
    { id: 'projects', target: 500, label: 'Projects Delivered', icon: TrendingUp },
    { id: 'satisfaction', target: 98, label: 'Client Satisfaction', icon: Users },
    { id: 'revenue', target: 50, label: 'Revenue Generated', icon: DollarSign },
    { id: 'years', target: 10, label: 'Years Expertise', icon: Award },
  ]

  const [stats, setStats] = useState(
    statsConfig.map((s) => ({ id: s.id, value: 0, label: s.label, icon: s.icon }))
  )

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setStats(
          statsConfig.map((s) => ({
            id: s.id,
            value: Math.floor(s.target * progress),
            label: s.label,
            icon: s.icon,
          }))
        )

        if (currentStep >= steps) {
          clearInterval(interval)
          setStats(
            statsConfig.map((s) => ({ id: s.id, value: s.target, label: s.label, icon: s.icon }))
          )
        }
      }, stepDuration)
    }

    const timer = setTimeout(animateStats, 800)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient - neutral light palette */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, var(--bg-main) 0%, var(--surface-secondary) 100%)',
            'linear-gradient(135deg, #FAFAFA 0%, #EDEDED 100%)',
            'linear-gradient(135deg, var(--bg-main) 0%, var(--surface-secondary) 100%)',
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Animated Accents */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-black/5 rounded-full"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-black/5 rounded-full"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center text-primary">
          {/* Branding removed per request */}
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Professional Web Development in Toronto
              <span className="block text-blue-600">
                Summit Pixels
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-secondary leading-relaxed"
          >
            At Summit <span className="text-blue-600">Pixels</span>, we craft bespoke digital experiences that drive growth, 
            innovation, and seamless user engagement for startups, enterprises, and brands worldwide.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center p-4 bg-surface rounded-xl border border-black/10"
                >
                  <Icon className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-primary">
                    {stat.value}
                    {stat.id === 'satisfaction' ? '%' : stat.id === 'revenue' ? 'M+' : stat.id === 'projects' ? '+' : ''}
                  </div>
                  <div className="text-sm text-secondary">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#services')}
              className="btn-primary px-8 py-4 text-lg"
            >
              Explore Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#portfolio')}
              className="btn-secondary px-8 py-4 text-lg"
            >
              View Portfolio
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => scrollToSection('#services')}
            >
              <ArrowDown className="w-6 h-6 text-gray-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default Hero