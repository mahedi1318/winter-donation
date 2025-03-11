import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'

const RootLayout = () => {
  return (
    <>
    <Navbar />
    <main className='min-h-screen'>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default RootLayout
