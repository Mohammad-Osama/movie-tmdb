import React from 'react'
import { Container , Row , Col , Image , Card  , CardGroup , Button } from 'react-bootstrap'
import * as api from "../api"
import MovieThumb from './MovieThumb';
import { useState , useEffect } from 'react';
import { useContext } from 'react'
import {PopularMovies } from "../App.js"
import {Genre } from "../App.js"
import '../App.css';
import PaginatedItems from './PaginatedItems';
// import Pagination from "react-js-pagination";
 // //import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination , SIZE } from "baseui/pagination"; 




export default function Home() {
  
    const [popular , setPopular] = useState([])
    const [currentPage, setCurrentPage] = useState(popular.page);
    const [genre , setGenre] = useState([])

    const [topRated , setTopRated] = useState([])


    async function getTopRated (page){
        const topRatedRes= await api.getTopRated()
        setTopRated(topRatedRes.results)
         console.log("rated---->"+JSON.stringify(topRated))
               }


    async function getPopular (page){
        const popular= await api.getPopular(page)
         setPopular(popular.results)
         console.log("popular---->"+popular)
               }

    async function getGenre (){
        const genre= await api.getGenre()
        setGenre(genre)
        // console.log("getGenre---->"+JSON.stringify(genre))
            }


            useEffect(() => { // PopularMovies
                getPopular (currentPage)  
             
                return () => {
                  
                  setPopular([])              
                };
                }, [currentPage]);


            useEffect(() => { // Genre
                 
                 //  console.log("popular---->"+popular)
                  getGenre ()
                  return () => {
                   
                    setGenre([])              
                  };
                  }, []);



                  useEffect(() => { // topRated
                 
                    //  console.log("popular---->"+popular)
                    getTopRated ()
                     return () => {
                      
                       setTopRated([])              
                     };
                     }, []);

  



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

    return (  <Container >
                     <Row className= "pagination" >
                     <Pagination size={SIZE.large}
                                 numPages={504}
                                 currentPage={currentPage}
                                 onPageChange={({ nextPage }) => {
                                     setCurrentPage(
                                     Math.min(Math.max(nextPage, 1), 500)
                                        );
                                    }}
                                />
                    
                    </Row>
                        <Row xs={1} md={2} className="g-4">
                            {popular.map( (x) => (
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
