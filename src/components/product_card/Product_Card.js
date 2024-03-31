import './Product_Card.css'

const Product_Card = ({product}) => {
  return (
    <div className='product-card'>
        <img src={product.main_image} alt=''></img>
        <h3>{product.title}</h3>
        <p>${parseFloat(product.price)}</p>
        <op>{product.availability}</op>
    </div>
  )
}

export default Product_Card