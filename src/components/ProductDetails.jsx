
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {domain} from "../env"
import SingleProduct from './SingleProduct'

const ProductDetails = () => {
   const {id} = useParams()
   const [product, setProduct] = useState(null)
   const [categoryproduct, setCategoryproduct] = useState(null)
   useEffect(() => {
   const getdata = async()=>{
      await Axios({
        method: "get",
        url: `${domain}/api/product/${id}/`
      }).then(response => {
        //setProducts(res.data)
        console.log(response.data);
        setProduct(response.data)
        getcategory(response?.data?.category["id"])
    })
   }
   getdata()
}, [id])

   const getcategory = async(id) =>{
      await Axios({
         method : 'get',
         url:`${domain}/api/category/${id}/`
      }).then(response=>{
        console.log(response.data);
        setCategoryproduct(response.data)
      })
   }
   

  return (
    <div className="container">
       {
        product !== null &&
        (
            <>
            <div className="row">
                <img className="w-100" src={product?.image} alt="" />
                <div className="col-md-7 p-2">
                    <h1>{product?.title}</h1>
                    <h2>Price: <del>{product?.marcket_price}TK.</del> {product?.selling_price}TK.</h2>
                </div>
                <div className="col-md-4 p-3">
                    <a href="#" class="btn btn-primary">Add to Card</a>
                 </div>
                   <p>{product.description}</p>
               </div>
            </>
        )
       }
       <div className="row">
                <h1>Related Products</h1>
                {
                    categoryproduct !== null &&
                    categoryproduct[0]?.category_product?.map((product, i) => (
                        <div className="col-md-3 mt-2" key={i}>
                            <SingleProduct item={product} />
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default ProductDetails
