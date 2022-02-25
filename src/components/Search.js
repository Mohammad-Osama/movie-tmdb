import React from 'react'
import { Row, Col,Container, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import * as api from "../api"
import MovieThumb from './MovieThumb';
import TvThumb from './TvThumb';
import PersonThumb from "./PersonThumb"
import { Accordion , Chips , Chip} from '@mantine/core';
// import '../App.css';


export default function Search() {

  //const [value,setValue]=useState("")
  const [list, setList] =useState([]);

  const [search, setSearch] = useState('Multi');


  const query = useRef(null);

  const [genre , setGenre] = useState([])

   const multiSearch = async (query)=>{

    if (query === "" ||  query === undefined  || query ===null) { 
        setList([]) }
          else { 
            const searchedItems = await api.multiSearch(query)               
                       setList(searchedItems.results)
                       console.log( "searched items in state " + JSON.stringify(list))
                }              
               
            }

            const moviesSearch = async (query)=>{

              if (query === "" ||  query === undefined  || query ===null) { 
                  setList([]) }
                    else { 
                      const searchedItems = await api.moviesSearch(query)               
                                 setList(searchedItems.results)
                                 console.log( "searched items in state " + JSON.stringify(list))
                 }  
             }

             const tvSearch = async (query)=>{

              if (query === "" ||  query === undefined  || query ===null) { 
                  setList([]) }
                    else { 
                      const searchedItems = await api.tvSearch(query)               
                                 setList(searchedItems.results)
                                 console.log( "searched items in state " + JSON.stringify(list))
                 }  
             }

             const personSearch = async (query)=>{

              if (query === "" ||  query === undefined  || query ===null) { 
                  setList([]) }
                    else { 
                      const searchedItems = await api.personSearch(query)               
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
               // updateQuery(query.current.value)
               // console.log( "searched items in state in use effect" + JSON.stringify(list))
                if  (search==="Multi")
                  {multiSearch(query.current.value)}
                  else if (search==="Movies")
                  {moviesSearch(query.current.value)}
                  else if (search==="Tv")
                  {tvSearch(query.current.value)}
                  else if (search==="Person")
                  {personSearch(query.current.value)}
                  


                 return () => {
                  
                    setList([])
                         
                 };
                 }, [search,query]);


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
                        onChange = {()=>{
                            search==="Multi"
                               ?multiSearch(query.current.value)
                              :search==="Movies"
                              ?moviesSearch(query.current.value)
                              :search==="Tv"
                              ?multiSearch(query.current.value)
                              :multiSearch(query.current.value)
                                }}
                    />
                    
                </Form>


                <Accordion  
                         styles={{
                          
                          label: { color: 'inherit' , textAlign: 'center' },
                          
                        }}
                
                
                
                iconPosition="right">
                          <Accordion.Item   label="Advanced Search">
                          <Chips  value={search} onChange={(e) => {setSearch(e) 
                                                                            }}
                              color="indigo"    variant="filled" spacing="md" size="xl" 
                                    >
                            <Chip value="Multi">Multi</Chip>
                            <Chip value="Movies">Movies</Chip>
                            <Chip value="Tv">Tv</Chip>
                            <Chip value="Person">Person</Chip>
                          </Chips>
                          </Accordion.Item>
                      </Accordion>

            </Row>
              <Row xs={1} md={2} className="g-4">
                            { list && list.map( (x) => (
                               <Col lg={3} style={{display: "flex"}} key={x.id}  >
                                 {  search ==="Multi"
                                 
                                     ? [ x.media_type==="movie"
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
                                                   ]
                                              : search ==="Movies"
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

                                                        :search ==="Tv" 
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

                                                       :search ==="Person" 
                                                          ? <PersonThumb
                                                          id = {x.id }
                                                          poster_path={x.profile_path} 
                                                          name = {x.name}                                                       
                                                            /> 

                                                            :<div>error</div>
                                              }
                                  </Col>
                                ))
                               
                            }
                    </Row>



        </Container>


    )
}
