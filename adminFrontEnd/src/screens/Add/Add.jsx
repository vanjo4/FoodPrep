import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

const Add = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className='app-content'>
        <Sidebar/>
        
      </div>
    </div>
  )
}

export default Add
