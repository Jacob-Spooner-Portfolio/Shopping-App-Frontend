import './Product_Card.css'
import { Link } from 'react-router-dom'

const Product_Card = ({product}) => {
  return (
    <div className='product-card'>
        <Link key={product.sku} to={`/products/${product.sku}`}>
            <img src={product.main_image} alt={product.title} className='product-image'/>
            <div className='product-info'>
                <h3>{product.title}</h3>
                <p>${parseFloat(product.price)}</p>
                <op>{product.availability}</op>
            </div>
        </Link>
    </div>
  )
}

export default Product_Card