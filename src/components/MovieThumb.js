import React from 'react'
import * as api from "../api"


import { Container  , Button, Row , Col , Image , Card  , Badge , CardGroup } from 'react-bootstrap'

export default function MovieThumb(props) {
    console.log("props.genre===>"+props.genre)
    return (
        <Card border="dark" bg="dark">
                  <Card.Img variant="top" src={`${api.imgUrl}${api.imgSize}${props.poster_path}`} />
                  <Card.Body className="card-text" >
                    <Card.Title className="card-title">{props.title}</Card.Title>
                    <Card.Text>               
                         
                    {props.genre.map((x)=>{
                         
                         console.log("asdasdasdasd")
                        return<Button variant="outline-light"> {x}</Button>
                    })}
                        
                   
                    </Card.Text>
                   
                  </Card.Body>
                </Card>
    )
}
