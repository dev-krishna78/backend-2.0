import React from 'react'
import { useState } from 'react'
import "../style/form.scss"
import { Link } from 'react-router'
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e){
    e.preventDefault()
  
     axios.post("http://localhost:3000/api/auth/login",{
         email,
         password
    },{
       withCredentials: true
    })
    .then(res=>{
      console.log(res.data)
    })

  }
  return (
    <main>
      <div className='form-container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input onInput={(e)=>{setEmail(e.target.value)}}
          type="text" name="Email" placeholder='Enter email' />

          <input onInput={(e)=>{setPassword(e.target.value)}}
          type="text" name='Password' placeholder='Enter email' />

          <button>Login</button>
          <p>Not having account goes <Link to="/register">Register</Link></p>
        </form>
      </div>
    </main>
  )
}

export default Login