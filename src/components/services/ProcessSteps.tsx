import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, Users, Code, Rocket, Settings, Award } from 'lucide-react'

interface ProcessStep {
  id: number
  title: string
  description: string
  details: string[]
  icon: React.ElementType
}

const ProcessSteps: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements.",
      details: [
        "Initial consultation and requirements gathering",
        "Market research and competitor analysis",
        "Project scope definition and timeline",
        "Budget planning and resource allocation",
        "Technical requirements assessment"
      ],
      icon: Users
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description: "Our design team creates wireframes, mockups, and interactive prototypes.",
      details: [
        "User experience (UX) design and wireframing",
        "Visual design and branding integration",
        "Interactive prototype development",
        "User interface (UI) design and refinement",
        "Design system creation and documentation"
      ],
      icon: Code
    },
    {
      id: 3,
      title: "Development & Testing",
      description: "We build your solution using best practices and rigorous testing protocols.",
      details: [
        "Frontend and backend development",
        "Database design and implementation",
        "API development and integration",
        "Quality assurance and testing",
        "Performance optimization and security"
      ],
      icon: Settings
    },
    {
      id: 4,
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support and maintenance.",
      details: [
        "Production deployment and go-live",
        "Performance monitoring and optimization",
        "User training and documentation",
        "Ongoing maintenance and updates",
        "24/7 technical support and monitoring"
      ],
      icon: Rocket
    }
  ]

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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a proven 4-step process to ensure your project is delivered on time, on budget, and exceeds your expectations.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-200 to-gray-300 hidden lg:block"></div>
            
            <div className="space-y-20">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon
                const isEven = index % 2 === 0
                
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-12 h-12 bg-gray-900 rounded-full border-4 border-white shadow-lg hidden lg:flex items-center justify-center z-10">
                      <span className="text-white font-bold text-lg">{step.id}</span>
                    </div>
                    
                    {/* Mobile Timeline Dot */}
                    <div className="lg:hidden flex justify-center mb-8">
                      <div className="w-12 h-12 bg-gray-900 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{step.id}</span>
                      </div>
                    </div>
                    
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Content */}
                      <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                        <div className="flex items-center mb-6">
                          <div className="bg-gray-100 p-3 rounded-full mr-4">
                            <IconComponent className="h-8 w-8 text-gray-700" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <div className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Visual */}
                      <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <img
                            src={`https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20${step.title.replace(/\s+/g, '%20')}%20workspace%2C%20modern%20tech%20environment%2C%20collaborative%20team%2C%20professional%20office%20setup&image_size=landscape_16_9`}
                            alt={step.title}
                            className="w-full h-80 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-gray-800 font-semibold text-sm">Step {step.id}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Process Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-gray-100 to-gray-50 rounded-3xl p-12"
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Our Process Works</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-gray-700" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Efficient Timeline</h4>
                <p className="text-gray-700">
                  Our streamlined process ensures your project is completed on time without compromising quality.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-gray-700" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Quality Assurance</h4>
                <p className="text-gray-700">
                  Multiple quality checkpoints throughout the process ensure exceptional results every time.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-gray-700" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Client Collaboration</h4>
                <p className="text-gray-700">
                  Regular updates and feedback sessions keep you involved throughout the entire process.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and show you how our proven process can bring your vision to life.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps