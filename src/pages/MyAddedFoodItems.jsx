import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import MyAddedFoodItemCard from './MyAddedFoodItemCard';
import Loader from '../components/Loader';

const MyAddedFoodItems = () => {

    const { user } = useContext(AuthContext);

    const [myAddedFoodItems, setMyAddedFoodItems] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(myAddedFoodItems)

    const url = `http://localhost:3000/foods?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyAddedFoodItems(data);
                setLoading(false);
            })
    }, [])


    return (
        <div>
            <div>
                <div className='text-center w-10/12 mx-auto my-[50px]'>
                    <h1 className='text-2xl tracking-widest bg-[#ECBD00] text-white p-1 rounded-lg'>My Added Items : {myAddedFoodItems.length}</h1>
                </div>

                <div> 
                    { loading ? <Loader /> : (
                    <div className='w-10/12 mx-auto mt-0 mb-[50px] grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        {
                            myAddedFoodItems.map(food => <MyAddedFoodItemCard key={food._id} food={food} />)
                        }
                    </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default MyAddedFoodItems
