import movies from "./Movies";
const App = () => {
const movies = ["Da Boys in da hood",  "Untouchables", "Dirty Dozen"];
return ( 
   <li>
        <h1>Movies</h1> 
        <hr/> 
        <ul> 
        {
            movies.map((movies, index) => ( <li key={index}>{movies}</li>))
        } 
         </ul> 
    </li>
    ); 
};

export default App
