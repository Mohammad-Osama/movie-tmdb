import React from 'react'
import {Row , Card , Accordion , Carousel ,  Image , Col , Button , Badge , Container} from "react-bootstrap"
import { useLocation } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router'
import * as api from "../api"
import { ImOnedrive } from 'react-icons/im'
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import PersonThumb from './PersonThumb' 
import { Link } from 'react-router-dom'
import { Text } from '@mantine/core';
import CollectionThumb from './CollectionThumb'

export default function Movie() {
   // const location = useLocation()
     // console.log("location.state ===>"+JSON.stringify(location.key))
     const  {id}  = useParams();
         console.log("movie id ---->"+id)
      const [Movie, setMovie] = useState({})
      const [External, setExternal] = useState({})
      const [MovieCredits, setMovieCredits] = useState({})
      const [MovieImages, setMovieImages] = useState({})

      console.log("movie state  ---->"+JSON.stringify(Movie))
     // console.log("External state  ---->"+JSON.stringify(External.url))
     // console.log("movie imdb ---->"+Movie.imdb_id)
      
      async function getMovie (id){
        const Movie= await api.getMovieInfo(id)
                    setMovie(Movie)
               //     console.log("movie id ---->"+id)
            getExternal (Movie.imdb_id)
            
            
                async function getExternal (id){
                    const External= await api.getExternalSites(id)
                        setExternal(External)
                      //  console.log("External state  ---->"+JSON.stringify(External))
                        }

                    



            }
            async function getMovieCredits (id){
              const credits= await api.getMovieCredits(id)
              setMovieCredits(credits)
         //   console.log("credits  state  ---->"+JSON.stringify(credits))
                  }

                  async function getMovieImages (id){
                    const images= await api.getMovieImages(id)
                       setMovieImages(images)
               //   console.log("credits  state  ---->"+JSON.stringify(credits))
                        }


           /*  geExternal (Movie.imdb_id)
            async function geExternal (id){
                const External= await api.getExternalSites(id)
                    setExternal(External)
                    }
 */

            useEffect(() => {
                console.log("movie id ---->"+id)
                
               getMovie (id) 
              
                return () => {
                  
                 setMovie({})              
                };
                }, []);



                useEffect(() => {     
               
                 getMovieCredits (id)
        //  console.log("credits  state  ---->"+JSON.stringify(MovieCredits.cast))

                  return () => {
                    
                    setMovieCredits({})              
                  };
                  }, []);

                  useEffect(() => {     
               
                    getMovieImages (id)
           //  console.log("credits  state  ---->"+JSON.stringify(MovieCredits.cast))
   
                     return () => {
                       
                       setMovieImages({})              
                     };
                     }, []);

                /* useEffect(() => {
            
                    geExternal (id) 
                    
                    return () => {
                      
                        setExternal({})              
                    };
                    }, []); */
    
     // console.log(queryString.parse(location.key));
   // const [state, setstate] = useState(location.state.state)
     
   // const {title , id } = location.state.state
   // console.log("movie state ---->"+JSON.stringify(state))
   //   console.log("after destruct  ---->"+( title + id ))
   
   /* const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    }
  };                 
 */

 /*  <div>
  {MovieCredits?.cast?.map((x)=>{
      <div>{x.name}  </div>
    

  }     )     }

  </div> */
  {/* <ActorThumb           
                                                id = {x.id }
                                                poster_path={x.profile_path} 
                                                name = {x.name}
                                                character= {x.character}                                                                         
                                                                       /> */}

    return (
         <Container style={{padding: " 50px 50px"}} > 
        <Row xs={1} md={2} className="g-4"  >
                    
                        <Col  >
                         <Image   fluid src={Movie?.poster_path
                                        ? `${api.imgUrl}${api.imgSizeLarge}${Movie?.poster_path}`
                                        : "../no_image3"}></Image>
                         {console.log(api.imgUrl+api.imgSize+Movie.poster_path)}
                        </Col>
                     <Col  style={{display: "flex"}}  >
                                    <Card  bg="dark" >
                                      <Card.Body>
                                        <Card.Title as ="h1" style={{ color: 'white' }}>
                                            {Movie.title}
                                        </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted" style={{ color: 'white' }}> {Movie.tagline} </Card.Subtitle>
                                <Card.Text as ="h5" style={{ color: 'white' }}>
                                {Movie.overview}
                                </Card.Text>
                                {Movie?.genres?.map((x)=>{
                         
                        
                        return <Link to={`/genre/${x.id}`} key={x.id} >
                                <Button variant="outline-light"  size="sm" >  {x.name}</Button>
                               </Link>
                    })}
                    
                            </Card.Body>
                            
                            <Card.Body>
                    <Card.Text>
                      <small  className="card-title" style={{ color: 'white' }}>Released : {Movie.release_date}</small>
                    </Card.Text>
                    Rating : {' '}<Badge pill bg="success">
                            {Movie.vote_average}  
                        </Badge>{' '}
                        Total Votes : {' '}<Badge pill bg="success">
                         {Movie.vote_count}  
                        </Badge>{' '}                     
    
                  </Card.Body>
                  <Card.Body>
                  <Card.Link href={Movie.homepage}>Homepage</Card.Link>
                  <Card.Link href={External?.rottenTomatoes?.url}>Rotten Tomatoes</Card.Link>
                  <Card.Link href={External?.imDb?.url}>Imdb</Card.Link>

                      </Card.Body> 
                      <Card.Body>
                    
                         
                           <h5  style={{ color: 'white' }} >Director :{MovieCredits?.crew?.map( (x)=>{
                              if (x.job==="Director") 
                                 return <h5  style={{ color: 'white' }} key={x.credit_id} ><Link to={`/person/${x.id}`}> {x.name}</Link> </h5>}     
                                                       )}  </h5>  
                                                  

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
                            MovieCredits?.cast?.slice(0,12).map( (x)=>{
                             
                            
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
                        <Link to={`/${id}/cast`} state={{list :MovieCredits.cast , type :"Movie"} }>
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
                            MovieCredits?.crew?.slice(0,12).map( (x)=>{
                             
                            
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
                       <Link to={`/${id}/crew`} state={{list :MovieCredits.crew, type :"Movie"}}>
                        <Button>All Crew </Button>
                        </Link>
                      </Row>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                      </Row>
                      <p>ghfghfghfgh</p> 

                      <Row xs={1} md={2} className="g-4">
                      <Carousel style={{width: "100%" }}> 
                         {MovieImages?.backdrops?.map((x,index)=>{
                         
                        
                         return <Carousel.Item key ={index}>
                                  <img
                                    className="d-block w-100"
                                    src={`${api.imgUrl}${api.imgSizeLarge}${x.file_path}`}
                                    
                                  />
                         
                                   </Carousel.Item>
                     })}  
                      
                      </Carousel>
                      </Row>

                      <Row xs={1} md={2} className="g-4" >
                        <Text  color="white"
                               align="center"
                               size="xl"
                               weight={700}
                            

                                               >
                              Belongs to 
                        </Text>
                      </Row>
                      <Row xs={1} md={2} className="g-4">
                      <Col lg={3} style={{display: "flex"}} >
                          <CollectionThumb    
                                              poster_path={Movie?.belongs_to_collection?.poster_path} 
                                              name = {Movie?.belongs_to_collection?.name} 
                                              id = {Movie?.belongs_to_collection?.id}
                                            
                                            />

                </Col>
                        
                        
                        


                      </Row>

                  


                    </Container>
    )
}
