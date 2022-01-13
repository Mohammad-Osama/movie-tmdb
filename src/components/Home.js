import React from 'react'
import { Container , Row , Col ,ToggleButtonGroup , ToggleButton , Image , Card  , CardGroup , Button } from 'react-bootstrap'
import * as api from "../api"
import MovieThumb from './MovieThumb';
import { useState , useEffect } from 'react';
import { useContext } from 'react'
import {PopularMovies } from "../App.js"
import {Genre } from "../App.js"
import '../App.css';

// import Pagination from "react-js-pagination";
 // //import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination , SIZE } from "baseui/pagination"; 




export default function Home() {
  
    const [movies , setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(movies.page=1);
    const [genre , setGenre] = useState([])

     // const [topRated , setTopRated] = useState([])

    const [values, setValues] = useState("Popular");
   
   
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
         console.log("popular---->"+popular)
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
              if  (values==="Popular")
                   {getPopular (currentPage)} 
              else if (values==="Top Rated")
                   {getTopRated (currentPage)} 
              else if (values==="Now Playing")
                   {getNowPlaying (currentPage)} 
              else if (values==="Upcoming")
                   {getUpcoming (currentPage)} 

                console.log("value ========> "+ values)
             
                return () => {
                  
                  setMovies([])              
                };
                }, [currentPage,values]);


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
         x.genre_ids.forEach( (movieGenre)=> {
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
                                            

    return (  <Container >
      <Row>
              <Col>
                        <Button name="button1"  onClick={() => {
                                  setValues("Popular")
                                  
                              }} >Popular</Button>
                              <Button name="button1"  onClick={() => {
                                setValues("Top Rated")
                               
                              }} >Top Rated</Button>

                              <Button name="button1"  onClick={() => {
                                setValues("Now Playing")
                               
                                }} >Now Playing</Button>
                                 <Button name="button1"  onClick={() => {
                                setValues("Upcoming")
                               
                                }} >Upcoming</Button>
                              
                              </Col>
                               <Col>
                                asdasd
                                </Col>
                       

                              </Row>
                     


                     <Row className= "pagination" >
                     <Pagination size={SIZE.compact}
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
                            <Col lg={3} key={x.id} >
                                <MovieThumb     
                                                id={x.id}
                                                poster_path={x.poster_path}
                                                title={x.title}
                                                overview={x.overview}
                                                vote_average={x.vote_average}
                                                vote_count={x.vote_count}
                                                release_date={x.release_date}
                                                genre = { findGenre(x)   }
                                                

                                
                                
                                                                        />
                            </Col>
                            ))}
                    </Row>
                    <Row>
                    <Button></Button>
                    </Row>
                    


                    </Container>
                
    )
}
