import React, {useState ,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { Puff } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Search On Google :- React loader spinner; Install the package from npm
// Search On Google :- React toastify; Install the package from npm ; website :- https://fkhadra.github.io/react-toastify/introduction/ ; Also import react-toastify-css

function App () {
    const [loading, setLoading] = useState(false);
    const [Data, setData] = useState([]);

async function getData() {
    setLoading(true);
    const response = await fetch('https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001');
    const data = await response.json();
    setData(data);
    setLoading(false);
    console.log(toast);
    toast.success("successfully fetched data");
}
// If you don't want to render useEffect twice a time then remove the React.StrictMode from index.js
useEffect(() => {
    getData();
}, []);

const handleButtonClick = async () => {
    setLoading(true);
    await getData();
};

const loadingData = () => {
    return (
        <div>
            {Data.map((e, index) => {
                return (
                    <p key={index}>{e.email}</p>
                );
            })}
        </div>
    )
};

return (
    <>
        <Header />
       <ToastContainer />
        <div className='spinner'>
            <button onClick={handleButtonClick} >Click Me</button>
            {loading ? <Puff /> : loadingData()}
        </div>
    </>
);
}

export default App