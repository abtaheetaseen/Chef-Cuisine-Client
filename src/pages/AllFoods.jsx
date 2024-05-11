import React from 'react'
import { useLoaderData } from 'react-router-dom'
import '../App.css';
import AllFood from './AllFood';

const AllFoods = () => {

    const allFoods = useLoaderData();

  return (
    <>
      <div className='allFood-bg h-[200px] w-10/12 mx-auto my-[50px] rounded-xl flex items-center justify-center'>
        <div>
        <h1 className='text-2xl text-white tracking-widest font-semibold'>Explore Our All Food</h1>
        </div>
      </div>

      <div className='w-10/12 mx-auto mt-0 mb-[50px] grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {
            allFoods.map(food => <AllFood food={food} key={food._id} />)
        }
    </div>
    </>
  )
}

export default AllFoods
