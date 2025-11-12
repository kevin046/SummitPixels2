import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, Users, Zap, Smartphone, Palette, Search, Settings, Award, ShoppingCart } from 'lucide-react'

interface PricingTier {
  id: number
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  icon: React.ElementType
}

const PricingInfo: React.FC = () => {
  const pricingTiers: PricingTier[] = [
    {
      id: 1,
      name: "Small Business Site",
      price: "CAD $1,500–$3,500 (fixed) or $40–$70/hr",
      description: "5–10 pages, custom React/Next.js responsive, basic forms/SEO",
      features: [
        "UI/UX wireframes (~$500)",
        "Custom React/Next.js dev (~$1,000)",
        "Testing & deploy (~$500)",
        "~50–80 hrs total",
        "40–60% below market to hook locals",
        "Pitch: bespoke vs. cookie‑cutter"
      ],
      popular: true,
      icon: Zap
    },
    {
      id: 2,
      name: "Basic E‑commerce",
      price: "CAD $3,500–$7,500",
      description: "5–10 products, React/Vite cart, Stripe/PayPal, inventory basics",
      features: [
        "Frontend (~$2,000)",
        "Backend API (~$2,000)",
        "Security & testing (~$1,500)",
        "~80–120 hrs total",
        "No Shopify lock‑in; fully custom",
        "Ideal for Markham boutiques"
      ],
      icon: ShoppingCart
    },
    {
      id: 3,
      name: "Restaurant Web App MVP",
      price: "CAD $8,000–$15,000 (phased; $4k prototype)",
      description: "QR ordering, waitless dashboard, POS integration; Next.js web + React Native basics",
      features: [
        "QR/UI (~$3,000)",
        "POS/CRM (~$4,000)",
        "Cross‑platform apps (~$5,000)",
        "Deploy (~$2,000)",
        "~100–200 hrs total",
        "Start web‑only to test"
      ],
      icon: Users
    },
    {
      id: 4,
      name: "SEO Services",
      price: "CAD $900–$4,500/mo",
      description: "Monthly SEO to grow organic traffic in GTA/Markham",
      features: [
        "Technical & content audit",
        "On‑page optimization",
        "Keyword & content planning",
        "Link building & outreach",
        "Monthly reporting",
        "Local SEO for maps"
      ],
      icon: Search
    },
    {
      id: 5,
      name: "Logo Design",
      price: "CAD $450–$1,800",
      description: "Professional brand mark with versatile deliverables",
      features: [
        "3 initial concepts",
        "2–3 revision rounds",
        "Vector, SVG, PNG exports",
        "Black/white & color variants",
        "Basic brand usage guide",
        "Social/avatar versions"
      ],
      icon: Palette
    }
  ]

  const additionalServices = [
    { name: "Add e‑comm module", price: "+ CAD $2,000", icon: ShoppingCart },
    { name: "Maintenance", price: "CAD $100/mo", icon: Settings },
    { name: "Scale to 50+ products", price: "+ CAD $3,000", icon: ShoppingCart },
    { name: "CRM tie‑in", price: "+ CAD $2,000", icon: Settings },
    { name: "Full native apps", price: "+ CAD $5,000", icon: Smartphone },
    { name: "AI features", price: "+ CAD $3,000", icon: Award }
  ]

  return (
    <section className="py-20 md:py-32 bg-gray-50">
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
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing with no hidden fees. Choose the plan that best fits your needs and budget.
            </p>
          </motion.div>

          {/* Main Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingTiers.map((tier, index) => {
              const IconComponent = tier.icon
              
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                    tier.popular 
                      ? 'border-blue-600 transform scale-105' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-full ${tier.popular ? 'bg-gray-100' : 'bg-gray-100'}`}>
                        <IconComponent className={`h-8 w-8 ${tier.popular ? 'text-gray-700' : 'text-gray-600'}`} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {tier.price}
                    </div>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    tier.popular
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Services</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => {
                const IconComponent = service.icon
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-gray-100 p-3 rounded-full">
                        <IconComponent className="h-6 w-6 text-gray-700" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">{service.name}</h4>
                    <p className="text-gray-700 font-semibold text-center">{service.price}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Pricing Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">What's Included in Every Plan</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-gray-700" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Timely Delivery</h4>
                <p className="text-gray-600 text-sm">Projects delivered on time, every time with clear timelines and milestones.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-teal-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Support</h4>
                <p className="text-gray-600 text-sm">Personal project manager and dedicated support throughout your project.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-gray-700" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                <p className="text-gray-600 text-sm">Rigorous testing and quality checks to ensure flawless delivery.</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We understand that every business is unique. Contact us for a custom quote tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                Request Custom Quote
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PricingInfo