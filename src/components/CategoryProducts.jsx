
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { domain } from "../env"
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import SingleProduct from './SingleProduct'
import './CategoryProducts.css'

const CategoryProducts = () => {
  const { id } = useParams() 
  const [cataproduct, setCataproduct] = useState(null)
    useEffect(() => {
        const getcategoridata = async () => {
            await Axios({
                method: 'get',
                url: `${domain}/api/category/${id}/`
            }).then(response => {
                 console.log(response.data[0]);
                setCataproduct(response.data[0])
            })
        }
        getcategoridata()
    }, [id])
  return (
    <div className="container">
    <h1>Category: {cataproduct?.title}</h1>
    <h2>Category Products</h2>
    <div className="row category_products">
        {
            cataproduct !== null &&
            cataproduct?.category_product.map((product, i) => (
                <div className="col-md-6">
                    <SingleProduct item={product} key={i} />
                </div>
            ))
        }
    </div>
</div>
  )
}

export default CategoryProducts
