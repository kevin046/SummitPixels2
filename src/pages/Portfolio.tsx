import React from 'react'
import SEOHead from '../components/shared/SEOHead'
import ProjectGallery from '../components/portfolio/ProjectGallery'
import CaseStudies from '../components/portfolio/CaseStudies'

const Portfolio: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Summit Pixels Portfolio",
    "description": "Explore our portfolio of web development, mobile app, cloud and digital projects in Toronto.",
    "url": "https://summitpixels.com/portfolio"
  }

  return (
    <div>
      <SEOHead
        title="IT Portfolio Toronto | Web, App, Cloud Projects"
        description="View our portfolio showcasing web applications, mobile apps, cloud solutions, and digital projects for Toronto businesses."
        keywords={[
          "Toronto IT portfolio",
          "web development projects",
          "mobile app case studies",
          "cloud solutions portfolio",
          "digital projects",
          "Summit Pixels portfolio"
        ]}
        canonicalUrl="https://summitpixels.com/portfolio"
        ogImage="/images/portfolio-hero.jpg"
        structuredData={structuredData}
      />
      <h1 className="sr-only">IT Project Portfolio Toronto</h1>
      <ProjectGallery />
      <CaseStudies />
    </div>
  )
}

export default Portfolio
