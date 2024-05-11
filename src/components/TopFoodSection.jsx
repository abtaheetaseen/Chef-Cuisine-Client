import React, { useEffect, useState } from 'react'
import TopFood from './TopFood';

const TopFoodSection = () => {

    const [foods, setFoods] = useState([]);
    console.log(foods)

    useEffect(() => {
        fetch("http://localhost:3000/foods")
        .then(res => res.json())
        .then(data => {
            setFoods(data);
        })
    }, []);

  return (
    <>
      <div className='text-center w-10/12 mx-auto my-[50px]'>
        <h1 className='text-3xl font-extrabold mb-3'>Top Food Section</h1>
        <p>If you really want to make a friend, go to someone's house and eat with him... the people who give you their food give you their heart. Cooking is at once child's play and adult joy.</p>
    </div>

    <div className='w-10/12 mx-auto mt-0 mb-[50px] grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {
            foods.slice(0, 6).map(food => <TopFood food={food} key={food._id} />)
        }
    </div>
    </>
  )
}

export default TopFoodSection
