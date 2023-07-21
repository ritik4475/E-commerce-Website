import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductcontext } from "./Productcontext";
import reducer from "../reducer/Filterreducer";

const Filtercontext = createContext();

const initialstate = {
    filter_products: [],
    all_products: [],
    filters: {
        text: "",
        category: "all"
    }
}

const Filterprovider = ({children}) =>{

    const { products } = useProductcontext()
    

    const [state, dispatch] = useReducer(reducer, initialstate)
    
    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
    },[products])

    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"})
    },[products, state.filters])

    //update filter values
    const updatefiltervalue = (event) => {
        let name = event.target.name;
        let value = event.target.value

        return dispatch({type:"UPDATE_FILTER_VALUE", payload: {name, value}})
    }

    return <Filtercontext.Provider value={{...state, updatefiltervalue}}>{children}</Filtercontext.Provider>
    
}

const useFiltercontext = () => {
    return useContext(Filtercontext)
}

export {Filterprovider, Filtercontext, useFiltercontext}