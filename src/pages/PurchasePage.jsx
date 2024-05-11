import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';

const PurchasePage = () => {

    const {user} = useContext(AuthContext);

    const food = useLoaderData();
    console.log(food)

    const {_id, foodName, category, price} = food;

    const handlePurchase = (e) => {
        e.preventDefault();
        const form = form.reset();

        
    }

    const date = new Date();
    const displayTime = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

  return (
    <section className="min-h-[90vh] flex items-center justify-center">

<div>
    <form onSubmit={handlePurchase}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="foodName">Food Name</label>
                <input id="foodName" name='foodName' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" disabled defaultValue={foodName} />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="quantity">Quantity</label>
                <input id="quantity" name='quantity' type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="quantity">Buying Time</label>
                <input id="quantity" name='quantity' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} value={displayTime}/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="price">Price ($)</label>
                <input id="price" name='price' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" disabled defaultValue={price} />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="name">Buyer Name</label>
                <input id="name" name='name' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} defaultValue={user?.displayName}/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="email">Buyer Email</label>
                <input id="email" name='email' type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} defaultValue={user?.email}/>
            </div>
        </div>

        <div className="flex justify-end mt-6">
        
                <input className="cursor-pointer bg-[#ECBD00] p-2 rounded-xl text-white hover:text-[#ECBD00] hover:bg-transparent hover:border-2 hover:border-[#ECBD00]" type="submit" value="Purchase" />
        </div>
    </form>
    </div>
</section>
  )
}

export default PurchasePage
