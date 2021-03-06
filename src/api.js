

const url = "https://api.themoviedb.org/3/movie/"


export const getLatest = () =>
       fetch(`/moviesLatest`)               
       .then ((response)=>{
         const recieved  = response.json() 
         console.log ('latest-----> ', recieved )
        return recieved 
     })

/* export const getLatest = () =>
  fetch(`${url}latest?api_key=${API_TMDB}&language=en-US`)
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('latest-----> ', recieved )
        return recieved 
     }) */


     export const getTopRated = (page=1) =>
       fetch(`/api/moviesTopRated?page=${page}`)               
       .then ((response)=>{
         const recieved  = response.json() 
         console.log ('toprated api-----> ', recieved )
        return recieved 
     })
    
     /* export const getTopRated = (page=1) =>
  fetch(`${url}top_rated?api_key=${API_TMDB}&language=en-US&page=${page}`)
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('toprated api-----> ', recieved )
        return recieved 
     }) */

// testing 



export const getPopular = (page=1) =>
  fetch(`/api/moviesPopular?page=${page}`)               
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('Popular-----> ', recieved )
        return recieved 
     })

     export const getNowPlaying = (page=1) =>
  fetch(`/api/moviesNowPlaying?page=${page}`)               
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('now_playing-----> ', recieved )
        return recieved 
     })

   /* export const getNowPlaying = (page=1) =>
     fetch(`${url}now_playing?api_key=${API_TMDB}&language=en-US&page=${page}`)
       .then ((response)=>{
         const recieved  = response.json() 
           console.log ('now_playing-----> ', recieved )
           return recieved 
     }) */

     export const getUpcoming = (page=1) =>
  fetch(`/api/moviesUpcoming?page=${page}`)               
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('upcoming-----> ', recieved )
        return recieved 
     })
     /* export const getUpcoming = (page=1) =>
     fetch(`${url}upcoming?api_key=${API_TMDB}&language=en-US&page=${page}`)
       .then ((response)=>{
         const recieved  = response.json() 
           console.log ('upcoming-----> ', recieved )
           return recieved 
     }) */


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


export const getGenreMovies = () =>
fetch(`/api/GenreMovies`)               
  .then ((response)=>{
      const recieved  = response.json() 
      console.log ('genres Movies-----> ', recieved )
      return recieved 
   })

/* export const getGenreMovies = () =>
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_TMDB}&language=en-US`)
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('genres Movies-----> ', recieved )
        return recieved
     })
 */


     export const getGenreTv = () =>
fetch(`/api/GenreTv`)               
  .then ((response)=>{
      const recieved  = response.json() 
      console.log ('genres Tv-----> ', recieved )
      return recieved 
   })
   /*   export const getGenreTv = () =>
  fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${API_TMDB}&language=en-US`)
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('genres Tv-----> ', recieved )
        return recieved
     }) */

      // const urlMovie = "https://api.themoviedb.org/3/movie/"



      export const getMovieInfo = (id) =>
  fetch(`/api/movieInfo?id=${id}`)               
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('MovieInfo-----> ', recieved )
        return recieved 
     })

    /*  export const getMovieInfo = (id) =>
  fetch(`${url}${id}?api_key=${API_TMDB}&language=en-US`)
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('MovieInfo-----> ', recieved )
        return recieved 
     }) */


     export const getMovieCredits = (id) =>
     fetch(`/api/movieCredits?id=${id}`)               
       .then ((response)=>{
           const recieved  = response.json() 
           console.log ('Movie credits-----> ', recieved )
           return recieved 
        })

     /* export const getMovieCredits = (id) =>
     fetch(`${url}${id}/credits?api_key=${API_TMDB}&language=en-US`)
       .then ((response)=>{
           const recieved  = response.json() 
           console.log ('Movie credits -----> ', recieved )
           return recieved 
        }) */


        export const getMovieImages = (id) =>
     fetch(`/api/movieImages?id=${id}`)               
       .then ((response)=>{
           const recieved  = response.json() 
           console.log ('Movie images-----> ', recieved )
           return recieved 
        })


      /*   export const getMovieImages = (id) =>
        fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_TMDB}&language=null`)
          .then ((response)=>{
              const recieved  = response.json() 
              console.log ('Movie images -----> ', recieved )
              return recieved 
           }) */


           export const getExternalSites = (id) =>
           fetch(`/api/movieExternalSites?id=${id}`)               
             .then ((response)=>{
                 const recieved  = response.json() 
                 console.log ('Imdb info-----> ', recieved )
                 return recieved 
              })
   

     
     /* export const getExternalSites = (id) =>
  fetch(`https://imdb-api.com/en/API/ExternalSites/${API_IMDB}/${id}`)
    .then ((response)=>{
        const recieved  = response.json() 
        console.log ('Imdb info-----> ', recieved )
        return recieved 
     }) */

     export const getGenreList = (page=1,genre) =>
           fetch(`/api/GenreList?page=${page}?genre=${genre}`)               
             .then ((response)=>{
                 const recieved  = response.json() 
                 console.log ('GenreList-----> ', recieved )
                 return recieved 
              })


     /* export const getGenreList = (page=1,genre) => 
     fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_TMDB}&language=en-US&sort_by=vote_average.desc&include_adult=true&include_video=false&page=${page}&with_genres=${genre}&with_watch_monetization_types=flatrate`)
       .then ((response)=>{
           const recieved  = response.json() 
           console.log ('GenreList -----> ', recieved )
           return recieved 
        })
 */


        export const getPersonInfo = (id) =>
           fetch(`/api/personInfo?id=${id}`)               
             .then ((response)=>{
                 const recieved  = response.json() 
                 console.log ('Person info-----> ', recieved )
                 return recieved 
              })

        /* export const getPersonInfo = (id) => 
        fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${API_TMDB}&language=en-US`)
          .then ((response)=>{
              const recieved  = response.json() 
              console.log ('Person info  -----> ', recieved )
              return recieved 
           }) */


           export const getPersonCredits = (id) =>
           fetch(`/api/personMovieCredits?id=${id}`)               
             .then ((response)=>{
                 const recieved  = response.json() 
                 console.log ('Person Movie credits-----> ', recieved )
                 return recieved 
              })

         /*   export const getPersonCredits = (id) => 
        fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_TMDB}&language=en-US`)
          .then ((response)=>{
              const recieved  = response.json() 
              console.log ('Person credits   -----> ', recieved )
              return recieved 
           }) */


           export const getTvPopular = (page=1) =>
           fetch(`/api/TvPopular?page=${page}`)               
             .then ((response)=>{
                 const recieved  = response.json() 
                 console.log ('TV popular  -----> ', recieved )
                 return recieved 
              })

         /*   export const getTvPopular = (page=1) =>
     fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_TMDB}&language=en-US&page=${page}`)
       .then ((response)=>{
         const recieved  = response.json() 
           console.log ('TV popular-----> ', recieved )
           return recieved 
     }) */


     export const getTvTopRated = (page=1) =>
           fetch(`/api/TvTopRated?page=${page}`)               
             .then ((response)=>{
                 const recieved  = response.json() 
                 console.log ('TV top rated  -----> ', recieved )
                 return recieved 
              })

     /* export const getTvTopRated = (page=1) =>
     fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_TMDB}&language=en-US&page=${page}`)
       .then ((response)=>{
         const recieved  = response.json() 
           console.log ('TV top rated -----> ', recieved )
           return recieved 
     }) */

     export const getTvAiringToday = (page=1) =>
           fetch(`/api/TvAiringToday?page=${page}`)               
             .then ((response)=>{
                 const recieved  = response.json() 
                 console.log ('TV airing today -----> ', recieved )
                 return recieved 
              })

     /* export const getTvAiringToday = (page=1) =>
     fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_TMDB}&language=en-US&page=${page}`)
       .then ((response)=>{
         const recieved  = response.json() 
           console.log ('TV airing today -----> ', recieved )
           return recieved 
     }) */

     export const getTvOnTheAir = (page=1) =>
           fetch(`/api/TvOnTheAir?page=${page}`)               
             .then ((response)=>{
                 const recieved  = response.json() 
                 console.log ('TV on the air -----> ', recieved )
                 return recieved 
              })

     /* export const getTvOnTheAir = (page=1) =>
     fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_TMDB}&language=en-US&page=${page}`)
       .then ((response)=>{
         const recieved  = response.json() 
           console.log ('TV on the air  -----> ', recieved )
           return recieved 
     }) */

     export const getTvInfo = (id) =>
           fetch(`/api/TvInfo?id=${id}`)               
             .then ((response)=>{
                 const recieved  = response.json() 
                 console.log ('TV info  -----> ', recieved )
                 return recieved 
              })

     /* export const getTvInfo = (id) =>
     fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_TMDB}&language=en-US`)
       .then ((response)=>{
         const recieved  = response.json() 
           console.log ('TV info  -----> ', recieved )
           return recieved 
     }) */

     export const getTvCredits = (id) =>
           fetch(`/api/TvCredits?id=${id}`)               
             .then ((response)=>{
                 const recieved  = response.json() 
                 console.log ('TV credits    -----> ', recieved )
                 return recieved 
              })

     /* export const getTvCredits = (id) =>
     fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_TMDB}&language=en-US`)
       .then ((response)=>{
         const recieved  = response.json() 
           console.log ('TV credits  -----> ', recieved )
           return recieved 
     }) */

    /*  export const getGenreList = (page=1,genre) =>
     fetch(`/api/GenreList?page=${page}?genre=${genre}`)               
        */
     export const multiSearch = (query,page=1) =>
     fetch(`/api/multiSearch?query=${query}&page=${page}`)               
       .then ((response)=>{
           const recieved  = response.json() 
           console.log ('multi Search  -----> ', recieved )
           return recieved 
        })

        export const moviesSearch = (query,page=1) =>  //?query=${query}--->&<---page=${page}` , to separate the query parameters passed 
     fetch(`/api/MoviesSearch?query=${query}&page=${page}`)               
       .then ((response)=>{
           const recieved  = response.json() 
           console.log ('movies Search  -----> ', recieved )
           return recieved 
        })

        export const tvSearch = (query,page=1) =>
        fetch(`/api/TvSearch?query=${query}&page=${page}`)               
          .then ((response)=>{
              const recieved  = response.json() 
              console.log ('tv Search  -----> ', recieved )
              return recieved 
           })

           export const personSearch = (query,page=1) =>
        fetch(`/api/PersonSearch?query=${query}&page=${page}`)               
          .then ((response)=>{
              const recieved  = response.json() 
              console.log ('person Search  -----> ', recieved )
              return recieved 
           })


           export const getCollection = (id) =>
           fetch(`/api/Collection?id=${id}`)               
             .then ((response)=>{
                 const recieved  = response.json() 
                 console.log ('Collection    -----> ', recieved )
                 return recieved 
              })


              export const collectionSearch = (query,page=1) =>
        fetch(`/api/CollectionSearch?query=${query}&page=${page}`)               
          .then ((response)=>{
              const recieved  = response.json() 
              console.log ('Collection Search  -----> ', recieved )
              return recieved 
           })