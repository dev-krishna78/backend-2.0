import { useState } from "react"
import "../style/form.scss"
import { Link, useNavigate } from 'react-router'
import {useAuth} from '../hooks/useAuth'


const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { handleLogin,loading } = useAuth()
  const navigate = useNavigate()
  

  if(loading){
    return (
      <h1>Loading....</h1>
    )
  }

  async function handleSubmit(e){
    e.preventDefault()
  
    handleLogin(username,password)
    .then(res=>{
      console.log(res)
      navigate("/")
    })

  }
  return (
    <main>

      <div className='form-container'>

        <h1>Login</h1>

        <form onSubmit={handleSubmit}>

          <input
          onInput={(e)=>{setUsername(e.target.value)}} 
          type="text" name="Username" placeholder='Enter username' />

          <input 
          onInput={(e)=>{setPassword(e.target.value)}} 
          type="text" name='Password' placeholder='Enter password' />

          <button>Login</button>

          <p>Not having account goes <Link to="/register">Register</Link></p>
        </form>

      </div>
    </main>
  )
}

export default Login