import React from 'react'
import { InputTodo, Navbar } from '../../components/organisms'

function index() {
  return (
    <div className='container mx-auto p-1'>
      <Navbar/>
      <div className='mt-10'>
      <InputTodo/>
      </div>
    </div>
  )
}

export default index