import React, { useEffect } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Axios from 'axios'
import ProductDetails from './components/ProductDetails'
import CategoryProducts from './components/CategoryProducts'
import Profilepage from './components/Profilepage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import { domain, header, usertoken } from './env'
import { useGlobalState } from './state/provider'
import Cart from './components/Cart'
import Oladorders from './components/Oladorders'
import Order from './components/Order'
import OrderDetails from './components/OrderDetails'
import "./App.css";
import contacts from './components/contacts'
import PaymentPage from './components/PaymentPage'
import AboutUs from './components/AboutUs'
import CustomerCare from './components/CustomerCare'



const App = () => {
  //console.log(usertoken,"User token");
  const [{ profile, reloadpage, cartproduct_complit, cartproductf_uncomplit }, dispatch] = useGlobalState()
  //console.log(cartproduct_complit,"$complit cart");
  // console.log(cartproductf_uncomplit,"$uncomplit cart");

  useEffect(() => {
    if (usertoken !== null) {
      const getdata = async () => {
        await Axios({
          method: "get",
          url: `${domain}/api/profile/`,
          headers: header
        }).then(response => {
          //console.log(response.data["data"],"$$444 user profile")
          dispatch({
            type: "ADD_PROFILE",
            profile: response.data["data"]
          })
        })
      }
      getdata()
    }
  }, [reloadpage])

  useEffect(() => {
    const getdata = async () => {
      await Axios({
        method: "get",
        url: `${domain}/api/cart/`,
        headers: header
      }).then(res => {
        //console.log(res.data, "##3 CArts my");
        {
          const all_data = []
          res?.data.map(data => {
            if (data.complit) {
              all_data.push(data)
              dispatch({
                type: "ADD_CARTPRODUCT_COMPLIT",
                cartproduct_complit: all_data
              })
              // console.log(true);
            }
            else {
              dispatch({
                type: "ADD_CARTPRODUCT_UNCOMPLIT",
                cartproductf_uncomplit: data
              })
              // console.log(false)
            }
          })
        }
      })
    }
    getdata()
  }, [reloadpage])


  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/category/:id" component={CategoryProducts} />
        {
          profile !== null ? (
            <>
              <Route exact path='/profile' component={Profilepage} />
              <Route exact path='/AboutUs' component={AboutUs} />
              <Route exact path='/contact' component={contacts} />
              <Route exact path='/CustomerCare' component={CustomerCare} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/oldorders' component={Oladorders} />
              <Route exact path='/payment' component={PaymentPage} />
              <Route exact path='/order' component={Order} />
              <Route exact path='/orderdetails/:id' component={OrderDetails} />
            </>
          ) :
            (
              <>
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/register' component={RegisterPage} />
                <Route exact path='/AboutUs' component={AboutUs} />
              <Route exact path='/contact' component={contacts} />
              <Route exact path='/CustomerCare' component={CustomerCare} />
              </>
            )
        }

        <Route exact component={HomePage} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
