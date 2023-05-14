import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { domain } from "../env"
import SingleProduct from './SingleProduct'
import css from  './HomePage.css'
import './HomePage.css'
import cloud_1_back from '../assests/cloud_1_back.png'
import whale from '../assests/whale.png'
import sparkles from '../assests/white-sparkle-png-transparent-29.png'
import Slider from './Slider'
import SearchProduct from './SearchProduct'


const HomePage = () => {
    const [products, setProducts] = useState(null);
    const [categoris, setCategoris] = useState(null)
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const getdata = async () => {
            await Axios({
                method: "get",
                url: `${domain}/api/product/`
            }).then(response => {
                //setProducts(res.data)
                console.log(response.data);
                setProducts(response.data)
            })
        }
        getdata()
    }, [])

    useEffect(() => {
        const getcategory = async () => {
            await Axios({
                method: "get",
                url: `${domain}/api/category/`
            }).then(response => {
                 console.log(response.data);
                setCategoris(response.data)
            })
        }
        getcategory()
    }, [])

    useEffect(() => {
        function handleScroll() {
          setScrollY(window.scrollY);
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [])

    const nextpage = async () => {
       await Axios({
            method: "get",
            url: products?.next
        }).then(response => {
            console.log(response.data);
            setProducts(response.data)
        })
    }

    const prevoous = async () => {
        await Axios({
            method: "get",
            url: products?.previous
        }).then(response => {
            console.log(response.data);
            setProducts(response.data)
        }) 
    }

    return (
        <div className="container-fluid">
             
             {/* <div className={css.NightSky}> 
             <section class = "parallax">
                <img src={cloud_1_back} alt="cloud_1_back" id = "cloud_1_back" />
                <img src={whale} alt="whale" id = "whale" style={{ transform: `translateX(${scrollY * -2}px)` }} />
            </section> 
            </div> */}

            <div className={css.NightSky}> 
            <SearchProduct/>
            <Slider/>
            </div>


            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            products !== null &&
                            products?.results.map((item, i) => (
                                <div key={i} className="col-md-4 my-2">
                                    <SingleProduct item={item} />
                                </div>

                            ))
                        }
                        
                        <div className="homepage__pagination">
                        <div>
                            {
                                products?.previous !== null ?(
                                    <button onClick={prevoous} className="btn btn-lg custom-btn-green"><span>Previous</span></button> 
                                ):(
                                    <button className="btn btn-lg custom-btn-white" disabled><span>Previous</span></button>  
                                )
                            }
                            </div>
                            <div>
                            {
                                products?.next !== null ?(
                                    <button onClick={nextpage} className="btn btn-lg custom-btn-green"><span>Next</span></button> 
                                ):(
                                    <button className="btn btn-lg custom-btn-white" disabled><span>Next</span></button>  
                                )
                            }
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 mt-3">
                    <h1>All Categories</h1>
                    {
                        categoris?.map((cata, i) => (
                            <div className="p-2 m-2" key={i}>
                                 <Link to={`/category/${cata?.id}`} className="btn custom-btn-blue"><span>{cata.title}</span></Link>
                            </div>
                        ))
                    }
                </div>
                <div className="col-md-3 bg-dark"></div>
            </div>

            <div className="sparkle">
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
            </div>     
         

        

        </div>
    )
}

export default HomePage
