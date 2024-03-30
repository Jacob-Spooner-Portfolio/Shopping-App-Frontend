import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

const Featured_Products = ({products}) => {
  return (
    <div className='product-card-carousel'>
        <Carousel>
            {
                products.map((product) =>{
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