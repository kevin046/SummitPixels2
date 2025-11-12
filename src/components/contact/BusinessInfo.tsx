import React from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe, 
  Users, 
  Award, 
  TrendingUp,
  ArrowRight
} from 'lucide-react'

const BusinessInfo: React.FC = () => {
  const businessStats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients"
    },
    {
      icon: Award,
      number: "50+",
      label: "Awards Won"
    },
    {
      icon: TrendingUp,
      number: "99%",
      label: "Client Satisfaction"
    }
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed responses within 24 hours",
      info: "hello@summitpixels.com",
      action: "Send Email",
      href: "mailto:hello@summitpixels.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our experts directly",
      info: "647-873-8818",
      action: "Call Now",
      href: "tel:6478738818"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Meet us at our office",
      info: "1200 Bay Street, Suite 202, Toronto, ON M5R 2A5, Canada",
      action: "Get Directions",
      href: "https://www.google.com/maps/search/?api=1&query=1200+Bay+Street+Suite+202+Toronto+ON+M5R+2A5+Canada"
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
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help you transform your digital presence. Reach out to us through any of these channels.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 group-hover:bg-gray-200 transition-colors">
                    <method.icon className="h-8 w-8 text-gray-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="font-semibold text-gray-900 mb-6">{method.info}</p>
                  <a
                    href={method.href}
                    className="inline-flex items-center text-gray-800 font-semibold hover:text-gray-900 transition-colors"
                  >
                    {method.action}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Business Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-3xl p-12 text-gray-900 mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Why Choose Summit <span className="text-blue-600">Pixels</span>?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're proud of our track record and commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-gray-700" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Office Hours & Location */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-gray-800 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-red-600">Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-800">
                  <strong>Response Time:</strong> We typically respond to inquiries within 24 hours during business days.
                </p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-gray-800 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Main Office</h4>
                  <p className="text-gray-600">
                    1200 Bay Street, Suite 202<br />
                    Toronto, ON M5R 2A5<br />
                    Canada
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Global Presence</h4>
                  <p className="text-gray-600 mb-3">Serving clients worldwide with remote collaboration capabilities.</p>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-gray-800" />
                    <span className="text-sm text-gray-600">Available for remote consultations</span>
                  </div>
                </div>
              </div>
            <button className="w-full mt-6 bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors">Get Directions</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessInfo