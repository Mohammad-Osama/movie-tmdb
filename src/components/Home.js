import React from 'react'
import { Container , Row , Col ,ToggleButtonGroup , ToggleButton , Image , Card  , CardGroup , Button , ButtonGroup} from 'react-bootstrap'
import * as api from "../api"
import MovieThumb from './MovieThumb';
import { useState , useEffect } from 'react';
import { useContext } from 'react'
import {PopularMovies } from "../App.js"
import {Genre } from "../App.js"
import '../App.css';
import { Chips, Chip } from '@mantine/core';
// import Latest from './Latest'

// import Pagination from "react-js-pagination";
 // //import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination , SIZE } from "baseui/pagination"; 
import TvThumb from './TvThumb';




export default function Home() {
  
    const [list , setList] = useState([])
    const [currentPage, setCurrentPage] = useState(list.page=1);
    const [genre , setGenre] = useState([])
    const [radioValueMovies, setRadioValueMovies] = useState('Popular');
    const [radioValueTv, setRadioValueTv] = useState('Popular');

    const [typeValue, setTypeValue] = useState("Movies");
     // const [topRated , setTopRated] = useState([])
////////////////////////////////////////////////////////////
    //  const [values, setValues] = useState("Popular");
   
 //   console.log("movies at home  ---->"+JSON.stringify(movies))
    async function getTopRated (page){
        const topRatedRes= await api.getTopRated(page)
        setList(topRatedRes.results)
        //  console.log("rated---->"+JSON.stringify(topRated))
               }

               async function getLatest (){
                const latest= await api.getLatest()
                setList(latest.results)
                //  console.log("rated---->"+JSON.stringify(topRated))
                       }


                async function getNowPlaying (page){
                const NowPlaying= await api.getNowPlaying(page)
                setList(NowPlaying.results)
                  //  console.log("NowPlaying ---->"+NowPlaying)
                        }


    async function getPopular (page){
        const popular= await api.getPopular(page)
          setList(popular.results)
       //  console.log("popular---->"+popular)
               }

        async function getUpcoming (page){
        const upcoming = await api.getUpcoming(page)
         setList(upcoming.results)
         //  console.log("upcoming---->"+popular)
                }

                async function getTvPopular (page){
                  const tvPopular = await api.getTvPopular(page)
                  setList(tvPopular.results)
                   //  console.log("upcoming---->"+popular)
                          }

                async function getTvTopRated (page){
                  const tvTopRated = await api.getTvTopRated(page)
                    setList(tvTopRated.results)
                  //  console.log("upcoming---->"+popular)
                          }

                  async function getTvAiringToday (page){
                    const tvAiringTday = await api.getTvAiringToday(page)
                      setList(tvAiringTday.results)
                    //  console.log("upcoming---->"+popular)
                            }

                    async function getTvOnTheAir (page){
                      const tvOnTheAir = await api.getTvOnTheAir(page)
                        setList(tvOnTheAir.results)
                      //  console.log("upcoming---->"+popular)
                              }
          

                

    async function getGenre (){
        const genreMovies= await api.getGenreMovies()
        const genreTv= await api.getGenreTv()
       // const finalGenre = genreMovies?.genres?.concat(genreTv?.genres?.filter(bo => genreMovies?.genres?.forEach(ao => ao.id != bo.id)));
      // const finalGenre = [ ...genreMovies.genres, ...genreTv.genres ]
     // const jointArray = [...genreMovies.genres, ...genreTv.genres]
      /* const uniqueArray = jointArray.reduce((newArray, item) =>{
            if (newArray.includes(item)){
                      return newArray
                            }
                   else {
                      return [...newArray, item]
                  }}) */
             //     const uniqueArray = [...new Set(jointArray)];
            // const uniqueArray = [...new Set(jointArray.map((item, key) => [item[key], item])).values()]

            const result = genreMovies.genres.concat(genreTv.genres.filter(bo => genreMovies.genres.every(ao => ao.id != bo.id)));
        setGenre(result)
         console.log("getGenre---->"+JSON.stringify(result))
            }


            useEffect(() => { // PopularMovies
              
              if(typeValue==="Movies")
                 {  if  (radioValueMovies==="Popular")
                      { 
                        getPopular (currentPage)} 
                    else if (radioValueMovies==="Top Rated")
                      {getTopRated (currentPage)} 
                    else if (radioValueMovies==="Now Playing")
                       {getNowPlaying (currentPage)} 
                    else if (radioValueMovies==="Upcoming")
                      {getUpcoming (currentPage)} }

                 else if (typeValue==="Tv")
                        {  if  (radioValueTv==="Popular")
                             { getTvPopular(currentPage)}
                           else if (radioValueTv==="Top Rated")
                             {getTvTopRated(currentPage)}
                            else if (radioValueTv==="Airing Today") 
                              {getTvAiringToday(currentPage)}
                             else if (radioValueTv==="On The Air") 
                                {getTvOnTheAir(currentPage)}
                        }
                console.log("type ========> "+ typeValue)
                console.log("radiovalue Movies  ========> "+ radioValueMovies)
                console.log("radiovalue Tv  ========> "+ radioValueTv)

             
                return () => {
                  
                  setList([])
                              
                };
                }, [typeValue,currentPage,radioValueMovies,radioValueTv]);


            useEffect(() => { // Genre
                 
                 //  console.log("popular---->"+popular)
                  getGenre ()
                  return () => {
                   
                    setGenre([])              
                  };
                  }, []);



                 /*  useEffect(() => { // topRated
                 
                    //  console.log("popular---->"+popular)
                    getTopRated ()
                     return () => {
                      
                       setTopRated([])              
                     };
                     }, []);
 */
  



    /*  const value = useContext(PopularMovies);
    const genre = useContext(Genre);
    console.log("popular---->"+value)
    console.log("genre ---->"+JSON.stringify(genre))
     */
      
    const findGenre = (x) => {
      //  console.log("findGenre start")
         let names=[]
       //  let obj = {}
         x.genre_ids?.forEach( (movieGenre)=> {
          //  console.log("1st loop on x.genre ids ---->"+movieGenre)
            genre?.forEach((ids)=> {
            //   console.log("2nd loop on all ids ---->"+ids.name)
                if (movieGenre===ids.id) {
                 //   obj[movieGenre] = ids.name;  
               //  Object.assign(obj, {id: movieGenre , genre :ids.name});
               let obj = Object.create({ id: movieGenre, genre: ids.name });
                 names.push(obj)
                }
                
                    } )
                    
                })
                
            //  console.log("final names  ---->"+JSON.stringify(names))
              //  console.log(typeof names)
             
                return names
                
      }
    
      

      /*  const handlePageChange = (pageNumber)=> {
        console.log(`active page is ${pageNumber}`);
        setActivePage({activePage: pageNumber});
        } */


       /*  const [values, setValues] = useState("");
        
        const handleChange = (value) => {
          setValues(value)
              console.log("valess========> "+ values)} */
             
              /* const handleChange = (val) => {setValue()
                                             setValue(val);
                                        console.log("value ========> "+ value)} */
                                        const type = [
                                          { name: 'Movies', value: 'Movies' },
                                          { name: 'Tv', value: 'Tv' },
                                         
                                        ];
                                           

                                        const radiosMovies = [
                                          { name: 'Popular', value: 'Popular' },
                                          { name: 'Top Rated', value: 'Top Rated' },
                                          { name: 'Now Playing', value: 'Now Playing' },
                                          { name: 'Upcoming', value: 'Upcoming' },
                                        ];

                                        const radiosTv = [
                                          { name: 'Popular', value: 'Popular' },
                                          { name: 'Top Rated', value: 'Top Rated' },
                                          { name: 'Airing Today', value: 'Airing Today' },
                                          { name: 'On The Air', value: 'On The Air' }
                                          
                                        ];
              const handleChange = (val) => {setTypeValue("")
                                                setTypeValue(val)  }
              const toggleButton = () => setTypeValue(!typeValue);


            /* function  myFunc() {
               setTypeValue ;
               setCurrentPage(movies.page=1)
            } */

           /*  const mapStateToProps = () => ({
              setTypeValue() ;
              setCurrentPage(movies.page=1)
          }); */
         /*  const myFunc = (value)=> {
            setTypeValue(value)
            setCurrentPage(movies.page=1)
          }
         */
          


    return (  <Container >
      
      <Row xs={1} md={2}>
              <Col >
                              <ButtonGroup>
                                   {typeValue==="Movies"
                                    ? radiosMovies.map((radio, idx) => (
                                      <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant="outline-info"
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValueMovies === radio.value}
                                        onChange={(e) => {setRadioValueMovies(e.currentTarget.value)
                                                           setCurrentPage(list.page=1)
                                                              }}
                                      >
                                        {radio.name}
                                       </ToggleButton>
                                     ))

                                     :  radiosTv.map((radio, idx) => (
                                      <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant="outline-info"
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValueTv === radio.value}
                                        onChange={(e) => {setRadioValueTv(e.currentTarget.value)
                                                          setCurrentPage(list.page=1)
                                                              }}
                                      >
                                        {radio.name}
                                       </ToggleButton>
                                     ))

                                    }
                                     
                      </ButtonGroup>
                              
                              </Col>
                              
                              <Col >                                          
                              <Chips value={typeValue} onChange={(e) => {setTypeValue(e) 
                                                                          setCurrentPage(list.page=1)                }}
                                  color="indigo"    variant="filled" spacing="md" size="xl"    
                                            >
                                  <Chip value="Movies">Movies</Chip>
                                  <Chip value="Tv">Tv</Chip>
                                  
                              </Chips>
                              
                              </Col>
                              </Row>
                     


                     <Row className= "pagination" >
                     <Pagination   size={SIZE.compact}
                                 numPages={500}
                                 currentPage={currentPage}
                                 onPageChange={({ nextPage }) => {
                                     setCurrentPage(
                                     Math.min(Math.max(nextPage, 1), 500)
                                        );
                                    }}
                                />
                    
                    </Row>
                        <Row xs={1} md={2} className="g-4">
                            {list.map( (x) => (
                            <Col lg={3} style={{display: "flex"}} key={x.id}  >
                               { typeValue==="Movies" 
                                  ? <MovieThumb     
                                                id={x.id}
                                                poster_path={x.poster_path}
                                                title={x.title}
                                                overview={x.overview}
                                                vote_average={x.vote_average}
                                                vote_count={x.vote_count}
                                                release_date={x.release_date}
                                                genre = { findGenre(x)   }
                                                genre_ids={x.genre_ids}
                                                
                                                                        /> 
                                    :<TvThumb
                                                id={x.id}
                                                poster_path={x.poster_path}
                                                name={x.name}
                                                overview={x.overview}
                                                vote_average={x.vote_average}
                                                vote_count={x.vote_count}
                                                first_air_date={x.first_air_date}
                                                genre = { findGenre(x)   }
                                                genre_ids={x.genre_ids}                            
                                    
                                    
                                    
                                    
                                    
                                    />                                  }
                            </Col>
                            ))}
                    </Row>
        
                    </Container>
                
    )
}
