import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

const App = () => {
  const [mode, setMode] = useState("light")
  const toggleMode = () =>{
    if (mode === "light") {
      setMode("dark")
      document.body.style.background = "black"
      // document.body.style.color = "black"
    } else {
      setMode("light")
      document.body.style.background = "white"
      // document.body.style.color = "black"
    }
  }
   const pageSize = 15
  // render() {
    return (
      <>
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode} />
          <Routes>
            <Route exact path='/' element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment" mode={mode} />} />
            <Route exact path='/business' element={<News key="Business" pageSize={pageSize} country="in" category="Business" />} />
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path='/general' element={<News key="General" pageSize={pageSize} country="in" category="General" />} />
            <Route exact path='/health' element={<News key="Health" pageSize={pageSize} country="in" category="Health" />} />
            <Route exact path='/science' element={<News key="Science" pageSize={pageSize} country="in" category="Science" />} />
            <Route exact path='/sports' element={<News key="Sports" pageSize={pageSize} country="in" category="Sports" />} />
            <Route exact path='/technology' element={<News key="Technology" pageSize={pageSize} country="in" category="Technology" />} />
          </Routes>
      </Router>
      </>
    )
  // }
}
export default App