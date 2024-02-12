/* eslint-disable no-unused-vars */
import React from 'react'
import { BsFacebook, BsPinterest } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialYoutubeCircular } from "react-icons/ti";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <div className='bg-black py-10'>
            <div className='flex justify-center mb-5'>
                <div className='flex items-center'>
                    <img src={logo} alt="" className='w-7 h-7 mt-1'/>
                    <div className="flex-1 mx-2 text-3xl text-[#5272dd] font-bold">todoo</div>
                </div>
            </div>
            <div className='text-white text-xl flex items-center gap-4 justify-center mb-6'>
                <i><BsFacebook></BsFacebook></i>
                <i><BsPinterest></BsPinterest></i>
                <i className='text-[28px]'><TiSocialYoutubeCircular></TiSocialYoutubeCircular></i>
                <i className='text-[24px]'><AiFillTwitterCircle></AiFillTwitterCircle></i>
            </div>
            <p className='text-xs text-zinc-300 text-center'>Copyright © {new Date().getFullYear()} todoo. All Right Reserved</p>
    </div>
    </div>
  )
}

export default Footer
