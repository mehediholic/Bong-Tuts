import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price;
    }
    return (
        <div>
            <h3>Your Enrolled Courses: </h3>
            <hr/>
            <p>Enrolled Courses: {cart.length} </p>
            <p>Total Course Price: {total}</p>
        </div>
    );
};

export default Cart;