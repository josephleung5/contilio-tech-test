import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<div>homepage</div>}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<div>Something is not working...</div>}/>
        </Routes>
      </Router>
    );
  }
}

export default App
