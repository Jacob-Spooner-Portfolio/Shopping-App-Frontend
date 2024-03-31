import './Product_List.css'
import '.././product_card/Product_Card'
import React from 'react'
import Product_Card from '.././product_card/Product_Card'

const Product_List = ({products}) => {
  return (
    <div className='product-card-list-container'>
        {
            products.map((product) =>{
                return(
                    <div>
                        <Product_Card product = {product} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Product_List