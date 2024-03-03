import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';



export default function Cart() {

    const cart = useSelector((state) => state.cart);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( ()=>{
        setTotalAmount(cart.reduce( (acc,curr) => acc + curr.price,0) );
    },[cart])
  return (
    <div className='flex justify-center items-center'>
      {
        cart.length > 0 ?
        (
            <div className='flex justify-center gap-3 max-w-6xl mx-auto gap-y-5 gap-x-5 min-h-[80vh]'>
                <div>
                    {
                        cart.map((item,index) => {return <CartItem key={item.id} item={item} itemIndex={index}/> })
                    }
                </div>

                <div className='flex flex-col justify-between  h-full gap-80 mt-12 ml-8'>

                    <div>
                        <div className='text-green-800 font-semibold text-lg'>Your Cart</div>
                        <div className='text-green-800 text-5xl uppercase font-bold'>Summary</div>
                        <p className='text-gray-700 font-semibold text-lg text-left'>
                            <span>Total Items: {cart.length}</span>
                        </p>
                    </div>

                    <div>
                        <p className='text-gray-700 font-semibold text-lg text-left'>Total Amount: ${totalAmount}</p>
                        <button className='bg-green-600 w-full items-center rounded-lg p-2 px-4 '>CheckOut Now</button>
                    </div>
                </div>
            </div>):
            (<div className='flex flex-col items-center justify-center h-full mt-60'>
                <p className='text-gray-700 font-semibold text-xl text-center'>Your cart is empty!</p>
                <Link to="/">
                    <button className='bg-green-600 rounded-lg p-2 px-4 items-center'>Shop Now</button>
                </Link>
            </div>)
      }
    </div>
  )
}
