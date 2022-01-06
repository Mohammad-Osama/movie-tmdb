 // const dotenv = require('dotenv')
// dotenv.config()
const apiKey = "197129c263ec4ab60f28623d327d7eb2"

//cofig api 

// https://api.themoviedb.org/3/configuration?api_key=197129c263ec4ab60f28623d327d7eb2
 // latest 
  // urllatest?api_key=<<api_key>>&language=en-US

//
// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1



const url = "https://api.themoviedb.org/3/movie/"



export const getLatest = () =>
  fetch(`${url}latest?api_key=${apiKey}&language=en-US`)
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('recieved-----> ', recieved )
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


export const getPopular = () =>
  fetch(`${url}popular?api_key=${apiKey}&language=en-US`)
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('recieved-----> ', recieved )
        return recieved 
     })


     // https://developers.themoviedb.org/3/getting-started/images

    
                    //     http://image.tmdb.org/t/p/
     export const imgUrl="https://image.tmdb.org/t/p/"
     //                   https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg

     // w92, w154, w185, w342, w500, w780, original

     export const imgSize = 'w185' 

//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';