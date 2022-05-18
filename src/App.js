import './App.css';
import Navbar from './Navbar/Navbar';
import {  Route, Routes,Navigate, useNavigate } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import About from './About/About';
import Network from './Network/Network';
import Login from './Login/Login';
import Register from './Register/Register';
import NotFound from './NotFound/NotFound';
import Tv from './Tv/Tv';
import People from './People/People';
import Moviedetails from './Moviedetails/Moviedetails';
import  { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';

function App() {

  const [userData,setUserData] = useState(null);
  const Navigate = useNavigate()
  
  useEffect(()=>{
if (localStorage.getItem('userToken')){
  getUserData()
}
  },[])



  function getUserData()
  {
  let decodedToken =  jwtDecode(localStorage.getItem('userToken'))
  setUserData(decodedToken);
  }

  useEffect(()=>{ console.log(userData)} , [userData])

 function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    Navigate('/login');

  }

 function ProtectedRoute({children}) {
    
        if (!localStorage.getItem('userToken')) {
          return  <Navigate to='/login'/>;  
         } else {
           return children;
         }
  }
 

  return (

    <div>
      <Navbar userData={userData} logOut={logOut}/>
    <div className="container">
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='Home' element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='movies' element={<ProtectedRoute><Movies/></ProtectedRoute>} />
        <Route path='tv' element={<ProtectedRoute><Tv/></ProtectedRoute>} />
        <Route path='people' element={<ProtectedRoute><People/></ProtectedRoute>} />
        <Route path='about' element={<ProtectedRoute><About/></ProtectedRoute>} />
        <Route path='network' element={<ProtectedRoute><Network/></ProtectedRoute>} />
        <Route path='moviedetails' element={<Moviedetails/>} >
        <Route path='id' element={<Moviedetails />}/>
          </Route>
        <Route path='login' element={<Login  getUserData={ getUserData} />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    </div>
  );
  }

export default App;
