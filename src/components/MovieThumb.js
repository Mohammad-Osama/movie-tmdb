import React from 'react'
import * as api from "../api"


import { Container , Row , Col , Image , Card  , CardGroup } from 'react-bootstrap'

export default function MovieThumb(props) {

    return (
        <Card>
                  <Card.Img variant="top" src={`${api.imgUrl}${api.imgSize}${props.poster_path}`} />
                  <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                      
                    </Card.Text>
                  </Card.Body>
                </Card>
    )
}
