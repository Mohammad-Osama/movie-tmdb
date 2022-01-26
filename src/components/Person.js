import React from 'react'
import {Row , Card , Image , Col , Button , Accordion , Badge , Container , ListGroup} from "react-bootstrap"
import * as api from "../api"
import { useState , useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'




export default function Person() {
    const  {id}  = useParams();

    const [Person, SetPerson] = useState({})
    const [PersonCredits, SetPersonCredits] = useState({})


    async function getPersonInfo (id){
        const info= await api.getPersonInfo(id)
             SetPerson(info)
   //   console.log("perosn  state  ---->"+JSON.stringify(credits))
            }

            async function getPersonCredits (id){
              const credits= await api.getPersonCredits(id)
                   SetPersonCredits(credits)
         //   console.log("perosn  state  ---->"+JSON.stringify(credits))
                  }

            useEffect(() => {
              //  console.log("movie id ---->"+id)
                
                getPersonInfo (id)
              
                return () => {
                  
                    SetPerson({})              
                };
                }, []);

                useEffect(() => {
                  //  console.log("movie id ---->"+id)
                    
                  getPersonCredits (id)
                  
                    return () => {
                      
                      SetPersonCredits({})              
                    };
                    }, []);


    return (
        <Container style={{padding: " 50px 50px"}} >
        <Row xs={1} md={2} className="g-4"  >
                    
                        <Col  >
                         <Image src={
                                    `${api.imgUrl}${api.imgSizeSmall}${Person?.profile_path}`}></Image>
                        
                        </Col>
                     <Col  style={{display: "flex"}} >
                                    <Card  bg="dark" style={{minWidth: "100%"}} >
                                      <Card.Body>
                                        <Card.Title as ="h1" style={{ color: 'white' }}>
                                            {Person.name}
                                        </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted" style={{ color: 'white' }}> 
                                            {Person?.also_known_as?.map((x=>{   
                                                return <small  className="card-title" style={{ color: 'white' }} key ={x}> {x} {' , '}</small>


                                })    )      } </Card.Subtitle>
                               
                               
                         
                        
                        <small  className="card-title" style={{ color: 'white' }}> Known for : {Person.known_for_department}</small>
                    
                    
                            </Card.Body>
                            
                            <Card.Body  style={{ color: 'white' }}>
                   {/*  <Card.Text>
                      <small  className="card-title" style={{ color: 'white' }}>Released : {Movie.release_date}</small>
                    </Card.Text> */}
                    popularity : {' '}<Badge pill bg="success">
                            {Person.popularity}  
                        </Badge>{' '}
                       {/*  Total Votes : {' '}<Badge pill bg="success">
                         {Movie.vote_count}  
                        </Badge>{' '} */}                     
    
                  </Card.Body>
                  <Card.Body>
                  <Card.Link href={Person.homepage}>Homepage</Card.Link>
        
                      </Card.Body> 
                     
                      <Card.Footer> Birthday {Person.birthday} </Card.Footer>

                            </Card>
        </Col>
                   
                    </Row>
                    <Row xs={1} md={2} className="g-4">
                    <Card  bg="dark" style={{width: "100%"}}>
                          <Card.Body>
                            
                            <Card.Text as ="h5" style={{ color: 'white' }}>
                            {Person.biography}
                                                        </Card.Text>
                            
                          </Card.Body>
                        </Card>
                       </Row>


                       <Row>

                       <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>Cast Credits</Accordion.Header>
                              <Accordion.Body  style={{ backgroundColor: '#424242' }}>
                              <ListGroup as="ol" numbered>
                         {PersonCredits?.cast?.sort((a, b) =>{ return new Date(b.release_date) - new Date(a.release_date)}).map((x)=>{
                           return (   

                            <ListGroup.Item
                              as="li"
                              className="d-flex justify-content-between align-items-start"
                              style={{ backgroundColor: '#212529' , color: 'white' }}
                              key={x.id}
                                 >
                              <div className="ms-2 me-auto" style={{ color: 'white' }}>
                                <Link to={`/movie/${x.id}`}>
                                 <div className="fw-bold">{x.title} ({x.release_date})</div>
                                </Link>
                                  <div style={{ color: 'white' }}>
                                  as : {x.character}
                                  </div>
                              </div>
                              <Badge bg="success" pill>
                                {x.vote_average}
                              </Badge>
                             </ListGroup.Item>


                           )



                         }       
                          
                         
                         
                         
                         
                         )    }
                             
                            </ListGroup>


                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>Crew </Accordion.Header>
                              <Accordion.Body style={{ backgroundColor: '#424242' }}>
                              <ListGroup as="ol" numbered>
                         {PersonCredits?.crew?.sort((a, b) =>{ return new Date(b.release_date) - new Date(a.release_date)}).map((x)=>{
                           return (   

                            <ListGroup.Item
                              as="li"
                              className="d-flex justify-content-between align-items-start"
                              style={{ backgroundColor: '#212529', color: 'white'  }}
                              key={x.id+x.job}
                                 >
                              <div className="ms-2 me-auto" style={{ color: 'white' }} >
                                <Link to={`/movie/${x.id}`}>
                                 <div className="fw-bold" >{x.title} ({x.release_date})</div>
                                </Link>
                                  <div style={{ color: 'white' }}>
                                   {x.job}
                                  </div>
                              </div>
                              <Badge bg="success" pill>
                                {x.vote_average}
                              </Badge>
                             </ListGroup.Item>


                           )



                         }       
                          
                         
                         
                         
                         
                         )    }
                             
                            </ListGroup>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                       
                       </Row>

                    </Container>
    )
}
