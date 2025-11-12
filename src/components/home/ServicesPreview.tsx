import React from 'react'
import { motion } from 'framer-motion'
import { Code, Smartphone, Palette, TrendingUp, Shield, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    features: ['Responsive Design', 'Fast Performance', 'SEO Optimized']
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['iOS & Android', 'User-Friendly', 'Scalable']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that enhance user engagement and drive conversions.',
    features: ['User Research', 'Prototyping', 'Visual Design']
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions to grow your online presence and reach your target audience.',
    features: ['SEO', 'Social Media', 'Content Marketing']
  },
  {
    icon: Shield,
    title: 'Security Solutions',
    description: 'Comprehensive security measures to protect your digital assets and user data.',
    features: ['SSL Certificates', 'Regular Updates', 'Monitoring']
  },
  {
    icon: Users,
    title: 'Consulting',
    description: 'Expert guidance to help you make informed decisions about your digital strategy.',
    features: ['Strategy Planning', 'Technology Advice', 'Growth Planning']
  }
]

const ServicesPreview: React.FC = () => {
  const iconGradients: Record<string, string> = {
    'Web Development': 'from-blue-500 to-blue-600',
    'App Development': 'from-indigo-500 to-indigo-600',
    'UI/UX Design': 'from-orange-500 to-pink-500',
    'Digital Marketing': 'from-green-500 to-emerald-600',
    'Security Solutions': 'from-red-600 to-slate-800',
    'Consulting': 'from-teal-500 to-cyan-600'
  }

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern marketplace.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-300"
            >
              <div
                className={`flex items-center justify-center h-16 w-16 bg-gradient-to-br ${
                  iconGradients[service.title] || 'from-gray-200 to-gray-300'
                } rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Services
            <div className="ml-2">→</div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview