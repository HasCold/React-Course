import React from 'react';
import './App.css';
import Header from './components/Header';
import { useEffect, useState, useRef } from 'react';

function App (){
    const [input, setInput] = useState("");
    // const prevState = useRef(""); // counter ke andr ham current value ke sath sara work karenge
    const inputField = useRef();

    // useEffect(() => {   // Jaise hi hamara re-render hoga ham usko counter ma utni baar render kerdenge
    //     // counter.current = counter.current + 1;
    //     prevState.current = input;
    // }, [input]) // Jab bhi ye input field change hoga hamara useEffect call hoga 

    const formHandler = (e) => {
        setInput(e.target.value);
    }

    const clickHandler = () => {
        inputField.current.focus();
        inputField.current.value = "Hasan";
        inputField.current.style.color = "red";
        console.log(inputField.current.style.color);
        console.log(inputField.current.value);
    }

  return (
    <>
    <Header />
    <input ref={inputField}  placeholder={"Type Something"} /> {/* ref already built-in property */}
    {/* <h4>Pervious State was {prevState.current}</h4> */}
    <button onClick={clickHandler}>Submit</button>
    </>
  )
}

export default App