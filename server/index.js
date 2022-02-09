const dotenv = require('dotenv')
dotenv.config()
const express = require("express");

 //const PORT = process.env.PORT || 5000;

const app = express();

const path = require("path")

const fetch = require("node-fetch")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const cors = require ('cors') ;
app.use(cors());

/* app.use(express.static(path.join(__dirname,"../public")))

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"../public","index.html"))
});
 */
if  (process.env.NODE_ENV === 'production')
    {app.use(express.static(path.resolve(__dirname, '../build')));
      app.get('*', (req, res) => {
         res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
        }); }


app.listen(process.env.PORT || 5000, () => {
   //console.log(`Server listening on ${PORT}`);
});

const url = "https://api.themoviedb.org/3/movie/"
const API_TMDB = process.env.API_TMDB
const API_IMDB = process.env.API_IMDB

app.get('/api/moviesPopular' , async (req,res)=>{
  let page = req.query.page
  const response = await fetch(`${url}popular?api_key=${API_TMDB}&language=en-US&page=${page}`)
       const data = await response.json()
      res.send(data) 
});

app.get('/moviesTopRated' , async (req,res)=>{
  let page = req.query.page
  const response = await fetch(`${url}top_rated?api_key=${API_TMDB}&language=en-US&page=${page}`)
       const data = await response.json()
      res.send(data) 
});

app.get('/moviesNowPlaying' , async (req,res)=>{
  let page = req.query.page
  const response = await fetch(`${url}now_playing?api_key=${API_TMDB}&language=en-US&page=${page}`)
       const data = await response.json()
      res.send(data) 
});


app.get('/moviesUpcoming' , async (req,res)=>{
  let page = req.query.page
  const response = await fetch(`${url}upcoming?api_key=${API_TMDB}&language=en-US&page=${page}`)
       const data = await response.json()
      res.send(data) 
});

app.get('/moviesLatest' , async (req,res)=>{
  const response = await fetch(`${url}latest?api_key=${API_TMDB}&language=en-US`)
       const data = await response.json()
      res.send(data) 
});



app.get('/GenreMovies' , async (req,res)=>{
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_TMDB}&language=en-US`)
       const data = await response.json()
      res.send(data) 
});


app.get('/GenreTv' , async (req,res)=>{
  const response = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${API_TMDB}&language=en-US`)
       const data = await response.json()
      res.send(data) 
});

app.get('/movieInfo' , async (req,res)=>{
  let id = req.query.id
  const response = await fetch(`${url}${id}?api_key=${API_TMDB}&language=en-US`)
       const data = await response.json()
      res.send(data) 
});


app.get('/movieCredits' , async (req,res)=>{
  let id = req.query.id
  const response = await fetch(`${url}${id}/credits?api_key=${API_TMDB}&language=en-US`)
       const data = await response.json()
      res.send(data) 
});

app.get('/movieImages' , async (req,res)=>{
  let id = req.query.id
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_TMDB}&language=null`)
       const data = await response.json()
      res.send(data) 
});

app.get('/movieExternalSites' , async (req,res)=>{
  let id = req.query.id
  const response = await fetch(`https://imdb-api.com/en/API/ExternalSites/${API_IMDB}/${id}`)
       const data = await response.json()
      res.send(data) 
});

app.get('/GenreList' , async (req,res)=>{
  let page = req.query.page
  let genre = req.query.genre
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_TMDB}&language=en-US&sort_by=vote_average.desc&include_adult=true&include_video=false&page=${page}&with_genres=${genre}&with_watch_monetization_types=flatrate`)
       const data = await response.json()
      res.send(data) 
});

app.get('/personInfo' , async (req,res)=>{
  let id = req.query.id
  const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${API_TMDB}&language=en-US`)
       const data = await response.json()
      res.send(data) 
});

app.get('/personMovieCredits' , async (req,res)=>{
  let id = req.query.id
  const response = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_TMDB}&language=en-US`)
       const data = await response.json()
      res.send(data) 
});

app.get('/TvPopular' , async (req,res)=>{
  let page = req.query.page
  const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_TMDB}&language=en-US&page=${page}`)
       const data = await response.json()
      res.send(data) 
});

app.get('/TvTopRated' , async (req,res)=>{
  let page = req.query.page
  const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_TMDB}&language=en-US&page=${page}`)
       const data = await response.json()
      res.send(data) 
});

app.get('/TvAiringToday' , async (req,res)=>{
  let page = req.query.page
  const response = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_TMDB}&language=en-US&page=${page}`)
       const data = await response.json()
      res.send(data) 
});

app.get('/TvOnTheAir' , async (req,res)=>{
  let page = req.query.page
  const response = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_TMDB}&language=en-US&page=${page}`)
       const data = await response.json()
      res.send(data) 
});

app.get('/TvInfo' , async (req,res)=>{
  let id = req.query.id
  const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_TMDB}&language=en-US`)
       const data = await response.json()
      res.send(data) 
});

app.get('/TvCredits' , async (req,res)=>{
  let id = req.query.id
  const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_TMDB}&language=en-US`)
       const data = await response.json()
      res.send(data) 
});


app.get('/multiSearch' , async (req,res)=>{
  let query = req.query.query   
  const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_TMDB}&language=en-US&query=${query}&page=1&include_adult=false`)
       const data = await response.json()
      res.send(data) 
});




/* app.post('/moviesPopular' , async (req,res)=>{
  const page = req.body
  console.log("req body page " + JSON.stringify(page))
  const response = await fetch(`${url}popular?api_key=${API_TMDB}&language=en-US&page=${page}`)
       const data = await response.json()
      res.send(page) 
     // res.send(page) 
}); */