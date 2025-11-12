import React from 'react'
import SEOHead from '../components/shared/SEOHead'

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Terms of Service - Summit Pixels Inc."
        description="Read the Terms of Service for Summit Pixels Inc., an Ontario incorporated company in Canada."
        keywords={["terms of service", "Summit Pixels Inc.", "Ontario", "Canada", "legal"]}
      />

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 max-w-4xl">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Company Information</h2>
            <p className="text-gray-700">Summit Pixels Inc. is an Ontario incorporated business in Canada. Mailing address: 1200 Bay Street, Suite 202, Toronto, ON M5R 2A5, Canada. Phone: 647-873-8818. Email: hello@summitpixels.com.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Services</h2>
            <p className="text-gray-700">We provide custom web and mobile development, UI/UX design, e-commerce solutions, and digital consulting. All services are delivered on a best-effort basis according to project scope, timelines, and acceptance criteria agreed in writing.</p>
            <p className="text-gray-700 mt-2">Scope changes and additional requests may affect delivery timelines and pricing. We may use third-party services (e.g., hosting, payment processors) as part of project delivery.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Payment Terms & Refunds</h2>
            <p className="text-gray-700">Invoices are due upon receipt unless otherwise stated. Deposits and milestone payments are non-refundable after work has commenced for the corresponding milestone. For fixed-price projects, payment schedules are defined in the statement of work. For hourly engagements, time is billed at agreed rates with weekly summaries.</p>
            <p className="text-gray-700 mt-2">If you cancel a project, completed work up to the cancellation date is billable. Any prepaid balance beyond completed work may be refunded at our discretion.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Intellectual Property</h2>
            <p className="text-gray-700">Unless otherwise agreed, you own the final deliverables upon full payment. We retain ownership of our pre-existing tools, libraries, frameworks, and reusable components used in development. We may showcase non-confidential work in our portfolio.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
            <p className="text-gray-700">To the maximum extent permitted by law, Summit Pixels Inc. is not liable for indirect, incidental, special, or consequential damages, including lost profits or data, arising from use of our services. Our total liability for any claim is limited to fees paid for the specific service giving rise to the claim.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Governing Law</h2>
            <p className="text-gray-700">These Terms are governed by the laws of the Province of Ontario and the laws of Canada applicable therein. Any disputes will be resolved in the courts located in Toronto, Ontario.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact</h2>
            <p className="text-gray-700">For questions about these Terms, contact us at hello@summitpixels.com or 647-873-8818.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms