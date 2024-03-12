import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux"
import { remove } from "../redux/Slices/CartSlice"
import { toast } from 'react-hot-toast';

export default function CartItem({item}) {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item Removed");
    }

  return (
   
      
      <div className='flex justify-between text-xl items-center border-b-2 border-gray-800 rounded-sm space-y-8 shadow-xl gap-3  mt-5 ml-5'>

        <div className='h-[150px] '>
            <img src={item.image} className='h-full w-full '/>
        </div>
        <div className='flex flex-col justify-between items-center rounded-lg gap-5 p-4 ml-5 h-full'>
            <p className='text-gray-700 font-semibold text-xl text-left truncate w-40 mt-1'>{item.title}</p>
            <p className='w-40 text-gray-400 font-normal text-[12px] text-left'>{item.description.split(" ").slice(0,10).join(" ")+"..."}</p>
            <div className='flex justify-between items-center w-full'>
                <p className='text-green-600 font-semibold cursor-pointer'>${item.price}</p>
                <div onClick={removeFromCart}>
                <MdDelete className='cursor-pointer text-red-800 text-1 w-5 h-5 text-center' />
                </div>
            </div>
        </div>
      </div>
    
  )
}
