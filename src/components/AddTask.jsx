/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const AddTask = () => {

  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handlePriority = (e) => {
    setPriority(e.target.value);
  };

  // add task
  const handleAddTask = () => {
    // prevent adding task if task or priority is empty
    if (task === '' || priority === '') {
      return; 
    }

    // new task
    const newTask = {
      id: Date.now(),
      task,
      priority,
      status: "not completed"
    };

    // get an empty array or existing tasks from local storage
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // add the new task to existing tasks
    existingTasks.push(newTask);

    // update local storage with the new tasks
    localStorage.setItem('tasks', JSON.stringify(existingTasks));
    
    // Clear input fields
    setTask('');
    setPriority('');

    window.location.reload();
  }


  return (
    <div className='py-20'>
      <h1 className='text-center font-bold text-2xl mb-8 pb-1 px-3 border-2 w-fit mx-auto border-b-[#4568da] border-t-0 border-x-0'>Add Task</h1>
      <div className='border p-8 md:p-12 rounded-md border-zinc-300'>
        <input type="text" placeholder="New Task" className="input input-bordered rounded-md w-full outline-none focus:outline-none mb-5" onChange={handleTask}/>
        <div className='flex flex-col md:flex-row md:items-center gap-7 mb-7'>
          <h2 className='text-zinc-400 font-medium'>Priority Level:</h2>
            <div className='flex items-center gap-2'>
                <input type="radio" name="priority" value="High" className="radio checked:bg-[#4568da]" onChange={handlePriority}/>
                <span className="font-medium">High</span> 
            </div>
            <div className='flex items-center gap-2'>
                <input type="radio" name="priority" value="Medium" className="radio checked:bg-[#4568da]" onChange={handlePriority}/>
                <span className="font-medium">Medium</span> 
            </div>
            <div className='flex items-center gap-2'>
                <input type="radio" name="priority" value="Low" className="radio checked:bg-[#4568da]" onChange={handlePriority}/>
                <span className="font-medium">Low</span> 
            </div>
        </div>
        <button onClick={handleAddTask} className='w-full bg-[#4568da] hover:bg-[#4363cb] text-white p-1.5 rounded-md font-medium'>Add New Task</button>
      </div>
    </div>
  )
}

export default AddTask
