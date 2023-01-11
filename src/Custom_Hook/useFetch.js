import { useState, useEffect } from "react"

const useFetch = (url) => {

  const [Data, setData] = useState([]);
useEffect(() => {
    async function getData(){
        const response = await fetch(url); // JSON = JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page;
        const data = await response.json();
        console.log(data);
        setData(data);
    }
    getData();
}, [])

  return [Data];
}

export default useFetch