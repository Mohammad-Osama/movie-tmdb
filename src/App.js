 // import logo from './logo.svg';
import './App.css';
import * as api from "./api"
import { useState , useEffect } from 'react';
 import { Container , Row , Col , Image , Card  , CardGroup } from 'react-bootstrap'
  // import { Grid, Image } from 'semantic-ui-react'
  //import 'semantic-ui-css/semantic.min.css'

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
                <Card>
                  <Card.Img variant="top" src={`${api.imgUrl}${api.imgSize}${x.poster_path}`} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
</Row>


    
    
    

        
        
  
  );
}

export default App;
