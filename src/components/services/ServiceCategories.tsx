import React from 'react'
import { motion } from 'framer-motion'
import { Code, Smartphone, Palette, Search, ShoppingCart, Cloud, Database, Shield } from 'lucide-react'

interface Service {
  id: number
  title: string
  description: string
  icon: React.ElementType
  features: string[]
  image: string
  color: string
}

const ServiceCategories: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices. From simple websites to complex enterprise solutions.",
      icon: Code,
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Development",
        "Performance Optimization"
      ],
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20web%20development%20workspace%2C%20clean%20code%20editor%20interface%2C%20responsive%20design%20mockups%2C%20professional%20tech%20environment&image_size=landscape_16_9",
      color: "blue"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android.",
      icon: Smartphone,
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Apps",
        "UI/UX Design",
        "App Store Optimization",
        "Maintenance & Support"
      ],
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Mobile%20app%20development%20environment%2C%20smartphone%20mockups%2C%20modern%20UI%20designs%2C%20professional%20mobile%20development%20setup&image_size=landscape_16_9",
      color: "teal"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive, engaging, and beautiful digital experiences that users love.",
      icon: Palette,
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Interaction Design",
        "Usability Testing",
        "Design Systems"
      ],
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=UI%20UX%20design%20workspace%2C%20design%20mockups%2C%20color%20palettes%2C%20wireframes%2C%20creative%20professional%20design%20environment&image_size=landscape_16_9",
      color: "blue"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that drive traffic, generate leads, and grow your online presence.",
      icon: Search,
      features: [
        "SEO Optimization",
        "Content Marketing",
        "Social Media Management",
        "PPC Advertising",
        "Email Marketing",
        "Analytics & Reporting"
      ],
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Digital%20marketing%20dashboard%2C%20analytics%20charts%2C%20social%20media%20icons%2C%20professional%20marketing%20workspace&image_size=landscape_16_9",
      color: "teal"
    },
    {
      id: 5,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms that drive sales and provide seamless shopping experiences for your customers.",
      icon: ShoppingCart,
      features: [
        "Online Store Development",
        "Payment Integration",
        "Inventory Management",
        "Shopping Cart Solutions",
        "Security Implementation",
        "Mobile Commerce"
      ],
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=E-commerce%20platform%20interface%2C%20online%20shopping%20experience%2C%20product%20catalog%2C%20secure%20payment%20gateway%2C%20professional%20e-commerce%20setup&image_size=landscape_16_9",
      color: "blue"
    },
    {
      id: 6,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services that ensure reliability, security, and optimal performance.",
      icon: Cloud,
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "DevOps Services",
        "Database Management",
        "Backup & Recovery",
        "Performance Monitoring"
      ],
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Cloud%20computing%20infrastructure%2C%20server%20architecture%2C%20network%20diagrams%2C%20professional%20cloud%20services%20environment&image_size=landscape_16_9",
      color: "teal"
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive digital solutions tailored to meet your business needs. From web development to digital marketing, we've got you covered.
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              const isBlue = service.color === "blue"
              const slug = service.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '')
              
              return (
                <motion.div
                  key={service.id}
                  id={slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {service.title === 'Digital Marketing' && (
                    <span id="seo-optimization" className="block h-0" aria-hidden="true"></span>
                  )}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-full mr-4 ${isBlue ? 'bg-gray-100' : 'bg-teal-100'}`}>
                        <IconComponent className={`h-8 w-8 ${isBlue ? 'text-gray-700' : 'text-teal-600'}`} />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${isBlue ? 'bg-gray-700' : 'bg-teal-500'}`}></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`px-8 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                      isBlue 
                        ? 'bg-gray-800 text-white hover:bg-gray-900' 
                        : 'bg-teal-500 text-white hover:bg-teal-600'
                    }`}>
                      Learn More
                    </button>
                  </div>
                  
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={`${service.title} Services - Professional Photography Solutions in Toronto`}
                        className="w-full h-80 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-gray-100 to-gray-50 rounded-3xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Ready to Start Your Project?</h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get a Quote
              </button>
              <button className="border-2 border-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories