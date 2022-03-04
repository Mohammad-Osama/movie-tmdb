import React from 'react'
import * as api from "../api"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import { Row, Card, Accordion, Carousel, Image, Col, Button, Badge, Container } from "react-bootstrap"

import MovieThumb from './MovieThumb'


export default function Collection() {

    const { id } = useParams();

    const [collection, setCollection] = useState({})
    const [genre , setGenre] = useState([])

    async function getCollection(id) {

        const details = await api.getCollection(id)
        setCollection(details)
        console.log("collection  state  ---->" + JSON.stringify(collection))
    }



    async function getGenre (){
        const genreMovies= await api.getGenreMovies()
        const genreTv= await api.getGenreTv()
            const result = genreMovies.genres.concat(genreTv.genres.filter(bo => genreMovies.genres.every(ao => ao.id != bo.id)));
        setGenre(result)
         
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

    useEffect(() => {

        getCollection(id)

        return () => {

            setCollection({})
        };
    }, []);



    useEffect(() => { // Genre
                 
        //  console.log("popular---->"+popular)
         getGenre ()
         return () => {
          
           setGenre([])              
         };
         }, []);




    return (
        <Container style={{ padding: " 50px 50px" }} >
            <Row xs={1} md={2} className="g-4"  >

                <Col  >
                    <Image fluid src={collection?.poster_path
                        ? `${api.imgUrl}${api.imgSizeLarge}${collection?.poster_path}`
                        : "../no_image3"}></Image>

                </Col>
                <Col style={{ display: "flex" }}  >
                    <Card bg="dark" >
                        <Card.Body>
                            <Card.Title as="h1" style={{ color: 'white' }}>
                                {collection.name}
                            </Card.Title>

                            <Card.Text as="h5" style={{ color: 'white' }}>
                                {collection.overview}
                            </Card.Text>


                        </Card.Body>


                    </Card>
                </Col>

            </Row>
 
                        <br></br>
                        
            <Row xs={1} md={2} className="g-4">
                        {collection?.parts?.map((x,index)=>(
                            <Col lg={3} style={{display: "flex"}} key={index}  >
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
