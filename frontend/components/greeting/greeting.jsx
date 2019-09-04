import React from 'react';

const Greeting = ({currentUser, logout, signup, login}) => {
    const sessionLinks = () => (
        <ul className="session-links">
            <li><button onClick={signup}>Sign up</button></li>
            <li><button onClick={login}>Log in</button></li>

        </ul>
    )
    const userBoard = () => (
        <div className="dropdown">
            <span className= "user-container-logo">Logo</span>
                <div className="dropdown-content">
                    <li><a href="#">Host</a></li>
                    <li><a href="#">Bookings</a></li>
                    <li><button onClick={logout}>Log out</button></li>
                </div>
        </div>
    )

    return currentUser ? userBoard() : sessionLinks();
}

export default Greeting;