import React from 'react'
import Footer from './section/footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {children}
      <Footer />
    </main>
  )
}

export default Layout