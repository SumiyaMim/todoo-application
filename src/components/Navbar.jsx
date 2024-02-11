/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="relative flex gap-5 justify-between items-center py-6 px-8 md:px-10 lg:px-14 max-w-md md:max-w-3xl lg:max-w-7xl mx-auto">
      <div className="flex w-full justify-between items-center">
        <div className="flex-1 mx-2 text-3xl text-[#5272dd] font-bold">todoo</div>
        <div className="dropdown dropdown-end lg:hidden mt-1.5">
          <label tabIndex={0} className="flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-6 text-sm font-semibold shadow bg-white rounded-box w-52 flex gap-2 flex-col"
          >
            <li>
               <NavLink 
                to='/'
                className={({ isActive }) =>
                isActive ? 'text-[#4c70e4]' : 'text-black'
                }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <a 
                className="hover:text-[#4c70e4] text-black"
                >
                    About
                </a>
            </li>
            <li>
                <a 
                className="hover:text-[#4c70e4] text-black"
                >
                    Contact
                </a>
            </li>
            <li>
                <a 
                className="hover:text-[#4c70e4] text-black"
                >
                    Login
                </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:block">
        <ul className="flex items-center gap-7 font-semibold">
          <li>
               <NavLink 
                to='/'
                className={({ isActive }) =>
                isActive ? 'text-base text-[#4c70e4]' : 'text-black'
                }
                >
                    Home
                </NavLink>
          </li>
          <li>
            <a 
            className="text-base hover:text-[#4c70e4] text-black"
            >
                About
            </a>
          </li>
          <li>
            <a 
            className="text-base hover:text-[#4c70e4] text-black"
            >
                Contact
            </a>
          </li>
          <li>
            <a 
            className="text-base hover:text-[#4c70e4] text-black"
            >
                Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
