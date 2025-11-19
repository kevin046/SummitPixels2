import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Increased spacing - 120px top padding as specified in PRD */}
      <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-40 lg:pt-48">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center justify-center h-32 w-32 md:h-40 md:w-40 rounded-xl">
                <img
                  src="/branding/Summit%20Pixels%20Logo.svg"
                  alt="Summit Pixels Inc. - IT Services in Toronto"
                  className="h-full w-full object-contain"
                  loading="eager"
                />
              </div>
              <div className="text-left">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-gray-900">Summit</span>
                  <span className="text-blue-600">Pixels</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Headline - 48px as specified in PRD */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Transform Your Digital Presence
          </motion.h2>

          {/* Subheadline - 20px as specified in PRD */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            We craft exceptional digital experiences that elevate your brand and drive meaningful results. 
            From stunning websites to powerful applications, we bring your vision to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 border-2 border-gray-200 hover:border-gray-300"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="text-3xl font-bold text-gray-900">5.0</span>
              </div>
              <p className="text-gray-600">Client Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Rocket className="h-6 w-6 text-gray-800 mr-2" />
                <span className="text-3xl font-bold text-gray-900">30+</span>
              </div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-green-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">40+</span>
              </div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
    </section>
  )
}

export default Hero
