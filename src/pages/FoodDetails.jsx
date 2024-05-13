import React, { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import profile from "../assets/images/profile.png"
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';

const FoodDetails = () => {

    const {user} = useContext(AuthContext);

    const singleFood = useLoaderData();
    console.log(singleFood)

    const {_id, foodName, foodImage, category, price, description, name, email, foodOrigin} = singleFood;

  return (
    <>
    <Helmet>
        <title>Chef-Cuisine || {foodName.toUpperCase()}</title>
    </Helmet>
    <div className="w-10/12 mx-auto my-[100px] md:w-[60%] lg:w-[50%] overflow-hidden bg-white rounded-lg shadow-md">
    <img className="object-cover w-full h-64" src={foodImage} alt="Article" />

    <div className="p-6">
        <div>
            <span className="text-xs font-medium text-[#ceb038] uppercase tracking-widest">*{category}</span>
            <p className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 tracking-widest">{foodName}</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 mb-5">{description}</p>
            <div className='bg-[#ffd52c] rounded-xl p-2 text-white font-bold'>
            <p className='tracking-widest'>Price: ${price}</p>
            <p className='tracking-widest'>Food Origin : {foodOrigin}</p>
            </div>
        </div>

        <div className="mt-5 grid grid-cols-2">
            <div className="flex items-center">
                <div className="flex items-center">
                <img className="object-cover h-10 rounded-xl border-2 border-gray-500" src={profile} alt="Avatar" />
                    <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200">{name.toUpperCase()}</p>
                </div>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{email}</span>
            </div>

            <div className='flex items-center justify-end'>
        
            {
                user.email === email ?
                <>
                    <button disabled={true} className='btn btn-sm bg-[#ECBD00] border-none text-white hover:bg-[#ffe371] tracking-widest'>
                        Purchase
                    </button>
                </> : 
                <>
                <Link to={`/purchasePage/${_id}`}>
                    <button className='btn btn-sm bg-[#ECBD00] border-none text-white hover:bg-[#ffe371] tracking-widest'>
                Purchase
            </button>
            </Link>
                </>
            }
            
        
    </div>
        </div>

    </div>
</div>
</>
  )
}

export default FoodDetails
