import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  pageSize = 15
  render() {
    return (
      <>
      <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path='/business' element={<News key="Business" pageSize={this.pageSize} country="in" category="Business" />} />
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path='/general' element={<News key="General" pageSize={this.pageSize} country="in" category="General" />} />
            <Route exact path='/health' element={<News key="Health" pageSize={this.pageSize} country="in" category="Health" />} />
            <Route exact path='/science' element={<News key="Science" pageSize={this.pageSize} country="in" category="Science" />} />
            <Route exact path='/sports' element={<News key="Sports" pageSize={this.pageSize} country="in" category="Sports" />} />
            <Route exact path='/technology' element={<News key="Technology" pageSize={this.pageSize} country="in" category="Technology" />} />
          </Routes>
      </Router>
      </>
    )
  }
}
