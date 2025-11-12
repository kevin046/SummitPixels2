import ReactGA from 'react-ga4';

const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID

export const initGA = () => {
  ReactGA.initialize(GA_TRACKING_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const logEvent = (category: string, action: string, label?: string, value?: number) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

export const logException = (description: string, fatal = false) => {
  ReactGA.event('exception', {
    description,
    fatal,
  });
};

// Custom SEO tracking events
export const trackContactForm = () => {
  logEvent('Contact', 'Form Submit', 'Contact Form');
};

export const trackServiceClick = (serviceName: string) => {
  logEvent('Services', 'Click', serviceName);
};

export const trackPortfolioView = (projectName: string) => {
  logEvent('Portfolio', 'View', projectName);
};

export const trackQuoteRequest = () => {
  logEvent('Quote', 'Request', 'Quote Form');
};

export const trackSocialClick = (platform: string) => {
  logEvent('Social', 'Click', platform);
};

export const trackScrollDepth = (depth: number) => {
  logEvent('Engagement', 'Scroll Depth', `${depth}%`);
};

export const trackTimeOnPage = (time: number) => {
  logEvent('Engagement', 'Time on Page', `${time}s`);
};