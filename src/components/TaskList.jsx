/* eslint-disable no-unused-vars */
import React from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const TaskList = () => {
  return (
    <div className='pb-20'>
        <h1 className='text-center font-bold text-2xl mb-6'>Task List</h1>
        <div className='border p-4 rounded-md border-zinc-300 flex justify-between items-center mb-2'>
            <div className='flex items-center gap-3'>
                <input type="checkbox" className="checkbox checkbox-sm border-[#4568da] checked:border-[#4568da] [--chkbg:#4568da] [--chkfg:white]" />
                <h1>Hello</h1>
            </div>
            <div className='flex items-center gap-4'>
                <h2 className='font-semibold text-yellow-500'>High</h2>
                <i className='text-green-700 text-xl'><FaEdit></FaEdit></i>
                <i className='text-red-700 text-xl'><RiDeleteBinLine></RiDeleteBinLine></i>
            </div>
        </div>
    </div>
  )
}

export default TaskList
