import './Product_List.css'
import '.././product_card/Product_Card'
import React from 'react'
import Product_Card from '.././product_card/Product_Card'

let minIndex = 0;
let maxIndex = 10;
let pageNum = 1;
let productsOnPage = 10;

function updateResultLimit(limit) {productsOnPage = limit;}

function updateOnPageShift(shift) 
{
    //short-circuit
    if(pageNum === 1) {return}
    
    //handle decrement
    if(shift === -1) {minIndex -= productsOnPage; pageNum--;}

    //Handle increment
    else {minIndex += productsOnPage; pageNum++;}
}

const Product_List = ({products}) => {

    //CURRENT SLICE LOGIC TO LIMIT RESULTS
    // if(((pageNum*productsOnPage)+minIndex) >= products.length) {maxIndex = products.length}
    // else {maxIndex = ((pageNum*productsOnPage)+minIndex)}

    // let listOfProducts = products.slice(minIndex, maxIndex);

    // console.log(listOfProducts)

    //display all products at the moment. Working to get dynamic results TODO
    let listOfProducts = products
    return(
        <div className='product-list-container'>
            {
                listOfProducts.map((product) =>{
                    return(
                        <div className='product-card'>
                        <Product_Card product = {product} />
                        </div>
                    )
                })
            }
            {/* make a reset function when changing values */}
            <div className='products-per-page-list'>
                <input onClick={updateResultLimit(10)} type='button' id='products-10' value="10"/>
                <input onClick={updateResultLimit(25)} type='button' id='products-25' value="25"/>
                <input onClick={updateResultLimit(50)} type='button' id='products-50' value="50"/>
            </div>
            {/* Make a function that updates all math */}
            <div className='page-container'> 
                <input onClick={updateOnPageShift(-1)} type='button' id='prev-page' value="prev"/>
                <p className='page-number'>{pageNum}</p>
                <input onClick={updateOnPageShift(1)} type='button' id='next-page' value="next"/>
            </div>
        </div>
    )
    
}
      
export default Product_List