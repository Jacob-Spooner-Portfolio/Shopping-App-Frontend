import './Product_List.css'
import '.././product_card/Product_Card'
import React, {useState, useEffect} from 'react'
import Product_Card from '.././product_card/Product_Card'

const Product_List = ({initialProducts}) => {

    console.log(initialProducts)

    //Set initial states for all dynamic variables
    const [products, setProducts] = useState(initialProducts);
    const [filteredProducts, setFilteredProducts] = useState(initialProducts ? initialProducts.slice(0,10) : []) //default to 10 results
    const [resultLimit, setResultLimit] = useState(10);
    const [pageNum, setPageNum] = useState(1);

    //Update results based on page number && result limit
    //re-render based on changing results or pageNum
    useEffect(() => {
        if (initialProducts) {
            setProducts(initialProducts);
            const startIndex = (pageNum - 1) * resultLimit;
            const endIndex = startIndex + resultLimit;
            setFilteredProducts(products.slice(startIndex, endIndex));
        }
    }, [resultLimit, pageNum, products, initialProducts])

    //Update the result limits based on button press
    const updateResultLimit = (newLimit) => {
        setResultLimit(newLimit);
        setPageNum(1); //Reset to first page when limit changes to avoid result issues
    };

    //increment page on button press
    const nextPage = () => {
        setPageNum(pageNum+1);
    };

    //decrement page on button press
    const prevPage = () => {
        setPageNum(pageNum-1)
    };

    return (
        <div className='product-card-container'>
            {/* Create grid of products */}
            <div className='product-card-grid'>
                {
                    filteredProducts.map(product => (
                        <Product_Card product={product} />
                    ))
                }
            </div>
            {/* Create select for each result limiter */}
            <select value={resultLimit} onChange={(e) => updateResultLimit(parseInt(e.target.value))}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
            </select>
            {/* Create page selector */}
            <button onClick={prevPage} disabled={pageNum === 1}>Previous</button>
            <span>{pageNum}</span>
            <button onClick={nextPage} disabled={filteredProducts.length < resultLimit}>Next</button>
        </div>
    )
}
      
export default Product_List