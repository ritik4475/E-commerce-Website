
import { BsFillCartCheckFill } from 'react-icons/bs'
import { useFiltercontext } from '../context/Filtercontext'
import { useProductcontext } from '../context/Productcontext';


const Navbar = () => {

  return (
    <>

      <div className='flex p-4'>
        <h1 className='text-3xl font-bold text-[#00df59e6]'><a href='/'>MyCommerce.in</a></h1>

        <ul className='flex text-xl mt-2'>
          <li className='ml-20'><a href='/about'>About</a></li>
          <li className='ml-20'><a href='/contact'>Contacts</a></li>
        </ul>
        
        <div className=' flex justify-end ml-[40rem] mt-2'>
          <a href='/cart' className='flex'><BsFillCartCheckFill size={30} className=' cursor-pointer' /> <p className='text-lg ml-2 mt-0.5'>Your Cart</p></a>
        </div>
      </div>
      <hr />
      
    </>
  )
}

export default Navbar