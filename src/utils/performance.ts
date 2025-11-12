import { logEvent } from './analytics';

interface PerformanceMetrics {
  LCP: number;
  FID: number;
  CLS: number;
  FCP: number;
  TTFB: number;
}

class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private observer: PerformanceObserver | null = null;

  constructor() {
    this.init();
  }

  private init() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      this.observeLCP();
      this.observeFID();
      this.observeCLS();
      this.observeFCP();
      this.observeTTFB();
    }
  }

  private observeLCP() {
    try {
      this.observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        this.metrics.LCP = lastEntry.startTime;
        
        // Track LCP in GA4
        logEvent('Web Vitals', 'LCP', undefined, Math.round(this.metrics.LCP));
        
        // Log if LCP is poor (> 4s)
        if (this.metrics.LCP > 4000) {
          console.warn(`LCP is poor: ${this.metrics.LCP}ms`);
        }
      });
      this.observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.error('LCP observation failed:', e);
    }
  }

  private observeFID() {
    try {
      this.observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.FID = entry.processingStart - entry.startTime;
          
          // Track FID in GA4
          logEvent('Web Vitals', 'FID', undefined, Math.round(this.metrics.FID));
          
          // Log if FID is poor (> 300ms)
          if (this.metrics.FID > 300) {
            console.warn(`FID is poor: ${this.metrics.FID}ms`);
          }
        });
      });
      this.observer.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.error('FID observation failed:', e);
    }
  }

  private observeCLS() {
    try {
      let clsValue = 0;
      let clsEntries: any[] = [];

      this.observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsEntries.push(entry);
            clsValue += entry.value;
          }
        });
        
        this.metrics.CLS = clsValue;
        
        // Track CLS in GA4
        logEvent('Web Vitals', 'CLS', undefined, Math.round(this.metrics.CLS * 1000) / 1000);
        
        // Log if CLS is poor (> 0.25)
        if (this.metrics.CLS > 0.25) {
          console.warn(`CLS is poor: ${this.metrics.CLS}`);
        }
      });
      this.observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.error('CLS observation failed:', e);
    }
  }

  private observeFCP() {
    try {
      this.observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.FCP = entry.startTime;
            
            // Track FCP in GA4
            logEvent('Web Vitals', 'FCP', undefined, Math.round(this.metrics.FCP));
            
            // Log if FCP is poor (> 3s)
            if (this.metrics.FCP > 3000) {
              console.warn(`FCP is poor: ${this.metrics.FCP}ms`);
            }
          }
        });
      });
      this.observer.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.error('FCP observation failed:', e);
    }
  }

  private observeTTFB() {
    try {
      this.observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.TTFB = entry.responseStart - entry.fetchStart;
          
          // Track TTFB in GA4
          logEvent('Web Vitals', 'TTFB', undefined, Math.round(this.metrics.TTFB));
          
          // Log if TTFB is poor (> 800ms)
          if (this.metrics.TTFB > 800) {
            console.warn(`TTFB is poor: ${this.metrics.TTFB}ms`);
          }
        });
      });
      this.observer.observe({ entryTypes: ['navigation'] });
    } catch (e) {
      console.error('TTFB observation failed:', e);
    }
  }

  public getMetrics() {
    return this.metrics;
  }

  public reportMetrics() {
    console.log('Core Web Vitals Metrics:', this.metrics);
    
    // Send all metrics to GA4
    Object.entries(this.metrics).forEach(([key, value]) => {
      if (value !== undefined) {
        logEvent('Web Vitals', 'Metric', key, Math.round(value));
      }
    });
  }
}

export const performanceMonitor = new PerformanceMonitor();

// Performance optimization utilities
export const optimizeImages = () => {
  // Intersection Observer for lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

export const preloadCriticalResources = () => {
  // Preload critical CSS and fonts
  const criticalResources = [
    '/fonts/main-font.woff2',
    '/css/critical.css'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.includes('.css') ? 'style' : 'font';
    if (resource.includes('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

export const deferNonCriticalScripts = () => {
  // Defer non-critical JavaScript
  const scripts = document.querySelectorAll('script[src]:not([defer]):not([async])');
  scripts.forEach(script => {
    if (!script.hasAttribute('data-critical')) {
      script.setAttribute('defer', '');
    }
  });
};

// Initialize performance optimizations
export const initializePerformance = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeImages();
      preloadCriticalResources();
      deferNonCriticalScripts();
    });
  } else {
    optimizeImages();
    preloadCriticalResources();
    deferNonCriticalScripts();
  }
};