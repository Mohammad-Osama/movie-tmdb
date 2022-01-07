 // import logo from './logo.svg';
import './App.css';
import * as api from "./api"
import { useState , useEffect } from 'react';
import { createContext } from 'react';
 import { Container , Row , Col , Image , Card  , CardGroup } from 'react-bootstrap'
  // import { Grid, Image } from 'semantic-ui-react'
  //import 'semantic-ui-css/semantic.min.css'
  //  import MovieThumb from './components/MovieThumb';
  import Home from './components/Home'
  export  const PopularMovies = createContext([]);
function App() {

  
  const [popular , setPopular] = useState([])

  /* async function getBooks (){
    const allBooks= await BooksAPI.getAll()
    this.setState({books : allBooks})
          } */

  async function getPopular (){
    const popular= await api.getPopular()
     setPopular(popular.results)
     console.log("popular---->"+popular)
           }
           async function getGenre (){
            const genre= await api.getGenre()
    
             console.log("getGenre---->"+JSON.stringify(genre))
                   }
           
           useEffect(() => {
                getPopular ()
                console.log("popular---->"+popular)
                getGenre ()
                }, []);

               //   src={`${api.imgUrl}${api.imgSize}${x.poster_path}`}
             
  return (
    
    <PopularMovies.Provider value={popular}>
           <Home/>
    </PopularMovies.Provider>


    
    
    

        
        
  
  );
}

export default App;
