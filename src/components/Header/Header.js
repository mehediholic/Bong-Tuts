import React from 'react';
import logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';


const Header = () => {
    return (
        <div className="header text-center">
            <a href=""><img src={logo} alt=""/></a>
            <nav>
                <a href="/courses">Our Courses</a>
                <a href="/account">Account</a>
                <a href="/login">User Login</a>
            </nav>
        </div>
    );
};

export default Header;