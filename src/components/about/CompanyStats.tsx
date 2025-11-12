import React from 'react'
import { motion } from 'framer-motion'
import { Users, Briefcase, Award, Globe } from 'lucide-react'

const CompanyStats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: "40+",
      label: "Happy Clients",
      color: "blue"
    },
    {
      icon: Briefcase,
      number: "30+",
      label: "Projects Completed",
      color: "teal"
    },
    {
      icon: Award,
      number: "3",
      label: "Industry Recognitions",
      color: "blue"
    },
    {
      icon: Globe,
      number: "5+",
      label: "Countries Served",
      color: "teal"
    }
  ]

  return (
<section className="relative overflow-hidden py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Here are some grounded milestones that reflect a solo developer’s consistent, high-quality work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              const isBlue = stat.color === "blue"
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${isBlue ? 'bg-gray-800' : 'bg-teal-500'} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="mb-2"
                  >
                    <span className="text-4xl md:text-5xl font-bold block text-gray-900">
                      {stat.number}
                    </span>
                  </motion.div>
                  
                  <p className="text-gray-600 text-lg font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
className="mt-20 pt-16 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-2 text-gray-900"
                >
                  95%
                </motion.div>
                <p className="text-gray-600">Client Satisfaction Rate</p>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-2 text-gray-900"
                >
                  4.8/5
                </motion.div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-2 text-gray-900"
                >
                  Mon–Fri
                </motion.div>
                <p className="text-gray-600">Support Availability</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
className="mt-20 pt-16 border-t border-gray-200"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">What Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<blockquote className="bg-gray-100 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 italic mb-4">
                  "SummitPixels transformed our digital presence completely. Their expertise and dedication exceeded our expectations."
                </p>
                <footer className="text-gray-600 font-semibold">- Jennifer Martinez, CEO TechCorp</footer>
              </blockquote>
              <blockquote className="bg-teal-100 rounded-xl p-6 border border-teal-200">
                <p className="text-gray-700 italic mb-4">
                  "Working with SummitPixels was a game-changer. They delivered on time and the results speak for themselves."
                </p>
                <footer className="text-gray-600 font-semibold">- Robert Chen, Marketing Director</footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
<div className="pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-gray-200/40 z-0"></div>
<div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-transparent to-gray-100/40 z-0"></div>
    </section>
  )
}

export default CompanyStats