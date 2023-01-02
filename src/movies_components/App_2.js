import "./App_2.css";
import Header from "./Header";
import Movie from "./Movie";
import movies from "./movies.json";

function App2 (){
  return (
    <div className="App2">
    <Header />
    <div className="main">
      {/* console.log("Basically we have array in JSON file through which we can mapping "); */}
    {
      movies.map((element) => {
        return(
    <Movie title={element.Title} year={element.Year} img={element.Poster} URL={element.URL}/> 
        )   
    }) 
    }
    </div>
    </div>
  )
}

export default App2