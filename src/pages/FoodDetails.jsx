import React, { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';

const FoodDetails = () => {

    const {user} = useContext(AuthContext);

    const singleFood = useLoaderData();
    console.log(singleFood)

    const {_id, foodName, foodImage, category, price, description, name, email, foodOrigin} = singleFood;

  return (
    <div class="w-10/12 mx-auto my-[100px] md:w-[60%] lg:w-[50%] overflow-hidden bg-white rounded-lg shadow-md">
    <img class="object-cover w-full h-64" src={foodImage} alt="Article" />

    <div class="p-6">
        <div>
            <span class="text-xs font-medium text-[#ceb038] uppercase tracking-widest">*{category}</span>
            <p class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 tracking-widest">{foodName}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 mb-5">{description}</p>
            <div className='bg-[#ffd52c] rounded-xl p-2 text-white font-bold'>
            <p className='tracking-widest'>Price: ${price}</p>
            <p className='tracking-widest'>Food Origin : {foodOrigin}</p>
            </div>
        </div>

        <div class="mt-5 grid grid-cols-2">
            <div class="flex items-center">
                <div class="flex items-center">
                <img class="object-cover h-10 rounded-xl" src={user.photoURL} alt="Avatar" />
                    <p class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">{name.toUpperCase()}</p>
                </div>
                <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">{email}</span>
            </div>

            <div className='flex items-center justify-end'>
        <Link>
            <button className='btn btn-sm bg-[#ECBD00] border-none text-white hover:bg-[#ffe371] tracking-widest'>
                Purchase
            </button>
        </Link>
    </div>
        </div>

    </div>
</div>
  )
}

export default FoodDetails
