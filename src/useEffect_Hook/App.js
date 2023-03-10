import Header from "./Header.js";
import "./App.css";
import React, {useState, useEffect} from "react";

function App(){
  
  const [state, setState] = useState(1);
  const [Data, setData] = useState([]);
  
  useEffect(() => {
    async function getData(){
      const response = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    getData();
    // window.alert("useEffect Called");  // It gives you a alert
    document.title = `(${state}) Employee Online`;  // Shows data on your favicon
  }, [state])  // -->> [dependencies]

    return (
    <div>
    <Header />
      <button onClick={() => setState(state+1)}>Click Me {state}</button>
      {
        Data.map((element, index) => {
          return(
              <div key={index} className= "data">
                <h4>{element.firstName}</h4>
                <h4>{element.email}</h4>
                <h4>{element.id}</h4>
              </div>
          )
        })
      }
    </div>
  );
}

export default App


