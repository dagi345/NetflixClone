import React, { useEffect, useState } from 'react';
import './banner.css';
import requests from '../../utils/requests';
import axios from '../../utils/axios.js';
import Youtube from 'react-youtube';


function Banner() {
    const [movie, setmovie] = useState({});
    const [trailerUrl , setTrailerUrl] = useState("");
    
    const image_baseURL="https://image.tmdb.org/t/p/"


    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                if (request.data.results && request.data.results.length > 0) {
                    console.log(request.data.results);
                    setmovie(
                        request.data.results[
                            Math.floor(Math.random() * request.data.results.length)
                        ]
                    );

                } else {
                    console.log('No results found');
                }
            } catch (error) {
                console.log('error', error);
            }
        })();
    }, [requests]); // Ensure the dependency array is present



    function Truncate(str , n){
        return str?.length > n ? str.substr(0 , n-1) + "..." : str;
    }

    const API_KEY=process.env.REACT_APP_API_KEY;

    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

      


    const handleClick2 = async (movie) => {
    
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



    const handleButton2=()=>{
        setTrailerUrl('')
    }
    

    return (
        <header
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("${image_baseURL}original${movie?.backdrop_path}")`,
                backgroundPosition: 'center center',
            }}
        >


            
            
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                    
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button banner__button1" onClick={() => handleClick2(movie)}>Play</button>
                    <button className="banner__button banner__button2" >My List</button>
                </div>
                <h1 className="banner__description">{Truncate(movie?.overview , 150)}</h1>
            </div>
            <div className='banner_fade_bottom'/>

            {trailerUrl && <div className="con_youtube">
                <Youtube videoId={trailerUrl} opts={opts} className='youtube'/>
                <button className='youtube_close-button' onClick={handleButton2}> CloseTrailer </button>
            </div> }

        </header>
        
    );
}
export default Banner;




