import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import LearnMore from './pages/learnMore/LearnMore'
import StudentInfo from './pages/studentInfo/studentinfo'

export default function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/learnMore" element={<LearnMore/>}/>
          <Route path="/student-info" element={<StudentInfo/>}/>
        </Routes>
      </main>
    </>
  )
}