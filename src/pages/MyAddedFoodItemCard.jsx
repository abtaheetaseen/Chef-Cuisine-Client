import React from 'react'
import { Link } from 'react-router-dom';

const MyAddedFoodItemCard = ({food}) => {

    const {_id, foodName, foodImage, category, price} = food;

  return (
    <div className='grid grid-cols-6 gap-5 border-2 border-gray-400 rounded-xl'>
      <div className='col-span-3'>
            <img className='h-[200px] w-full rounded-l-lg' src={foodImage} alt="" />
      </div>

      <div className='col-span-3 flex justify-start items-center'>
        <div>
            <h1 className='text-2xl tracking-widest font-medium'>{foodName}</h1>
            <p className='text-[15px] font-bold text-gray-500 mb-5'>*{category}</p>
            <p className='font-bold mb-3'>Price : ${price}</p>
            <div>
                <Link to={`/updatePage/${_id}`}>
                <button className='btn btn-sm bg-[#ECBD00] border-none text-white hover:bg-[#ffe371]'>
                    Update
                </button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyAddedFoodItemCard
