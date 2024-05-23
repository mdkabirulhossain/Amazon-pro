import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const{name, img, price, ratings, seller} = props.product;
    const handleAddtoCart = props.handleAddtoCart;
    return (
        <div className='product'>
            <div className='product-info'>
            <img src={img} alt="" />
            <h6>{name}</h6>
            <h4>Price: ${price}</h4>
            <p>Manufracturar: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button onClick={()=>handleAddtoCart(props.product)} className='add-to-cart'>Add to cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;