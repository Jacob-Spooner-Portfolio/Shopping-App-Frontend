import Featured_Products from '../featured_products/Featured_Products'

const Home = ({products}) => {
  return (
    <Featured_Products products = {products} />
  )
}

export default Home