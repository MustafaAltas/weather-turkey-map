import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Info from '../components/Info'
import TurkeyMapComponent from '../components/TurkeyMapComponent'

function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<TurkeyMapComponent/>}/>
            <Route path="/info" element={<Info/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default AppRouter
