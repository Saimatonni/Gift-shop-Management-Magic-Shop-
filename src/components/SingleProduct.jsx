import Axios from 'axios'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { domain, header } from '../env'
import { useGlobalState } from '../state/provider'

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
        <div class="card single_product">
            <Link to={`/product/${item.id}`}>
                <img class="card-img-top" src={item.image} alt="Card image cap" />
            </Link>
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{(item.description).substring(0, 70)}....<Link to={`/product/${item.id}`}>more</Link></p>
                <button onClick={() => addtocart(item.id)} class="btn btn-primary">Add to Cart</button>
            </div>
            <div className='card-footer'>
                <h5>Price:<del>{item.marcket_price}TK.</del>{item.selling_price}TK.</h5>
            </div>
        </div>
    )
}

export default SingleProduct
