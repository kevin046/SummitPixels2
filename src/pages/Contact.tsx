import React from 'react'
import SEOHead from '../components/shared/SEOHead'
import ContactForm from '../components/contact/ContactForm'
import BusinessInfo from '../components/contact/BusinessInfo'
import MapIntegration from '../components/contact/MapIntegration'

const Contact: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Summit Pixels | Toronto Digital Services",
    "description": "Contact Summit Pixels for professional web development, SEO, and digital marketing services in Toronto.",
    "url": "https://summitpixels.com/contact",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "Summit Pixels Inc.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1200 Bay Street, Suite 202",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "postalCode": "M5R 2A5",
        "addressCountry": "CA"
      },
      "telephone": "+1-647-873-8818",
      "email": "hello@summitpixels.com",
      "url": "https://summitpixels.com",
      "openingHours": "Mo-Fr 09:00-18:00"
    }
  }

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Summit Pixels | Toronto Digital Services"
        description="Ready to transform your digital presence? Contact Summit Pixels for professional web development, SEO, and digital marketing services in Toronto. Get started today!"
        keywords={[
          "Toronto web development",
          "Toronto SEO services",
          "digital marketing Toronto",
          "Summit Pixels contact",
          "custom software Toronto",
          "UI/UX design Toronto",
          "app development Toronto",
          "consulting Toronto"
        ]}
        canonicalUrl="/contact"
        ogImage="/images/contact-hero.jpg"
        structuredData={structuredData}
      />
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Summit Pixels</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Ready to elevate your digital presence? Contact Summit Pixels for professional web development, SEO, and digital marketing services in Toronto. Let’s build something great together.
        </p>
      </div>
      
      <ContactForm />
      <BusinessInfo />
      <MapIntegration />
    </div>
  )
}

export default Contact