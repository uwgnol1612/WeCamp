import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({currentUser, logout, signup, login}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={login}>Log In</button>
            <button onClick={signup}>Sign Up</button>
        </nav>
    )
    const userBoard = () => (
        <div className="logo-container">
            image here
            <ul>
                <li>Host</li>
                <li>Bookings</li>
                <button onClick={logout}>Log Out</button>
            </ul>
        </div>
    )

    return currentUser ? userBoard() : sessionLinks();
}

export default Greeting;