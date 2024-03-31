import './Product_Card.css'

const Product_Card = ({product}) => {
  return (
    <div className='product-card'>
        <div className='product-image'>
            <img src={product.main_image} alt='NA'></img>
        </div>
        <div className='product-title'>
            <h5>{product.title}</h5>
        </div>
        <div className='product-info-container'>
            <div className='product-price'>
                <h7>${parseFloat(product.price)}</h7>
            </div>
            <div className='product-quantity'>
                <output>{product.availability}</output>
            </div>
        </div>
    </div>
  )
}

export default Product_Card