// src/App.js
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import ImageLoader from './components/ImageLoader';
import "./App.css";

const App = () => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    return (
        <div>
            <Navbar />
            {isAuthenticated ? <ImageLoader /> : <LoginForm />}
        </div>
    );
};

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);
