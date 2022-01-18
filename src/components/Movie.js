import React from 'react'
import {Row , Card , Accordion ,  Image , Col , Button , Badge , Container} from "react-bootstrap"
import { useLocation } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router'
import * as api from "../api"
import { ImOnedrive } from 'react-icons/im'
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PersonThumb from './PersonThumb' 



export default function Movie() {
   // const location = useLocation()
     // console.log("location.state ===>"+JSON.stringify(location.key))
     const  {id}  = useParams();
     //   console.log("movie id ---->"+id)
      const [Movie, setMovie] = useState({})
      const [External, setExternal] = useState({})
      const [MovieCredits, setMovieCredits] = useState({})
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
        <Row xs={1} md={2} className="g-4" >
                    
                        <Col >
                         <Image  fluid src={`${api.imgUrl}${api.imgSizeLarge}${Movie?.poster_path}`}></Image>
                         {console.log(api.imgUrl+api.imgSize+Movie.poster_path)}
                        </Col>
                     <Col   >
                                    <Card   >
                                      <Card.Body>
                                        <Card.Title as ="h1" style={{ color: 'black' }}>
                                            {Movie.title}
                                        </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"> {Movie.tagline} </Card.Subtitle>
                                <Card.Text as ="h5">
                                {Movie.overview}
                                </Card.Text>
                                {Movie?.genres?.map((x)=>{
                         
                        
                        return<Button variant="outline-dark"  size="sm" key={x.id}>  {x.name}</Button>
                    })}
                    
                            </Card.Body>
                            
                            <Card.Body>
                    <Card.Text>
                      <small  className="card-title" style={{ color: 'black' }}>Released : {Movie.release_date}</small>
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
                      {MovieCredits?.crew?.map( (x)=>{
                         if (x.job==="Director") 
                            return <h5 key={x.credit_id} >Director :  {x.name} </h5>}     
                                                  )}

                      </Card.Body>

                            </Card>
        </Col>
                   
                    </Row>
                    <Row xs={1} md={2} className="g-4">
                    <Accordion style={{width: "100%"}}  defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header >Actors</Accordion.Header>
                                  <Accordion.Body>
                                  <Row xs={1} md={2} className="g-4">
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
                      </Row>
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Button> sdsd</Button>
                                <Accordion.Item eventKey="1">
                                  <Accordion.Header>Crew</Accordion.Header>
                                  <Accordion.Body>
                                  <Row xs={1} md={2} className="g-4">
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
                      </Row>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                      </Row>


                    </Container>
    )
}
