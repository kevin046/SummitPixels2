import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  categories: string[]
  projectCounts: Record<string, number>
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  selectedCategory,
  onCategoryChange,
  categories,
  projectCounts
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex flex-wrap justify-center gap-4">
        {/* All Filter */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange('all')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
            selectedCategory === 'all'
              ? 'bg-gray-900 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Projects
          <span className="ml-2 text-sm opacity-75">
            ({Object.values(projectCounts).reduce((a, b) => a + b, 0)})
          </span>
        </motion.button>

        {/* Category Filters */}
        <AnimatePresence>
          {categories.map((category) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
              <span className="ml-2 text-sm opacity-75">
                ({projectCounts[category] || 0})
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Active Filter Indicator */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-gray-600">
          Showing {selectedCategory === 'all' ? 'all' : selectedCategory} projects
          {selectedCategory !== 'all' && (
            <button
              onClick={() => onCategoryChange('all')}
              className="ml-2 text-gray-900 hover:text-gray-700 underline"
            >
              View all
            </button>
          )}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default ProjectFilters