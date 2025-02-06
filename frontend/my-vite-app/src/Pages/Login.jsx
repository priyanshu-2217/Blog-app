import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Home } from './Home';

export const Login = () => {
    const navigate = useNavigate();
    const [input,setInput] = useState({
        email:"",
        password:""
})
const handleLogin= async (e)=>{
    e.preventDefault();
    try {
        const res= await axios.post("http://localhost:9000/api/v1/useer/login",input)
     alert(res.data.messge)
     localStorage.setItem("token",res.data.token)
     localStorage.setItem("username",res.data.name)
     navigate(""/Home)
    } catch (error) {
        alert(error.response.data.message);
    }
}
  return (
    <div className='container shadow'>
    <h2 className='text-center my-3'>Sign up</h2>
    <div className='col-md-12 my-3 d-flex items-center justify-content-center'>
        <div className='row'>
            <form onSubmit={handleLogin}>
                <div className='mb-3'>
                    <label htmlfor="formGroupExampleInput" className='form-label'>
                        Email
                    </label>
                    <input type="text"
                    name="name"
                    value={input.email}
                    onChange={(e)=>setInput({... input,[e.target.name]:e.target.value})}
                    className="form-content"
                    id="formGroupExampleInput"
                    placeholder="Enter Name"
                    />
                </div>
                <div className='mb-3'>
                <label htmlfor="formGroupExampleInput" className='form-label'>
                        Password
                    </label>
                    <input type="text"
                    name="password"
                    value={input.password}
                    onChange={(e)=>setInput({... input,[e.target.name]:e.target.value})}
                    className="form-content"
                    id="formGroupExampleInput"
                    placeholder="Enter Email"
                    />
                </div>
                <div className='mb-3'>
               
                    <button type="submit" className='btn btn-primary btn-block'>
                        Sign Up
                    </button>

                </div>
            </form>
        </div>
    </div>
 </div>
  )
}
export default Login;