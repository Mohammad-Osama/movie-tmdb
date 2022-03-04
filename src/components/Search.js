import React from 'react'
import { Row, Col,Container, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import * as api from "../api"
import MovieThumb from './MovieThumb';
import TvThumb from './TvThumb';
import PersonThumb from "./PersonThumb"
import CollectionThumb from './CollectionThumb';
import { Accordion , Chips , Chip , Pagination} from '@mantine/core';
// import '../App.css';


export default function Search() {

  //const [value,setValue]=useState("")
  const [list, setList] =useState([]);

  const [search, setSearch] = useState('Multi');

  const [currentPage, setCurrentPage] = useState(list.page=1);

  const query = useRef(null);

  const [genre , setGenre] = useState([])

   const multiSearch = async (query,page)=>{

    if (query === "" ||  query === undefined  || query ===null) { 
        setList([]) }
          else { 
            const searchedItems = await api.multiSearch(query,page)               
                       setList(searchedItems.results)
                       console.log( "searched items in state " + JSON.stringify(list))
                }              
               
            }

            const moviesSearch = async (query,page)=>{

              if (query === "" ||  query === undefined  || query ===null) { 
                  setList([]) }
                    else { 
                      const searchedItems = await api.moviesSearch(query,page)               
                                 setList(searchedItems.results)
                                 console.log( "searched items in state " + JSON.stringify(list))
                 }  
             }

             const tvSearch = async (query,page)=>{

              if (query === "" ||  query === undefined  || query ===null) { 
                  setList([]) }
                    else { 
                      const searchedItems = await api.tvSearch(query,page)               
                                 setList(searchedItems.results)
                                 console.log( "searched items in state " + JSON.stringify(list))
                 }  
             }

             const personSearch = async (query,page)=>{

              if (query === "" ||  query === undefined  || query ===null) { 
                  setList([]) }
                    else { 
                      const searchedItems = await api.personSearch(query,page)               
                                 setList(searchedItems.results)
                                 console.log( "searched items in state " + JSON.stringify(list))
                 }  
             }

             const collectionSearch = async (query,page)=>{

              if (query === "" ||  query === undefined  || query ===null) { 
                  setList([]) }
                    else { 
                      const searchedItems = await api.collectionSearch(query,page)               
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
                  {multiSearch(query.current.value,currentPage)}
                  else if (search==="Movies")
                  {moviesSearch(query.current.value,currentPage)}
                  else if (search==="Tv")
                  {tvSearch(query.current.value,currentPage)}
                  else if (search==="Person")
                  {personSearch(query.current.value,currentPage)}
                  else if (search==="Collection")
                  {collectionSearch(query.current.value,currentPage)}
                  


                 return () => {
                  
                    setList([])
                         
                 };
                 }, [search,query,currentPage]);


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
                        onChange = {()=>{ setCurrentPage(list.page=1)
                            search==="Multi"
                               ?multiSearch(query.current.value)
                              :search==="Movies"
                              ?moviesSearch(query.current.value)
                              :search==="Tv"
                              ?multiSearch(query.current.value)
                              :search==="Collection"
                              ?collectionSearch(query.current.value)
                              :personSearch(query.current.value)
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
                                                                    setCurrentPage(list.page=1)          }}
                              color="indigo"    variant="filled" spacing="md" size="xl" 
                                    >
                            <Chip value="Multi">Multi</Chip>
                            <Chip value="Movies">Movies</Chip>
                            <Chip value="Tv">Tv</Chip>
                            <Chip value="Person">Person</Chip>
                            <Chip value="Collection">Collection</Chip>
                          </Chips>
                          </Accordion.Item>
                      </Accordion>

            </Row>
            <br></br>
                <Row >

                <Pagination total={500}
                             size="lg"
                             withEdges
                             siblings={3}
                             boundaries={3}
                             page={currentPage}
                             onChange={setCurrentPage}   
                                                                   />


                </Row>

                   <br></br>         
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
                                                            :search ==="Collection" 
                                                             ? <CollectionThumb
                                                                        poster_path={x.poster_path} 
                                                                        name = {x.name} 
                                                                        id = {x.id}
                                                             
                                                                                />
                                                            :<div>error</div>
                                              }
                                  </Col>
                                ))
                               
                            }
                    </Row>
                    <br></br>
                    <Row>

                      <Pagination total={500}
                                  size="lg"
                                  withEdges
                                  siblings={3}
                                  boundaries={3}
                                  page={currentPage}
                                  onChange={setCurrentPage}   
                                                                        />


                      </Row>           

        </Container>


    )
}
