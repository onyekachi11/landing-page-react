import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainBody from './MainBody'


const Navbar = () => {
  return (
    <>
    <Routes>
        <Route path='/'element={<MainBody/>} />
    </Routes>
    </>
  )
}

export default Navbar
