import React from 'react'
import '../App.css';

const Chef = () => {
    return (
        <>
            <div className='text-center w-10/12 mx-auto my-[50px]'>
                <h1 className='text-3xl font-extrabold mb-3'>Meet Our Chefs</h1>
                <p>Chefs are artists, and I couldn't be happy with my art if I was forced to use cheap ingredients. If you want to become a great chef, you have to work with great chefs.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto my-[50px] gap-10 md:gap-10 lg:gap-10'>

                <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md chef1-bg"></div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Harry Maguire</h3>

                        <div className="text-center px-3 py-2 bg-[#ECBD00]">
                            <span className="font-bold text-white tracking-widest">Executive Chef</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div className="chef2-bg w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"></div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Harry Kane</h3>

                        <div className="text-center px-3 py-2 bg-[#ECBD00]">
                            <span className="font-bold text-white tracking-widest">Sous Chef</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div className="chef3-bg w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"></div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Marcus Rashford</h3>

                        <div className="text-center px-3 py-2 bg-[#ECBD00]">
                            <span className="font-bold text-white tracking-widest">Chef De Parties</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Chef
