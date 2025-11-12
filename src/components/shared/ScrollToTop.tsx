import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  threshold?: number; // px before showing
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ threshold = 300 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      setVisible(scrolled > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed z-50 bottom-6 right-6 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 text-gray-900 hover:bg-white hover:shadow-xl backdrop-blur-sm border border-gray-200 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-2'
      }`}
    >
      <div className="p-3 sm:p-3.5">
        <ChevronUp className="w-5 h-5" />
      </div>
    </button>
  );
};

export default ScrollToTop;