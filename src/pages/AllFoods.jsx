import React, { useEffect, useState } from 'react'
import '../App.css';
import AllFood from './AllFood';

const AllFoods = () => {

    const [allFoods, setAllFoods] = useState([]);
    const [totalFoodsCount, setTotalFoodsCount] = useState("");
    const foodsCount = totalFoodsCount.totalFoodsCount
    const itemsPerPage = 9;
    const numberOfPages = Math.ceil(foodsCount / itemsPerPage)
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [];
    for(let i = 0; i < numberOfPages; i++){
        pages.push(i);
    }
    console.log(pages);

    useEffect(() => {
        fetch(`http://localhost:3000/allFoods?page=${currentPage}&size=${itemsPerPage}`)
        .then(res => res.json())
        .then(data => {
            setAllFoods(data);
        })
    }, [currentPage, itemsPerPage])

    useEffect(() => {
        fetch(`http://localhost:3000/totalFoodsCount`)
        .then(res => res.json())
        .then(data => {
            setTotalFoodsCount(data);
        })
    }, [])

    const handlePrev = () => {
        if(currentPage > 0){
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNext = () => {
        if(currentPage < pages.length - 1){
            setCurrentPage(currentPage + 1);
        }
    }

  return (
    <>
      <div className='allFood-bg h-[200px] w-10/12 mx-auto my-[50px] rounded-xl flex items-center justify-center'>
        <div>
        <h1 className='text-2xl text-white tracking-widest font-semibold'>Explore Our All Food</h1>
        </div>
      </div>

      <div className='w-10/12 mx-auto mt-0 mb-[50px] grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {
            allFoods.map(food => <AllFood food={food} key={food._id} />)
        }
    </div>

    <div className='flex items-center justify-center gap-3 mt-[80px] mb-[30px]'>

        <button className='btn btn-sm' onClick={handlePrev}>
            Prev
        </button>

        {
            pages.map(page => <button onClick={() => setCurrentPage(page)} className={currentPage === page ? "selected" : "btn btn-sm"} key={page}>
                {page}
            </button>)
        }

        <button className='btn btn-sm' onClick={handleNext}>
            Next
        </button>

    </div>
    </>
  )
}

export default AllFoods
