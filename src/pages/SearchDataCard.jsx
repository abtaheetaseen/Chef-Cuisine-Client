import React from 'react'
import { Link } from 'react-router-dom'

const SearchDataCard = ({data}) => {
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src={data.foodImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{data.foodName}</h2>
			<p className="dark:text-gray-800">Price : ${data.price}</p>
            <p className="dark:text-gray-800">Quantity : {data.quantity}</p>
		</div>
		<Link to={`/allFoods/${data._id}`}>
                <button className='btn btn-sm bg-[#ECBD00] border-none text-white hover:bg-[#ffe371]'>
                    Show Details
                </button>
            </Link>
	</div>
</div>
  )
}

export default SearchDataCard
