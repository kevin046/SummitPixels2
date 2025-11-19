import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'CollectionPage' | 'AboutPage' | 'ContactPage';
  data: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
    };

    switch (type) {
      case 'Organization':
        return {
          ...baseData,
          name: 'Summit Pixels Inc.',
          url: 'https://summitpixels.com',
          logo: 'https://summitpixels.com/logo.png',
          description: 'IT services in Toronto: web, mobile, cloud and digital solutions',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1200 Bay Street, Suite 202',
            addressLocality: 'Toronto',
            addressRegion: 'ON',
            postalCode: 'M5R 2A5',
            addressCountry: 'CA',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-647-873-8818',
            contactType: 'customer service',
            areaServed: 'CA',
            availableLanguage: 'English',
          },
          sameAs: [
            'https://www.linkedin.com/company/summitpixels',
          ],
          ...data,
        };

      case 'LocalBusiness':
        return {
          ...baseData,
          name: 'Summit Pixels Inc.',
          image: 'https://summitpixels.com/logo.png',
          telephone: '+1-647-873-8818',
          email: 'hello@summitpixels.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1200 Bay Street, Suite 202',
            addressLocality: 'Toronto',
            addressRegion: 'ON',
            postalCode: 'M5R 2A5',
            addressCountry: 'CA',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 43.6532,
            longitude: -79.3832,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Saturday',
              opens: '10:00',
              closes: '16:00',
            },
          ],
          priceRange: '$$',
          ...data,
        };

      case 'Service':
        return {
          ...baseData,
          name: data.name || 'IT Services',
          description: data.description || 'Web, mobile, cloud and digital solutions',
          provider: {
            '@type': 'Organization',
            name: 'Summit Pixels Inc.',
            url: 'https://summitpixels.com',
          },
          areaServed: {
            '@type': 'City',
            name: 'Toronto',
          },
          offers: {
            '@type': 'Offer',
            price: data.price || 'Contact for pricing',
            priceCurrency: 'CAD',
            availability: 'https://schema.org/InStock',
          },
          ...data,
        };

      case 'CollectionPage':
        return {
          ...baseData,
          name: data.name || 'Summit Pixels Portfolio',
          description: data.description || 'Portfolio of IT projects: web, mobile, cloud',
          url: 'https://summitpixels.com/portfolio',
          ...data,
        };

      case 'AboutPage':
        return {
          ...baseData,
          name: data.name || 'About Summit Pixels Inc.',
          description: data.description || 'Learn about our IT company and team',
          url: 'https://summitpixels.com/about',
          mainEntity: {
            '@type': 'Organization',
            name: 'Summit Pixels Inc.',
            description: 'IT services company based in Toronto',
          },
          ...data,
        };

      case 'ContactPage':
        return {
          ...baseData,
          name: data.name || 'Contact Summit Pixels Inc.',
          description: data.description || 'Get in touch with our IT company',
          url: 'https://summitpixels.com/contact',
          mainEntity: {
            '@type': 'ContactPoint',
            telephone: '+1-647-873-8818',
            contactType: 'customer service',
            email: 'hello@summitpixels.com',
          },
          ...data,
        };

      default:
        return { ...baseData, ...data };
    }
  };

  const structuredData = getStructuredData();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData, null, 2)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
