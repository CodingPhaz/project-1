import products from "../products"


// export const addProductToCart = ({commit}, product) => {
//     commit("ADD_PRODUCT_TO_CART", product)
    
// }
export const addProductToCart = ({state, commit}, product) => {
       const cartItem =  state.carts.find(item => item.product.id == product.id)
       if(cartItem == undefined ){
           commit("PUSH_PRODUCT_ON_CART", product)
       }

   
}

//cart == cart object // n == index of cart
export const changeProductQuantity = ({commit}, {cart, n}) => {
    //get product index and get quantity of product give by user
    commit("CHANGE_QUANTITY", {cartIndex: n,cartQty: cart.quantity})
}
