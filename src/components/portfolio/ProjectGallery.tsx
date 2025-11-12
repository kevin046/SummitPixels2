import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Filter } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  category: string
  technologies: string[]
  imageUrl: string
  projectUrl?: string
  githubUrl?: string
  featured: boolean
}

const ProjectGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Elite Renovation Works',
      description: 'Comprehensive contractor website with services, galleries, testimonials, contact forms, responsive design, SEO, and admin CMS.',
      category: 'contractor',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80',
      projectUrl: 'https://www.eliterenovationworks.ca',
      featured: true
    },
    {
      id: 2,
      title: 'BlitzT Club Non-Profit',
      description: 'Membership-focused site with events calendar, forums, donations, news, secure auth, and WCAG accessibility.',
      category: 'nonprofit',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Auth'],
      imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=60',
      projectUrl: 'https://www.blitztclub.com',
      featured: true
    },
    {
      id: 3,
      title: 'FixRez AI Resume Optimizer',
      description: 'AI-powered resume optimization with scoring, keyword optimization, formatting suggestions, downloads, and success tracking.',
      category: 'ai-tech',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'AI Services'],
      imageUrl: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1200&q=60',
      projectUrl: 'https://www.fixrez.com',
      featured: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'contractor', name: 'Contractor' },
    { id: 'nonprofit', name: 'Non-Profit' },
    { id: 'ai-tech', name: 'AI/Tech' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of successful projects and see how we've helped businesses transform their digital presence.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gray-900/90 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex space-x-4">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="View Project"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                          aria-label="View Code"
                        >
                          <Github className="h-6 w-6" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 hover:text-gray-700 font-semibold transition-colors duration-200"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Filter className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectGallery