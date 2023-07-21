import React from 'react'
import Navbar from './Navbar'
import Gotosingleprod from './Gotosingleprod'
import Filtersection from './Filtersection'
import { BsSearch } from 'react-icons/bs'
import { useFiltercontext } from '../context/Filtercontext'


const Home = () => {

    const { filter_products, all_products, filters: { text, category }, updatefiltervalue } = useFiltercontext();

    //get unique data of category
    const getuniquedata = (data, property) => {
        let newval = data.map((ele) => {
            return ele[property]
        })
        return (newval = [...new Set(newval)]);
    }

    const categoryonlydata = getuniquedata(all_products, "category");

    return (
        <div >
            <Navbar />
            <div className=' border-b-2 border-gray-600 w-[15rem] pb-2 ml-20 mt-1'>
                <form onSubmit={(e) => e.preventDefault()} className='flex'>
                    <BsSearch className='mt-2 mr-2' />
                    <input type='text' value={text} name='text' onChange={updatefiltervalue} placeholder='Search Products' className=' outline-none text-lg' />
                </form>
            </div>
            <div className=' flex'>

                <div className='ml-[5rem] mt-[5rem] mr-[1rem] h-full w-[30rem]'>
                    <p className='text-xl'>Category</p>
                    {
                        categoryonlydata.map((ele, i) => {
                            return (
                                <div className='p-1 hover:text-gray-400'>
                                    <button key={i} type='button' name='category' value={ele} onClick={updatefiltervalue}>{ele}</button>
                                </div>
                            )
                        })
                    }
                    <hr className=' border-black'/>
                    <div className='text-3xl font-bold mt-[5rem] text-[#00df5a] hover:scale-105 duration-300 hover:text-black '>
                        BUY SOME COOL GADGETS AND MAKE YOUR LIFE EASY AND EXCITING.
                    </div>
                </div>
                
                <div className='  border-l border-black mt-10'>
                    {
                        filter_products.map((data) => {
                            return <Gotosingleprod key={data.id} {...data} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home