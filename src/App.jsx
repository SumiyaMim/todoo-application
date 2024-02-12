/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
