import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/product/:id" component={ProductDetails}/>
        <Route exact component={HomePage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
