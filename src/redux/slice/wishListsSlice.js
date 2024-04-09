import { createSlice } from "@reduxjs/toolkit";


const wishslice=createSlice({
    name:"wishlist",
    initialState:{
        wishlist:[]
    },
    reducers:{
        addtowishlist:(state,action)=>{
            const exitingproduct=state.wishlist.find(item=>item.id==action.payload.id)
            if(exitingproduct)
            {
                alert("Product Already Exist in Wishlist")
            }
            else{
                alert("product added to Wishlist")
            state.wishlist.push(action.payload)


            }
        },
        removewishlist:(state,action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
        }
    }

})

export const{addtowishlist,removewishlist}=wishslice.actions
export default wishslice.reducer
