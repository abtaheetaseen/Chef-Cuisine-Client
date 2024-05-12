import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { RiDeleteBack2Fill } from "react-icons/ri";
import Swal from 'sweetalert2';

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

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            fetch(`http://localhost:3000/orders/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                   Swal.fire({
                title: "Deleted!",
                text: `Order has deleted.`,
                icon: "success"
              });
            //   remove from ui
            const remaining = myOrderedFoodItems.filter(item => item._id !== id);
            setMyOrderedFoodItems(remaining);
            }
        })
            }
          });
    }

    // get date
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
            <button onClick={() => handleDelete(food._id)} className='btn btn-sm bg-red-500 text-white rounded-full hover:bg-red-400'>
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
