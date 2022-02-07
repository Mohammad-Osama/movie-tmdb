import React , { forwardRef }  from 'react'
import {Dropdown,ButtonGroup ,  Row , Col ,  Navbar , Container , Offcanvas , Nav , NavDropdown , Form , FormControl , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState , useEffect , useRef} from 'react';
import * as api from "../api"
import { Autocomplete , Group , Avatar , Text } from '@mantine/core';
import { useNavigate } from "react-router-dom";


export default function NavBar() {
  const fetchedItems = [1, 2, 3, 4, 5, 6, 7, 8];
  const [isOpen, setIsOpen] = useState(false);
  
  //const [query, setQuery] =useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [list, setList] =useState([]);
  // let ref = useRef("");
  let navigate = useNavigate();

  /* const updateQuery = async (v)=>{
     setQuery(v.trim())
    console.log("q======" + query )
  
  if (query === "" ||  query === undefined) { // no books in the searchbooks state incase of an error 
                setList({})  
                  }

        else { // setting searchbook state with the returnd books from search
          const searchedItems = await api.multiSearch(query)               
                setList(searchedItems.results)
              }
               console.log( "searched items in state " + JSON.stringify(list)) 
               console.log( "query state "  + query ) 
          } */

          const query = useRef(null);
          const email = useRef(null);

          /* const data= query?.current?.value.map((x)=>{
            if (x === "" ||  x === undefined || x ===null) 
             return ""

             else 
             {return x }
          } ) */


          const multiSearch = async (q)=>{
            if (q === " " ||  q === undefined || q ===null)
                  {setList([])}
              else 
                { const searchedItems = await api.multiSearch(q)               
                       setList(searchedItems.results)}
                   
                //   console.log( "searched items in state " + JSON.stringify(list)) 
                      
                 }


               /*   const data =()=>{
                      let results=[]

                       list?.forEach( (x)=>{
                        let obj = Object.create({ value :x.media_type });
                        results.push(obj)
                        console.log ("data=====<"+JSON.stringify(results))
                       })     
                       
                      return results
                      
                 } */


      /* const data =()=>{
        if (list)
       var result = Array.from( list.forEach( (x)=>{
                 return  x.id
             }));
       console.log(result);
      return result

      }
 */
     /*  const data =()=>{
                let results=[]

                list?.forEach( (x)=>{
                  if (x.name)
                  {results.push(x.name)}
                  else {results.push(x.title)}
                })     
                console.log ("data=====<"+JSON.stringify(results))
                return results
                
          } */

         /*  const data =()=>{
            let results=[]

            list?.forEach( (x)=>{
              let obj = Object.create({value:x.media_type});
              results.push(obj)
            })     
            console.log ("data=====<"+JSON.stringify(results))
            return results
            
      }
 */
     /*  const dataSearched =()=>{   // working
        let results=[]

        list?.forEach( (x)=>{
            if (x.name)
               { results.push( { value :x.name , id : x.id , type :x.media_type , poster_path :x.poster_path }   )  }
            else {
              results.push( { value :x.title , id : x.id , type :x.media_type , poster_path :x.poster_path }   )   }
          })     
          console.log ("data=====<"+JSON.stringify(results))
          return results
        
  } */

  const dataSearched =()=>{   // working
    let results=[]

    list?.forEach( (x)=>{
        if (x.media_type==="movie")
           { results.push( { value :x.title , id : x.id , type :x.media_type , poster_path :x.poster_path }   )  }
        else if (x.media_type==="tv")
          { results.push( { value :x.name , id : x.id , type :x.media_type , poster_path :x.poster_path }   )   }
        else if (x.media_type==="person")
          { results.push( { value :x.name , id : x.id , type :x.media_type , poster_path :x.profile_path }   )   }
          
      })     
      console.log ("data=====<"+JSON.stringify(results))
      return results
    
}



                 useEffect(() => {
                  //  console.log("movie id ---->"+id)
                    
                     multiSearch (query.current.value)
                  
                    return () => {
                      
                      setList([])             
                    };
                    }, [query]);

          const  submitForm = ()=>{
            //   e.preventDefault();
            
            console.log(email.current.value);
           }


           /* const AutoCompleteItem = forwardRef(HTMLDivElement, ItemProps)(
            ({ value, id, poster_path} = ItemProps, query) => (
              <div ref={query} >
                <Group noWrap>
                  <Avatar src={`${api.imgUrl}${api.imgSizeSmall}${poster_path}`} />
          
                  <div>
                    <Text>{value}</Text>
                    <Text size="xs" color="dimmed">
                      {id}
                    </Text>
                  </div>
                </Group>
              </div>
            )
          ); */


    return (
        <Navbar bg="dark" style={{ color: 'white' ,display: 'flex'  }}  expand={false}>
  <Container fluid style={{ display: 'flex' }}>
    <Row style={{ display: 'flex' , width:"100%"}}   >

          <Col  xs={4} md={2}  > 
                <Navbar.Brand as={Link}  to ="/"
                  style={{ color: 'white'  , justifyContent:"center" , display: 'flex'}}>
                      Home
                  </Navbar.Brand>
              </Col>


              <Col   xs={8} md={6}>
        
          
              <Autocomplete   transition="pop-top-left"
                                transitionDuration={80}
                                transitionTimingFunction="ease"
                             size="lg"
                             limit={10}
                              placeholder="Search movie , tv show or a person ! "
                            data={dataSearched()}
                            ref={query}
                            itemComponent={forwardRef(({value, type, id,poster_path,...others}, query) => {
                              return (
                                  <div {...others}  ref={query}>                     
                                                                      
                                  <Group noWrap>
                                      <Avatar src={`${api.imgUrl}${api.imgSizeSmall}${poster_path}`} />
                          
                                      <div>
                                        <Text>{value}</Text>
                                        <Text size="xs" color="dimmed">
                                          {type}
                                        </Text>
                                      </div>
                                    </Group>
                          
                                   </div>  
                              )
                            })}
                            onChange={() => {multiSearch( query.current.value)
                             
                           console.log( "query.current.value---- >> " + query.current.value) 
                          // console.log( "data  ---- >> " + dataSearched) 
                              
                             }   }
              
              
                             onItemSubmit={(item) =>
                              { item.type==="movie"
                                ?  navigate(`/movie/${item.id}`)

                                : item.type==="tv"
                                 ?  navigate(`/tv/${item.id}`)

                                 : item.type==="person"
                                  ?  navigate(`/person/${item.id}`)

                                : alert(`/error`)}
                              }
              
              
              />

       

         
        </Col>

        <Col  xs={4} md={2}  > 
                <Navbar.Brand as={Link}  to ="/Search"
                  style={{ color: 'white'  , justifyContent:"center" , display: 'flex'}}>
                     Search page
                  </Navbar.Brand>
              </Col>

  
      <Col xs={4} md={2}> 
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
    </Col>
    </Row>
  </Container>
</Navbar>
    )
}
