import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, TrendingUp, Users, Clock, Star, ChevronLeft, ChevronRight, X } from 'lucide-react'

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform for Retail Giant',
      description: 'Complete digital transformation of a major retail chain with a modern e-commerce platform.',
      image: 'https://via.placeholder.com/800x600/1E3A8A/FFFFFF?text=E-Commerce+Platform',
      techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
      metrics: [
        { label: 'Traffic Boost', value: '300%', icon: TrendingUp },
        { label: 'Conversion Rate', value: '45%', icon: Users },
        { label: 'Project Duration', value: '6 months', icon: Clock },
        { label: 'Client Rating', value: '5/5', icon: Star }
      ],
      problem: 'Legacy e-commerce platform with poor user experience and low conversion rates.',
      solution: 'Built a modern, responsive e-commerce platform with advanced search, personalized recommendations, and seamless checkout.',
      results: 'Increased online sales by 300% and improved customer satisfaction significantly.'
    },
    {
      id: 2,
      title: 'Custom CRM App for FinTech Startup',
      description: 'Revolutionary CRM system designed specifically for financial technology companies.',
      image: 'https://via.placeholder.com/800x600/0D9488/FFFFFF?text=CRM+Mobile+App',
      techStack: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      metrics: [
        { label: 'User Engagement', value: '2x', icon: TrendingUp },
        { label: 'Active Users', value: '10K+', icon: Users },
        { label: 'Development Time', value: '4 months', icon: Clock },
        { label: 'App Store Rating', value: '4.8/5', icon: Star }
      ],
      problem: 'Financial advisors needed a unified platform to manage client relationships and track investments.',
      solution: 'Developed a comprehensive CRM with real-time data analytics, automated reporting, and mobile accessibility.',
      results: 'Doubled user engagement and streamlined financial advisory processes.'
    },
    {
      id: 3,
      title: 'Healthcare Web Platform Redesign',
      description: 'Complete redesign of a healthcare provider\'s digital presence with patient-focused features.',
      image: 'https://via.placeholder.com/800x600/1E3A8A/FFFFFF?text=Healthcare+Platform',
      techStack: ['Vue.js', 'Express.js', 'MySQL', 'Docker'],
      metrics: [
        { label: 'Page Load Speed', value: '85% faster', icon: TrendingUp },
        { label: 'Patient Satisfaction', value: '92%', icon: Users },
        { label: 'Project Timeline', value: '5 months', icon: Clock },
        { label: 'Accessibility Score', value: 'AA+', icon: Star }
      ],
      problem: 'Outdated website with poor accessibility and difficult appointment booking process.',
      solution: 'Created a modern, accessible platform with streamlined appointment scheduling and patient portal integration.',
      results: 'Improved patient satisfaction by 92% and reduced administrative workload significantly.'
    },
    {
      id: 4,
      title: 'Real Estate Management System',
      description: 'Comprehensive property management platform for real estate professionals.',
      image: 'https://via.placeholder.com/800x600/0D9488/FFFFFF?text=Real+Estate+System',
      techStack: ['Angular', 'Firebase', 'Stripe', 'Google Maps API'],
      metrics: [
        { label: 'Property Views', value: '500% increase', icon: TrendingUp },
        { label: 'Agent Efficiency', value: '3x faster', icon: Users },
        { label: 'Launch Date', value: '3 months', icon: Clock },
        { label: 'User Rating', value: '4.7/5', icon: Star }
      ],
      problem: 'Real estate agents struggled with managing multiple property listings and client communications.',
      solution: 'Built an integrated platform with automated workflows, virtual tours, and client management tools.',
      results: 'Increased property views by 500% and improved agent productivity threefold.'
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="portfolio" className="section-padding bg-white">
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
            Our Impactful Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </motion.div>

        {/* Portfolio Carousel */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProject}
              className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <div className="text-center">
              <span className="text-gray-900 font-semibold">
                {currentProject + 1} / {projects.length}
              </span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextProject}
              className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {projects[currentProject].title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {projects[currentProject].description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].techStack.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {projects[currentProject].metrics.map((metric) => {
                        const Icon = metric.icon
                        return (
                          <motion.div
                            key={metric.label}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-50 p-4 rounded-lg text-center"
                          >
                            <Icon className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                            <div className="text-sm text-gray-600">{metric.label}</div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(currentProject)}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <span>View Case Study</span>
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {projects[selectedProject].title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">The Challenge</h4>
                    <p className="text-gray-600">{projects[selectedProject].problem}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Solution</h4>
                    <p className="text-gray-600">{projects[selectedProject].solution}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">The Results</h4>
                    <p className="text-gray-600">{projects[selectedProject].results}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">More Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
                onClick={() => setCurrentProject(index)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-semibold text-sm">{project.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio