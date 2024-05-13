import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../App.css';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {

    const {user, logOut, name, photoURL} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
        .then(() => {
          toast.success("User logged out")
          navigate("/login")

        })
        .catch(error => {
          console.log(error)
        })
    }

  return (
    <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto flex-col lg:flex-row'>
      <div className='flex-1'>
        <div className='flex gap-2 items-center'>
          <img className='w-auto h-7' src='' alt='' />
          <span className='text-xl font-bold text-[#ECBD00]'>Chef-Cuisine</span>
        </div>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 flex gap-3'>
            <NavLink to="/">
            <li>
            <div>Home</div>
          </li>
            </NavLink>
          
            <NavLink to="/allFoods">
            <li>
            <div>All Foods</div>
          </li>
            </NavLink>

            <NavLink to="/gallery">
            <li>
            <div>Gallery</div>
          </li>
            </NavLink>

          {
            !user && (
                <NavLink to="/login">
<li>
            <div>Login</div>
          </li>
                </NavLink>
                
            )
          }
        </ul>

        {
            user && (
                <>
                <div className='dropdown dropdown-end z-50'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div title={user?.displayName || name} className='w-10 rounded-full'>
              <img
                referrerPolicy='no-referrer'
                alt='User Profile Photo'
                src={user?.photoURL || photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex-col gap-3'
          >
            <NavLink to="/addFoodItem">
            <li>
              <div className='justify-between'>Add Food Item</div>
            </li>
            </NavLink>
            
            <NavLink to="/myAddedFoodItems">
            <li>
              <div>My Added Food Items</div>
            </li>
            </NavLink>

            <NavLink to="/myOrderedFoodItems">
            <li>
              <div>My Ordered Food Items</div>
            </li>
            </NavLink>

            {/* <li className=''>
              <button onClick={handleLogOut} className='btn btn-sm btn-error text-white block text-center'>Logout</button>
            </li> */}
          </ul>
        </div>
        <div className='ml-2'>
              <button onClick={handleLogOut} className='btn btn-sm btn-error text-white block text-center'>Logout</button>
            </div>
        </>
            ) 
        }
      </div>
    </div>
  )
}

export default Navbar
