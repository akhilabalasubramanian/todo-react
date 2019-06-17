import React, { Component } from 'react'
import { login } from './UserFunctions'
import axios from 'axios';
import { createBrowserHistory } from 'history';
import { Router, Route, Link } from 'react-router-dom';
///import history from './history';



class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const users = {
            email: this.state.email,
            password: this.state.password
        }
        let bodyFormData = {
    
            email: users.email,
            password: users.password,
        }
        console.log('gfds');
        
        return axios({
            method: 'post',
            url: 'http://localhost:3000/api/login',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(res => {
                localStorage.setItem('usertoken', res.data)
                this.props.history.push('/profile')

                //browserHistory.push('profile')
                return res.data
            })
            .catch(err => {
                console.log(err);
            })
            
        
        // login(users).then(res => {
        //     if (res) {
        //         // location.reload();
        //         window.location.href = '/profile'
        //         // this.props.history.push('/profile')
        //         // window.location.reload();
        //     }
        // })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
