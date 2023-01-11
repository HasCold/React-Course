// useRef Hook Explanation :-

// The useRef hook is a way to create and access a "ref" in React. A ref is an object that you can use to store a reference to a DOM node or a React component instance. You can use the useRef hook to create a ref, and then pass that ref to a component's ref prop to create a reference to the component instance.

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
// Explanation of the ref attribute property

// The ref attribute is used to create a reference to the actual DOM node of an element. By passing the ref attribute to an element, you can then access that element's properties and methods using the current property of the ref.

// In this case, the ref attribute is being passed to an <input> element in order to create a reference to that input's DOM node. The inputField ref is created using the useRef hook. This ref is then passed as the value of the ref attribute on the <input> element, which creates a reference to the input's DOM node.