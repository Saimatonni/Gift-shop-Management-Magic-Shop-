import Axios from 'axios'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { domain, header } from '../env'
import { useGlobalState } from '../state/provider'
import './SingleProduct.css'
import VanillaTilt from 'react-vanilla-tilt'

const SingleProduct = ({ item }) => {
    const [{ profile }, dispatch] = useGlobalState()

    const history = useHistory()

    const addtocart = async (id) => {
        profile !== null ? (
            await Axios({
                method: 'post',
                url: `${domain}/api/addtocart/`,
                headers: header,
                data: { "id": id }
            }).then(response => {
                //console.log(response,"34 Add yo cart");
                dispatch({
                    type: "ADD_RELOADPAGE_DATA",
                    reloadpage: response
                })
            })
        ) : (
            history.push("/login")
        )
    }

    return (
        <VanillaTilt 
        options={{ 
            glare: true,
            maxGlare: 1
         }} 
                style={{
                width: '450px', 
                height: '650px', 
                margin: '10px' ,
                textAlign: 'center', 
                
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.17)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0 , 0, 0.1)',
                backdropFilter: 'blur(.2px)' 
            }} >
            <div class="card single_product Card"  >
                <Link to={`/product/${item.id}`}>
                    <img class="card-img-top" src={item.image} alt="Card image cap" />
                </Link>
                
                <div class="card-body" >
                <Link to={`/product/${item.id}`}><h5 class="card-title">{item.title}</h5></Link>
                    <p class="card-text">{(item.description).substring(0, 70)}....<Link to={`/product/${item.id}`}>more</Link></p>
                    <button onClick={() => addtocart(item.id)} class="btn custom-btn-orange"><span>Add to Cart</span></button>
                </div>
                <div className='card-footer'>
                    <h5>Price:<del>{item.marcket_price}TK.</del>{item.selling_price}TK.</h5>
                </div>
                
                
            </div>
            </VanillaTilt>
        
    )
}

export default SingleProduct
