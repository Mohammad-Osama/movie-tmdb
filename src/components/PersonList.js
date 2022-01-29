import React from 'react'
import { Container  , Button, Row , Col , Image , Card  , Badge , CardGroup } from 'react-bootstrap'
import { useParams , useLocation } from 'react-router-dom'
import { useState , useEffect } from 'react';
import PersonThumb from './PersonThumb';
import { Link } from 'react-router-dom';


export default function PersonList(props) {
        const {id}= useParams()
        console.log("id------>" +id )
        const location = useLocation()
  //  console.log("location--->" + JSON.stringify(location))
    const [List , SetList] = useState(location.state.list)
    console.log("list --->" + JSON.stringify(List))
       /*  <Row xs={1} md={2} className="g-4">
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
</Row> */

    return (
        <Container style={{padding: " 50px 50px"}} > 
            <Link to={location.state.type==="Movie"
                      ? `/movie/${id}`
                      : `/tv/${id}` }>
              <Button> Go back </Button>
            </Link>
                    <Row xs={1} md={2} className="g-4">
                        {List?.map( (x) => (
                        <Col lg={3} style={{display: "flex"}} key={x.id}  >
                            <PersonThumb     
                                            id = {x.id }
                                            poster_path={x.profile_path} 
                                            name = {x.name}
                                            role= { x.character
                                                    ?x.character
                                                     :x.job      }                                          
                                                                    />
                        </Col>
                        ))}
                </Row>
                </Container>



    )
}
