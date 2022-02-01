import React from 'react'
import { Container  , Button, Row , Col , Image , Card  , Badge , CardGroup } from 'react-bootstrap'

export default function Latest() {
    return (
        <Container>
        <Card className="text-center">
                                        <Card.Img src="holder.js/100px270" alt="Card image" />
                                        <Card.ImgOverlay>
                                          <Card.Title>Card title</Card.Title>
                                          <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                          </Card.Text>
                                          <Card.Text>Last updated 3 mins ago</Card.Text>
                                        </Card.ImgOverlay>
                                      </Card>
                                      </Container>
    )
}
{ latest  &&  
    <Row xs={1} md={2} className="g-4">
      <Col lg={8}  >
         <MovieThumb   id={latest.id}
         poster_path={latest.poster_path}
         title={latest.title}
         overview={latest.overview}
         vote_average={latest.vote_average}
         vote_count={latest.vote_count}
         release_date={latest.release_date}
         
        

             />  
             </Col>
             </Row>
             
             
             
             }