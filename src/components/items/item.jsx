import React from 'react';
import ViewBtn from '../viewbtn/viewbtn';
import "./item.css";
import builder from "../Assets/builder.svg"
import Offer from '../viewbtn/offerbanner';
import Discount from '../viewbtn/discount/discount';
export default function Item(props){
    return (
        <div className="item-box">
            <img src={builder} alt="" />
            <div className='item-lower-part'>
            <div className="discount">
                <Offer/>
                <Offer title="Limited offer"/>
            </div>
            <p className='itempara1'>Webbuilder1</p>
            <p className='itempara'>{props.desc || 'Computer Modern Classic with wix support'}</p>
            <Discount/>
            <ViewBtn title="View Deal" width='292px'/>
            </div>
        </div>
    );
};