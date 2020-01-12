import React, { Component } from 'react';
import './style.css';
import Dashboard from './Dashboard';
// import validator from 'validator';


class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLogin: false,
            loginmessage: '',
        };
    }

    emailHandleChange = (e) => {
        console.log('Email is here');

        this.setState({
            username: e.target.value
        });
    }

    passwordHandleChange = (e) => {
        console.log('Password is here');

        this.setState({
            password: e.target.value
        });
    }

    handleSubmitButton = (e, value) => {
        console.log("Submitting");
        console.log(this.state);
        var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var passformat = /^[A-Za-z]\w{7,14}$/;

        if (this.state.username === 'hruday@gmail.com' && this.state.username.match(emailformat) &&
            this.state.password === 'hruday123' && this.state.password.match(passformat)) {
            this.setState({ isLogin: true })
        }
        else {
            alert("You have entered an invalid email/password !");
            return false;
        }
    }

    render() {
        const { username, password } = this.state;

        return (
            <>
                <div className="main-container">
                    <div className="container">
                        {!this.state.isLogin && <div className="card">
                            <div className="card-header">
                                <h3>Sign In</h3>
                            </div>
                            <div className="card-body">
                                <label htmlFor="email">UserName: </label>
                                <input
                                    name="username"
                                    type="text"
                                    placeholder="Enter your email"
                                    value={username}
                                    onChange={this.emailHandleChange}

                                />
                                <br />

                                <label htmlFor="email">Password: </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={this.passwordHandleChange}
                                />
                                <br />
                                <div className="form-group">
                                    <input type="submit" value="Login" onClick={this.handleSubmitButton} />
                                </div>
                            </div>
                        </div>}
                    </div>
                    {this.state.isLogin && <Dashboard />}
                </div>
            </>
        );
    }
}

export default LoginForm;