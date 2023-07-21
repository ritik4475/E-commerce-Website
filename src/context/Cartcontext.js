import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Cartreducer"

const Cartcontext = createContext();

const getlocalcartdata = () => {
    let localcartdata = localStorage.getItem("mycart")
    if(localcartdata === []){
        return []
    }
    else{
        return JSON.parse(localcartdata);
    }
}

const initialstate = {
    //cart: [],
    cart: getlocalcartdata(),
    totalitem: "",
    totalprice: "",
    totalamount: "",
    shippingfee: 5000,
}

const Cartprovider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialstate)

    const addtocart = (id, amount, product) => {
        dispatch({type:"ADD_TO_CART", payload: {id, amount, product}})
    }

    //increment, decrement
    const setincrease = (id) => {
        dispatch({type:"SET_INC", payload : id})
    }

    const setdecrease = (id) => {
        dispatch({type:"SET_DEC", payload : id})
    }

    const removeitem = (id) => {
        dispatch({type:"REMOVE_ITEM", payload: id })
    }

    //clear cart
    const clearcart = () => {
        dispatch({type:"CLEAR_CART"})
    }

    //add the data in local storage
    useEffect(()=>{
        dispatch({type:"CART_TOTAL_PRICE"})
        localStorage.setItem("mycart", JSON.stringify(state.cart))
    },[state.cart])

    return <Cartcontext.Provider value={{...state, addtocart, removeitem, clearcart, setincrease, setdecrease}}>{children}</Cartcontext.Provider>
}

const useCartcontext = () => {
    return useContext(Cartcontext)
}

export {Cartprovider, useCartcontext}