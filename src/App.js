 // import logo from './logo.svg';
import './App.css';
import * as api from "./api"
import { useState , useEffect } from 'react';
import { createContext } from 'react';
 import { Container , Row , Col , Image , Card  , CardGroup , Button   } from 'react-bootstrap'
  // import { Grid, Image } from 'semantic-ui-react'
  //import 'semantic-ui-css/semantic.min.css'
  //  import MovieThumb from './components/MovieThumb';
  import Home from './components/Home'
import NavBar from './components/NavBar';
import { Routes , Route } from 'react-router-dom';
import Movie from './components/Movie';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import {StatefulInput} from 'baseui/input';
import MovieThumb from './components/MovieThumb';
import GenreList from './components/GenreList';
import Person from './components/Person';



  /* export  const PopularMovies   = createContext();
  export  const   Genre  = createContext(); */
function App() {

  /* const [latest , setLatest] = useState({}) */
 // const [popular , setPopular] = useState([])
 // const [genre , setGenre] = useState([])
 /* const [genre , setGenre] = useState([])
 async function getGenre (){
  const genre= await api.getGenre()
  setGenre(genre) 
 } */
  /* async function getBooks (){
    const allBooks= await BooksAPI.getAll()
    this.setState({books : allBooks})
          } */

  /* async function getPopular (){
    const popular= await api.getPopular()
     setPopular(popular.results)
     console.log("popular---->"+popular)
           } */



         /*   async function getGenre (){
            const genre= await api.getGenre()
                setGenre(genre)
              // console.log("getGenre---->"+JSON.stringify(genre))
                   } */




           
           /* useEffect(() => {
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
                  }, []); */

           /*  async function getLatest (){
              const res= await api.getLatest()
                setLatest(res)
                 console.log("latest ---->"+JSON.stringify(res))
                      }

                  useEffect(() => { // topRated
                 
                    //  console.log("popular---->"+popular)
                    getLatest ()
                     return () => {
                      
                       setLatest({})              
                     };
                     }, []);
                     useEffect(() => { // Genre
                 
                      //  console.log("popular---->"+popular)
                       getGenre ()
                       return () => {
                        
                         setGenre([])              
                       };
                       }, []);
 */

               //   src={`${api.imgUrl}${api.imgSize}${x.poster_path}`}
               const engine = new Styletron();
                const Centered = styled('div', {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                });

               /*  const findGenre = () => {
                  //  console.log("findGenre start")
                     let names=[]
                      genre_ids?.forEach( (movieGenre)=> {
                       // console.log("1st loop on x.genre ids ---->"+movieGenre)
                        genre?.genres?.forEach((ids)=> {
                          //  console.log("2nd loop on all ids ---->"+ids.name)
                            if (movieGenre===ids.id) {
                                names.push (ids.name)
                                    }
                                } )
                            })
                          //  console.log("final names  ---->"+names)
                          //  console.log(typeof names)
                            return names
                            
                  } */
             
  return (
    
  //  <PopularMovies.Provider value={popular}>
    //    <Genre.Provider value={genre}>
    <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <Centered>
        <Container className="app" style={{padding: " 50px 50px"  }}>

            <NavBar/>
           
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/movie/:id' element={<Movie/>} />
              <Route exact path='/genre/:genre' element={<GenreList/>} />
              <Route exact path='/person/:id' element={<Person/>} />

            </Routes>
         
          </Container>
          </Centered>
      </BaseProvider>
    </StyletronProvider>
       // </Genre.Provider>
   // </PopularMovies.Provider>


    
    
    

        
        
  
  );
}

export default App;
