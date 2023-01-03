// We have used frontend framework material UI in this project for the icons
import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';  // {Object Destructuring}

function App() {

  
  return (
    <div className="App">
    <Header />
    <div className='form'>
    <Stack direction="row" spacing={2}>
    <TextField id="outlined-basic" label="Name" variant="outlined" />
    <TextField id="outlined-basic" label="Email" variant="outlined" />
    <Button variant="contained" color="error"><AddIcon /></Button>   
    </Stack>
     </div>
    </div>
  );
}

export default App;
