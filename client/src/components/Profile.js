import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import List from './List';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            
            email: ''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            fullName: decoded.fullName,
            
            email: decoded.email,
        })
    }

    render () {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron mt-5">
                        <div className="col-sm-8 mx-auto">
                            <h1 className="text-center">PROFILE</h1>
                        </div>
                        <table className="table col-md-6 mx-auto">
                            <tbody>
                                <tr>
                                    <td>Full Name</td>
                                    <td>{this.state.fullName}</td>
                                </tr>
                            
                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className = "container">
                   <List/> 
                </div>
            </div>
        )
    }
}

export default Profile