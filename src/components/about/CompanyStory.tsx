import React from 'react'
import { motion } from 'framer-motion'

const CompanyStory: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to becoming a trusted digital partner, our journey is built on passion, innovation, and a commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg text-gray-600">
                <p className="text-lg leading-relaxed">
                  SummitPixels was founded in 2018 as a solo practice with a belief that technology can transform businesses and create meaningful digital experiences. What started from a single desk and a relentless curiosity has grown into a full‑service digital studio serving clients across Canada.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Many businesses struggle to find reliable, innovative partners who deliver both cutting‑edge solutions and exceptional service. SummitPixels bridges that gap by combining technical expertise with creative vision and a client‑first approach.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Today, SummitPixels continues that vision as a single‑member studio partnering with other professionals when needed. The core values remain the same: innovation, quality, and long‑term partnership.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20tech%20office%20workspace%20with%20developers%20collaborating%2C%20clean%20minimalist%20design%2C%20natural%20lighting%2C%20professional%20environment&image_size=landscape_16_9"
                  alt="SummitPixels Team Collaboration"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={384}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-teal-500 text-white p-4 rounded-full shadow-lg">
                <span className="text-2xl font-bold">5+</span>
                <span className="block text-xs">Years</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gray-900 text-white p-4 rounded-full shadow-lg">
                <span className="text-2xl font-bold">30+</span>
                <span className="block text-xs">Projects</span>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 pt-16 border-t border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
            
            <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
              
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2018 - Foundation</h3>
                    <p className="text-gray-600">Company founded with a vision to transform digital experiences</p>
                  </div>
            <div className="w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 text-left pl-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2019 - Growth</h3>
                    <p className="text-gray-600">Expanded team and service offerings, first major clients</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2021 - Innovation</h3>
                    <p className="text-gray-600">Launched mobile app development division, AI integration</p>
                  </div>
            <div className="w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 text-left pl-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2023 - Excellence</h3>
                    <p className="text-gray-600">Industry recognition, international expansion, 30+ projects completed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStory
