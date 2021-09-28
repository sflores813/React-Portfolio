import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react'
// Pages
import Projects from './pages/Projects'
import Error from './pages/Error'
import ContactMe from './pages/ContactMe'
// components
import Homepage from './components/Homepage'
import Menu from './components/Menu'

const App = () => {
  return (
   <BrowserRouter>
   <Menu /> 
   <Switch>
   <Route path="/" exact>
   <Homepage />
   </Route>
   <Route path="/projects">
   <Projects />
   </Route>
   <Route path="/contact-me">
   <ContactMe />
   </Route>
   <Route path="*">
    <Error />
   </Route>
   </Switch>
 
   </BrowserRouter>
  )
}

export default App

