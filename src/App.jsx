import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Axios from 'axios'
import ProductDetails from './components/ProductDetails'
import CategoryProducts from './components/CategoryProducts'
import Profilepage from './components/Profilepage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import { domain,header,usertoken } from './env'
import { useGlobalState } from './state/provider'

const App = () => {
  //console.log(usertoken,"User token");
  const [{ profile },dispatch] = useGlobalState()
  //console.log(profile,"$$4user profile");
  useEffect(()=>{
    if(usertoken!==null){
      const getdata = async () => {
        await Axios({
          method: "get",
          url: `${domain}/api/profile/`,
          headers: header
        }).then(response=>{
          //console.log(response.data["data"],"$$444 user profile")
          dispatch({
            type: "ADD_PROFILE",
            profile: response.data["data"]
          })
        })
      }
      getdata()
    }
  }, [])
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/product/:id" component={ProductDetails}/>
        <Route exact path="/category/:id" component={CategoryProducts}/>
        <Route exact path='/profile' component={Profilepage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />

        <Route exact component={HomePage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
