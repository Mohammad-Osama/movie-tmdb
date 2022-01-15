 // const dotenv = require('dotenv')
// dotenv.config()
const API_TMDB = process.env.REACT_APP_API_TMDB
const API_IMDB = process.env.REACT_APP_API_IMDB
//cofig api 

// https://api.themoviedb.org/3/configuration?api_key=197129c263ec4ab60f28623d327d7eb2
 // latest 
  // urllatest?api_key=<<api_key>>&language=en-US

//
// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1



const url = "https://api.themoviedb.org/3/movie/"



export const getLatest = () =>
  fetch(`${url}latest?api_key=${API_TMDB}&language=en-US`)
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('latest-----> ', recieved )
        return recieved 
     })
    
     export const getTopRated = (page=1) =>
  fetch(`${url}top_rated?api_key=${API_TMDB}&language=en-US&page=${page}`)
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('toprated api-----> ', recieved )
        return recieved 
     })

// testing 

 /* var getLatest = () =>
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=197129c263ec4ab60f28623d327d7eb2&language=en-US")
  .then ((response)=>{
      const recieved  = response.json() 
      console.log ('recieved-----> ', recieved )
      return recieved 
   })
getLatest(); */


export const getPopular = (page=1) =>
  fetch(`${url}popular?api_key=${API_TMDB}&language=en-US&page=${page}`)
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('Popular-----> ', recieved )
        return recieved 
     })

   export const getNowPlaying = (page=1) =>
     fetch(`${url}now_playing?api_key=${API_TMDB}&language=en-US&page=${page}`)
       .then ((response)=>{
         const recieved  = response.json() 
           console.log ('now_playing-----> ', recieved )
           return recieved 
     })

     export const getUpcoming = (page=1) =>
     fetch(`${url}upcoming?api_key=${API_TMDB}&language=en-US&page=${page}`)
       .then ((response)=>{
         const recieved  = response.json() 
           console.log ('upcoming-----> ', recieved )
           return recieved 
     })


     // https://developers.themoviedb.org/3/getting-started/images

    
                    //     http://image.tmdb.org/t/p/
     export const imgUrl="https://image.tmdb.org/t/p/"
     //                   https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg

     // w92, w154, w185, w342, w500, w780, original

     export const imgSize = 'w500' 
     export const imgSizeTiny = 'w92'
     export const imgSizeVerySmall = 'w185'
     export const imgSizeSmall = 'w342'
     export const imgSizeLarge = 'w780'
     export const imgSizeOriginal = 'original'

//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';


/* https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
https://api.themoviedb.org/3/movie/" */

export const getGenre = () =>
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_TMDB}&language=en-US`)
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('genres-----> ', recieved )
        return recieved 
     })

      // const urlMovie = "https://api.themoviedb.org/3/movie/"
     export const getMovieInfo = (id) =>
  fetch(`${url}${id}?api_key=${API_TMDB}&language=en-US`)
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('MovieInfo-----> ', recieved )
        return recieved 
     })

     export const getMovieCredits = (id) =>
     fetch(`${url}${id}/credits?api_key=${API_TMDB}&language=en-US`)
       .then ((response)=>{
           const recieved  = response.json() 
           console.log ('Movie credits -----> ', recieved )
           return recieved 
        })
   

     
     export const getExternalSites = (id) =>
  fetch(`https://imdb-api.com/en/API/ExternalSites/${API_IMDB}/${id}`)
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('Imdb info-----> ', recieved )
        return recieved 
     })
