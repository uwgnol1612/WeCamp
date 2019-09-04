import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

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
        this.props.processForm(this.state);
        if (this.props.errors === []) {
        this.props.closeModal();
        }
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    }

    handleDemoLogin(e) {
        e.preventDefault();
        this.props.processForm({username: 'longmcfarlin', password: 'wl19881112'})
        this.props.closeModal();
    }

    render() {
        const errors = this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)
        return (
            <div className="signup-form-container">
                <form className="signup-form-box">
                    <h2>Welcome back!</h2>
                    <p>It's about time for another camping trip</p>
                    <div onClick={this.props.closeModal} className="close-x">&times;</div>
                    <button className="demo-login" onClick={this.handleDemoLogin}>Demo Login</button>
                    <h3>or</h3>
                    <div className="signup-form">
                        <input
                            className="signup-input"
                            type="text"
                            placeholder="Username..."
                            onChange={this.update('username')}
                        />
                        <input
                            className="signup-input"
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
                    <button className="session-submit-button" onClick={this.handleSubmit}>Log In</button>
                    <div className="session-footer-2">
                        <span>Don't have a WeCamp account? <button onClick={this.props.openModal}>Sign up!</button>
                        </span>
                    </div>

                </form>
            </div>
        )
    }


}

export default withRouter(LoginForm);
