import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'ImageGallery' | 'AboutPage' | 'ContactPage';
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
          name: 'Summit Pixels',
          url: 'https://summitpixels.com',
          logo: 'https://summitpixels.com/logo.png',
          description: 'Professional photography services in Toronto, specializing in commercial, portrait, and event photography',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Photography Lane',
            addressLocality: 'Toronto',
            addressRegion: 'ON',
            postalCode: 'M5V 3A1',
            addressCountry: 'CA',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-416-555-0123',
            contactType: 'customer service',
            areaServed: 'CA',
            availableLanguage: 'English',
          },
          sameAs: [
            'https://www.facebook.com/summitpixels',
            'https://www.instagram.com/summitpixels',
            'https://www.linkedin.com/company/summitpixels',
          ],
          ...data,
        };

      case 'LocalBusiness':
        return {
          ...baseData,
          name: 'Summit Pixels Photography',
          image: 'https://summitpixels.com/logo.png',
          telephone: '+1-416-555-0123',
          email: 'info@summitpixels.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Photography Lane',
            addressLocality: 'Toronto',
            addressRegion: 'ON',
            postalCode: 'M5V 3A1',
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
          name: data.name || 'Professional Photography Services',
          description: data.description || 'High-quality photography services for all occasions',
          provider: {
            '@type': 'Organization',
            name: 'Summit Pixels',
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

      case 'ImageGallery':
        return {
          ...baseData,
          name: data.name || 'Summit Pixels Photography Portfolio',
          description: data.description || 'Professional photography portfolio showcasing our best work',
          url: 'https://summitpixels.com/portfolio',
          image: data.images || [],
          ...data,
        };

      case 'AboutPage':
        return {
          ...baseData,
          name: data.name || 'About Summit Pixels Photography',
          description: data.description || 'Learn about our photography studio and team',
          url: 'https://summitpixels.com/about',
          mainEntity: {
            '@type': 'Organization',
            name: 'Summit Pixels',
            description: 'Professional photography studio based in Toronto',
          },
          ...data,
        };

      case 'ContactPage':
        return {
          ...baseData,
          name: data.name || 'Contact Summit Pixels Photography',
          description: data.description || 'Get in touch with our photography studio',
          url: 'https://summitpixels.com/contact',
          mainEntity: {
            '@type': 'ContactPoint',
            telephone: '+1-416-555-0123',
            contactType: 'customer service',
            email: 'info@summitpixels.com',
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