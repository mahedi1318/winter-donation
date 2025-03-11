import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/header/Navbar'

const RootLayout = () => {
  return (
    <>
    <Navbar />
      <Outlet />
    </>
  )
}

export default RootLayout
