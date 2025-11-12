import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
  <footer className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-32 w-32 md:h-40 md:w-40 rounded-lg">
                <img
                  src="/branding/Summit%20Pixels%20Logo.svg"
                  alt="Summit Pixels logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-bold text-xl">
                <span className="text-gray-900">Summit</span>
                <span className="text-blue-600">Pixels</span>
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Transforming businesses through innovative digital solutions. We create exceptional web experiences that drive results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-gray-700 transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-gray-600 hover:text-gray-700 transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-600 hover:text-gray-700 transition-colors text-sm">
                Services
              </Link>
              <Link to="/portfolio" className="block text-gray-600 hover:text-gray-700 transition-colors text-sm">
                Portfolio
              </Link>
              <Link to="/contact" className="block text-gray-600 hover:text-gray-700 transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Services</h3>
            <nav className="space-y-2">
              <Link to="/services#web-development" className="block text-gray-600 hover:text-gray-700 transition-colors text-sm">
                Web Development
              </Link>
              <Link to="/services#mobile-app-development" className="block text-gray-600 hover:text-gray-700 transition-colors text-sm">
                App Development
              </Link>
              <Link to="/services#ui-ux-design" className="block text-gray-600 hover:text-gray-700 transition-colors text-sm">
                UI/UX Design
              </Link>
              <Link to="/services#digital-marketing" className="block text-gray-600 hover:text-gray-700 transition-colors text-sm">
                Digital Marketing
              </Link>
              <Link to="/services#seo-optimization" className="block text-gray-600 hover:text-gray-700 transition-colors text-sm">
                SEO Optimization
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gray-700 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">hello@summitpixels.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gray-700 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">647-873-8818</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-700 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">1200 Bay Street, Suite 202<br />Toronto, ON M5R 2A5, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">© 2025 Summit<span className="text-blue-600">Pixels</span>. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Link to="/terms" className="text-gray-600 hover:text-gray-700 transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-600 hover:text-gray-700 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer