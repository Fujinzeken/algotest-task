import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isShow: true
}

const showDataSlice = createSlice({
    name:'showData',
    initialState,
    reducers:{
        show: (state, action)=>{
            state.isShow = true
        },

        notshow: (state, action)=>{
            state.isShow = false
        }
    }

    
})
export const {show, notshow} = showDataSlice.actions
export default showDataSlice.reducer