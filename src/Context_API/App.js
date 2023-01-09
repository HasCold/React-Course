import React from 'react';
import './App.css';
import Header from './components/Header';
import { useState, createContext } from 'react';
import CompA from './components/compA';

const AppState = createContext();

function App(){
    const [data1, setData1] = useState("Tech Joints"); 
    const [data2, setData2] = useState({name : "Hasan", age : 20});
    return (
    <>
    <AppState.Provider value={{data1, data2}}>
    <Header />
    <CompA />
    </AppState.Provider>
    </>
  );
}

export default App
export {AppState}