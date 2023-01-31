import React from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddOrder from '../AddOrder/AddOrder'
import AllOrder from '../AllOrder/AllOrder'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

const AllRoutes = () => {

  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/addorder' element={<AddOrder/>}/>
    <Route path='/addorder' element={<AddOrder/>}/>
    <Route path='/allorder' element={<AllOrder/>}/>
   </Routes>
  )
}

export default AllRoutes
