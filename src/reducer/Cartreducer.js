const cartreducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { id, amount, product } = action.payload;

            //tackle existing product, then increase quantity
            let existingprod = state.cart.find((ele) => ele.id === id)
            if (existingprod) {
                let updatedprod = state.cart.map((ele) => {
                    if (ele.id === id) {
                        let newamount = ele.amount + amount;
                        if(newamount >= ele.max){
                            newamount = ele.max
                        }
                        return {
                            ...ele,
                            amount: newamount
                        }
                    } else {
                        return ele;
                    }

                })
                return {
                    ...state,
                    cart: updatedprod
                }
                //if not exist
            } else {

                let cartproduct = {
                    id: id,
                    name: product.name,
                    amount,
                    image: product.image[0].url,
                    price: product.price,
                    max: product.stock
                }
                return {
                    ...state,
                    cart: [...state.cart, cartproduct]
                }
            }

        case "REMOVE_ITEM":
            let updatedcart = state.cart.filter((ele) => ele.id !== action.payload)
            return {
                ...state,
                cart: updatedcart,
            }
        //set increment, decrement
        case "SET_DEC":
            let updatedprod = state.cart.map((ele)=>{
                if(ele.id === action.payload){
                    let decamount = ele.amount - 1;
                    if(decamount === 0){
                        decamount = 1;
                    }

                    return {
                        ...ele,
                        amount: decamount
                    }
                }
                else{
                    return ele
                }
            })
            return {
                ...state,
                cart: updatedprod
            }

        case "SET_INC":
            let updateprod = state.cart.map((ele)=>{
                if(ele.id === action.payload){
                    let incamount = ele.amount + 1;
                    if(incamount >= ele.max){
                        incamount = ele.max
                    }

                    return {
                        ...ele,
                        amount: incamount
                    }
                }
                else{
                    return ele
                }
            })
            return {
                ...state,
                cart: updateprod
            }

        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }

        case "CART_TOTAL_PRICE":
            let totalprice = state.cart.reduce((initialval, ele) => {
                let { price, amount } = ele;
                initialval = initialval + (price * amount);
                return initialval;
            }, 0)
            return {
                ...state,
                totalprice
            }
        default: return state
    }
}

export default cartreducer