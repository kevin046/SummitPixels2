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
    "name": "IT Services Toronto",
    "description": "Web development, mobile apps, UI/UX, e-commerce, cloud and DevOps services in Toronto.",
    "provider": {
      "@type": "Organization",
      "name": "Summit Pixels Inc.",
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
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "E-commerce Solutions",
      "Cloud Solutions",
      "DevOps Services"
    ]
  }

  return (
    <div className="min-h-screen">
      <SEOHead
        title="IT Services Toronto | Web, Mobile, Cloud Solutions"
        description="Full-stack IT services in Toronto including web development, mobile apps, UI/UX, e-commerce, cloud and DevOps."
        keywords={[
          "Toronto IT services",
          "web development",
          "mobile app development",
          "UI UX design",
          "e-commerce solutions",
          "cloud solutions",
          "DevOps services"
        ]}
        canonicalUrl="https://summitpixels.com/services"
        ogImage="/images/services-hero.jpg"
        structuredData={structuredData}
      />
      
      <h1 className="sr-only">IT Services Toronto</h1>
      <ServiceCategories />
      <ProcessSteps />
      <PricingInfo />
    </div>
  )
}

export default Services
