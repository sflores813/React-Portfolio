import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react'
// Pages
import Projects from './pages/Projects'
// components
import Homepage from './components/Homepage'

const App = () => {
  return (
   <BrowserRouter> 
   <Route path="/">
   <Homepage />
   </Route>
   <Route path="/projects">
   <Projects />
   </Route>
 
   </BrowserRouter>
  )
}

export default App

