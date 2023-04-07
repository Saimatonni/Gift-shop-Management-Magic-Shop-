import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { domain } from "../env"
import SingleProduct from './SingleProduct'

const HomePage = () => {
    const [products, setProducts] = useState(null);
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
                                    <button onClick={prevoous} className="btn btn-lg btn-success">Previous</button> 
                                ):(
                                    <button className="btn btn-lg btn-success" disabled>Previous</button>  
                                )
                            }
                            </div>
                            <div>
                            {
                                products?.previous !== null ?(
                                    <button onClick={nextpage} className="btn btn-lg btn-success">Next</button> 
                                ):(
                                    <button className="btn btn-lg btn-success" disabled>Next</button>  
                                )
                            }
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 bg-dark"></div>
            </div>
        </div>
    )
}

export default HomePage
