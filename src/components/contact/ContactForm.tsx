import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, MessageSquare, Phone, Building } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const formAction = 'https://formsubmit.co/hello@summitpixels.com'
  // Formsubmit hidden fields
  const hiddenFields = {
    _subject: 'New inquiry from SummitPixels contact page',
    _next: 'https://summitpixels.com/contact?submitted=1',
    _captcha: 'true',
    _template: 'table',
    _autoresponse: 'Thanks for contacting Summit Pixels. We will reply shortly.',
    _honey: '',
    _replyto: formData.email
  }

  const subjects = [
    'General Inquiry',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'E-commerce Solutions',
    'Cloud Solutions',
    'Other'
  ]

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Let's discuss how we can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form action={formAction} method="POST" className="space-y-6">
                  {/* Hidden fields */}
                  {Object.entries(hiddenFields).map(([k, v]) => (
                    <input key={k} type="hidden" name={k} value={v} />
                  ))}
                  {/* Name Field */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
                        placeholder="647-873-8818"
                      />
                    </div>
                  </div>

                  {/* Company Field */}
                  <div className="relative">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 bg-gray-700 hover:bg-gray-600 text-white"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>

                  
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">hello@summitpixels.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">647-873-8818</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <Building className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        1200 Bay Street, Suite 202<br />
                        Toronto, ON M5R 2A5<br />
                        Canada
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-900">Closed</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-8 text-gray-900">
                <h3 className="text-2xl font-bold mb-4">Response Time</h3>
                <p className="text-gray-600 mb-4">
                  We typically respond to inquiries within 24 hours during business days.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Available for new projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
