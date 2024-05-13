import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { AuthContext } from '../provider/AuthProvider'
import { Link } from 'react-router-dom';

const Gallery = () => {

  const { user } = useContext(AuthContext);

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
  }

  return (
    <>
      <Helmet>
        <title>Chef-Cuisine || Gallery</title>
      </Helmet>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div className='flex items-center justify-center min-h-[70vh]'>
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
              <div className='flex items-center justify-between'>
              <button className="btn tracking-widest bg-[#ECBD00] border-none text-white hover:bg-[#ffe371]">
                <input type="submit" value="Add" />
              </button>
              <Link to="/">
              <button className='btn tracking-widest btn-neutral'>
                  Home
              </button>
              </Link>
              
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  )
}

export default Gallery
