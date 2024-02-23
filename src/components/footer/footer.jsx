import React from 'react';
import  "./footer.css";

export default function Footer(){
    return (
        <div className="footer">
            <div className="footer-left-part">
                <div className="left-part-section1">
                    <ul>
                        <p>CATEGORIES</p>
                        <li>WebSite Builder</li>
                        <li>Hosting</li>
                        <li>Data Center </li>
                        <li>Robotic-Automation</li>
                    </ul>
                </div>
                <div className="footer-left-part-section2">
                    <ul>
                        <p>CONTACT</p>
                        <li> Contact</li>
                        <li>Priacy Policy</li>
                        <li>Terms of Service </li>
                        <li>Categories</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
            <div className="footer-right-part">
            <select className='dropdown'>
                <option value="link0" selected >United States</option>
                <option value="link1">Link 1</option>
                <option value="link2">Link 2</option>
                <option value="link3">Link 3</option>
</select>
            </div>
        </div>
    );
};