import React, { useState, useEffect } from 'react';
import { runSEOAudit } from '../utils/seoMonitor';

interface SEOReportData {
  metrics: {
    pageTitle?: string;
    metaDescription?: string;
    h1Tags?: number;
    imagesWithoutAlt?: number;
    canonicalUrl?: string;
    structuredData?: boolean;
    pageLoadTime?: number;
    mobileFriendly?: boolean;
  };
  brokenLinks: Array<{
    url: string;
    status: number;
    source: string;
  }>;
  timestamp: string;
  url: string;
}

export const SEOReport: React.FC = () => {
  const [report, setReport] = useState<SEOReportData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const runAudit = async () => {
    setIsLoading(true);
    try {
      const auditReport = runSEOAudit();
      setReport(auditReport);
    } catch (error) {
      console.error('SEO audit failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  const calculateOverallScore = () => {
    if (!report) return 0;
    
    let score = 100;
    const { metrics, brokenLinks } = report;
    
    // Title optimization (15 points)
    if (!metrics.pageTitle || metrics.pageTitle.length < 50 || metrics.pageTitle.length > 60) {
      score -= 15;
    }
    
    // Meta description (15 points)
    if (!metrics.metaDescription || metrics.metaDescription.length < 150 || metrics.metaDescription.length > 160) {
      score -= 15;
    }
    
    // H1 tags (10 points)
    if (metrics.h1Tags !== 1) {
      score -= 10;
    }
    
    // Images alt text (10 points)
    if (metrics.imagesWithoutAlt && metrics.imagesWithoutAlt > 0) {
      score -= Math.min(10, metrics.imagesWithoutAlt * 2);
    }
    
    // Canonical URL (10 points)
    if (!metrics.canonicalUrl) {
      score -= 10;
    }
    
    // Structured data (10 points)
    if (!metrics.structuredData) {
      score -= 10;
    }
    
    // Mobile friendly (10 points)
    if (!metrics.mobileFriendly) {
      score -= 10;
    }
    
    // Page load time (10 points)
    if (metrics.pageLoadTime && metrics.pageLoadTime > 3000) {
      score -= 10;
    }
    
    // Broken links (10 points)
    if (brokenLinks.length > 0) {
      score -= Math.min(10, brokenLinks.length * 2);
    }
    
    return Math.max(0, score);
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors"
        >
          SEO Report
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">SEO Audit Report</h2>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={runAudit}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {isLoading ? 'Running Audit...' : 'Run SEO Audit'}
              </button>
              
              {report && (
                <div className="text-right">
                  <div className={`text-3xl font-bold ${getScoreColor(calculateOverallScore())}`}>
                    {calculateOverallScore()}
                  </div>
                  <div className="text-sm text-gray-600">
                    {getScoreLabel(calculateOverallScore())}
                  </div>
                </div>
              )}
            </div>
          </div>

          {report && (
            <div className="space-y-6">
              {/* Basic SEO Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Page Title</h3>
                  <p className="text-sm text-gray-600 mb-2">{report.metrics.pageTitle || 'Not found'}</p>
                  <div className="text-xs">
                    {report.metrics.pageTitle && (
                      <span className={report.metrics.pageTitle.length >= 50 && report.metrics.pageTitle.length <= 60 ? 'text-green-600' : 'text-red-600'}>
                        Length: {report.metrics.pageTitle.length} characters
                      </span>
                    )}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Meta Description</h3>
                  <p className="text-sm text-gray-600 mb-2">{report.metrics.metaDescription || 'Not found'}</p>
                  <div className="text-xs">
                    {report.metrics.metaDescription && (
                      <span className={report.metrics.metaDescription.length >= 150 && report.metrics.metaDescription.length <= 160 ? 'text-green-600' : 'text-red-600'}>
                        Length: {report.metrics.metaDescription.length} characters
                      </span>
                    )}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">H1 Tags</h3>
                  <p className="text-lg font-bold">{report.metrics.h1Tags || 0}</p>
                  <div className="text-xs">
                    <span className={report.metrics.h1Tags === 1 ? 'text-green-600' : 'text-red-600'}>
                      {report.metrics.h1Tags === 1 ? 'Optimal' : 'Needs attention'}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Images Without Alt</h3>
                  <p className="text-lg font-bold">{report.metrics.imagesWithoutAlt || 0}</p>
                  <div className="text-xs">
                    <span className={report.metrics.imagesWithoutAlt === 0 ? 'text-green-600' : 'text-red-600'}>
                      {report.metrics.imagesWithoutAlt === 0 ? 'All images have alt text' : 'Add alt text'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical SEO */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Canonical URL</h3>
                  <div className="text-xs">
                    <span className={report.metrics.canonicalUrl ? 'text-green-600' : 'text-red-600'}>
                      {report.metrics.canonicalUrl ? 'Present' : 'Missing'}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Structured Data</h3>
                  <div className="text-xs">
                    <span className={report.metrics.structuredData ? 'text-green-600' : 'text-red-600'}>
                      {report.metrics.structuredData ? 'Present' : 'Missing'}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
                  <div className="text-xs">
                    <span className={report.metrics.mobileFriendly ? 'text-green-600' : 'text-red-600'}>
                      {report.metrics.mobileFriendly ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Performance */}
              {report.metrics.pageLoadTime && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Page Load Time</h3>
                  <p className="text-lg font-bold">{report.metrics.pageLoadTime}ms</p>
                  <div className="text-xs">
                    <span className={report.metrics.pageLoadTime < 3000 ? 'text-green-600' : 'text-red-600'}>
                      {report.metrics.pageLoadTime < 3000 ? 'Good' : 'Needs improvement'}
                    </span>
                  </div>
                </div>
              )}

              {/* Broken Links */}
              {report.brokenLinks.length > 0 && (
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-2">Broken Links ({report.brokenLinks.length})</h3>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {report.brokenLinks.map((link, index) => (
                      <div key={index} className="text-sm text-red-700">
                        <div>{link.url}</div>
                        <div className="text-xs">Status: {link.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendations */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">SEO Recommendations</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  {report.metrics.pageTitle && (report.metrics.pageTitle.length < 50 || report.metrics.pageTitle.length > 60) && (
                    <li>• Optimize page title length (50-60 characters recommended)</li>
                  )}
                  {report.metrics.metaDescription && (report.metrics.metaDescription.length < 150 || report.metrics.metaDescription.length > 160) && (
                    <li>• Optimize meta description length (150-160 characters recommended)</li>
                  )}
                  {report.metrics.h1Tags !== 1 && (
                    <li>• Ensure exactly one H1 tag per page</li>
                  )}
                  {(report.metrics.imagesWithoutAlt || 0) > 0 && (
                    <li>• Add alt text to all images</li>
                  )}
                  {!report.metrics.canonicalUrl && (
                    <li>• Add canonical URL to prevent duplicate content issues</li>
                  )}
                  {!report.metrics.structuredData && (
                    <li>• Add structured data markup for better search visibility</li>
                  )}
                  {!report.metrics.mobileFriendly && (
                    <li>• Ensure mobile-friendly design</li>
                  )}
                  {report.metrics.pageLoadTime && report.metrics.pageLoadTime > 3000 && (
                    <li>• Improve page load speed (aim for under 3 seconds)</li>
                  )}
                  {report.brokenLinks.length > 0 && (
                    <li>• Fix broken links to improve user experience</li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SEOReport;