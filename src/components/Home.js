import React from 'react'
import { Container , Row , Col , Image , Card  , CardGroup } from 'react-bootstrap'
import MovieThumb from './MovieThumb';

import { useContext } from 'react'
import {PopularMovies } from "../App.js"
import {Genre } from "../App.js"

export default function Home() {


    const value = useContext(PopularMovies);
    const genre = useContext(Genre);
    console.log("popular---->"+value)
    console.log("genre ---->"+JSON.stringify(genre))
    
      
    const findGenre = (x) => {
        console.log("findGenre start")
         let names=[]
        x.genre_ids.forEach( (movieGenre)=> {
            console.log("1st loop on x.genre ids ---->"+movieGenre)
            genre?.genres?.forEach((ids)=> {
              //  console.log("2nd loop on all ids ---->"+ids.name)
                if (movieGenre===ids.id) {
                    names.push (ids.name)
                        }
                    } )
                })
                console.log("final names  ---->"+names)
                console.log(typeof names)
                return names
                
      }
    


    return (
                        <Row xs={1} md={2} className="g-4">
                            {value.map( (x) => (
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
    )
}
