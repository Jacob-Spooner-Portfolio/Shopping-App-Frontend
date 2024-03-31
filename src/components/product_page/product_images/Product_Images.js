import './Product_Images.css'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductImageCarousel = ({ images }) => {
    // Split the images string into an array if it's not already an array
    const imageArray = Array.isArray(images) ? images : images.split('|');

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000, // Adjust the speed (in milliseconds)
        autoplay: true, // Enable autoplay
        autoplaySpeed: 4000, // Set autoplay speed (in milliseconds)
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {imageArray.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Product Image ${index + 1}`} />
                </div>
            ))}
        </Slider>
    );
};

export default ProductImageCarousel;
