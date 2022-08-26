import React from 'react'
import * as Icon from '../../../assets/images/icon'

function index() {
  return (
      <div className="flex justify-between items-center px-1 py-2 shadow-md">
        <h1 className='text-2xl font-semibold text-indigo-500 cursor-pointer'>TodoApp</h1>
        <Icon.menu/>
      </div>
  )
}

export default index