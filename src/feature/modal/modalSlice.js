import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen:false
}

const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers: {
        openMode:(state, action)=>{
            state.isOpen = true
        },

        closeMode: (state, action)=>{
            state.isOpen= false
        }
    }
})

export const {openMode, closeMode} = modalSlice.actions;
export default modalSlice.reducer