import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name: 'cart',
    initialState:{
        itemInCart:[]
    },
    reducers:{
        setItemInCart: (state, action) => {
            state.itemInCart.push(action.payload)
        },
        deleteItemInCart: (state, action) => {
            state.itemInCart= state.itemInCart.filter(shoes => shoes.id !== action.payload)
        },

    }
})

export const {setItemInCart, deleteItemInCart} = cartSlice.actions;
export default cartSlice.reducer;