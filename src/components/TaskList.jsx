/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const TaskList = () => {

  const [tasks, setTasks] = useState([]);

  // get tasks
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div className='pb-20'>
        <h1 className='text-center font-bold text-2xl mb-6'>Task List</h1>
        {tasks.map((task) => (
          <div key={task.id} className='border p-4 rounded-md border-zinc-300 flex justify-between items-center mb-2'>
            <div className='flex items-center gap-3'>
              <input type="checkbox" className="checkbox checkbox-sm border-[#4568da] checked:border-[#4568da] [--chkbg:#4568da] [--chkfg:white]" />
              <h1>{task.task}</h1>
            </div>
            <div className='flex items-center gap-4'>
              <h2 className='font-semibold text-yellow-500'>{task.priority}</h2>
              <i className='text-green-700 text-xl'><FaEdit></FaEdit></i>
              <i className='text-red-700 text-xl'><RiDeleteBinLine></RiDeleteBinLine></i>
            </div>
          </div>
        ))}
    </div>
  )
}

export default TaskList
