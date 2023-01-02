import './App.css';
// import Header from './Header';  // Object Destructuring 
import Student from './components/Student';
// React.Fragment :-
// In React, a fragment is a way to group a list of children without adding extra nodes to the DOM. It is represented by the <React.Fragment> component, or by the short-hand <> syntax.

function App() {
// let name = "Web 3.0";
// In JSX syntax , we need only one parent element which encloses all the other attribute like in return div container is the parent element or we can do other elements close in the <> empty tag 
  return (
    <div className="App">
    {/* props passing -->> Student component used for multiple times with different data*/} 
    <Student name= "Hasan" age= {22} />
    <Student name= "Umer" age= {17} />
    <Student name= "Talha" age= {15} />
    </div>
  );
}

export default App;
