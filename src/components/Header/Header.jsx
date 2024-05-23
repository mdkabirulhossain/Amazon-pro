import React from 'react';
import logo from '../../images/favicon.ico'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
            <img src={logo} alt="" />
            </div>
            <div className='navlink'>
                <a className='shop' href="#">Shop</a>
                <a className='order' href="#">Order</a>
                <a className='inventory' href="#">Inventroy</a>
                <a className='login' href="#">Login</a>
            </div>
            
        </div>
    );
};

export default Header;