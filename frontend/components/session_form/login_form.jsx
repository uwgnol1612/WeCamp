import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    }

    handleDemoLogin(e) {
        e.preventDefault();
        this.props.processForm({username: 'longmcfarlin', password: 'wl19881112'})
    }

    render() {
        const errors = this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)
        return (
            <div className="signup-form-container">
                <form className="signup-form-box">
                    <h2>Welcome back!</h2>
                    <p>It's about time for another camping trip</p>
                    <span>x</span>
                    <div className="signup-form">
                        <button className="demo-login" onClick={this.handleDemoLogin}>Demo Login</button>
                        <h2>or</h2>
                        <input
                            className="login-input"
                            type="text"
                            placeholder="username..."
                            onChange={this.update('username')}
                        />
                        <input
                            className="login-input"
                            type="password"
                            placeholder="Password..."
                            onChange={this.update('password')}
                        />
                    </div>
                    <div className="errors-messages">
                        <ul>
                            {errors}
                        </ul>
                    </div>
                    <button onClick={this.handleSubmit}>Log In</button>
                    <div className="session-footer1">
                        <p>Don't have a WeCamp account?</p>
                        <Link to='/signup'>Sign up!</Link>
                    </div>
                </form>
            </div>
        )
    }


}

export default LoginForm;
