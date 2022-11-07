import { configureStore } from "@reduxjs/toolkit";
import modalreducer from './feature/modal/modalSlice'
import showDataReducer from "./feature/modal/showDataSlice";

export const store = configureStore({
    reducer:{
        modal:modalreducer,
        showData:showDataReducer
    }
})