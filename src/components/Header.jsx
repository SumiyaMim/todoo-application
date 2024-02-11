/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
      <div className="relative bg-cover bg-[url('https://i.ibb.co/sbLfnGk/banner-todoo.jpg')] bg-no-repeat">
        <Navbar/>
        <Banner/>
      </div>
    </div>
  )
}

export default Header
