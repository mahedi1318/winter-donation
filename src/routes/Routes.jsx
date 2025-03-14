import React from 'react'
import { Route, Routes as Routers } from 'react-router'
import App from '../App'
import RootLayout from '../layouts/RootLayout'
import HomePage from '../pages/HomePage'
import DonationCampainsPage from '../pages/DonationCampainsPage'
import DeshboardPage from '../pages/DeshboardPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

const Routes = () => {
  return (
    <>
      <Routers>       
        <Route path='/' element={<RootLayout/>} >
          <Route index element={<HomePage />}/>
          <Route path='/donation-campain' element={<DonationCampainsPage />}/>
          <Route path='/deshbord' element={<DeshboardPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>          
        </Route>
      </Routers>
    </>
  )
}

export default Routes
