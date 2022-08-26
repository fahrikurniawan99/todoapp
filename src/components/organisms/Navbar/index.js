import React from 'react'
import Menu from '../../../assets/images/svg/Menu'

function index() {
  return (
      <div className="flex justify-between items-center px-1 py-2 shadow-md">
        <h1 className='text-3xl font-semibold text-indigo-500 cursor-pointer'>TodoApp</h1>
        <Menu/>
      </div>
  )
}

export default index