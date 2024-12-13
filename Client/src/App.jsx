import { useState, useEffect } from 'react'
//import './App.css'
import Message from './Message'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./Login";
import Home from "./Home"
import JobPost from "./JobPost"
import Resume from './resume';
import UserProfile from './UserProfile';
import NavBar from "./NavBar"
import Signup from "./Signup"
import Employees from './Employees'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="/login"/>
        <Route element={<Home/>} path="/"/>
        <Route element={<Resume/>} path="/Resume"/> 
        <Route element={<UserProfile/>} path="/UserProfile"/>
        <Route element={<Signup/>} path="/Signup"/>
        <Route element={<Employees/>} path="/Employees"/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
