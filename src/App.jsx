import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import Home from './modules/home'
import Resume from './modules/resume'
import Login from './modules/auth/login'
import Signup from './modules/auth/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
              <Routes>
                  <Route exact path="/"  element={<Home/>} />
                  <Route exact path="/resume"  element={<Resume/>} />
                  <Route exact path="/login"  element={<Login/>} />
                  <Route exact path="/signup"  element={<Signup/>} />
              </Routes>

  
    </>
  )
}

export default App
