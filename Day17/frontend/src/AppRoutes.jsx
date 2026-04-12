import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router'
import Register from './features/auth/pages/Register'
import Login from './features/auth/pages/Login'


const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Dashboard page.....</h1>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/register'  element={<Register/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes