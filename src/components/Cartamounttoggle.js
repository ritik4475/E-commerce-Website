import React from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'
const Cartamounttoggle = ({amount, setdecrease, setincrease}) => {
  return (
    <div>
    
    <div className=' flex p-2 border-2 rounded-lg bg-slate-100 w-fit mt-4 ml-8'>
    <button onClick={()=>setincrease()} className=' mt-1 mr-3'><FaPlus size={25}/></button>
       <p className=' text-xl mr-3 font-bold text-[#00df5a]'>{amount}</p>
    <button onClick={()=>setdecrease()} className='mt-1'><FaMinus size={25}/></button>
    </div>
    </div>
  )
}

export default Cartamounttoggle