import React from 'react'
import { Image , Dropdown, ButtonGroup,Spinner , Row, Col, Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import * as api from "../api"
import MovieThumb from './MovieThumb';
import TvThumb from './TvThumb';
import PersonThumb from "./PersonThumb"



export default function Search() {

  //const [value,setValue]=useState("")
  const [list, setList] =useState([]);

  const query = useRef(null);

  const [genre , setGenre] = useState([])
   const updateQuery = async (query)=>{

    if (query === "" ||  query === undefined  || query ===null) { 
        setList([]) }
          else { 
            const searchedItems = await api.multiSearch(query)               
                       setList(searchedItems.results)
                       console.log( "searched items in state " + JSON.stringify(list))
                }              
               
            }


            const findGenre = (x) => {
                   let names=[]
                   x.genre_ids?.forEach( (movieGenre)=> {
                      genre?.forEach((ids)=> {
                          if (movieGenre===ids.id) {            
                         let obj = Object.create({ id: movieGenre, genre: ids.name });
                           names.push(obj)
                          }
                           } )
                       })
                       
                          return names
                          
                }


                async function getGenre (){
                    const genreMovies= await api.getGenreMovies()
                    const genreTv= await api.getGenreTv()
               const result = genreMovies.genres.concat(genreTv.genres.filter(bo => genreMovies.genres.every(ao => ao.id != bo.id)));
                    setGenre(result)
                    
                        }
            


            useEffect(() => { 
                updateQuery(query.current.value)
                console.log( "searched items in state in use effect" + JSON.stringify(list))
                 return () => {
                  
                    setList([])
                         
                 };
                 }, [query]);


                 useEffect(() => { // Genre
                
                     getGenre ()
                     return () => {
                      
                       setGenre([])              
                     };
                     }, []);
 
    return (
        <Container>
            <Row>
                <Form className="d-flex"
                   
                >
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        ref={query}
                        onChange = {()=>updateQuery(query.current.value)}
                    />
                    <Button variant="outline-success" type="submit">Search</Button>
                </Form>


            </Row>
              <Row xs={1} md={2} className="g-4">
                            { list && list.map( (x) => (
                               <Col lg={3} style={{display: "flex"}} key={x.id}  >
                                 { x.media_type==="movie"
                                          ? <MovieThumb     
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
                                                    : x.media_type==="tv"
                                                      ?   <TvThumb
                                                            id={x.id}
                                                            poster_path={x.poster_path}
                                                            name={x.name}
                                                            overview={x.overview}
                                                            vote_average={x.vote_average}
                                                            vote_count={x.vote_count}
                                                            first_air_date={x.first_air_date}
                                                            genre = { findGenre(x)   }
                                                            genre_ids={x.genre_ids}                        
                                                                                      />
                                                         : x.media_type==="person"
                                                            ? <PersonThumb
                                                                    id = {x.id }
                                                                    poster_path={x.profile_path} 
                                                                    name = {x.name}
                                                                    
                                                                        />                                                               
                                                     :<div> unknown</div>                       
                                                }
                                  </Col>
                                ))
                               
                            }
                    </Row>



        </Container>


    )
}
