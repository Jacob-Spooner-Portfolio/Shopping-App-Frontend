import './Product_List.css'
import '.././product_card/Product_Card'
import React from 'react'
import Product_Card from '.././product_card/Product_Card'

let minIndex = 0;
let pageNum = 1;
let productsOnPage = 10;

const Product_List = ({products}) => {
  return (
    <div className='product-card-list-container'>
        <div className='product-card-list'>
            {
                products.map((product, productIndex, productArr) =>{
                    return(
                        <div className='product-card'>
                            <Product_Card product = {product} />
                        </div>
                    )
                })
            }
        </div>
        {
            <ul className='products-per-page-container'>
                <input onClick={productsOnPage=10} type='button' id='products-10'></input>
                <input onClick={productsOnPage=25} type='button' id='products-25'></input>
                <input onClick={productsOnPage=50} type='button' id='products-50'></input>
            </ul>
        }
    </div>
  )
}

export default Product_List