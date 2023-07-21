const Filterreducer = (state, action) => {
    switch (action.type){
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]
            }

        case "UPDATE_FILTER_VALUE":
            const {name, value} = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters, 
                    [name]: value
                }
            }

        case "FILTER_PRODUCTS":
            let {all_products} = state;
            let tempfilterproduct = [...all_products]

            const {text, category} = state.filters;
            if(text){
                tempfilterproduct = tempfilterproduct.filter((currele)=>{
                    return currele.name.toLowerCase().includes(text);
                })
            }

            if(category != "all"){
                tempfilterproduct = tempfilterproduct.filter((ele)=> {
                    return ele.category === category;
                })
            }
            

            return {
                ...state,
                filter_products: tempfilterproduct,
            }
        default: return state
    }
}

export default Filterreducer