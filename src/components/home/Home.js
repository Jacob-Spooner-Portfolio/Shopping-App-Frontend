import Featured_Products from '../featured_products/Featured_Products'
import Product_List from '../product_list/Product_List'

const Home = ({products}) => {
  return (
    <div>
      <div><Featured_Products products = {products} /></div>
      <div><Product_List products = {products} /></div>
    </div>
  )
}

export default Home