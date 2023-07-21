import React from 'react'
import Formatprice from '../helpers/Formatprice';
import { FaDeleteLeft } from "react-icons/fa6";
import { useCartcontext } from '../context/Cartcontext';
import Cartamounttoggle from './Cartamounttoggle';

const Cartitem = ({ id, name, image, price, amount }) => {
    const {removeitem ,setdecrease, setincrease} = useCartcontext();
    return (
        <div className='grid grid-cols-6 mb-[1rem]'>
            <div className=' flex '>
                <img src={image} alt='img' className='w-[6rem] ml-[5rem] mt-10 rounded-md' />
                <p className='mt-12 font-bold ml-3'>{name}</p>
            </div>
            <p className=' font-bold mt-12 ml-[6rem]'><Formatprice price={price} /></p>
            <p className=' font-bold  mt-6 ml-[6rem]'><Cartamounttoggle amount={amount} setdecrease={()=>setdecrease(id)} setincrease={()=>setincrease(id)}/></p>
            <p className=' font-bold  mt-12 ml-[12rem]'><Formatprice price={price * amount} /></p>
            <p className=' font-bold  mt-12 cursor-pointer ml-[16rem]' onClick={()=> removeitem(id)}><FaDeleteLeft size={25} /></p>
        </div>
    )
}

export default Cartitem