import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const PurchasePage = () => {

    const {user} = useContext(AuthContext);

    const navigate = useNavigate();

    const food = useLoaderData();
    console.log(food)

    const {_id, foodImage, foodName, price, email, quantity} = food;

    const handlePurchase = (e) => {
        e.preventDefault();
        if(user?.email === email) {
            return toast.error("You can't purchase your own food.")
        }

        
        const form = e.target;

        const foodId = _id;
        const foodName = form.foodName.value;
        const price = parseFloat(form.price.value);
        const buyingTime = form.buyingTime.value;
        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        const buyerQuantity = parseInt(form.quantity.value);
        if(buyerQuantity === 0){
            return toast.error("Your quantity must be at least one.")
        }
        if(buyerQuantity > quantity){
            return toast.error("Item is not available")
        }
        if(buyerQuantity > 20) {
            return toast.error("You cannot purchase more than 20.")
        }

        const orderedFood = {
            foodId,
            foodName,
            price,
            buyerQuantity,
            buyingTime,
            buyerName,
            buyerEmail,
            foodImage: foodImage
        }

        console.log(orderedFood)

        fetch("https://assignment-11-server-lac-beta.vercel.app/orders", {
            method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(orderedFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                toast.success("Your order has confirmed.")
                form.reset();
                navigate("/myOrderedFoodItems")
            }
        })
    }

    // input date field
    const date = new Date();
    const displayTime = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

  return (
    <>
    <Helmet>
        <title>Chef-Cuisine || Purchase</title>
    </Helmet>
    
    <section className="min-h-[90vh] flex items-center justify-center">

<div>
    <form onSubmit={handlePurchase}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="foodName">Food Name</label>
                <input id="foodName" name='foodName' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} defaultValue={foodName} />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="quantity">Available Quantity : {quantity}</label>
                <input id="quantity" name='quantity' type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="buyingTime">Buying Time</label>
                <input id="buyingTime" name='buyingTime' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} value={displayTime}/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="price">Price ($)</label>
                <input id="price" name='price' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} defaultValue={price} />
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
        {
            quantity === 0 ? 
            <>
                <input disabled={true} className="bg-gray-300 p-2 rounded-xl text-gray-400" type="submit" value="Purchase" />
            </> :
            <>
                <input className="cursor-pointer bg-[#ECBD00] p-2 rounded-xl text-white hover:text-[#ECBD00] hover:bg-transparent hover:border-2 hover:border-[#ECBD00]" type="submit" value="Purchase" />
            </>
        }
                
        </div>
    </form>
    </div>
</section>
</>
  )
}

export default PurchasePage
