import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import OptimizedImage from '../OptimizedImage'

const featuredProjects = [
  {
    id: 1,
    title: 'Elite Renovation Works',
    description: 'Local contractor website with service listings, project galleries, testimonials, and contact forms. Responsive design, SEO best practices, and content management dashboard.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80',
    category: 'Contractor',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    link: 'https://www.eliterenovationworks.ca'
  },
  {
    id: 2,
    title: 'BlitzT Club Non-Profit',
    description: 'Membership-focused site for a Tesla enthusiast organization with events, forums, donations, and news. Secure authentication and accessibility features (WCAG).',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=60',
    category: 'Non-Profit',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Auth'],
    link: 'https://www.blitztclub.com'
  },
  {
    id: 3,
    title: 'FixRez AI Resume Optimizer',
    description: 'AI-powered resume optimization platform with scoring, keyword optimization, formatting suggestions, and downloadable optimized versions with success tracking.',
    image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1200&q=60',
    category: 'AI/Tech',
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'AI Services'],
    link: 'https://www.fixrez.com'
  }
]

const PortfolioPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses transform their digital presence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage
                  src={project.image}
                  alt={`${project.title} - Project Preview`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="eager"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      aria-label="View Project"
                    >
                      <Eye className="h-5 w-5 text-gray-900" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      aria-label="Open Project in New Tab"
                    >
                      <ExternalLink className="h-5 w-5 text-gray-900" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  to={project.link}
                  className="inline-flex items-center text-gray-800 hover:text-gray-900 font-medium transition-colors"
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
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
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioPreview