import React from 'react'
import styled from 'styled-components'
import HeaderNav from './routerStudy/HeaderNav'
import HomePage from './routerStudy/HomePage'
import Contact from './routerStudy/Contact'
import About from './routerStudy/About'
import Help from './routerStudy/Help'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const App = ()=>{
  return (
    <Router>
      <HeaderNav/>
      <Switch>
        <Route exact path="/homepage" component={HomePage}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/help" component={Help}/>
      </Switch>
    </Router>
  )
}
    
export default App
