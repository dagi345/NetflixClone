import React from 'react'
import Row from '../Row/Row.js'
import requests from '../../../utils/requests.js'
import { v4 as uuidv4 } from 'uuid';





const Rowlist = () => {
  return (
    <div>
    <Row title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title ="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title ="Horror" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title ="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    <Row title ="Romance" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title ="Comedy" fetchUrl={requests.fetchComedyMovies}/>
    <Row title ="Action" fetchUrl={requests.fetchActionMovies}/>
    <Row title ="Top rated" fetchUrl={requests.fetchTopRated}/>    
    </div>
  )
}

export default Rowlist