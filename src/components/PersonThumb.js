import React from 'react'
import {Row , Card , Image , Col , Button , Badge , Container} from "react-bootstrap"
import * as api from "../api"
import { Link } from 'react-router-dom'





export default function PersonThumb(props) {

       //  console.log("person id ---- > " + props.id + "     name ---- > " + props.name )
    return (
            <Card bg="dark" style={{width: "100%"}}>
                    <Link to={`/person/${props.id}`} >
                         <Card.Img  variant="top" src={ props.poster_path 
                                                  ? `${api.imgUrl}${api.imgSizeLarge}${props.poster_path}`
                                                  : "../no_image2.jpg" }  />
                     </Link>

                    <Card.Body>
                            <Card.Title className="text-center" style={{ color: 'white' }}>{props.name}</Card.Title>
                            <Card.Text className="text-center" style={{ color: 'white' }}>
                              {props.role}
                            </Card.Text>
                            
                        </Card.Body>


            </Card>




    )
}
