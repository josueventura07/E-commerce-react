import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";


const cartSlice = createSlice({
    name: 'cart',
    initialState: null,
    reducers: {
        setCartGlobal: (state, action) => action.payload 
    }
})

export const {setCartGlobal} = cartSlice.actions

export default cartSlice.reducer

export const getAllProductCart = () => (dispatch) => {
        const URL = 'http://localhost:9000/api/v1/carts/myCart'
        return axios.get(URL, getConfig())
        .then(res => dispatch(setCartGlobal(res.data.cart)))
        .catch(err => console.log(err))
}