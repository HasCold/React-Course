// We have used frontend framework material UI in this project for the icons
import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';  // {Object Destructuring}
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);  // Array of objects

  const AddData = () => {
    setData([...data, {name, email}]);   // yahan pr ham setData ko object bana rahe initally tu ye array tha ; spread operator (...) is used with array and objects
    setName("");  // By this way you can give the new data very easily
    setEmail("");
  }

  const removeItem = (index) => {
        let arr = data;
        arr.splice(index, 1);
        setData([...arr]);
  }

  const handlePress = (e) => {
    if (e.key === "Enter") {
      AddData();      
    }  
  }

  const timeout = (event) => {
      console.log("Suggestion for", event.target.value);
  }

  const Debounce = (func, delay) => {
  let id;
  return function(...args){
  if(id) {
    clearTimeout(id);
    console.log("Clearing Timeout");
  }
  id = setTimeout(() => {
    func.call(this,...args);
  }, delay);
}
}

const Decorator = (e) => {
  // timeout(e);
const debouncedTimeout = Debounce(timeout, 3000);
debouncedTimeout(e) 
}


  return (
    <div className="App">
    <Header />
    {/* Form Section */}
    <div className='form'>
    <Stack direction="row" spacing={2}>
    
    <TextField onKeyPress={(e) => handlePress(e)} value={name} id="outlined-basic" label="Name" variant="outlined" onChange={(e) => { setName(e.target.value); Decorator(e)}}/>  {/* e.target.value => shows particular event value */}

    <TextField onKeyPress={(e) => handlePress(e)} value={email} id="outlined-basic" label="Email" variant="outlined" onCopy={() => window.alert("Don't Copy")} onChange={(e) => setEmail(e.target.value) }/>

    <Button variant="contained" color="success" onDoubleClick={() => window.alert("Doubled Clicked!!")} onClick={AddData}><AddIcon /></Button>   
    </Stack>
     </div>
      {/* Data Shown Section */}
     <div className='data'>
     <div className='info'>
      <h4>Name</h4>      
      <h4>Email</h4>      
      <h4>Remove</h4>      
     </div>
      {
        data.map((element, index) => {
          return(
            <div key={index} className='info'>  
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <Stack>
            <Button onClick={() => removeItem(index)} variant="outlined" color="error">
            <DeleteIcon/>
            </Button>
            </Stack>
            </div>
          )
        })
      }
     </div>
    </div>
  );
}

export default App;
