// useReducer Hook Manages the complex state of a component

// useReducer takes two arguments: a reducer function and an initial state.
// The reducer function takes two arguments: the current state and an action. It returns the next state based on the action.
// The dispatch function is used to trigger an update to the state. You can call dispatch with an action object, which will be passed to the reducer function.

import React from 'react';
import './App.css';
import Header from './components/Header';
import { useReducer } from 'react';

const reducer = (state, action) => {
if (action.type === "INC"){
  return state + 1;
}else if(action.type === "DEC"){
  return state - 2;
}else if(action.type === "MUL"){
  return state * 2;
}
return state;
}

let initialState = 0
function App (){
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <Header />
    <h1>{state}</h1>
    <button onClick={() => dispatch({type: "INC"})}>Increment</button>
    <button onClick={() => dispatch({type: "DEC"})}>Decrement</button>
    <button onClick={() => dispatch({type: "MUL"})}>Mulitply</button>
    </>
  )
}

export default App
