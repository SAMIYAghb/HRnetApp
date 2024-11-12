import { createSlice } from "@reduxjs/toolkit";
import department from "../../data/department.ts";
import { DepartmentState } from "../../../types.ts";


const initialState: DepartmentState = {
  departments: department,
};

const departmentSlice = createSlice({
    name: 'department',
    initialState,
    reducers: {
      // ajoute d'autres reducers ici si nécessaire
    },
  });
  
  // Exporter le reducer
  export default departmentSlice.reducer;
  
  // Selector pour récupérer les départements
  export const selectDepartments = (state: { department: DepartmentState }) => state.department.departments;