import { useState } from 'react'
//import './App.css'
import Message from './Message'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./Login";
import Home from "./Home"
import JobPost from "./JobPost"
import Resume from './resume';
import UserProfile from './UserProfile';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="/login"/>
        <Route element={<Home/>} path="/"/>
        <Route element={<Resume/>} path="/Resume"/>
        <Route element={<JobPost/>} path="/JobPost"/>
        <Route element={<UserProfile/>} path="/UserProfile"/>


      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
