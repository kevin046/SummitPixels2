import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Award, TrendingUp } from 'lucide-react'

const MissionVision: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our mission drives everything we do, and our vision guides us toward the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gray-800 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We strive to be the trusted partner that transforms ideas into reality through cutting-edge technology and exceptional service.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2"></div>
                  <p className="text-gray-600">Deliver exceptional quality in every project</p>
                </div>
                <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2"></div>
                  <p className="text-gray-600">Foster long-term partnerships with clients</p>
                </div>
                <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2"></div>
                  <p className="text-gray-600">Drive innovation through continuous learning</p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-teal-500 p-3 rounded-full mr-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To be the leading digital transformation partner recognized for innovation, excellence, and creating meaningful impact. We envision a future where technology seamlessly enhances human potential and drives positive change in businesses and communities worldwide.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Lead the industry in digital innovation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Expand global reach and impact</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Shape the future of technology</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gray-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-gray-700" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We strive for excellence in everything we do, from code quality to client service.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-teal-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We believe in the power of teamwork and building strong partnerships with our clients.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gray-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-gray-700" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We embrace innovation and continuously explore new technologies and approaches.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-teal-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-teal-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Growth</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're committed to continuous learning and helping our clients grow their businesses.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision