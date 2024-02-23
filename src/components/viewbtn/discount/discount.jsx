import React from 'react';
import "./discount.css"
export default function Discount(props){
    return (
        <div className="discount-box">
            <p className='currPrice'>${props.currPrice || '39.96'}</p>
            <p className='oldPrice'>${props.oldPrice || '49.96'}</p>
            <p className='currDis'>$({props.currDiscount || '20'}% Off)</p>
        </div>
    );
};