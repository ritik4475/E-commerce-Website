import { NavLink } from "react-router-dom";
import Formatprice from "../helpers/Formatprice";

const Gotosingleprod = (ele) => {

    const { id, name, image, price, category,description, company } = ele;


    return <NavLink to={`/singleproduct/${id}`}>
        <div className=' flex rounded-lg p-10 bg-slate-200  w-fit cursor-pointer m-4'>

            <img src={image} alt='img' className=' w-[15rem] mr-6 rounded-lg' />
            <div className=' flex-col '>
                <h1 className=' text-3xl'>{name.toUpperCase()}</h1>
                <p>{company}</p>
                <p className=" font-bold text-xl"><Formatprice price={price}/></p>
                <p className=" text-xs mt-4">{description}</p>
            </div>
                
            </div>
    </NavLink>
}

export default Gotosingleprod