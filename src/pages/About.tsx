import React from 'react'
import SEOHead from '../components/shared/SEOHead'
import CompanyStory from '../components/about/CompanyStory'
import TeamSection from '../components/about/TeamSection'
import MissionVision from '../components/about/MissionVision'
import CompanyStats from '../components/about/CompanyStats'

const About: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Summit Pixels Inc.",
    "description": "Learn about Summit Pixels Inc., an IT company providing web, mobile, cloud and digital solutions in Toronto.",
    "url": "https://summitpixels.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Summit Pixels Inc.",
      "description": "IT services company in Toronto",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      "telephone": "+1-647-873-8818",
      "email": "hello@summitpixels.com",
      "url": "https://summitpixels.com",
      "sameAs": [
        "https://www.linkedin.com/company/summitpixels"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.9,
        "reviewCount": 150
      }
    }
  }

  return (
    <div className="min-h-screen">
      <SEOHead
        title="About Summit Pixels Inc. | Toronto IT Company"
        description="Learn about Summit Pixels Inc., Toronto’s IT company providing web development, mobile apps, cloud solutions, and digital strategy."
        keywords={[
          "Toronto IT company",
          "Summit Pixels about",
          "web development team",
          "mobile app developers",
          "cloud solutions",
          "digital strategy"
        ]}
        canonicalUrl="https://summitpixels.com/about"
        ogImage="/images/about-team.jpg"
        structuredData={structuredData}
      />
      
      <CompanyStory />
      <MissionVision />
      <TeamSection />
      <CompanyStats />
    </div>
  )
}

export default About
