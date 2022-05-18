import React from 'react'
import { Link } from 'react-router-dom'
import Register from './../Register/Register';
import Login from './../Login/Login';

export default function Navbar(props) {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bolder" to="home">Noxe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        {props.userData?<>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="movies">Movies</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="tv">Tv show</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="people">People</Link>
        </li>  <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="about">About</Link>
        </li>  <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="network">Network</Link>
        </li> 
        </>:''}
      
      </ul>

      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className=' nav-item me-3 d-flex align-items-center'>
          <i className='fab mx-2 fa-instagram'></i>
          <i className='fab mx-2 fa-facebook'></i>
          <i className='fab mx-2 fa-youtube'></i>
          <i className='fab mx-2 fa-spotify'></i>
        </li>


        {props.userData?<>
          <li className="nav-item">
          <span onClick={props.logOut} className="nav-link active" aria-current="page">Logout</span>
        </li> 
        </>:<>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="register">Register</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="login">Login</Link>
        </li> 
        </>}
       
      
       
          
          
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
