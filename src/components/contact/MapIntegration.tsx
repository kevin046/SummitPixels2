import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Phone, Mail } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const MapIntegration: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null)

  // 1200 Bay Street coordinates (approx.)
  const lat = 43.670107
  const lng = -79.389785

  useEffect(() => {
    if (!mapRef.current) return

    // Initialize map
    const map = L.map(mapRef.current).setView([lat, lng], 16)

    // OSM tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)

    // Main office marker (explicit icon to ensure asset paths in bundlers)
    const officeIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })

    const marker = L.marker([lat, lng], { icon: officeIcon }).addTo(map)
    marker.bindPopup('<b>Summit Pixels Inc.</b><br/>1200 Bay Street, Suite 202').openPopup()

    // Nearby landmarks (approximate)
    const landmarks: { name: string; coords: [number, number] }[] = [
      { name: 'Bay Station (Line 2)', coords: [43.67052, -79.38854] },
      { name: 'Yorkville Shopping District', coords: [43.6715, -79.3890] },
      { name: 'Royal Ontario Museum (ROM)', coords: [43.66772, -79.39477] },
      { name: 'U of T St. George Campus', coords: [43.6629, -79.3957] },
    ]

    landmarks.forEach((lm) => {
      L.marker(lm.coords, {
        icon: L.icon({
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
      })
        .addTo(map)
        .bindPopup(lm.name)
    })

    return () => {
      map.remove()
    }
  }, [])

  return (
    <section className="py-20 md:py-32 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find Us Here
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Visit our office or get directions to meet our team in person
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div ref={mapRef} className="relative h-96 w-full" />
                <div className="bg-white p-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Summit <span className="text-blue-600">Pixels</span> Office</h3>
                      <p className="text-gray-600">1200 Bay Street, Suite 202, Toronto, ON M5R 2A5</p>
                    </div>
                    <a
                      href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=17/${lat}/${lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center"
                    >
                      <Navigation className="h-5 w-5 mr-2" />
                      Open in OSM
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Details */}
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Office Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">1200 Bay Street, Suite 202</p>
                      <p className="text-gray-600">Toronto, ON M5R 2A5</p>
                      <p className="text-gray-600">Canada</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-600" />
                    <a href="tel:6478738818" className="text-gray-700 hover:text-gray-900 transition-colors">
                      647-873-8818
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <a href="mailto:hello@summitpixels.com" className="text-gray-700 hover:text-gray-900 transition-colors">
                      hello@summitpixels.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Accessibility */}
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Accessibility</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Wheelchair accessible entrance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Parking available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Public transportation nearby</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Elevator access</span>
                  </li>
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <motion.a
                  href="https://www.google.com/maps/search/?api=1&query=1200+Bay+Street+Suite+202+Toronto+ON+M5R+2A5+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <Navigation className="h-5 w-5 mr-2" />
                  Open in Google Maps
                </motion.a>
                <motion.a
                  href="tel:6478738818"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Directions
                </motion.a>
              </div>
            </motion.div>
          </div>

              {/* Nearby Locations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nearby Landmarks</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Bay Station (Line 2)", distance: "~150 m", type: "Transit" },
                { name: "Yorkville Shopping District", distance: "~200 m", type: "Shopping" },
                { name: "Royal Ontario Museum (ROM)", distance: "~650 m", type: "Museum" }
              ].map((landmark, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow">
                  <MapPin className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">{landmark.name}</h4>
                  <p className="text-gray-600 text-sm mb-1">{landmark.distance}</p>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {landmark.type}
                  </span>
                </div>
              ))}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MapIntegration