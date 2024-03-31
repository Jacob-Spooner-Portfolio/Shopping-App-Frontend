import { useEffect, useState } from "react"
import React from 'react'
import { useParams } from "react-router-dom"
import api from '../../api/axios-config'
import ProductImageCarousel from "./product_images/Product_Images"

//Dynamic Product page
const Product_Page = () => {

    //Get SKU from url
    const {sku} = useParams();
  
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
        <div className="product-page-container">
            <div className="product-carousel-container">
            <ProductImageCarousel images={product.images} />
            </div>
            <div className='product-info'>
                <h3>{product.title}</h3>
                <p>${parseFloat(product.price)}</p>
                <op>{product.availability}</op>
            </div>
        </div>
    )
}

export default Product_Page