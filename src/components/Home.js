import React from 'react'
import { Container , Row , Col ,ToggleButtonGroup , ToggleButton , Image , Card  , CardGroup , Button , ButtonGroup} from 'react-bootstrap'
import * as api from "../api"
import MovieThumb from './MovieThumb';
import { useState , useEffect } from 'react';
import { useContext } from 'react'
import {PopularMovies } from "../App.js"
import {Genre } from "../App.js"
import '../App.css';

// import Latest from './Latest'

// import Pagination from "react-js-pagination";
 // //import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination , SIZE } from "baseui/pagination"; 




export default function Home() {
  
    const [movies , setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(movies.page=1);
    const [genre , setGenre] = useState([])
    const [radioValue, setRadioValue] = useState('Popular');

     // const [topRated , setTopRated] = useState([])

    //  const [values, setValues] = useState("Popular");
   
    console.log("movies at home  ---->"+JSON.stringify(movies))
    async function getTopRated (page){
        const topRatedRes= await api.getTopRated(page)
        setMovies(topRatedRes.results)
        //  console.log("rated---->"+JSON.stringify(topRated))
               }

               async function getLatest (){
                const latest= await api.getLatest()
                setMovies(latest.results)
                //  console.log("rated---->"+JSON.stringify(topRated))
                       }


                async function getNowPlaying (page){
                const NowPlaying= await api.getNowPlaying(page)
                  setMovies(NowPlaying.results)
                  //  console.log("NowPlaying ---->"+NowPlaying)
                        }


    async function getPopular (page){
        const popular= await api.getPopular(page)
         setMovies(popular.results)
       //  console.log("popular---->"+popular)
               }

        async function getUpcoming (page){
        const upcoming = await api.getUpcoming(page)
          setMovies(upcoming.results)
         //  console.log("upcoming---->"+popular)
                }

    async function getGenre (){
        const genre= await api.getGenre()
        setGenre(genre)
        // console.log("getGenre---->"+JSON.stringify(genre))
            }


            useEffect(() => { // PopularMovies
              if  (radioValue==="Popular")
                   {getPopular (currentPage)} 
              else if (radioValue==="Top Rated")
                   {getTopRated (currentPage)} 
              else if (radioValue==="Now Playing")
                   {getNowPlaying (currentPage)} 
              else if (radioValue==="Upcoming")
                   {getUpcoming (currentPage)} 

                console.log("value ========> "+ radioValue)
             
                return () => {
                  
                  setMovies([])              
                };
                }, [currentPage,radioValue]);


            useEffect(() => { // Genre
                 
                 //  console.log("popular---->"+popular)
                  getGenre ()
                  return () => {
                   
                    setGenre([])              
                  };
                  }, []);



                 /*  useEffect(() => { // topRated
                 
                    //  console.log("popular---->"+popular)
                    getTopRated ()
                     return () => {
                      
                       setTopRated([])              
                     };
                     }, []);
 */
  



    /*  const value = useContext(PopularMovies);
    const genre = useContext(Genre);
    console.log("popular---->"+value)
    console.log("genre ---->"+JSON.stringify(genre))
     */
      
    const findGenre = (x) => {
      //  console.log("findGenre start")
         let names=[]
       //  let obj = {}
         x.genre_ids?.forEach( (movieGenre)=> {
            console.log("1st loop on x.genre ids ---->"+movieGenre)
            genre?.genres?.forEach((ids)=> {
               console.log("2nd loop on all ids ---->"+ids.name)
                if (movieGenre===ids.id) {
                 //   obj[movieGenre] = ids.name;  
               //  Object.assign(obj, {id: movieGenre , genre :ids.name});
               let obj = Object.create({ id: movieGenre, genre: ids.name });
                 names.push(obj)
                }
                
                    } )
                    
                })
                
               console.log("final names  ---->"+JSON.stringify(names))
              //  console.log(typeof names)
             
                return names
                
      }
    
      

      /*  const handlePageChange = (pageNumber)=> {
        console.log(`active page is ${pageNumber}`);
        setActivePage({activePage: pageNumber});
        } */


       /*  const [values, setValues] = useState("");
        
        const handleChange = (value) => {
          setValues(value)
              console.log("valess========> "+ values)} */
             
              /* const handleChange = (val) => {setValue()
                                             setValue(val);
                                        console.log("value ========> "+ value)} */

                                        const radios = [
                                          { name: 'Popular', value: 'Popular' },
                                          { name: 'Top Rated', value: 'Top Rated' },
                                          { name: 'Now Playing', value: 'Now Playing' },
                                          { name: 'Upcoming', value: 'Upcoming' },
                                        ];
                                            

    return (  <Container >
      
      <Row xs={1} md={2}>
              <Col >
                              <ButtonGroup>
                                   {radios.map((radio, idx) => (
                                    <ToggleButton
                                      key={idx}
                                      id={`radio-${idx}`}
                                      type="radio"
                                      variant="outline-info"
                                      name="radio"
                                      value={radio.value}
                                      checked={radioValue === radio.value}
                                      onChange={(e) => {setRadioValue(e.currentTarget.value)
                                                            console.log("asdasd----?"+radioValue)}}
                                    >
                                      {radio.name}
                                    </ToggleButton>
                        ))}
                      </ButtonGroup>
                              
                              </Col>
                              ...............
                         
                              </Row>
                     


                     <Row className= "pagination" >
                     <Pagination   size={SIZE.compact}
                                 numPages={500}
                                 currentPage={currentPage}
                                 onPageChange={({ nextPage }) => {
                                     setCurrentPage(
                                     Math.min(Math.max(nextPage, 1), 500)
                                        );
                                    }}
                                />
                    
                    </Row>
                        <Row xs={1} md={2} className="g-4">
                            {movies.map( (x) => (
                            <Col lg={3} style={{display: "flex"}} key={x.id}  >
                                <MovieThumb     
                                                id={x.id}
                                                poster_path={x.poster_path}
                                                title={x.title}
                                                overview={x.overview}
                                                vote_average={x.vote_average}
                                                vote_count={x.vote_count}
                                                release_date={x.release_date}
                                                genre = { findGenre(x)   }
                                                genre_ids={x.genre_ids}
                                                
                                                                        />
                            </Col>
                            ))}
                    </Row>
        
                    </Container>
                
    )
}
