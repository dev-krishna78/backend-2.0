import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router'
import Register from './features/auth/pages/Register'
import Login from './features/auth/pages/Login'


const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/Register'  element={<Register/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes