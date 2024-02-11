/* eslint-disable no-unused-vars */
import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className="relative flex flex-col justify-center items-center h-[380px] lg:h-[466px]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-snug lg:leading-snug max-w-xs md:max-w-sm lg:max-w-md text-center font-bold text-black mb-3 md:mb-6">
        Organize your work and life, finally.
        </h1>
        <h3 className='text-sm text-center md:text-lg lg:text-xl leading-6 md:leading-8 lg:leading-8 font-medium text-gray-500 mb-8 md:mb-10 max-w-xs md:max-w-2xl lg:max-w-3xl'>Elevate Your Productivity, Serenity, and Organization with Todoist: The Premier Task Management and To-Do List App.</h3>
        <div className='flex justify-center items-center gap-1'>
            <div className='h-1.5 w-20 bg-[#4568da] rounded-full'></div>
            <div className='h-1.5 w-12 bg-[#4568da] rounded-full'></div>
            <div className='h-1.5 w-20 bg-[#4568da] rounded-full'></div>
        </div>
        </div>
    </div>
  )
}

export default Banner
