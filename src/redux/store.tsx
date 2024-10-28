import { configureStore } from "@reduxjs/toolkit";
import departmentReducer from './slices/DepatementSlice';
import stateReducer from './slices/StateSlice'
import employeeReducer from './slices/EmployeeSlice'

const store = configureStore({
    reducer: {
    department : departmentReducer,
    states : stateReducer,
    employees: employeeReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;