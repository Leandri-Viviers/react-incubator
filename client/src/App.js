// Components
import Navbar from './components/Navbar'
import Routes from './components/Routes'
// Router
import { BrowserRouter as Router } from 'react-router-dom'

import React from 'react'

const App = () => {
  return (
    <Router>
      <Navbar title="Guidebook.io"></Navbar>
      <Routes />
    </Router>
  )
}

export default App
