import React from 'react'
import * as api from "../api"

import { Link } from 'react-router-dom'

import { Container  , Button, Row , Col , Image , Card  , Badge , CardGroup } from 'react-bootstrap'


export default function CollectionThumb(props) {
    return (
        <Card border="dark" bg="dark" className="text-center"  >
                       <Link to={`/collection/${props.id}`} > 
                         <Card.Img variant="top" src={`${api.imgUrl}${api.imgSize}${props.poster_path}`} />
                       </Link>
                  <Card.Body    >
                    
                    <Card.Title style={{color: "white"}}>{props.name}</Card.Title>
                
                  </Card.Body>
                  
                </Card>
    )
}
