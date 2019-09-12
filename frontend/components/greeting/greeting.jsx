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
            <span className= "user-container-logo">
                <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/camplogo.png" alt=""/>
            </span>
                <div className="dropdown-content">
                    <li><a href="#">Host</a></li>
                    <Link to={`/users/${currentUser.id}`}>
                        <li>Bookings</li>
                    </Link>
                    <li><button onClick={logout}>Log out</button></li>
                </div>
        </div>
    )

    return currentUser ? userBoard() : sessionLinks();
}

export default Greeting;