import logo from './logo.svg';
import './App.css';

// React.Fragment :-
// In React, a fragment is a way to group a list of children without adding extra nodes to the DOM. It is represented by the <React.Fragment> component, or by the short-hand <> syntax.

function App() {
let name = "Hasan";

// In JSX syntax , we need only one parent element which encloses all the other attribute like in return div container is the parent element or we can do other elements close in the <> empty tag 
  return (
    <div className="App">
    <h1>{name}</h1>
    <form action="">
      <input type="text" placeholder='Type Something'/>
    </form>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
