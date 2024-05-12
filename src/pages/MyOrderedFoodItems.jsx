import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { RiDeleteBack2Fill } from "react-icons/ri";

const MyOrderedFoodItems = () => {

    const [myOrderedFoodItems, setMyOrderedFoodItems] = useState([]);
    console.log(myOrderedFoodItems)

    const {user} = useContext(AuthContext);

    const url = `http://localhost:3000/orders?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyOrderedFoodItems(data);
        })
    }, [])

    const showDate = new Date();
    const displayTodaysDate = showDate.getDate()+"/"+(showDate.getMonth()+1)+"/"+showDate.getFullYear();

  return (
    <>
    <div className='text-center w-10/12 mx-auto my-[50px]'>
      <h1 className='text-2xl tracking-widest bg-[#ECBD00] text-white p-1 rounded-lg'>My Ordered Items : {myOrderedFoodItems.length}</h1>
    </div>

    <div>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Time</th>
        <th>Date</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      {
        myOrderedFoodItems.map(food => (
            <tr key={food._id}>
        <td><img className='h-[80px] rounded-lg' src={food.foodImage} alt="" /></td>
        <td>{food.foodName}</td>
        <td>${food.price}</td>
        <td>{food.buyingTime}</td>
        <td>{displayTodaysDate}</td>
        <td>{food.buyerQuantity}</td>
        <td>
            <button className='btn btn-sm bg-red-500 text-white rounded-full hover:bg-red-400'>
            <RiDeleteBack2Fill />
            </button>
        </td>
      </tr>
        ))
      }
    </tbody>
  </table>
</div>
    </div>

    </>
  )
}

export default MyOrderedFoodItems
