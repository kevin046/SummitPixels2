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
    "name": "About Summit Pixels Photography",
    "description": "Learn about Summit Pixels Photography, our passion for capturing life's precious moments, and our commitment to excellence in Toronto photography.",
    "url": "https://summitpixels.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Summit Pixels Photography",
      "description": "Professional photography studio in Toronto specializing in weddings, portraits, events, and commercial photography.",
      "founder": {
        "@type": "Person",
        "name": "Photographer Name",
        "jobTitle": "Professional Photographer",
        "description": "Award-winning photographer with over 10 years of experience in wedding and portrait photography."
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      "telephone": "+1-416-555-0123",
      "email": "info@summitpixels.com",
      "url": "https://summitpixels.com",
      "sameAs": [
        "https://www.instagram.com/summitpixels",
        "https://www.facebook.com/summitpixels",
        "https://www.linkedin.com/company/summitpixels"
      ]
    }
  }

  return (
    <div className="min-h-screen">
      <SEOHead
        title="About Summit Pixels Photography | Toronto Photography Studio"
        description="Learn about Summit Pixels Photography, Toronto's premier photography studio. Our team of professional photographers specializes in weddings, portraits, and events."
        keywords={[
          "Toronto photography studio",
          "Summit Pixels about",
          "professional photographers Toronto",
          "wedding photographers Toronto",
          "portrait photographers Toronto",
          "event photographers Toronto",
          "Toronto photography team",
          "photography studio Toronto"
        ]}
        canonicalUrl="/about"
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