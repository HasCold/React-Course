import React from "react";
import './App.css';
import Header from "./components/Header";
import Comp from "./components/Comp";
// import { Component } from "react";

 class App extends React.Component{
  state={
    name : "Ali",
    count : 0
  }

  inc = () => this.setState({count : this.state.count + 1});
  
  componentDidMount(){
    console.log("Component Created");
    this.setState({count : 10})
  }

  componentDidMount(){
    if(this.state.count < 50)
    this.setState(() =>({count : this.state.count + 10}));
  }

  render(){   // React.Component properties -->>> render() 
    return (
      <>
        <Header />
        <Comp name={'HasCold'} />
        <h1>{this.state.name}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.inc}>Increment</button>
      </>
    )
  }
}

export default App