import { useEffect, useState } from "react"
import React from 'react'
import { useParams } from "react-router-dom"
import api from '../../api/axios-config'

//Dynamic Product page
const Product_Page = () => {

    //Get SKU from url
    const {sku} = useParams();
    console.log('SKU:', sku); // Log the SKU parameter

  
    //Setup product state
    const [product, setProduct] = useState(null);

    //Setup effect hook to get product from API
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`/api/v1/products/${sku}`);
                const data = response.data;
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [sku]);

    if(!product) {
        return <div>Loading Product...</div>
    }

    return (
        <div classname="product-page-container">
            <h2>Product Details</h2>
            <p>SKU: {product.sku}</p>
            <p>Title: {product.title}</p>
            {/* Render other product details here */}
        </div>
    )
}

export default Product_Page