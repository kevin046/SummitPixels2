import React from 'react'
import { Helmet } from 'react-helmet-async'

const Analytics: React.FC = () => {
  const measurementId = import.meta.env.VITE_GA_ID || 'G-0B2YH077YB'
  const scriptSrc = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  const initCode = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}');`
  return (
    <Helmet>
      <script async src={scriptSrc}></script>
      <script>{initCode}</script>
    </Helmet>
  )
}

export default Analytics
