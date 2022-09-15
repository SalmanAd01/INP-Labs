import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Signin from './Signin'
import Signup from './Signup'
import { Route, Routes } from "react-router-dom"
const RouterCom = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    )
}

export default RouterCom