import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        total = total + product.price * product.quantity ;
        shipping = shipping + product.shipping * product.quantity ;
        quantity = quantity + product.quantity;
    }
    // in total tax is 7% 
    const tax = total *.7;
    const GrandTotal = total + tax + shipping;
    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Item:{quantity}</p>
            <h6>Total price: ${total}</h6>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${GrandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;