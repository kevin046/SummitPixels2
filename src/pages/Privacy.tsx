import React from 'react'
import SEOHead from '../components/shared/SEOHead'

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Privacy Policy - Summit Pixels Inc."
        description="Learn how Summit Pixels Inc., an Ontario incorporated company, collects, uses, and protects your data."
        keywords={["privacy policy", "data protection", "Summit Pixels Inc.", "Ontario", "Canada"]}
      />

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 max-w-4xl">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Who We Are</h2>
            <p className="text-gray-700">Summit Pixels Inc. is an Ontario incorporated business in Canada. We deliver custom web and mobile solutions for clients across North America.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
            <p className="text-gray-700">We collect personal information you provide (such as name, email, phone, company) to respond to inquiries and deliver services. We may also collect usage data (analytics, device/browser information) to improve performance and security.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Information</h2>
            <p className="text-gray-700">Your information is used to provide and improve services, communicate with you, process payments, and maintain security. We do not sell your personal information.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Third‑Party Services</h2>
            <p className="text-gray-700">We may use third‑party providers for hosting, analytics, or payment processing (e.g., Vercel/Netlify, Stripe/PayPal). These services have their own privacy practices; we recommend reviewing their policies.</p>
          </div>

        
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Retention & Security</h2>
            <p className="text-gray-700">We retain data as long as necessary to provide services and comply with legal obligations. We use reasonable technical and organizational measures to protect your data. No system is completely secure; please contact us with any concerns.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your Rights</h2>
            <p className="text-gray-700">Under Canadian privacy laws, you may request access, correction, or deletion of your personal information, subject to legal and contractual limitations. Contact us to exercise these rights.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact</h2>
            <p className="text-gray-700">For privacy inquiries, contact hello@summitpixels.com or 647-873-8818. Mailing address: 1200 Bay Street, Suite 202, Toronto, ON M5R 2A5, Canada.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy