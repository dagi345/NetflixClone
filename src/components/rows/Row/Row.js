import React, { useEffect, useState } from 'react'
import axios from '../../../utils/axios';
import './row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const API_KEY=process.env.REACT_APP_API_KEY;


const image_baseUrl="https://image.tmdb.org/t/p/original/";


const Row = ({title , fetchUrl}) => {
  const [movies , setMovies]=useState([]);
  const [trailerUrl , setTrailerUrl] = useState("");


  useEffect(()=>{
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results)
    }
    fetchData();
     
  },[fetchUrl] ); 

  const opts = {
    height: '450',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // const handleClick =(movie) =>{
  //   if(trailerUrl){
  //     setTrailerUrl('')
  //   }
  //   else{
  //     movieTrailer(movie?.title || movie?.name || "")
  //     .then((url) =>{
  //       console.log('Trailer URL:', url);
  //       const urlParams = new URLSearchParams(new URL(url).search)
  //       setTrailerUrl(urlParams.get('v')); 
  //      console.log(urlParams.get('v'))
  //     }).catch((error) => console.log(error))
  //   }
     
  // }

// i dont know why the above one didnt work but this one is more reliab
  const handleClick = async (movie) => {
    
      try {
        const isMovie = movie.hasOwnProperty('title');

        const response = await axios.get(isMovie ? `/movie/${movie.id}/videos?api_key=${API_KEY}` : `/tv/${movie.id}/videos?api_key=${API_KEY}`);
        console.log(response)
        const videos = response.data.results;
        console.log(videos)
        const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube');
        console.log(trailer)
        if (trailer) {
          setTrailerUrl(trailer.key); // YouTube key for embedding
        } else {
          console.log('No trailer found');
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    
  };
  

  const handleButton=  ()=>{
    setTrailerUrl('');
  }






  return (
    <div className='row__container'>
        <h2>{title}</h2>

        <div className="row__posters">
          {movies.map(movie =>(
            <img  
            onClick={()=> handleClick(movie)}
            key={movie.id} className='row__poster' src={`${image_baseUrl}${movie.poster_path}`} alt={`${movie?.name}`}/>
            
          ))}
        </div>

          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/> }
          {trailerUrl &&  <div className="con"><button className='close-button' onClick={handleButton}> CloseTrailer </button></div> }
         
    </div>
  )
}

export default Row