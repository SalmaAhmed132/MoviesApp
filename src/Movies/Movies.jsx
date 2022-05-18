
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from "./../Home/Home.module.css";


export default function Movies() {
  let baseImgUrl='https://image.tmdb.org/t/p/original'
 let [trendingMovies,setTrendingMovies]=useState([]);
 
 async function getTrendingItems(mediaType,callback) {
  let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
  callback(data.results)
  }
  useEffect(()=>{
    getTrendingItems("movies",setTrendingMovies);
  },[]);
  return <>
   <div className="row">
     <div className="col-md-4 d-flex align-items-center">
    <div className='w-100'>

    <div className={`w-25 ${styles.brdr} mb-3`}></div>
     <h2>Trending</h2>
     <h2>Movies</h2>
     <h2>to Watch now</h2>
     <p className='secondFontColor mb-3'>Most Wached Movies by days</p>
     <div className={`w-100 ${styles.brdr} mb-3`}></div>

    </div>
     </div>
     {trendingMovies.map((movie,index)=>
     <div className='col-md-2 my-3' key={index}>
       <div>
         <img className='w-100' src={baseImgUrl+movie.poster_path} alt="" />
         <h5>{movie.title}</h5>
       </div>
      </div>)}
     
   </div>

   

   </>
  
}
