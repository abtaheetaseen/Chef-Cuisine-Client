import React from 'react'

const FeedBackCard = ({feedback}) => {
  return (
    <div className='w-10/12 h-fit group mx-auto my-0'>
        <div className='relative overflow-hidden'>
            <img src={feedback.imageURL} alt="" />
            <div className='absolute h-full w-full bg-black/50 flex items-center justify-center -top-10 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <div className='text-center text-white'>
                <h1 className='text-2xl tracking-widest mb-3 font-extrabold'>{feedback.userName.toUpperCase()}</h1>
                <p className='w-10/12 mx-auto my-0 text-gray-200 font-semibold'>{feedback.feedback}</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default FeedBackCard
