import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <ul className="session-links">
            <li><button onClick={() => openModal('signup')}>Sign up</button></li>
            <li><button onClick={() => openModal('login')}>Log in</button></li>
        </ul>
    )
    const userBoard = () => (
        <div className="dropdown">
            <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/apple-touch-icon.png" alt=""/>
            <div className="dropdown-content">
                <li><a href="#">Host</a></li>
                <li><Link to={`/users/${currentUser.id}`}>Bookings</Link></li>
                <li><button onClick={logout}>Log out</button></li>
            </div>
        </div>
    )

    return currentUser ? userBoard() : sessionLinks();
}

export default Greeting;