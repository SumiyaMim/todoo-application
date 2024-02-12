/* eslint-disable no-unused-vars */
import React from 'react'

const AddTask = () => {
  return (
    <div className='py-20'>
      <h1 className='text-center font-bold text-2xl mb-6'>Add Task</h1>
      <div className='border p-8 md:p-12 rounded-md border-zinc-300'>
        <input type="text" placeholder="New Task" className="input input-bordered rounded-md w-full outline-none focus:outline-none mb-5" />
        <div className='flex flex-col md:flex-row md:items-center gap-7 mb-7'>
          <h2 className='text-zinc-400 font-medium'>Priority Level:</h2>
            <div className='flex items-center gap-2'>
                <input type="radio" name="priority" className="radio checked:bg-[#4568da]" />
                <span className="font-medium">High</span> 
            </div>
            <div className='flex items-center gap-2'>
                <input type="radio" name="priority" className="radio checked:bg-[#4568da]" />
                <span className="font-medium">Medium</span> 
            </div>
            <div className='flex items-center gap-2'>
                <input type="radio" name="priority" className="radio checked:bg-[#4568da]" />
                <span className="font-medium">Low</span> 
            </div>
        </div>
        <button className='w-full bg-[#4568da] hover:bg-[#4363cb] text-white p-1.5 rounded-md font-medium'>Add New Task</button>
      </div>
    </div>
  )
}

export default AddTask
