import React from 'react'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { Navigate, Route, Routes } from 'react-router-dom'


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage/> }></Route>
        <Route path="register" element={ <RegisterPage/> }></Route>

        <Route path='/*' elemet={ <Navigate to="/auth/login"/>}></Route>
    </Routes>
  )
}
