import React from 'react'
import * as api from "../api"
import { Container  , Button, Row , Col , Image , Card  , Badge , CardGroup } from 'react-bootstrap'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';




export default function GenreList() {

    const  {genre}  = useParams();
      console.log("genrelist params  ---->"+genre)
      const [List, setList] = useState(null)
      const [hasLoaded, setHasLoaded] = useState(false);
      console.log("genrelist state   ---->"+JSON.stringify(List))
      async function getGenreList (page,genre){
        const genreList= await api.getGenreList(page , genre)
                setList(genreList.results)
           
            }




                    useEffect(() => {
                        
                        console.log("genrelist state   ---->"+JSON.stringify(List))
                        getGenreList(4 , genre) 
                        console.log("genrelist state   ---->"+JSON.stringify(List))
                        setHasLoaded(true)
                        return () => {
                        
                            setList(null)              
                        };
                        }, []);




                        /* {list?.map((x)=>{
                            <Image  src={ x.poster_path 
                                                ? `${api.imgUrl}${api.imgSizeSmall}${x.poster_path}`
                                                  : "../no_image2.jpg" }></Image>
   
                   }
   
   
                   )} */

    return (

        <Container  style={{padding: " 50px 50px"}}   > 
                
              
              {   List?.map((x)=>{
                   return  (<Row  xs={1} md={2} style={{padding: " 10px 10px"}}  >
                    <Col  lg={2}  >
                    <Link to={`/movie/${x.id}`} >
                        <Image  fluid  key ={x.id} src={ x.poster_path 
                                        ? `${api.imgUrl}${api.imgSizeSmall}${x.poster_path}`
                                          : "../no_image3.jpg" }></Image>
                        </Link>
                    
                   </Col>
                   <Col  style={{display: "flex"}} lg={10}  >
                                    <Card style={{minWidth: "100%" }} >
                                      <Card.Body>
                                        <Card.Title as ="h6" style={{ color: 'black' }}>
                                            {x.title}
                                        </Card.Title>
                          
                            </Card.Body>
                            
                            <Card.Body>
                    <Card.Text>
                      <small  className="card-title" style={{ color: 'black' }}>Released : {x.release_date}</small>
                    </Card.Text>
                    Rating : {' '}<Badge pill bg="success">
                            {x.vote_average}  
                        </Badge>{' '}
                        Total Votes : {' '}<Badge pill bg="success">
                         {x.vote_count}  
                        </Badge>{' '}                     
    
                  </Card.Body>
                  <Card.Body>
                 {/*  <Card.Link href={Movie.homepage}>Homepage</Card.Link>
                  <Card.Link href={External?.rottenTomatoes?.url}>Rotten Tomatoes</Card.Link>
                  <Card.Link href={External?.imDb?.url}>Imdb</Card.Link> */}

                      </Card.Body> 
                      {/* <Card.Body>
                      {MovieCredits?.crew?.map( (x)=>{
                         if (x.job==="Director") 
                            return <h5 key={x.credit_id} >Director :  {x.name} </h5>}     
                                                  )}

                      </Card.Body> */}

                            </Card>
                  </Col>


                   </Row>)
                     

           }


           )} 
                
           

         </Container>


    

    )
}
