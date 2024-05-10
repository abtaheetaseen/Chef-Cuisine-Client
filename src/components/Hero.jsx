import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='my-bg flex items-center justify-center'>
        <div className='text-center'>
            <h1 className='text-2xl lg:text-3xl text-white font-bold'>YOUR BELLY KNOWS BEST</h1>
            <p className='text-gray-400 w-9/12 mx-auto my-5'>A restaurant is a place where you can sit down and relax, and let someone else do the cooking for you. </p>
            <Link to="/allFoods">
                <button className='btn btn-sm text-black bg-[#ECBD00] border-2 hover:border-[#ECBD00] hover:text-white hover:bg-transparent'>All Food</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero
