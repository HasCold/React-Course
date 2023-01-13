import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Redux/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './Redux/States/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={Store}>
  <App />        {/* Single Child Component */} 
   {/* -->> JSX expression have must one parent element ; ham isko div tag ke andr bhi close krskte the lkn React.StrictMode use karenge so we get additional checks and warnings */} 
  {/* </React.StrictMode>  */}
  </Provider>
);

reportWebVitals();
