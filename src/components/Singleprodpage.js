import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductcontext } from '../context/Productcontext'
import Formatprice from '../helpers/Formatprice';
import { TbTruckDelivery } from 'react-icons/tb'
import { BsCashCoin, BsAwardFill, BsDatabaseFillLock } from 'react-icons/bs'
import Myimage from './Myimage';
import Addtocart from './Addtocart';


const API = "https://api.pujakaitem.com/api/products";

const Singleprodpage = () => {

  const { getsingleproduct, singleproduct } = useProductcontext()
  const {

    name,
    stock,
    price,
    image,
    category,
    reviews,
    description,
    company,
    colors,
    stars,
  } = singleproduct;

  const { id } = useParams()


  useEffect(() => {
    getsingleproduct(`${API}?id=${id}`)
  }, [])



  return (
    <div>
      <h1 className='text-3xl font-bold text-[#00df59e6]'><a href='/'> ⇾back to Home</a></h1>
      <div className='flex p-4 mt-[5rem]'>
        <Myimage img={image} />
        <div className=' mt-[3rem]'>
          <p className='text-4xl font-bold'>{name}</p>
          <p className='text-lg'>{company}</p>
          <p className='text-3xl font-bold'><Formatprice price={price} /></p>
          <p className=' mt-4 text-sm'>Category: {category}</p>
          <p className='mt-2  text-sm '><span className=' bg-green-500 rounded-sm text-white p-[0.2rem]'> ★ {stars}</span></p>
          <p className=' mt-2 text-sm'><span className='font-bold'>Description: </span>{description}</p>
          <p className=' text-sm mt-2'>Reviews: {reviews}</p>
          <p className=' text-sm'>Stocks Available: {stock}</p>
            <div className=' flex mt-8'>
              <div className=' border-2 ml-10 w-fit p-3'><TbTruckDelivery size={30} />Fast Delivery</div>
              <div className=' border-2 ml-10 w-fit p-3'><BsCashCoin size={30} />Cashback</div>
              <div className=' border-2 ml-10 w-fit p-3'><BsAwardFill size={30} />Top Brand</div>
              <div className=' border-2 ml-10 w-fit p-3'><BsDatabaseFillLock size={30} />Secure Transactions</div>
            </div>
            <hr className=' mt-4 w-[50rem] border-black'/>
            {stock > 0 && <Addtocart product={singleproduct}/>}
        </div>
      </div>
    </div>
  )
}

export default Singleprodpage