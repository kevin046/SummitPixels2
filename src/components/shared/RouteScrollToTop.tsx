import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to the top on route changes for better UX
const RouteScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Always reset scroll on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.search]);

  return null;
};

export default RouteScrollToTop;