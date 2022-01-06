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
    
    
    <Container >
        <Row >
        {popular.map( (x)=>(  
                <Col lg={3}  > 
                     <Image src={`${api.imgUrl}${api.imgSize}${x.poster_path}`} >
                            
                     </Image>
                     <h1 className="hidden"> hidden </h1>
                  </Col>
                    )   )
        
        }
        </Row>


    </Container>


    
    
    

        
        
  
  );
}

export default App;
