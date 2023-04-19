import Axios from 'axios';
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { domain } from '../env';
import { useGlobalState } from '../state/provider';

const Cart = () => {
    const [{ cartproductf_uncomplit }, dispatch] = useGlobalState()
    let cart_productt_length = 0;
    if (cartproductf_uncomplit !== null) {
        cart_productt_length = cartproductf_uncomplit?.cartproduct?.length
    } else {
        cart_productt_length = 0;
    }
    return (
        <div className="container p-3">
            {
                cart_productt_length !== 0 ?
                    <table className="table table-striped">
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

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    :
                    <div>
                        <h1>Thare is no Card Go home and add some Product</h1>
                    </div>
            }
        </div>
    )
}

export default Cart
