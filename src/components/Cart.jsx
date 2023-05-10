import Axios from 'axios';
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { domain, header } from '../env';
import { useGlobalState } from '../state/provider';
import './Cart.css'

const Cart = () => {
    const [{ cartproductf_uncomplit }, dispatch] = useGlobalState()
    let cart_productt_length = 0;
    if (cartproductf_uncomplit !== null) {
        cart_productt_length = cartproductf_uncomplit?.cartproduct?.length
    } else {
        cart_productt_length = 0;
    }

    const history = useHistory()
    const updatecartproduct = async (id) => {
        await Axios({
            method: 'post',
            url: `${domain}/api/updatecartproduct/`,
            headers: header,
            data: { "id": id }
        }).then(response => {
            // console.log(response);
            dispatch({
                type: "ADD_RELOADPAGE_DATA",
                reloadpage: response
            })
        })
    }


    const editcartproduct = async (id) => {
        await Axios({
            method: 'post',
            url: `${domain}/api/editcartproduct/`,
            headers: header,
            data: { "id": id }
        }).then(response => {
            // console.log(response);
            dispatch({
                type: "ADD_RELOADPAGE_DATA",
                reloadpage: response
            })
        })
    }
    const delatecartproduct = async (id) => {
        await Axios({
            method: 'post',
            url: `${domain}/api/delatecartproduct/`,
            headers: header,
            data: { "id": id }
        }).then(response => {
            // console.log(response);
            dispatch({
                type: "ADD_RELOADPAGE_DATA",
                reloadpage: response
            })
        })
    }

    const delatefullcard = async (id) => {
        await Axios({
            method: 'post',
            url: `${domain}/api/delatefullcart/`,
            headers:header,
            data: { "id": id }
        }).then(response => {
            // console.log(response);
            dispatch({
                type: "ADD_RELOADPAGE_DATA",
                reloadpage: response
            })
            dispatch({
                type: "ADD_CARTPRODUCT_UNCOMPLIT",
                cartproductf_uncomplit: null
            })
            alert("Full Cart is Delated")
            history.push('/')
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="container p-3">
            {
                cart_productt_length !== 0 ?
                    <table  className="table Table_name"  >
                        <thead>
                            <th>SN</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {
                                cartproductf_uncomplit?.cartproduct.map((data, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{data.product[0].title}</td>
                                        <td>{data.price}</td>
                                        <td>{data.quantity}</td>
                                        <td>{data.subtotal}</td>
                                        <td>
                                            <button onClick={() => editcartproduct(data.id)} className="btn custom-btn-info"><span>-</span></button>
                                            <button onClick={() => delatecartproduct(data.id)} className="btn custom-btn-red mx-1"><span>X</span></button>
                                            <button onClick={() => updatecartproduct(data.id)} className="btn custom-btn-green"><span>+</span></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan="4" className="text-right" >Total</th>
                                <th>{cartproductf_uncomplit?.total}</th>
                                <th>
                                    <Link to="/order" className="btn custom-btn-green" ><span>Order Now</span></Link>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                    :
                    <div>
                        <h1>Cart is empty!!!</h1>
                    </div>
            }
            <div className="row">
                <div className="col">
                    <Link to="/oldorders" className="btn custom-btn-orange" ><span>Old Orders</span></Link>
                </div>
                {
                    cart_productt_length !== 0 &&
                    <>
                        <div className="col">
                            <Link onClick={() => delatefullcard(cartproductf_uncomplit.id)} className="btn custom-btn-red" ><span>Delate Cart</span></Link>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Cart
