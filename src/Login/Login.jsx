import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login(props) {
const navigate = useNavigate();
const [errorList, setErrorList] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState('')
const [user, setuser] = useState({
  email:'',
  password:''
})

function getUser(e){
  let myUser = {...user};
  myUser[e.target.name] = e.target.value;
  setuser(myUser);
  console.log(user);
}

async function submitLogin(e){
  e.preventDefault();
  setIsLoading(true);

  let validationResult = validateLoginForm(user);


if (validationResult.error) {
  setIsLoading(false);
  setErrorList(validationResult.error.details)
} else {
  let {data} = await axios.post(`https://route-egypt-api.herokuapp.com/signin`,user)
  
  if (data.message === 'success') {

    localStorage.setItem('userToken' , data.token )
    setIsLoading(false);
    props.getUserData();
    navigate ('/home'); 
  } else {
    setError(data.message)
    setIsLoading(false);

  }
}
}
function validateLoginForm(){
  let schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    });
    return schema.validate(user , {abortEarly:false})

}

  
  return (
    <div>
      <h2 className='my-3'> login Now!</h2>
     {errorList.map((error,index)=>{
     if (index === 4) {
       return <div key={index} className="alert alert-danger"> password invalid</div>
     } else {
      return <div key={index} className="alert alert-danger">{error.message}</div>
     }
     })
     }

      {error?<div className='alert alert-danger'>{error}</div>:''}
      <form onSubmit={submitLogin}>

<label htmlFor='email'>email</label>
<input onChange={getUser} type="email" className='form-control my-3 ' name='email' id='email' />

<label htmlFor='password'>password</label>
<input onChange={getUser} type="password" className='form-control my-3 ' name='password' id='password' />

<button type='submit' className=' btn btn-outline-info'>
{isLoading?<i className="fa-solid fa-spinner fa-spin"></i>:'login'}
</button>
      </form>
    </div>
  )
}