import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';


export default function Home() {

    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProduct(){
        setLoading(true)
        try{
            let response = await fetch(API_URL);
            let output = await response.json();
            setPosts(output);
         }catch(err)
        {
            setPosts([])
        }
        
        setLoading(false)
    }

    useEffect(()=>{
            fetchProduct();
    },[])


  return (

    <div className=' flex justify-center items-center'>

    {
        loading ? (<Spinner/>) :
        posts.length > 0 ?
    (<div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl p-2 mx-auto gap-y-5 gap-x-5 min-h-[80vh]'>

            {
                posts.map((post) => (<Product post={post} key={post.id} />))
            }
    </div>) : 
    <div className='flex justify-center items-center'>
        <p>No Data Found</p>
    </div>
    }
    </div>
  )
}
