const Productreducer = (state, action) => {

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        case "SET_API_DATA":
            /**const featuredata = action.payload.filter((ele)=>{
                return ele.featured ===true
            })*/
            return {
                ...state,
                isLoading: false,
                products: action.payload,

            }

        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                singleproduct: action.payload,
            }

        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isError: true,
            }
        default:
            return state;
    }

}

export default Productreducer