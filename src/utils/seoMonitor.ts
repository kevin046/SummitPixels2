import { logEvent } from './analytics';

interface SEOMetrics {
  pageTitle: string;
  metaDescription: string;
  h1Tags: number;
  imagesWithoutAlt: number;
  canonicalUrl: string;
  structuredData: boolean;
  pageLoadTime: number;
  mobileFriendly: boolean;
}

interface BrokenLink {
  url: string;
  status: number;
  source: string;
}

class SEOMonitor {
  private metrics: Partial<SEOMetrics> = {};
  private brokenLinks: BrokenLink[] = [];

  constructor() {
    this.init();
  }

  private init() {
    this.checkPageTitle();
    this.checkMetaDescription();
    this.checkH1Tags();
    this.checkImagesAlt();
    this.checkCanonicalUrl();
    this.checkStructuredData();
    this.checkMobileFriendly();
    this.measurePageLoadTime();
    this.checkBrokenLinks();
  }

  private checkPageTitle() {
    const title = document.title;
    this.metrics.pageTitle = title;
    
    // Track title length
    logEvent('SEO', 'Title Length', undefined, title.length);
    
    // Check if title is optimal (50-60 characters)
    if (title.length < 50 || title.length > 60) {
      console.warn(`Title length is not optimal: ${title.length} characters`);
      logEvent('SEO', 'Title Issue', 'Length not optimal');
    }
    
    // Check if title contains primary keyword
    if (!title.toLowerCase().includes('toronto') || !title.toLowerCase().includes('photography')) {
      console.warn('Title may not contain primary keywords');
      logEvent('SEO', 'Title Issue', 'Missing keywords');
    }
  }

  private checkMetaDescription() {
    const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content');
    this.metrics.metaDescription = metaDescription || '';
    
    if (metaDescription) {
      // Track description length
      logEvent('SEO', 'Description Length', undefined, metaDescription.length);
      
      // Check if description is optimal (150-160 characters)
      if (metaDescription.length < 150 || metaDescription.length > 160) {
        console.warn(`Meta description length is not optimal: ${metaDescription.length} characters`);
        logEvent('SEO', 'Description Issue', 'Length not optimal');
      }
      
      // Check if description contains primary keyword
      if (!metaDescription.toLowerCase().includes('toronto') || !metaDescription.toLowerCase().includes('photography')) {
        console.warn('Meta description may not contain primary keywords');
        logEvent('SEO', 'Description Issue', 'Missing keywords');
      }
    } else {
      console.error('No meta description found');
      logEvent('SEO', 'Description Issue', 'Missing description');
    }
  }

  private checkH1Tags() {
    const h1Tags = document.querySelectorAll('h1');
    this.metrics.h1Tags = h1Tags.length;
    
    // Track number of H1 tags
    logEvent('SEO', 'H1 Tags Count', undefined, h1Tags.length);
    
    // Check if there's exactly one H1 tag
    if (h1Tags.length !== 1) {
      console.warn(`Number of H1 tags is not optimal: ${h1Tags.length} found`);
      logEvent('SEO', 'H1 Issue', 'Multiple or missing H1 tags');
    }
    
    // Check if H1 contains primary keyword
    h1Tags.forEach((h1, index) => {
      const text = h1.textContent || '';
      if (!text.toLowerCase().includes('toronto') && !text.toLowerCase().includes('photography')) {
        console.warn(`H1 tag ${index + 1} may not contain primary keywords`);
        logEvent('SEO', 'H1 Issue', 'Missing keywords in H1');
      }
    });
  }

  private checkImagesAlt() {
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt || img.alt.trim() === '');
    this.metrics.imagesWithoutAlt = imagesWithoutAlt.length;
    
    // Track images without alt text
    logEvent('SEO', 'Images Without Alt', undefined, imagesWithoutAlt.length);
    
    if (imagesWithoutAlt.length > 0) {
      console.warn(`${imagesWithoutAlt.length} images found without alt text`);
      logEvent('SEO', 'Image Issue', 'Missing alt text');
      
      // Log specific images without alt
      imagesWithoutAlt.forEach((img, index) => {
        console.warn(`Image ${index + 1} missing alt: ${img.src}`);
      });
    }
  }

  private checkCanonicalUrl() {
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
    this.metrics.canonicalUrl = canonical || '';
    
    if (canonical) {
      logEvent('SEO', 'Canonical URL Present', 'Yes');
      
      // Check if canonical URL is valid
      try {
        new URL(canonical);
        logEvent('SEO', 'Canonical URL Valid', 'Yes');
      } catch {
        console.warn('Canonical URL is not valid');
        logEvent('SEO', 'Canonical Issue', 'Invalid URL');
      }
    } else {
      console.warn('No canonical URL found');
      logEvent('SEO', 'Canonical Issue', 'Missing canonical');
    }
  }

  private checkStructuredData() {
    const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
    this.metrics.structuredData = structuredData.length > 0;
    
    // Track structured data presence
    logEvent('SEO', 'Structured Data', structuredData.length > 0 ? 'Present' : 'Missing');
    
    if (structuredData.length === 0) {
      console.warn('No structured data found');
      logEvent('SEO', 'Structured Data Issue', 'Missing structured data');
    } else {
      // Validate structured data
      structuredData.forEach((script, index) => {
        try {
          const data = JSON.parse(script.textContent || '');
          logEvent('SEO', 'Structured Data Valid', `Script ${index + 1}`);
        } catch {
          console.warn(`Structured data script ${index + 1} is not valid JSON`);
          logEvent('SEO', 'Structured Data Issue', 'Invalid JSON');
        }
      });
    }
  }

  private checkMobileFriendly() {
    const viewport = document.querySelector('meta[name="viewport"]');
    this.metrics.mobileFriendly = !!viewport;
    
    // Track mobile friendliness
    logEvent('SEO', 'Mobile Friendly', viewport ? 'Yes' : 'No');
    
    if (!viewport) {
      console.warn('No viewport meta tag found - page may not be mobile friendly');
      logEvent('SEO', 'Mobile Issue', 'Missing viewport');
    }
  }

  private measurePageLoadTime() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        this.metrics.pageLoadTime = loadTime;
        
        // Track page load time
        logEvent('SEO', 'Page Load Time', undefined, loadTime);
        
        // Check if load time is acceptable (< 3 seconds)
        if (loadTime > 3000) {
          console.warn(`Page load time is slow: ${loadTime}ms`);
          logEvent('SEO', 'Performance Issue', 'Slow load time');
        }
      });
    }
  }

  private async checkBrokenLinks() {
    const links = Array.from(document.querySelectorAll('a[href]'));
    
    for (const link of links) {
      const url = link.getAttribute('href');
      if (url && !url.startsWith('#') && !url.startsWith('javascript:') && !url.startsWith('mailto:')) {
        try {
          const response = await fetch(url, { method: 'HEAD' });
          if (!response.ok) {
            this.brokenLinks.push({
              url,
              status: response.status,
              source: window.location.href
            });
            console.warn(`Broken link found: ${url} (Status: ${response.status})`);
            logEvent('SEO', 'Broken Link', `${response.status}`);
          }
        } catch (error) {
          this.brokenLinks.push({
            url,
            status: 0,
            source: window.location.href
          });
          console.warn(`Broken link found: ${url} (Network error)`);
          logEvent('SEO', 'Broken Link', 'Network error');
        }
      }
    }
  }

  public getMetrics() {
    return this.metrics;
  }

  public getBrokenLinks() {
    return this.brokenLinks;
  }

  public generateReport() {
    const report = {
      metrics: this.metrics,
      brokenLinks: this.brokenLinks,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };
    
    console.log('SEO Audit Report:', report);
    
    // Send report summary to GA4
    logEvent('SEO', 'Audit Report', 'Generated');
    
    return report;
  }
}

export const seoMonitor = new SEOMonitor();

// Export for manual triggering
export const runSEOAudit = () => {
  return seoMonitor.generateReport();
};

// Auto-run on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      seoMonitor.generateReport();
    }, 3000); // Wait 3 seconds for page to fully load
  });
}