import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Heart, Clock, Award, MapPin } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'We put your users first, creating intuitive and engaging experiences that drive results.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every project is measured by its impact on your business goals and ROI.'
    },
    {
      icon: Heart,
      title: 'Passion for Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
      icon: Clock,
      title: 'Agile Development',
      description: 'Iterative development process ensures flexibility and rapid delivery.'
    }
  ]

  const stats = [
    { number: '50+', label: 'Expert Team Members' },
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years in Business' }
  ]

  const locations = [
    { city: 'Toronto', country: 'Canada', address: '1200 Bay Street, Suite 202, Toronto, ON M5R 2A5' },
    { city: 'Vancouver', country: 'Canada', address: '456 Granville Street, Vancouver, BC V6C 1T2' },
    { city: 'New York', country: 'USA', address: '789 Broadway, New York, NY 10003' }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Summit <span className="text-blue-600">Pixels</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a development agency – we're your strategic partner in digital transformation.
          </p>
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="prose prose-lg text-gray-600">
              <p>
                Founded in 2014, Summit Pixels was born from a simple belief: that exceptional digital experiences 
                can transform businesses and improve people's lives. What started as a small team of passionate 
                developers has grown into a full-service digital agency with over 50 experts.
              </p>
              <p>
                We blend creativity with code to deliver pixel-perfect digital solutions. Our team specializes in 
                scalable web and app architectures, user-centric design, and cutting-edge technologies that drive 
                real business results.
              </p>
              <p>
                Today, we're proud to have helped hundreds of businesses across North America achieve their 
                digital goals, from startups to Fortune 500 companies.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Award className="w-5 h-5" />
              <span>View Our Awards</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <img
                src="https://via.placeholder.com/800x400/111827/FFFFFF?text=Summit+Pixels+Team"
                alt="Summit Pixels Team"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Our Expert Team</h4>
                <p className="text-gray-600">
                  50+ dedicated professionals across development, design, and strategy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-surface rounded-2xl p-8 md:p-12 text-primary mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-secondary text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-gray-600 mr-2" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{location.city}</h4>
                    <p className="text-gray-600 text-sm">{location.country}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{location.address}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-gray-700 font-semibold text-sm hover:text-gray-900 transition-colors duration-300"
                >
                  View on Map →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About