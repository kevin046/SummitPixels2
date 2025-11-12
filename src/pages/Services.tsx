import React, { useEffect } from 'react'
import SEOHead from '../components/shared/SEOHead'
import ServiceCategories from '../components/services/ServiceCategories'
import PricingInfo from '../components/services/PricingInfo'
import ProcessSteps from '../components/services/ProcessSteps'
import { useLocation } from 'react-router-dom'

const Services: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    // When arriving with a hash, scroll to the section smoothly
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        // account for fixed header height
        const headerOffset = 90
        const elementPosition = el.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerOffset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }
  }, [location.hash])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Photography Services Toronto",
    "description": "Comprehensive photography services in Toronto including wedding photography, portrait sessions, event coverage, and commercial photography.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Summit Pixels Photography",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Toronto"
    },
    "serviceType": [
      "Wedding Photography",
      "Portrait Photography",
      "Event Photography",
      "Commercial Photography",
      "Family Photography",
      "Corporate Photography"
    ]
  }

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Photography Services Toronto | Professional Photography"
        description="Professional photography services in Toronto including wedding photography, portraits, events, and commercial shoots. Expert photographers for all occasions."
        keywords={[
          "Toronto photography services",
          "professional photography Toronto",
          "wedding photography",
          "portrait photography",
          "event photography",
          "commercial photography",
          "Toronto photographer",
          "Summit Pixels services"
        ]}
        canonicalUrl="/services"
        ogImage="/images/services-hero.jpg"
        structuredData={structuredData}
      />
      
      <ServiceCategories />
      <ProcessSteps />
      <PricingInfo />
    </div>
  )
}

export default Services