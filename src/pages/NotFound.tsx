import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/shared/SEOHead'

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <SEOHead
        title="404 - Page Not Found - SummitPixels"
        description="The page you're looking for doesn't exist. Navigate back to our homepage or explore our services."
        keywords={["404 error", "page not found", "SummitPixels"]}
      />
      
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound