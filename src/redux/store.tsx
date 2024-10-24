import { configureStore } from "@reduxjs/toolkit";
import departmentReducer from './slices/DepatementSlice';
import stateReducer from './slices/StateSlice'

const store = configureStore({
    reducer: {
    department : departmentReducer,
    states : stateReducer,
    }
})

export default store;