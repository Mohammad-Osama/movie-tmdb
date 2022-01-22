import React from 'react'
import * as api from "../api"
import '../App.css';
import {ImStarFull} from "react-icons/im"
import { Link } from 'react-router-dom';

import { Container  , Button, Row , Col , Image , Card  , Badge , CardGroup } from 'react-bootstrap'

export default function MovieThumb(props) {
     console.log("genre_ids .MovieThumb===>"+props.genre_ids)
    console.log("genre .MovieThumb===>"+JSON.stringify(props.genre))

    // console.log("props  to pass ===>"+JSON.stringify(props))
    return (
        <Card border="dark" bg="dark" className="text-center"  >
                      <Link to={`/movie/${props.id}`} > 
                         <Card.Img variant="top" src={`${api.imgUrl}${api.imgSize}${props.poster_path}`} />
                      </Link>
                  <Card.Body   style={{backgroundColor: ""}}    >
                    
                    <Card.Title style={{color: "white"}}>{props.title}</Card.Title>
                   
                    
                    <Card.Text>               
                         
                    {props?.genre?.map((x)=>{
                         
                       //  console.log("asdasdasdasd")
                        return  <Link to={`/genre/${x.id}`} > 
                                 <Button variant="outline-light"  size="sm"key={x.id}> {x.genre}</Button>
                               </Link>
                    })}
                        
                   
                    </Card.Text>
                   
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text>
                    <small  style={{color: "white"}} >{props.release_date}</small>
                    </Card.Text>
                    <Badge pill bg="success">
                          {props.vote_average}  
                        </Badge>{' '}
                       
    
                  </Card.Footer>
                </Card>
    )
}
