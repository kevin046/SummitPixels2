import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, ExternalLink, Award } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Web Development', href: '/services#web-development' },
      { name: 'Mobile Apps', href: '/services#mobile-app-development' },
      { name: 'UI/UX Design', href: '/services#ui-ux-design' },
      { name: 'Custom Software', href: '/services#web-development' },
      { name: 'E-Commerce', href: '/services#e-commerce-solutions' },
      { name: 'Digital Strategy', href: '/services#digital-marketing' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Whitepapers', href: '#resources' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Support', href: '#support' },
      { name: 'FAQ', href: '#faq' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  }

  const awards = [
    { name: 'Top Web Dev Agency 2025', image: '🏆' },
    { name: 'Clutch Top Developer', image: '⭐' },
    { name: 'Google Partner', image: '🎯' },
    { name: 'Microsoft Certified', image: '💎' }
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'Twitter', href: '#', icon: 'tw' },
    { name: 'GitHub', href: '#', icon: 'gh' },
    { name: 'Instagram', href: '#', icon: 'ig' }
  ]

  const recentPosts = [
    {
      title: 'The Future of Web Development in 2025',
      date: 'Dec 15, 2024',
      href: '#blog'
    },
    {
      title: 'Why React Native is Perfect for Startups',
      date: 'Dec 10, 2024',
      href: '#blog'
    },
    {
      title: 'Building Scalable E-Commerce Platforms',
      date: 'Dec 5, 2024',
      href: '#blog'
    }
  ]

  return (
    <footer className="bg-accent text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-white/90 rounded-md p-2 flex items-center">
        <img
          src="/branding/Summit%20Pixels%20Logo.svg"
          alt="SummitPixels Logo"
          className="h-8 md:h-10 w-auto"
          loading="lazy"
          decoding="async"
        />
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">
                We craft exceptional digital experiences that drive business growth. 
                From web development to mobile apps, we bring your vision to life with 
                cutting-edge technology and innovative design.
              </p>
            </div>

            {/* Awards */}
            <div>
              <h4 className="font-semibold text-white mb-4 flex items-center space-x-2">
                <Award className="w-5 h-5 text-gray-300" />
                <span>Awards & Recognition</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm"
                  >
                    <div className="text-2xl mb-1">{award.image}</div>
                    <div className="text-xs text-white/80 leading-tight">{award.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm flex items-center space-x-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm flex items-center space-x-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Recent Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Recent Blog Posts</h4>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-white/30 pl-4"
                >
                  <a
                    href={post.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium leading-tight block mb-1"
                  >
                    {post.title}
                  </a>
                  <div className="text-white/70 text-xs">{post.date}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-bold text-white mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Get the latest insights on web development, mobile apps, and digital transformation.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer - blend with main footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/80 text-sm">
              © {currentYear} Summit <span className="text-blue-300">Pixels</span> Inc. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300 font-semibold"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-white/70 text-xs">
              Made with ❤️ in Toronto, Canada • 
              <span className="text-blue-300">SummitPixels.com</span> • 
              Leading digital transformation since 2014
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
