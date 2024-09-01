// src/components/LoginForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, logout } from '../actions/userActions';
import Modal from 'react-modal';
import ojito from '../assets/ojito.png';
import "../App.css"; 
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);
    const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);

    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const correctPassword = 'mod7reactusip';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwordInput === correctPassword) {
            dispatch(setUser(username, email, passwordInput));
        } else {
            setErrorModalIsOpen(true);
        }
    };

    const handleLogout = () => {
        setLogoutModalIsOpen(true);
    };

    const confirmLogout = () => {
        dispatch(logout());
        setUsername('');
        setEmail('');
        setPasswordInput('');
        setLogoutModalIsOpen(false);
    };

    return (
        <div className='form'>
            
            <form onSubmit={handleSubmit}>
                <div className='entrada'>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className='entrada'>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='entrada'>
                    <label>Password:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        required
                    />
                    <img
                        src={ojito}
                        alt="Toggle Password Visibility"
                        style={{ cursor: 'pointer', marginLeft: '10px' }}
                        onClick={() => setShowPassword(!showPassword)}
                    />
                </div>
                <div className='boton'>
                    <button type="submit">Login</button>
                    <a href="#" onClick={handleLogout}>Logout</a>
                </div>
            </form>

            {/* Modal para password incorrecta */}
            
            <Modal
                
                isOpen={errorModalIsOpen}
                onRequestClose={() => setErrorModalIsOpen(false)}
                className='Modal1'>
                <div className='modal-overlay'> 
                <h2>Password incorrecto</h2>
                <div>
                <button className='btn' onClick={() => setErrorModalIsOpen(false)}>X</button>
                </div>
                </div>
            </Modal>
            
            {/* Modal para confirmar logout */}
            <Modal
                isOpen={logoutModalIsOpen}
                onRequestClose={() => setLogoutModalIsOpen(false)}
                className='Modal2'>
                <div className='modal-overlay1' > 
                <button className='btn1' onClick={() => setLogoutModalIsOpen(false)}>X</button>
                <h2>¿Estás seguro que quieres cerrar sesión?</h2>
                <br></br>
                <button onClick={confirmLogout}>Presionar para salir</button>
                  
                </div>
            </Modal>
        </div>
    );
};

export default LoginForm;
