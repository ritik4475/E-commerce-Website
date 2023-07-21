import React from 'react'
import { useCartcontext } from '../context/Cartcontext'
import Cartitem from './Cartitem';
import Formatprice from '../helpers/Formatprice';

const Cart = () => {
  const { cart, shippingfee, clearcart, totalprice } = useCartcontext();

  if (cart.length === 0) {
    return <div>
      <h1 className='text-3xl font-bold text-[#00df59e6]'><a href='/'>⇾back to Home</a></h1>
      <p className='text-4xl flex items-center justify-center mt-[15rem] text-gray-400'>Cart is Empty</p>
      <a href='/'><p className='text-2xl flex items-center justify-center mt-[2rem] bg-[#00df5a] text-white w-fit mx-auto p-2 font-bold rounded-md hover:scale-105 duration-300 hover:text-black'>SHOP NOW</p></a>
    </div>
  }
  return (
    <div>
      <h1 className='text-3xl font-bold text-[#00df59e6]'><a href='/'>⇾back to Home</a></h1>
      <div className=' flex mt-[8rem]'>
        <p className=' pr-[6rem] pl-[6rem]'>Item</p>
        <p className=' pr-[6rem] pl-[8rem]'>Price</p>
        <p className=' pr-[6rem] pl-[8rem]'>Quantity</p>
        <p className=' pr-[6rem] pl-[8rem]'>Subtotal</p>
        <p className=' pr-[6rem] pl-[8rem]'>Remove</p>
      </div>
      <hr className=' border-gray-400 w-[80rem] mt-3 ml-12' />
      <div>
        {
          cart.map((ele) => {
            return <Cartitem key={ele.id} {...ele} />
          })
        }
      </div>
      <hr className=' border-gray-400 w-[80rem] mt-3 ml-12' />
      <div className=' w-fit mt-[3rem] ml-[5rem]'>
        <button className='text-xl font-bold text-[#00df59e6] m-2'><a href='/'>⇾Continue Shopping</a></button><br />
        <button onClick={clearcart} className=' bg-red-500 text-white rounded-md p-2 ml-[1rem] mt-5 font-bold'>CLEAR CART</button>
        <div className=' mt-5 '>
          <p className=' font-bold p-1'>Sub-Total: <Formatprice price={totalprice} /></p>
          <p className=' font-bold p-1'>Shipping Fee: <Formatprice price={shippingfee} /></p>
          <hr className='border-gray-400' />
          <p className=' font-bold p-1'>Total: <Formatprice price={totalprice + shippingfee} /></p>
        </div>
      </div>
    </div>

  )
}

export default Cart