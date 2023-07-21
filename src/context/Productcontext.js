import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducer/Productreducer'

const Appcontext = createContext()

const initialstate = {
    isLoading: false,
    isError: false,
    products: [],
    singleproduct: {},

}

const Appprovider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialstate)

    //get data from api
    useEffect(() => {
        const getproducts = async () => {
            dispatch({ type: "SET_LOADING" })
            try {
                const res = await axios.get("https://api.pujakaitem.com/api/products");
                const products = await res.data
                dispatch({ type: "SET_API_DATA", payload: products })
            } catch (error) {
                dispatch({ type: "API_ERROR" })
            }
        }
        getproducts();
    }, [])


    //api call for single product
    const getsingleproduct = async (url) => {
        try {
            const res = await axios.get(url);
            const singleproduct = await res.data
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleproduct })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    }

    return <Appcontext.Provider value={{ ...state, getsingleproduct }}>{children}</Appcontext.Provider>
}

const useProductcontext = () => {
    return useContext(Appcontext)
}

export { Appprovider, Appcontext, useProductcontext };