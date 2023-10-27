import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer:{
        cart: cartSlice,
    }
})

export default store;




/**
 * Create store
 *  - configureStore() - from RTK
 * 
 * Provide my star to app
 *  - <Provider store = {store}> import from React-Redux
 * 
 * Slice
 * - RTK - createSlice({
 *         name:"",
 *         initialState:{},
 *         reducers:{
 *           action:{(state,action)=>{respond to this action}}
 *           addItem:(state,action)=>{state = action.payload}
 *           
 *          }  
 *         })
 * 
 * export const {addItem} = RTK.actions 
 * export default rtk.reducer;
 * 
 * 
 * Put that slice into store
 *       - {
 *          reducer: }
 *             
 * 
 * */
