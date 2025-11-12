import React from 'react'
import SEOHead from '../components/shared/SEOHead'
import ContactForm from '../components/contact/ContactForm'
import BusinessInfo from '../components/contact/BusinessInfo'
import MapIntegration from '../components/contact/MapIntegration'

const Contact: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Summit Pixels Photography Toronto",
    "description": "Contact Summit Pixels Photography for professional photography services in Toronto. Wedding photography, portraits, events, and commercial photography.",
    "url": "https://summitpixels.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Summit Pixels Photography",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Photography Lane",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "postalCode": "M5V 3A8",
        "addressCountry": "CA"
      },
      "telephone": "+1-416-555-0123",
      "email": "info@summitpixels.com",
      "url": "https://summitpixels.com",
      "openingHours": "Mo-Su 09:00-18:00",
      "priceRange": "$$"
    }
  }

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Summit Pixels Photography | Toronto Photographer"
        description="Contact Summit Pixels Photography for professional photography services in Toronto. Wedding photography, portraits, events, and commercial photography."
        keywords={[
          "Toronto photographer contact",
          "Summit Pixels contact",
          "photography contact Toronto",
          "wedding photographer contact Toronto",
          "portrait photographer contact Toronto",
          "event photographer contact Toronto",
          "commercial photographer contact Toronto",
          "Toronto photography contact"
        ]}
        canonicalUrl="/contact"
        ogImage="/images/contact-hero.jpg"
        structuredData={structuredData}
      />
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Toronto Photographer</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Ready to capture your special moments? Contact Summit Pixels Photography for professional photography services in Toronto. Book your session today!
        </p>
      </div>
      
      <ContactForm />
      <BusinessInfo />
      <MapIntegration />
    </div>
  )
}

export default Contact