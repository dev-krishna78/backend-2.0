import {  useState } from "react"
import React from 'react'
import "../style/form.scss"
import axios from "axios"
import { Link } from 'react-router'

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")

  async function handleSubmit(e){
       e.preventDefault()

       axios.post("http://localhost:3000/api/auth/register",{
        username,
        password,
        email
       },{
        withCredentials:true
       })
       .then(res=>{
        console.log(res.data)
       })
  }

  return (
    <main>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input onInput={(e)=>{setUsername(e.target.value)}} 
          type="text" name='username' placeholder='Enter username' />

          <input onInput={(e)=>{setEmail(e.target.value)}} 
          type="text" name='Email' placeholder='Enter email' />

          <input onInput={(e)=>{setpassword(e.target.value)
          }} 
          type="text" name='password' placeholder='Enter password' />

          <button>Register</button>
        </form>
          <p>Already have an account <Link to="/login">login</Link> </p>
      </div>
    </main>
  )
}

export default Register