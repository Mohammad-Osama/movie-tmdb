import React from 'react'
import {Row , Card , Image , Col , Button , Badge} from "react-bootstrap"
import { useLocation } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router'
import * as api from "../api"
import { ImOnedrive } from 'react-icons/im'

export default function Movie(props) {
   // const location = useLocation()
     // console.log("location.state ===>"+JSON.stringify(location.key))
     const  {id}  = useParams();
        console.log("movie id ---->"+id)
      const [Movie, setMovie] = useState({})
      const [External, setExternal] = useState({})
      console.log("movie state  ---->"+JSON.stringify(Movie))
      console.log("External state  ---->"+JSON.stringify(External.url))
      console.log("movie imdb ---->"+Movie.imdb_id)
      
      async function getMovie (id){
        const Movie= await api.getMovieInfo(id)
                    setMovie(Movie)
                    console.log("movie id ---->"+id)
            geExternal (Movie.imdb_id)
                async function geExternal (id){
                    const External= await api.getExternalSites(id)
                        setExternal(External)
                        console.log("External state  ---->"+JSON.stringify(External))
                        }
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
   
    
    return (
        
        <Row xs={1} md={2} className="g-4" >
                    
                        <Col >
                         <Image  fluid src={`${api.imgUrl}${api.imgSize}${Movie?.poster_path}`}></Image>
                         {console.log(api.imgUrl+api.imgSize+Movie.poster_path)}
                        </Col>
                     <Col   >
                                    <Card   >
                                      <Card.Body>
                                        <Card.Title style={{ color: 'black' }}>
                                            {Movie.title}
                                        </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"> {Movie.tagline} </Card.Subtitle>
                                <Card.Text>
                                {Movie.overview}
                                </Card.Text>
                                {Movie?.genres?.map((x)=>{
                         
                         console.log("asdasdasdasd")
                        return<Button variant="outline-dark"  size="sm" key={x.id}>  {x.name}</Button>
                    })}
                    
                            </Card.Body>
                            
                            <Card.Body>
                    <Card.Text>
                      <small className="text-muted" className="card-title" style={{ color: 'black' }}>Released : {Movie.release_date}</small>
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

                            </Card>
        </Col>
                   
                    </Row>
    )
}
