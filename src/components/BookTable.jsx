import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const BookTable = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleBookTable = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const person = form.person.value;
        const time = form.time.value;

        const bookTableData = {
            email,
            phone,
            date,
            person,
            time
        }

        fetch("http://localhost:3000/reservations", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookTableData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success("Your reservation is confirmed");
                    form.reset();
                    navigate("/myReservation")
                }
            })
    }

    return (
        <>

<div className='text-center w-10/12 mx-auto my-[50px]'>
                <h1 className='text-3xl font-extrabold mb-3'>Book A Table</h1>
                <p>You can set your reservation as our schedules. We will be so glad to serve you the most precious way, Thank you!</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 lg:gap-0 md:gap-0'>
                {/* div 1 */}
                <div>
                    <div className='w-10/12 lg:w-7/12 mx-auto my-0 p-7 border-2 border-yellow-500 rounded-lg'>

                        <form onSubmit={handleBookTable}>

                            <div className="relative flex items-center mt-8">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input defaultValue={user?.email} readOnly={true} type="email" name='email' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" required />

                            </div>

                            <div className="relative flex items-center mt-8">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>

                                </span>

                                <input type="text" name='phone' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Phone No" required />

                            </div>


                            <div className="relative flex items-center mt-8">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>


                                </span>

                                <input type="date" name='date' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Date" required />

                            </div>

                            <div className="relative flex items-center mt-8">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>



                                </span>

                                <input type="text" name='person' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Person" required />

                            </div>

                            <div className="relative flex items-center mt-8">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>




                                </span>

                                <input type="text" name='time' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Time (AM/PM)" required />

                            </div>

                            <button className='btn btn-sm bg-yellow-500 text-white mt-7 hover:bg-yellow-300 hover:border-none cursor-pointer'>
                                <input type="submit" value="Book Table" />
                            </button>

                        </form>
                    </div>
                </div>

                {/* div 2 */}
                
                <div className='flex items-center justify-center bg-yellow-400 text-white font-body py-5 lg:rounded-l-xl md:rounded-l-xl'>

                
                    <div>
                        <h1 className='text-4xl font-body tracking-widest mb-10'>
                            Opening Hours
                        </h1>

                        <div className='flex items-center justify-between py-3'>
                            <h1>Monday :</h1>
                            <p>10:00 am - 12:00 am</p>
                        </div>
                        <hr />

                        <div className='flex items-center justify-between py-3'>
                            <h1>Tuesday :</h1>
                            <p>10:00 am - 12:00 am</p>
                        </div>
                        <hr />

                        <div className='flex items-center justify-between py-3'>
                            <h1>Wednesday :</h1>
                            <p>10:00 am - 12:00 am</p>
                        </div>
                        <hr />

                        <div className='flex items-center justify-between py-3'>
                            <h1>Thursday :</h1>
                            <p>10:00 am - 12:00 am</p>
                        </div>
                        <hr />

                        <div className='flex items-center justify-between py-3'>
                            <h1>Friday :</h1>
                            <p>11:00 am - 12:00 am</p>
                        </div>
                        <hr />

                        <div className='flex items-center justify-between py-3'>
                            <h1>Saturday :</h1>
                            <p>10:00 am - 12:00 am</p>
                        </div>
                        <hr />

                        <div className='flex items-center justify-between py-3'>
                            <h1>Sunday :</h1>
                            <p>11:00 am - 12:00 am</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookTable