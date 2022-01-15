import React from 'react'
import {Row , Card , Image , Col , Button , Badge , Container} from "react-bootstrap"
import * as api from "../api"





export default function PersonThumb(props) {
    return (
            <Card style={{width: "100%"}}>
                    <Card.Img  variant="top" src={ props.poster_path 
                                                  ? `${api.imgUrl}${api.imgSizeSmall}${props.poster_path}`
                                                  : "../no_image2.jpg" }  />
                    <Card.Body>
                            <Card.Title className="text-center">{props.name}</Card.Title>
                            <Card.Text className="text-center">
                              {props.role}
                            </Card.Text>
                            
                        </Card.Body>


            </Card>




    )
}
