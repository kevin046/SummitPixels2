import React from 'react'
import SEOHead from '../components/shared/SEOHead'
import Hero from '../components/home/Hero'
import ServicesPreview from '../components/home/ServicesPreview'
import PortfolioPreview from '../components/home/PortfolioPreview'
import ContactCTA from '../components/home/ContactCTA'

const Home: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Summit Pixels Photography",
    "url": "https://summitpixels.com",
    "description": "Professional photography services in Toronto. Capture life's precious moments with Summit Pixels - wedding, portrait, event, and commercial photography.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Summit Pixels Photography",
      "description": "Professional photography services in Toronto",
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
      "priceRange": "$$",
      "openingHours": "Mo-Su 09:00-18:00",
      "image": "https://summitpixels.com/images/logo.jpg"
    }
  }

  return (
    <>
      <SEOHead
        title="SummitPixels - Professional Digital Services"
        description="Transform your digital presence with SummitPixels. We offer professional photography, web development, and digital marketing services in Toronto."
        keywords="digital services, photography, web development, Toronto, professional services, SummitPixels"
        canonicalUrl="/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'SummitPixels',
          description: 'Professional digital services in Toronto',
          url: 'https://summitpixels.com',
          telephone: '+1-416-555-0123',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Digital Lane',
            addressLocality: 'Toronto',
            addressRegion: 'ON',
            postalCode: 'M5V 3A1',
            addressCountry: 'CA',
          },
        }}
      />
      
      <div className="min-h-screen">
        <Hero />
        <ServicesPreview />
        <PortfolioPreview />
        <ContactCTA />
      </div>
    </>
  )
}

export default Home