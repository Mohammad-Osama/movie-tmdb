import React from 'react'
import {Row , Card , Image , Col} from "react-bootstrap"
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import * as api from "../api"

export default function Movie(props) {
    const location = useLocation()
    const [state, setstate] = useState(location.state.state)
     //console.log("location.state ===>"+JSON.stringify(location.state))
    const {title , id } = location.state.state
    console.log("movie state ---->"+JSON.stringify(state))
   //   console.log("after destruct  ---->"+( title + id ))


    return (
        <Row xs={1} md={2} className="g-4">
                    
                        <Col>
                         <Image fluid src={`${api.imgUrl}${api.imgSize}${state.poster_path}`}></Image>
                        </Col>
        <Col>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
                   
                    </Row>
    )
}
