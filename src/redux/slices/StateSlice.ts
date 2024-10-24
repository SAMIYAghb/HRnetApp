import { createSlice } from "@reduxjs/toolkit";
import state from "../../data/state.ts";


// Interface pour représenter un État
interface State {
    name: string;
    abbreviation: string;
}

  // État du slice
interface StatesState {
    states: State[]; // Un tableau d'objets de type State
}

const initialState: StatesState = {
    states: state, 
};

const statesSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
      // ajoute d'autres reducers ici si nécessaire
    },
  });
  
  // Exporter le reducer
  export default statesSlice.reducer;
  
  // Selector pour récupérer les départements
  export const selectStates = (state: { states: StatesState }) => state.states.states;