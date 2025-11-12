import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout: React.FC = () => {
  const location = useLocation()
  const currentPage = location.pathname.slice(1) || 'home'

  return (
    <div className="min-h-screen bg-white" role="document">
      <Navigation currentPage={currentPage} />
      <main id="main-content" role="main" className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout