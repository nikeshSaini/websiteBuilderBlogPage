import React from 'react';
import "./navbar.css";
import drop_icon from "../Assets/dropdown.svg";
export default function Navbar(){
    return (
        <div className="navbar">
            <div className="searchBar">
                <input type="text"  placeholder="icon" />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Categories</li>
                    <li>Website Builders</li>
                    <li>Today's Deal</li>
                </ul>
            </div>
        </div>
    );
};