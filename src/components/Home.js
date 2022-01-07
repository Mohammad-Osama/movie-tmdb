import React from 'react'
import { Container , Row , Col , Image , Card  , CardGroup } from 'react-bootstrap'
import MovieThumb from './MovieThumb';

import { useContext } from 'react'
import {PopularMovies } from "../App.js"


export default function Home() {


    const value = useContext(PopularMovies);
    console.log("popular---->"+value)
    return (
                        <Row xs={1} md={2} className="g-4">
                            {value.map( (x) => (
                            <Col lg={3} >
                                <MovieThumb     key={x.id}
                                                poster_path={x.poster_path}
                                                title={x.title}
                                                overview={x.overview}
                                                vote_average={x.vote_average}
                                                

                                
                                
                                                                        />
                            </Col>
                            ))}
                </Row>
    )
}
