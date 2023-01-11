// In React, a custom hook is a JavaScript function that starts with the word "use" and that can call other hooks. Custom hooks allow you to extract component logic into reusable functions. By using a custom hook, you can share logic across multiple components, and make your components more modular and easier to test.

import React from 'react';
import './App.css';
import Header from './components/Header';
import useFetch from './useFetch';

// Use API from dummyapis.com

function App(){
const [Data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=5&idStarts=1001")
  return (
    <>
    <Header />
    {
        Data.map((e, index) => {
            return <h1 key={index}>{e.firstName}</h1>
        })
    }
    </>
  )
}

export default App