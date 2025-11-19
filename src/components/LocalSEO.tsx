import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalSEOProps {
  businessName?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phone?: string;
  email?: string;
  hours?: {
    days: string[];
    open: string;
    close: string;
  }[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const LocalSEO: React.FC<LocalSEOProps> = ({
  businessName = 'Summit Pixels Inc.',
  address = {
    street: '1200 Bay Street, Suite 202',
    city: 'Toronto',
    state: 'ON',
    zipCode: 'M5R 2A5',
    country: 'Canada'
  },
  phone = '+1-647-873-8818',
  email = 'hello@summitpixels.com',
  hours = [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      open: '09:00',
      close: '18:00'
    },
    {
      days: ['Saturday'],
      open: '10:00',
      close: '16:00'
    }
  ],
  coordinates = {
    lat: 43.6532,
    lng: -79.3832
  }
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessName,
    image: 'https://summitpixels.com/logo.png',
    telephone: phone,
    email: email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zipCode,
      addressCountry: address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: coordinates.lat,
      longitude: coordinates.lng
    },
    openingHoursSpecification: hours.map(hour => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hour.days,
      opens: hour.open,
      closes: hour.close
    })),
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Toronto'
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`,
    sameAs: [
      'https://www.linkedin.com/company/summitpixels'
    ]
  };

  return (
    <Helmet>
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Google My Business Verification */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      
      {/* Local Keywords Meta Tags */}
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Toronto" />
      <meta name="geo.position" content={`${coordinates.lat};${coordinates.lng}`} />
      <meta name="ICBM" content={`${coordinates.lat}, ${coordinates.lng}`} />
      
      {/* Toronto-specific Open Graph Tags */}
      <meta property="business:contact_data:street_address" content={address.street} />
      <meta property="business:contact_data:locality" content={address.city} />
      <meta property="business:contact_data:region" content={address.state} />
      <meta property="business:contact_data:postal_code" content={address.zipCode} />
      <meta property="business:contact_data:country_name" content={address.country} />
      <meta property="business:contact_data:phone_number" content={phone} />
      <meta property="business:contact_data:email" content={email} />
      
      {/* Local Business Hours */}
      {hours.map((hour, index) => (
        <meta key={index} property="business:hours:day" content={hour.days.join(', ')} />
      ))}
      {hours.map((hour, index) => (
        <meta key={index} property="business:hours:start" content={hour.open} />
      ))}
      {hours.map((hour, index) => (
        <meta key={index} property="business:hours:end" content={hour.close} />
      ))}
      
      {/* Toronto-specific Keywords */}
      <meta name="keywords" content={`Toronto IT services, ${address.city} web development, mobile app development, cloud solutions, Summit Pixels`} />
    </Helmet>
  );
};

export default LocalSEO;
