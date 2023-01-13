// Redux is a state management library that you can use with any JS library or framework like React, Angular or Vue

//  FOR MORE INFORMATION :- you can also see the official docs of react redux website :- https://react-redux.js.org/tutorials/quick-start 

import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';  // You can access the state by using useSelector from react-redux;
import {Inc, Dec} from './States/Reducers/index';

function App(){
  const currentState = useSelector((state) => state.number);
  const dispatch = useDispatch(); // From dispatch you can show the actions
  return (
    <>
        <h1 className='redux'>React Redux</h1>
        <div className='demos'>
          <h1>{currentState}</h1>
        </div>
        <div>
          <button onClick={() => dispatch(Inc(10))}>INC</button>
          <button onClick={() => dispatch(Dec(5))}>DEC</button></div>
    </>
  )
}

export default App