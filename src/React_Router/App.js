import Header from "./components/Header.js";
import "./App.css";
import Home from "./Home.js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.jsx";
import Insta from "./components/Insta.js";
import Mail from "./components/Mail.js";
import UserDetails from "./components/UserDetails.js";

// For the use of React Router, You have to take guidance and reference from the official documentation 'reactrouter.com'. This will help you to route your application with complete explanation.

// https://dev.to/adidoshi/react-router-dom-v6-51j2 ; It is very helpful link to take reference regarding the react-router-dom current version with the complete advanced explanation;

function App(){
  
    return (
        //  Is tarah se hum navigate karnenge aur hamari application dubara reload nahi hogi khali hamara ak component render hoga  

    <Router>    {/* <Router> </Router>  */}  
    <div>
    <Header />
    <Routes>
    
    {/* Home */} 
    <Route path="/">
    <Route index element={<Home />} />  {/*If we give the index so By-Default the component will rendered into the home page */}
    <Route exact path="/home" element={<Home />} />   {/* <Routes /> -->> Self Closing Tag */}      
    </Route>

    {/* For Dynamic Route Path */}
    <Route path="/home/:userId" element={<UserDetails />} >  {/*You can give the dynamic routes by using : */}

    </Route>

    {/* About */}
    <Route path="/about" element={<About />} />
      
    {/* Contact */}
    <Route path="/contact" element={<Contact />}>  {/* Nested Route */}
    <Route index element={<Insta/>} /> {/* If we give the index so By-Default the component will open into the instagram page*/}
    <Route path="insta" element={<Insta/>} /> 
    <Route path="mail"  element={<Mail/>}/>
    </Route>
    
    {/* Error */}
    <Route path="*" element={<Error />} />
    
    </Routes>
    </div>
    </Router>
  );
}

export default App


