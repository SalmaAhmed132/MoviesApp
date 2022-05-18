import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from "./../Home/Home.module.css";


export default function Tv() {
  let baseImgUrl='https://image.tmdb.org/t/p/original'
 let [trendingTvShows,setTrendingTvShows]=useState([]);

 
 
 
 async function getTrendingItems(mediaType,callback) {
  let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
  callback(data.results)
  }
  useEffect(()=>{
   
    getTrendingItems("tv",setTrendingTvShows);
 

  
  },[]);
  return <>
  
   <div className="row">
     <div className="col-md-4 d-flex align-items-center">
    <div className='w-100'>

    <div className={`w-25 ${styles.brdr} mb-3`}></div>
     <h2>Trending</h2>
     <h2>TvShows</h2>
     <h2>to Watch now</h2>
     <p className='secondFontColor mb-3'>Most Wached TvShows by days</p>
     <div className={`w-100 ${styles.brdr} mb-3`}></div>

    </div>
     </div>
     {trendingTvShows.map((tv,index)=>
     <div className='col-md-2 my-3' key={index}>
       <div>
         <img className='w-100' src={baseImgUrl+tv.poster_path} alt="" />
         <h5>{tv.name}</h5>
       </div>
      </div>)}
     
   </div>

   
   </>
  
}