import React from 'react'
import SEOHead from '../components/shared/SEOHead'
import ProjectGallery from '../components/portfolio/ProjectGallery'
import CaseStudies from '../components/portfolio/CaseStudies'

const Portfolio: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Summit Pixels Photography Portfolio",
    "description": "View our stunning photography portfolio featuring weddings, portraits, events, and commercial photography work in Toronto.",
    "url": "https://summitpixels.com/portfolio",
    "image": [
      "https://summitpixels.com/images/portfolio/wedding-1.jpg",
      "https://summitpixels.com/images/portfolio/portrait-1.jpg",
      "https://summitpixels.com/images/portfolio/event-1.jpg",
      "https://summitpixels.com/images/portfolio/commercial-1.jpg"
    ],
    "creator": {
      "@type": "LocalBusiness",
      "name": "Summit Pixels Photography",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA"
      }
    }
  }

  return (
    <div>
      <SEOHead
        title="Photography Portfolio Toronto | Professional Photo Gallery"
        description="View our stunning photography portfolio showcasing wedding photography, portraits, events, and commercial work by Toronto's top photographers."
        keywords={[
          "Toronto photography portfolio",
          "professional photography gallery",
          "wedding photography portfolio Toronto",
          "portrait photography examples",
          "event photography showcase",
          "commercial photography samples",
          "Toronto photographer portfolio",
          "Summit Pixels portfolio"
        ]}
        canonicalUrl="/portfolio"
        ogImage="/images/portfolio-hero.jpg"
        structuredData={structuredData}
      />
      <ProjectGallery />
      <CaseStudies />
    </div>
  )
}

export default Portfolio