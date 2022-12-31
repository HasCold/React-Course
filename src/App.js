import './App.css';
import Header from './Header';  // Object Destructuring 

// React.Fragment :-
// In React, a fragment is a way to group a list of children without adding extra nodes to the DOM. It is represented by the <React.Fragment> component, or by the short-hand <> syntax.

function App() {
let name = "Web 3.0";

// In JSX syntax , we need only one parent element which encloses all the other attribute like in return div container is the parent element or we can do other elements close in the <> empty tag 
  return (
    <div className="App">
    <Header />
    <h1>{name}</h1>
    </div>
  );
}

export default App;
