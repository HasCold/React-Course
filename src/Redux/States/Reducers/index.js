import { createSlice } from "@reduxjs/toolkit";


export const incdecSlice = createSlice({
    name : 'incdec',
    initialState : 0, 
    reducers : {   // In reducers, we have to define the actions in a object
        Inc: (state, action) => {
            // we want our state so that's why we return it;
            return state += action.payload;  // payload pass the value thorugh App.js from Inc and Dec  
        },
        Dec: (state, action) => {
            return state -= action.payload;
        }    
    }
})

export const {Inc, Dec} = incdecSlice.actions; // In actions se hamara inc aur dec mil gae ga
export default incdecSlice.reducer;