import React, { useState } from "react";
import Axios from "axios";
import { domain } from "../env"
import SingleProduct from './SingleProduct'

const SearchProduct = () => {

    const [query, setQuery] = useState("");
    const [products, setProducts] = useState(null);
    const handleSearch = () => {
        Axios
            .get(`${domain}/api/product/?search=${query}`)
            .then((response) => {
                console.log(response.data, "from serach");
                setProducts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
        <div>
             <div className="text-center">
            <div className='search-box f_flex mx-5' >

                <i className='fa fa-search mx-2' ></i>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search product...' style={{ backgroundColor: '#333', color: '#fff', borderRadius: '10px', padding: '5px' }} />
                <button onClick={handleSearch} style={{ backgroundColor: '#333', color: '#fff', borderRadius: '5px', padding: '5px' }}>Search</button>
            </div>
            <div className="row">
                {products?.results.map((item, i) => (
                    <div className="col-md-3" key={i}>
                        <SingleProduct item={item} />
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default SearchProduct
