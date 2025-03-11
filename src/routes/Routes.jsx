import React from 'react'
import { Route, Routes as Routers } from 'react-router'
import App from '../App'
import RootLayout from '../layouts/RootLayout'
import HomePage from '../pages/HomePage'

const Routes = () => {
  return (
    <>
      <Routers>       
        <Route path='/' element={<RootLayout/>} >
          <Route index element={<HomePage />}/>
        </Route>
      </Routers>
    </>
  )
}

export default Routes
