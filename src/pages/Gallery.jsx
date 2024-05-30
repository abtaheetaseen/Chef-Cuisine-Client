import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { AuthContext } from '../provider/AuthProvider'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import FeedBackCard from './FeedBackCard';
import '../App.css';

const Gallery = () => {

  const navigate = useNavigate();
  const [myFeedBacks, setMyFeedBacks] = useState([]);
  console.log(myFeedBacks)
  const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch("http://localhost:3000/feedbacks")
        .then(res => res.json())
        .then(data => {
            setMyFeedBacks(data);
        })
    }, [])

  const handleGalleryForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const feedback = form.feedback.value;
    const imageURL = form.imageURL.value;

    const userFeedBack = {
      userName,
      feedback,
      imageURL,
      "email": user?.email
    }
    console.log(userFeedBack)

    fetch("http://localhost:3000/feedbacks", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userFeedBack)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        toast.success("Thanks for your feedback.")
        form.reset();
        navigate("/")
      }
    })
  }

  

  return (
    <>
      <Helmet>
        <title>Chef-Cuisine || Gallery</title>
      </Helmet>

      <div className='gallery-bg h-[200px] w-10/12 mx-auto my-[50px] rounded-xl flex items-center justify-center'>
        <div>
        <h1 className='text-2xl text-white tracking-widest font-semibold'>Galley || Our Customers Feedback</h1>
        </div>
      </div>

      <div className='flex items-center justify-center min-h-[70vh]'>
          <div className='w-10/12 mx-auto my-[50px] grid grid-cols-1 lg:grid-cols-2 gap-10'>
              { 
                myFeedBacks?.map(feedback => <FeedBackCard key={feedback._id} feedback={feedback} />)
              }
          </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div className='flex items-center justify-center'>
        <div>

          {
            !user ?
              <>
                <Link to="/login">
                  <button className="btn tracking-widest bg-[#ECBD00] border-none text-white hover:bg-[#ffe371]">Add Experience</button>
                </Link>

              </> :
              <>
                <button className="btn tracking-widest bg-[#ECBD00] border-none text-white hover:bg-[#ffe371]" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Experience</button>
              </>
          }

        </div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className='mb-5 text-xl font-bold'>
              Please share your experience
            </div>
            <form onSubmit={handleGalleryForm} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className='mb-5'>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="userName">Your Name</label>
                <input id="userName" name='userName' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required defaultValue={user?.displayName} readOnly={true} />
              </div>

              <div className='mb-5'>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="feedback">Feedback</label>
                <input id="feedback" name='feedback' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
              </div>

              <div className='mb-5'>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="imageURL">Image URL</label>
                <input id="imageURL" name='imageURL' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
              </div>
              
              <button className="btn tracking-widest bg-[#ECBD00] border-none text-white hover:bg-[#ffe371]">
                <input className='cursor-pointer' type="submit" value="Add" />
              </button>
              
              
              
            </form>

            <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
      </div>
          </div>
        </dialog>
      </div>
    </>
  )
}

export default Gallery
