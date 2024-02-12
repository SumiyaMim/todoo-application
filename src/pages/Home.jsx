/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import AddTask from '../components/AddTask'
import TaskList from '../components/TaskList'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='px-8 md:px-10 lg:px-14 max-w-md md:max-w-3xl lg:max-w-7xl mx-auto'>
        <AddTask/>
        <TaskList/>
      </div>
    </div>
  )
}

export default Home
