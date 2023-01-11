// useCallback Hook ko ham function memoize krne ke liye use krte hai

import React from 'react';
import './App.css';
import Header from './components/Header';
import { useState, useCallback} from 'react';
import Todos from './components/Todos';

// useMemo(() => {
//     useMemo syntax
// }, [])

function App (){
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);

    const Increment = () => {
        setCount((c) => c + 1);            
    }
    const Decrement = () => {
        setCount((c) => c - 1);            
    }

    const addTodo = useCallback(() => {
        setTodo((t) => [...t, "New Todo"]);  // ye spread opeartor ...t jo array me pehle se ha wo bhi print karega aur jo naya print hoga wo bhi print hoga 
    }, [todo]);  // -->> [] dependency array ka matlab kab ye function wapis se chalega ; Jab ye [todo] change hoga tab ye bar bar re-render hoga;

    return (
    <>
        <Header />
        <div className='button'>
        <button onClick={Decrement} style={{"marginLeft": "0.5vw"}}>-</button>
        <button onClick={Increment}>+</button>
        <h1>Count : {count}</h1>
        </div>

        <hr />

        <Todos todos={todo} addTodo={addTodo} />
    </>
    )
}

export default App