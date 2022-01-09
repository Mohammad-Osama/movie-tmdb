import React from 'react'
import * as api from "../api"
import '../App.css';
import {ImStarFull} from "react-icons/im"
import { Link } from 'react-router-dom';

import { Container  , Button, Row , Col , Image , Card  , Badge , CardGroup } from 'react-bootstrap'

export default function MovieThumb(props) {
    console.log("props.genre===>"+props.genre)
    console.log("props  to pass ===>"+JSON.stringify(props))
    return (
        <Card border="dark" bg="dark" className="text-center">
                      <Link to={`/movie/${props.id}`}
                            state ={{state :props}}
                                          >
                        <Card.Img variant="top" src={`${api.imgUrl}${api.imgSize}${props.poster_path}`} />
                      </Link>
                  <Card.Body className="card-text" >
                    
                    <Card.Title className="card-title">{props.title}</Card.Title>
                   
                    
                    <Card.Text>               
                         
                    {props.genre.map((x)=>{
                         
                         console.log("asdasdasdasd")
                        return<Button variant="outline-light"  size="sm"key={x}> {x}</Button>
                    })}
                        
                   
                    </Card.Text>
                   
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text>
                    <small className="text-muted" className="card-title">{props.release_date}</small>
                    </Card.Text>
                    <Badge pill bg="success">
                          {props.vote_average}  
                        </Badge>{' '}
                       
    
                  </Card.Footer>
                </Card>
    )
}
