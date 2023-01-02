import "./App_2.css";
import Header from "./Header";
import Movie from "./Movie";
import movies from "./movies.json";

function App2 (){
// IN JSX, we write the JavaScript code in curly braces {}

  let login = false;
  
  return (
    <div className="App2">
    {
     // Ternary Operator  By-Default login is true 
     login ? <h1><Header /></h1> : <div style={{color: "black", backgroundColor: "rgb(233,22,44)", fontWeight: "bold", padding: "10px"}}>You Can See It</div>
    }

    {/* {
      // Use of if-else statement in JSX syntax
      (() => {
        if(login){
          return <h1>You can See it</h1>
        }else{
          return <h1>You can't See it</h1>
        }
      })()
    } */}

    <Header />
    <div className="main">
      {/* console.log("Basically we have array in JSON file through which we can mapping "); */}
    {
      movies.map((element, index) => {  // index to give the key prop to react ; key gives the unique identity 
        return( 
    <Movie key={index} title={element.Title} year={element.Year} img={element.Poster} URL={element.URL}/> 
        )   
    }) 
    }
    </div>
    </div>
  )
}

export default App2