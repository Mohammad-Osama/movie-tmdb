 // import logo from './logo.svg';
import './App.css';
import * as api from "./api"
import { useState , useEffect } from 'react';
import { createContext } from 'react';
 import { Container , Row , Col , Image , Card  , CardGroup  } from 'react-bootstrap'
  // import { Grid, Image } from 'semantic-ui-react'
  //import 'semantic-ui-css/semantic.min.css'
  //  import MovieThumb from './components/MovieThumb';
  import Home from './components/Home'
import NavBar from './components/NavBar';
import { Routes , Route } from 'react-router-dom';
import Movie from './components/Movie';



  export  const PopularMovies   = createContext();
  export  const   Genre  = createContext();
function App() {

  
  const [popular , setPopular] = useState([])
  const [genre , setGenre] = useState([])

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
                setGenre(genre)
              // console.log("getGenre---->"+JSON.stringify(genre))
                   }
           
           useEffect(() => {
                getPopular ()  
             
                return () => {
                  
                  setPopular([])              
                };
                }, []);
                useEffect(() => {
                 
                 //  console.log("popular---->"+popular)
                  getGenre ()
                  return () => {
                   
                    setGenre([])              
                  };
                  }, []);


               //   src={`${api.imgUrl}${api.imgSize}${x.poster_path}`}
             
  return (
    
    <PopularMovies.Provider value={popular}>
        <Genre.Provider value={genre}>
        <Container className="app">

            <NavBar/>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/movie/:id' element={<Movie/>} />
            </Routes>
         
          </Container>
        </Genre.Provider>
    </PopularMovies.Provider>


    
    
    

        
        
  
  );
}

export default App;
