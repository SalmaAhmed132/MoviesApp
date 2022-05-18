import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Moviedetails() {

    const [movie, setMovie] = useState({})
    const [tv, setTv] = useState({})
    let params = useParams();
    async function getMediaDetails(mediaType,callback){
     let {data}= await   axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/${params.id}?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
    callback(data.results)
    }

    useEffect(()=>{
        getMediaDetails("movie",setMovie);
        getMediaDetails("tv",setTv);
       
    
      
      },[]);
  return<>
  <div className="row">
  <div>
      <h2>{movie.overview}</h2>
  </div>

  </div>
  
  
  </>
}
