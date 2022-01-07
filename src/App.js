 // import logo from './logo.svg';
import './App.css';
import * as api from "./api"
import { useState , useEffect } from 'react';
 import { Container , Row , Col , Image , Card  , CardGroup } from 'react-bootstrap'
  // import { Grid, Image } from 'semantic-ui-react'
  //import 'semantic-ui-css/semantic.min.css'
  import MovieThumb from './components/MovieThumb';

function App() {

  
  const [popular , setPopular] = useState([])

  /* async function getBooks (){
    const allBooks= await BooksAPI.getAll()
    this.setState({books : allBooks})
          } */

  async function getPopular (){
    const popular= await api.getPopular()
     setPopular(popular.results)
     console.log("popular---->"+popular)
           }
           
           useEffect(() => {
                getPopular ()
                console.log("popular---->"+popular)
                }, []);

               //   src={`${api.imgUrl}${api.imgSize}${x.poster_path}`}

  return (
    
    
    <Row xs={1} md={2} className="g-4">
            {popular.map( (x) => (
              <Col lg={3} >
                <MovieThumb     key={x.id}
                                poster_path={x.poster_path}
                                title={x.title}
                                overview={x.overview}
                                vote_average={x.vote_average}
                                

                
                
                                                          />
              </Col>
            ))}
</Row>


    
    
    

        
        
  
  );
}

export default App;
