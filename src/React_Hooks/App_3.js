import "./App_3.css";
import Header from "./Header";
import React, {useState} from "react";

function App3(){
  const [num, setNum] = useState(1);  // const [initialValue, updaterFunction] = useState(initialValue);

  function inc(){
    setNum(num + 1);  // setNum is a function
  }  

  function dec(){
    setNum(num - 1);
  }  

    return ( 
    <div className="App3">
    <Header />
    <div className="main">
    <h1 className="heading">{num}</h1>
    <div className="button">
    <button className="btn" onClick={dec}>decrement</button> 
    <button className="btn" onClick={inc}>increment</button>   {/* onClick= {function} */} 
    </div>
    </div>
    </div>
  )
}

export default App3;

