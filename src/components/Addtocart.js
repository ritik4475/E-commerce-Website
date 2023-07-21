import React, { useState } from 'react'
import Cartamounttoggle from './Cartamounttoggle'
import { NavLink } from 'react-router-dom'
import { useCartcontext } from '../context/Cartcontext'

const Addtocart = ({product}) => {
    const {id, stock} = product
    const {addtocart} = useCartcontext();

    const [amount, setamount] = useState(1)

    const setdecrease = () => {
       amount > 1 ? setamount(amount-1) : setamount(1)
    }

    const setincrease = () => {
        amount < stock ? setamount(amount+1) : setamount(stock)
    }

  return (
    <div>
        <Cartamounttoggle amount={amount} setdecrease={setdecrease} setincrease={setincrease}/>
        <NavLink to={"/cart"}
        onClick={()=>addtocart(id, amount, product)}>
            <button className=' mt-6 bg-[#03f363] p-2 ml-8 rounded-sm hover:scale-105 duration-300'>Add To Cart</button>
        </NavLink>
    </div>
  )
}

export default Addtocart