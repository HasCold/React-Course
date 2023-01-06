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

// For the use of React Router, You have to take guidance and reference from the official documentation 'reactrouter.com'. This will help you to route your application with complete explanation.

function App(){
  
    return (
        //  Is tarah se hum navigate karnenge aur hamari application dubara reload nahi hogi khali hamara ak component render hoga  
    
    <Router>    {/* <Router> </Router>  */}  
    <div>
    <Header />
    <Routes>
    {/* Home */} 
    <Route exact path="/home" element={<Home />} />   {/* <Routes /> */}  

    {/* About */}
    <Route path="/about" element={<About />} />
      
    {/* Contact */}
    <Route path="/contact" element={<Contact />} />
    
    <Route path="*" element={<Error />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App


