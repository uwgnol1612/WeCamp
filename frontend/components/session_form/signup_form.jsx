import React from 'react';
import { Link } from 'react-router-dom'

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
                    <span>x</span>
                    <div className="signup-form">
                        <input 
                            type="text"
                            placeholder="username..."
                            onChange={this.update('username')}
                        />
                        <input
                            type="email"
                            placeholder="Email address..."
                            onChange={this.update('email')}
                        />
                        <input
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
                    <button onClick={this.handleSubmit}>Join WeCamp</button>
                    <div className="session-footer1">
                        <p>By signing up, I agree to WeCamp's terms and privacy policy.</p>
                    </div>
                    <div className="session-footer2">
                        <p>Already a WeCamper?</p>
                        <Link to='/login'>Log in!</Link>
                    </div>
                </form>
            </div>
        )
    }


}

export default SignupForm;
