import React from 'react';
import './Cart.css';
import { Button } from 'react-bootstrap';

const Cart = (props) => {
    const cart = props.cart;

    const courseTotal = cart.reduce((sum,course)=> sum + course.price, 0);
    const tax = courseTotal/10;
    return (
        <div>
            <h2>Order Summery</h2>
            <p>Total items ordered: {cart.length}</p>
            <p>Total price: {courseTotal}</p>
            <p>Tax: {tax}</p>
            <h4>Grand total : {courseTotal + tax}</h4>
            <Button variant="success">Place Order</Button>
        </div>
    );
};

export default Cart;