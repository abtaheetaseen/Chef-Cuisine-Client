import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import toast from 'react-hot-toast';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AddFoodItem = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleAddFoodItem = (e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const category = form.category.value;
        const quantity = parseInt(form.quantity.value);
        const price = parseFloat(form.price.value);
        const foodOrigin = form.foodOrigin.value;
        const description = form.description.value;
        const name = form.name.value;
        const email = form.email.value;

        const foodItem = {
            foodName,
            foodImage,
            category,
            quantity,
            price,
            foodOrigin,
            description,
            name,
            email,
            "count": 0
        }
        console.log(foodItem)

        fetch("https://assignment-11-server-lac-beta.vercel.app/foods", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(foodItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success("Your item has added")
                    form.reset();
                    navigate("/myAddedFoodItems")
                }
            })
    }

    return (
        <>
        <Helmet>
        <title>Chef-Cuisine || Add Item</title>
    </Helmet>
            <div className='addFood-bg h-[200px] w-10/12 mx-auto my-[50px] rounded-xl flex items-center justify-center'>
                <div>
                    <h1 className='text-2xl text-white tracking-widest font-semibold'>Add Food Item</h1>
                </div>
            </div>

            <section className="min-h-[90vh] flex items-center justify-center">

                <div>

                    <form onSubmit={handleAddFoodItem}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="foodName">Food Name</label>
                                <input id="foodName" name='foodName' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="foodImage">Food Image</label>
                                <input id="foodImage" name='foodImage' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="category">Category</label>
                                <input id="category" name='category' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="quantity">Quantity</label>
                                <input id="quantity" name='quantity' type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="price">Price ($)</label>
                                <input id="price" name='price' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="foodOrigin">Food Origin</label>
                                <input id="foodOrigin" name='foodOrigin' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="description">Description</label>
                                <input id="description" name='description' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="name">Your Name</label>
                                <input id="name" name='name' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} defaultValue={user?.displayName} />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="email">Your Email</label>
                                <input id="email" name='email' type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} defaultValue={user?.email} />
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">

                            <input className="cursor-pointer bg-[#ECBD00] p-2 rounded-xl text-white hover:text-[#ECBD00] hover:bg-transparent hover:border-2 hover:border-[#ECBD00]" type="submit" value="Add Item" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AddFoodItem
