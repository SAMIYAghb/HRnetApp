import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the Employee type if you're using TypeScript
interface Employee {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  zipCode: string;
  department: string;
  state: string;
}

// Define the initial state
interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },
  },
});

export const { addEmployee, setEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;



// PayloadAction : Il s'agit d'un type TypeScript fourni par Redux Toolkit qui représente une action avec une payload typée. Cela garantit que la donnée transmise dans l'action est du bon type.


// reducers : Cette section définit les actions (ou "réducteurs") associées à ce slice. Ici, il y a une seule action addEmployee.

// addEmployee : Cette action prend un Employee comme payload et l'ajoute au tableau employees. state.employees.push(action.payload); ajoute l'employé fourni dans l'action (action.payload) au tableau des employés. En utilisant createSlice, cette mutation directe de l'état est possible car Redux Toolkit utilise Immer pour gérer immuablement l'état sous le capot.


// addEmployee : L'action addEmployee est exportée pour être utilisée dans les composants, permettant d'ajouter un nouvel employé.
// employeeSlice.reducer : Le reducer généré est exporté comme valeur par défaut, ce qui permet à ce slice d'être inclus dans le store Redux global.