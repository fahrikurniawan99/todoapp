import React from 'react'
import Menu from '../../assets/images/svg/Menu'

function Navbar() {
  return (
      <div className="flex justify-between items-center px-1 py-3 shadow-md">
        <h1 className='text-2xl font-semibold text-indigo-500 cursor-pointer'>TodoApp</h1>
        <Menu/>
      </div>
  )
}

export default Navbar