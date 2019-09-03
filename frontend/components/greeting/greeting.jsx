import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log in</Link>
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