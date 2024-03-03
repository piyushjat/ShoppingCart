import React from 'react'
import { useSelector } from "react-redux"
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const cart = useSelector((state) => state.cart);
  return (
    
      <div className='flex justify-between items-center h-20 max-w-6xl max-auto'>

        <NavLink to="/">
        <div className='ml-60 text-slate-100'>
        <p>Shopping Palace</p>
        </div>
        </NavLink>
        
      
      <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
        <NavLink to="/"><p>Home</p></NavLink>

        <NavLink to="/cart">
        <div className='relative'>
        <FaCartShopping className='text-2xl'/>
            <span className='absolute -top-1 -right-1 bg-green-600 text-xs w-5 h-5 text-center animate-bounce rounded-full text-white'>
                {cart.length}
            </span>
        </div>
        </NavLink>
      
        </div>

      </div>
    
  )
}
