import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    update(field) {
        return e => (
            this.setState({[field]: e.target.value})
        )
    }

    render() {
        const errors = this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)
        return (
            <div className="signup-form-container">
                <form className="signup-form-box">
                    <h2>Join WeCamp</h2>
                    <p>Discover the best camping near me</p>
                    <div onClick={this.props.closeModal} className="close-x">&times;</div>
                    <div className="signup-form">
                        <input
                            className="signup-input" 
                            type="text"
                            placeholder="Username..."
                            onChange={this.update('username')}
                        />
                        <input
                            className="signup-input"
                            type="email"
                            placeholder="Email address..."
                            onChange={this.update('email')}
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
                    <button className="session-submit-button" onClick={this.handleSubmit}>Join WeCamp</button>
                    <div className="session-footer-1">
                        <p>By signing up, I agree to WeCamp's terms and privacy policy.</p>
                    </div>
                    <div className="session-footer-2">
                        <span>Already a WeCamper? <button onClick={this.props.openModal}>Log in!</button>
                        </span>
                    </div>
                </form>
            </div>
        )
    }


}

export default withRouter(SignupForm);
