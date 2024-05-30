import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const MyReservation = () => {

    const [myReservations, setMyReservations] = useState([]);
    console.log(myReservations)

    const {user} = useContext(AuthContext);

    const url = `https://assignment-11-server-lac-beta.vercel.app/reservations?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyReservations(data);
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
            confirmButtonText: "Yes, cancel it!"
          }).then((result) => {
            if (result.isConfirmed) {

            fetch(`https://assignment-11-server-lac-beta.vercel.app/reservations/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                   Swal.fire({
                title: "Canceled!",
                text: `Reservation Canceled`,
                icon: "success"
              });
            //   remove from ui
            const remaining = myReservations.filter(item => item._id !== id);
            setMyReservations(remaining);
            }
        })
            }
          });
    }

  return (
    <>
    <Helmet>
        <title>Chef-Cuisine || My Reservation</title>
    </Helmet>
    <div className='lg:min-h-[70vh] lg:flex lg:items-center lg:justify-center'>
        <div>
    <div className='text-center w-10/12 mx-auto my-[50px]'>
      <h1 className='text-2xl tracking-widest bg-[#ECBD00] text-white p-1 rounded-lg'>My Reservations : {myReservations.length}</h1>
    </div>

    <div>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Email</th>
        <th>Date</th>
        <th>Phone</th>
        <th>Person</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      { 
      
        myReservations.map(item => (
            <tr key={item._id}>
        <td>{item.email}</td>
        <td>{item.date}</td>
        <td>{item.phone}</td>
        <td>{item.person}</td>
        <td>{item.time}</td>
        <td>
            <button onClick={() => handleDelete(item._id)} className='btn btn-sm bg-red-500 text-white rounded-full hover:bg-red-400'>
                Cancel
            </button>
        </td>
      </tr>
        ))
      }
    </tbody>
  </table>
</div>
    </div>
    </div>
    </div>
    </>
  )
}

export default MyReservation
