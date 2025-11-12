import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react'

interface CaseStudy {
  id: number
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  imageUrl: string
}

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "E-Commerce Transformation",
      client: "Fashion Forward",
      industry: "Retail & E-Commerce",
      challenge: "Legacy e-commerce platform with poor user experience, slow loading times, and declining conversion rates.",
      solution: "Complete platform rebuild with modern React-based frontend, optimized backend architecture, and integrated payment solutions.",
      results: [
        {
          metric: "Conversion Rate",
          value: "+150%",
          description: "Improved from 1.2% to 3.0%"
        },
        {
          metric: "Page Load Speed",
          value: "-70%",
          description: "Reduced from 8s to 2.4s"
        },
        {
          metric: "Mobile Traffic",
          value: "+200%",
          description: "Mobile users increased significantly"
        }
      ],
      imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20e-commerce%20website%20interface%2C%20fashion%20retail%20platform%2C%20clean%20product%20listings%2C%20professional%20shopping%20experience&image_size=landscape_16_9"
    },
    {
      id: 2,
      title: "Healthcare Platform Modernization",
      client: "MediCare Plus",
      industry: "Healthcare",
      challenge: "Outdated patient management system with poor user interface and limited mobile accessibility.",
      solution: "Developed a comprehensive web and mobile platform with real-time data synchronization and intuitive user interface.",
      results: [
        {
          metric: "Patient Satisfaction",
          value: "+85%",
          description: "Significant improvement in user ratings"
        },
        {
          metric: "Appointment Efficiency",
          value: "+60%",
          description: "Reduced booking time and no-shows"
        },
        {
          metric: "Staff Productivity",
          value: "+40%",
          description: "Streamlined workflows and processes"
        }
      ],
      imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Healthcare%20platform%20interface%2C%20medical%20dashboard%2C%20patient%20management%20system%2C%20professional%20healthcare%20UI&image_size=landscape_16_9"
    },
    {
      id: 3,
      title: "Financial Services Portal",
      client: "InvestPro",
      industry: "Finance",
      challenge: "Complex financial data visualization requirements with need for real-time updates and secure transactions.",
      solution: "Built a sophisticated dashboard with advanced charting capabilities and secure API integrations.",
      results: [
        {
          metric: "User Engagement",
          value: "+120%",
          description: "Increased time spent on platform"
        },
        {
          metric: "Data Accuracy",
          value: "99.9%",
          description: "Real-time data synchronization"
        },
        {
          metric: "Transaction Speed",
          value: "-50%",
          description: "Faster transaction processing"
        }
      ],
      imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Financial%20dashboard%20interface%2C%20investment%20platform%2C%20charts%20and%20graphs%2C%20professional%20finance%20UI&image_size=landscape_16_9"
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses achieve remarkable results through strategic digital transformation.
            </p>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-6">
                    <span className="text-gray-900 font-semibold text-sm uppercase tracking-wide">
                      {study.industry}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                      {study.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      <span className="font-semibold">Client:</span> {study.client}
                    </p>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="h-5 w-5 text-red-500 mr-2" />
                      The Challenge
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="h-5 w-5 text-green-500 mr-2" />
                      Our Solution
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <Users className="h-5 w-5 text-gray-700 mr-2" />
                      Results Achieved
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl text-center"
                        >
                          <div className="text-2xl font-bold text-gray-900 mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm font-semibold text-gray-900 mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs text-gray-600">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                    Read Full Case Study
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-800 font-semibold text-sm">Success Story</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-gradient-to-r from-gray-100 to-gray-50 rounded-3xl p-12"
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Ready to Write Your Success Story?</h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar remarkable results for your business.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies