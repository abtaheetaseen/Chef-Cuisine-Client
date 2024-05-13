import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-7xl text-red-500 font-extrabold mb-3'>404</h1>
        <p className='text-3xl mb-7 font-bold'>No page Found</p>
        <Link to="/">
          <button className='btn btn-error text-white'>Back to Home</button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
