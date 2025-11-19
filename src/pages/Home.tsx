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
    "name": "Summit Pixels Inc.",
    "url": "https://summitpixels.com",
    "description": "IT services company in Toronto delivering web, mobile, cloud and digital solutions.",
  }

  return (
    <>
      <SEOHead
        title="SummitPixels - Professional Digital Services"
        description="Transform your digital presence with SummitPixels. We offer web development, mobile apps, cloud solutions, and digital strategy in Toronto."
        keywords={[
          'digital services',
          'web development',
          'Toronto',
          'professional services',
          'SummitPixels'
        ]}
        canonicalUrl="https://summitpixels.com/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Summit Pixels Inc.',
          description: 'IT services in Toronto: web, mobile, cloud, digital strategy',
          url: 'https://summitpixels.com',
          telephone: '+1-647-873-8818',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1200 Bay Street, Suite 202',
            addressLocality: 'Toronto',
            addressRegion: 'ON',
            postalCode: 'M5R 2A5',
            addressCountry: 'CA',
          },
        }}
      />
      
      <div className="min-h-screen">
        <h1 className="sr-only">SummitPixels - Professional Digital Services</h1>
        <Hero />
        <ServicesPreview />
        <PortfolioPreview />
        <ContactCTA />
      </div>
    </>
  )
}

export default Home
