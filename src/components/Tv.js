import React from 'react'
import * as api from "../api"
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react'
import { useParams } from 'react-router'
import PersonThumb from './PersonThumb';

import {Row , Card , Accordion ,  Image , Col , Button , Badge , Container} from "react-bootstrap"




export default function Tv() {
    const {id}=useParams()
    const [tv , SetTv]=useState({})
    const [tvCredits, setTvCredits] = useState({})


    async function getTvInfo(id){
            const tvInfo= await api.getTvInfo(id)
                 SetTv(tvInfo)
            }

    async function getTvCredits(id){
        const tvCreditsData= await api.getTvCredits(id)
                setTvCredits(tvCreditsData)
        }

        useEffect(() => {
            getTvInfo(id)
            return () => {
                SetTv({})
            }
        }, [])

        useEffect(() => {     
               
            getTvCredits(id)

             return () => {
               
            setTvCredits({})              
             };
             }, []);

       

    return (
        <Container style={{padding: " 50px 50px"}} > 
        <Row xs={1} md={2} className="g-4"  >
                    
                        <Col  >
                         <Image   fluid src={tv?.poster_path
                                        ? `${api.imgUrl}${api.imgSizeLarge}${tv?.poster_path}`
                                        : "../no_image3"}></Image>
                        </Col>
                     <Col  style={{display: "flex"}}  >
                                    <Card  bg="dark" >
                                      <Card.Body>
                                      
                                        <Card.Title as ="h1" style={{ color: 'white' }}>
                                            {tv.name}  
                                        </Card.Title>
                                       
                                        
                                <Card.Subtitle className="mb-2 text-muted" style={{ color: 'white' }}> {tv.tagline} </Card.Subtitle>
                                <Card.Text as ="h5" style={{ color: 'white' }}>
                                {tv.overview}
                                </Card.Text>
                                <br/>
                                <p  as ="h5" style={{ color: 'white' }}>{tv.status}</p>
                                {tv?.genres?.map((x)=>{
                         
                        
                        return <Link to={`/genre/${x.id}`} key={x.id} >
                                 <Button variant="outline-light"  size="sm" >  {x.name}</Button> 
                               </Link>
                    })}
                    
                            </Card.Body>
                            
                            <Card.Body>
                    <Card.Text>
                      <small  className="card-title" style={{ color: 'white' }}>First air date : {tv.first_air_date}</small>
                    </Card.Text>
                    Rating : {' '}<Badge pill bg="success">
                            {tv.vote_average}  
                        </Badge>{' '}
                        Total Votes : {' '}<Badge pill bg="success">
                         {tv.vote_count}  
                        </Badge>{' '}                     
    
                  </Card.Body>
                  <Card.Body>
                  <Card.Link href={tv.homepage}>Homepage</Card.Link>
                  

                      </Card.Body> 
                      <Card.Body>
                      {tvCredits?.crew?.map( (x)=>{
                         if (x.job==="Director") 
                            return <h5  style={{ color: 'white' }} key={x.credit_id} >Director : <Link to={`/person/${x.id}`}> {x.name}</Link> </h5>}     
                                                  )}

                      </Card.Body>
                      <Card.Footer> sdsd </Card.Footer>

                            </Card>
        </Col>
                   
                    </Row>

                    <Row xs={1} md={2} className="g-4">
                    <Accordion style={{width: "100%" }}  defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item  eventKey="0">
                                  <Accordion.Header >Actors</Accordion.Header>
                                  <Accordion.Body style={{ backgroundColor: '#424242' }}>
                                  <Row xs={1} md={2} className="g-4" >
                        {
                            tvCredits?.cast?.slice(0,12).map( (x)=>{
                             
                            
                           return (   
                            <Col lg={2} style={{display: "flex"}} key={x.credit_id}  >
                                      <PersonThumb          
                                                id = {x.id }
                                                poster_path={x.profile_path} 
                                                name = {x.name}
                                                role= {x.character}                                                                         
                                                                       />
                                       </Col>    )
                            
                            }    )


                        }
                        <Link to={`/${id}/cast`} state={{list :tvCredits.cast, type :"Tv"}}>
                        <Button>All Actors </Button>
                        </Link>
                      </Row>
                                  </Accordion.Body>
                                </Accordion.Item>

                                <br/>


                                <Accordion.Item eventKey="1">
                                  <Accordion.Header style={{ textAlign: 'center' }} >Crew</Accordion.Header>
                                  <Accordion.Body style={{ backgroundColor: '#424242' }}>
                                  <Row xs={1} md={2} className="g-4" >
                        {
                           tvCredits?.crew?.slice(0,12).map( (x)=>{
                             
                            
                           return (   
                            <Col lg={2} style={{display: "flex"}} key={x.credit_id}  >
                                      <PersonThumb           
                                                id = {x.id }
                                                poster_path={x.profile_path} 
                                                name = {x.name}
                                                role= {x.job}                                                                         
                                                                       />
                                       </Col>    )
                            
                            }    )


                        }
                       <Link to={`/${id}/crew`} state={{list :tvCredits.crew, type :"Tv"}}>
                        <Button>All Crew </Button>
                        </Link>
                      </Row>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                      </Row>


                </Container>


         
    )
}
