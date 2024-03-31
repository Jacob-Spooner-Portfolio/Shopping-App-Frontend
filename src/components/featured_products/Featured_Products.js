import './Featured_Products.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import * as _ from 'underscore'

const Featured_Products = ({products}) => {
    let samples = _.sample(products, 10);
    return (
    <div className='product-card-carousel'>
        <Carousel>
            {
                samples.map((product) =>{
                    return(
                        <Paper>
                            <div className = 'product-card-container'>
                                <div className='product-card'>
                                    <div className='product-detail'>
                                        <div className='product-image'>
                                            <img src={product.main_image} alt='' />
                                        </div>
                                        <div className='product-name'>
                                            <h4>{product.title}</h4>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Featured_Products