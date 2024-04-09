import { configureStore } from "@reduxjs/toolkit";
import productReducer from'./slice/productSlie'
import wishlistReducer from './slice/wishListsSlice'
import cartreducer from './slice/cartSlice'
const productStore=configureStore({
    reducer:{
        productReducer,
        wishlistReducer,
        cartreducer

    }
})
export default productStore