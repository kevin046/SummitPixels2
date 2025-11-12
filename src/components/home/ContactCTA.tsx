import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Let's work together to bring your digital vision to life. Get in touch with our team and let's discuss how we can help transform your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gray-800 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-gray-700">hello@summitpixels.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gray-800 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <p className="text-gray-700">647-873-8818</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gray-800 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Visit Us</h4>
                    <p className="text-gray-700">
                      1200 Bay Street, Suite 202<br />
                      Toronto, ON M5R 2A5, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-gray-800 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Business Hours</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-6">Quick Contact</h3>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-700 text-sm">
                  Or schedule a consultation:{' '}
                  <Link
                    to="/contact"
                    className="text-gray-900 font-semibold hover:text-gray-700 transition-colors underline"
                  >
                    Book a Call
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-gray-200/40"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-gray-200/40"></div>
    </section>
  )
}

export default ContactCTA