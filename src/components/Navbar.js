// src/components/Navbar.js
import React from 'react';
import { useSelector } from 'react-redux';
import "../App.css"; 
import "../components/LoginForm"

const Navbar = () => {
    const { username, email, isAuthenticated } = useSelector((state) => state.user);

    return (
        <nav >
            <h1 className='titulo'>login form</h1>
            {isAuthenticated && (
                <div className='menu'>
                    <div><a href='#'>Home</a></div>
                    <div><a href='#'>Product</a></div>
                    <div><a href='{openLoginForm}'>Form</a></div>
                    Bienvenido<span>{username} | {email}</span>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
