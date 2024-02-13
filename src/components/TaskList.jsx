/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const [completedTask, setCompletedTask] = useState([]);
  const [filterPriority, setFilterPriority] = useState('');

  // get task
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // delete task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // edit task
  const handleEditTask = (id) => {
    setEditingTaskId(id);
    const taskToEdit = tasks.find(task => task.id === id);
    setEditedTask(taskToEdit);
  };

  const handleEdit = () => {
    const updatedTasks = tasks.map(task => {
      if (task.id === editedTask.id) {
        return editedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setEditingTaskId(null);
    setEditedTask('');
  };

  const handleUpdateTask = (e) => {
    setEditedTask({ ...editedTask, task: e.target.value });
  };

  const handleUpdatePriority = (e) => {
    setEditedTask({ ...editedTask, priority: e.target.value });
  };

  // update status
  const handleStatus = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, status: task.status === "completed" ? "not completed" : "completed" } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    const updatedCompletedTasks = updatedTasks.filter(task => task.status === "completed").map(task => task.id);
    setCompletedTask(updatedCompletedTasks);
  };
  
  
  // filter by priority
  const filteredTasks = filterPriority ? tasks.filter(task => task.priority === filterPriority) : tasks;

  // Count total tasks
  const totalTasks = tasks.length;

  // Count completed tasks
  useEffect(() => {
    const completedTasks = tasks.filter(task => task.status === "completed").length;
    setCompletedTask(completedTasks);
  }, [tasks]);

  return (
    <div className='pb-20'>
      <h1 className='text-center font-bold text-2xl mb-7'>Task List</h1>
      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500">No task available</p>
      ) : (
        <div>
          <div className='flex flex-col-reverse md:flex-row justify-between md:items-center gap-3'>
            <p className="text-gray-500 mb-4">Total tasks: {totalTasks} &nbsp; | &nbsp; Completed tasks: {completedTask}</p>
            <div className='mb-8 flex justify-end'>
              <div className="form-control w-full flex flex-row justify-end gap-2">
                <label className="label">
                  <span className="label-text font-semibold text-zinc-400 uppercase">Filter by</span>
                </label>
                <select 
                  className="select bg-zinc-100 focus:border-none outline-none focus:outline-none"
                  value={filterPriority}
                  onChange={(e) => setFilterPriority(e.target.value)}
                >
                  <option value="">Choose one</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
          </div>
          {filteredTasks.map((task) => (
            <div key={task.id} className='border p-4 rounded-md border-zinc-300 flex justify-between gap-3 items-center mb-3'>
              {editingTaskId === task.id ? (
                <div className='w-full'>
                <input type="text" value={editedTask.task} onChange={handleUpdateTask} className="input input-bordered rounded-md w-full outline-none focus:outline-none mb-5" />
                  <div className='flex flex-col md:flex-row md:items-center gap-7 mb-7'>
                    <h2 className='text-zinc-400 font-medium'>Priority Level:</h2>
                    <div className='flex items-center gap-2'>
                      <input type="radio" name="priority" value="High" className="radio checked:bg-[#4568da]" checked={editedTask.priority === 'High'} onChange={handleUpdatePriority} />
                      <span className="font-medium">High</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <input type="radio" name="priority" value="Medium" className="radio checked:bg-[#4568da]" checked={editedTask.priority === 'Medium'} onChange={handleUpdatePriority} />
                      <span className="font-medium">Medium</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <input type="radio" name="priority" value="Low" className="radio checked:bg-[#4568da]" checked={editedTask.priority === 'Low'} onChange={handleUpdatePriority} />
                      <span className="font-medium">Low</span>
                    </div>
                  </div>
                  <button onClick={handleEdit} className='w-full bg-[#4568da] hover:bg-[#4363cb] text-white p-1.5 rounded-md font-medium'>Save</button>
                </div>
              ) : (
                <>
                  <div className='flex items-center gap-3'>
                    <input type="checkbox" className="checkbox checkbox-sm border-[#4568da] checked:border-[#4568da] [--chkbg:#4568da] [--chkfg:white]" checked={task.status === "completed"} onChange={() => handleStatus(task.id)} />
                    <h1 style={{ textDecoration: task.status === "completed" ? 'line-through' : 'none' }}>{task.task}</h1>
                  </div>
                  <div className='flex items-center gap-4'>
                    <h2 className={`font-semibold ${
                      task.priority === 'High' ? 'text-orange-500' :
                      task.priority === 'Medium' ? 'text-yellow-500' :
                      task.priority === 'Low' ? 'text-green-500' : ''
                    }`}>
                      {task.priority}
                    </h2>
                    <i className='text-sky-600 text-xl' onClick={() => handleEditTask(task.id)}><FaEdit></FaEdit></i>
                    <i className='text-red-600 text-xl' onClick={() => deleteTask(task.id)}><RiDeleteBinLine></RiDeleteBinLine></i>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TaskList;
