import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { IoFastFood } from "react-icons/io5";
import { MdDinnerDining } from "react-icons/md";
import { FaEnvira } from "react-icons/fa";

const Services = () => {
  return (
    <>

<div data-aos="fade-down" className='text-center w-10/12 mx-auto my-[50px]'>
        <h1 className='text-3xl font-extrabold mb-3'>Services We Offer</h1>
        <p>We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open. Food - it leaves you speechless, then turns you into a chef.</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto my-[50px] md:gap-10 lg:gap-10'>

        <div className='p-5 shadow-2xl h-[180px] hover:border-2 hover:border-b-[#ECBD00] mb-10'>
        <FaEnvira className='text-[#ECBD00] text-4xl mb-2' />
        <h1 className='text-xl font-medium'>Greeny Environment</h1>
        <p>Nature is painting for us, day after day, pictures of infinite beauty.</p>
        </div>

        <div className='p-5 shadow-2xl h-[180px] hover:border-2 hover:border-b-[#ECBD00] mb-10'>
        <MdDinnerDining className='text-[#ECBD00] text-4xl mb-2' />
        <h1 className='text-xl font-medium'>Healthy Dine</h1>
        <p>Let food be thy medicine and medicine be thy food.</p>
        </div>

        <div className='p-5 shadow-2xl h-[180px] hover:border-2 hover:border-b-[#ECBD00] mb-10'>
        <IoFastFood className='text-[#ECBD00] text-4xl mb-2' />
        <h1 className='text-xl font-medium'>Fresh Food</h1>
        <p>One cannot think well, love well, sleep well, if one has not dined well.</p>
        </div>

        <div className='p-5 shadow-2xl h-[180px] hover:border-2 hover:border-b-[#ECBD00]'>
        <TbTruckDelivery className='text-[#ECBD00] text-4xl mb-2' />
        <h1 className='text-xl font-medium'>Delivery</h1>
        <p>Delivery that satisfies your hunger. Time is precious, and we know that</p>
        </div>

    </div>

    </>
  )
}

export default Services
