import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Palette, Code, ShoppingCart, Lightbulb } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with React, Next.js, and modern frameworks. Scalable, performant, and SEO-optimized.',
      features: ['React & Next.js', 'Responsive Design', 'SEO Optimization', 'Performance Focused'],
      color: 'from-gray-600 to-gray-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android. User-centric design with seamless performance.',
      features: ['iOS & Android', 'React Native', 'User-Centric Design', 'App Store Ready'],
      color: 'from-gray-600 to-gray-400'
    },
    {
      icon: Palette,
      title: 'UI/UX Design & Prototyping',
      description: 'Beautiful, intuitive interfaces that delight users. From wireframes to high-fidelity prototypes.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-gray-600 to-gray-400'
    },
    {
      icon: Code,
      title: 'Custom Software & Enterprise Solutions',
      description: 'Bespoke software solutions tailored to your business needs. Scalable architecture for enterprise growth.',
      features: ['Custom Development', 'Enterprise Architecture', 'API Integration', 'Scalable Solutions'],
      color: 'from-gray-600 to-gray-400'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Platforms',
      description: 'Complete e-commerce solutions with payment integration, inventory management, and analytics.',
      features: ['Payment Integration', 'Inventory Management', 'Analytics Dashboard', 'Mobile Commerce'],
      color: 'from-gray-600 to-gray-400'
    },
    {
      icon: Lightbulb,
      title: 'Digital Strategy & Consulting',
      description: 'Strategic guidance to transform your digital presence. Data-driven insights for business growth.',
      features: ['Digital Strategy', 'Market Analysis', 'Technology Consulting', 'Growth Planning'],
      color: 'from-gray-600 to-gray-400'
    }
  ]


  return (
    <section id="services" className="section-padding bg-main">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Tailored Digital Solutions for Your Vision
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            We deliver comprehensive digital solutions that transform businesses and create exceptional user experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-surface rounded-2xl p-8 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-secondary"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-surface rounded-2xl p-8 md:p-12 text-primary">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-xl mb-8 text-secondary">
              Let's discuss your project and create something extraordinary together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services