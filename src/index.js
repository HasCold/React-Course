import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './useCallback_Hook/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />    {/* --->>   Single Child Component */}
     {/* -->> JSX expression have must one parent element ; ham isko div tag ke andr bhi close krskte the lkn React.StrictMode use karenge so we get additional checks and warnings */}
  </React.StrictMode> 
);

reportWebVitals();
