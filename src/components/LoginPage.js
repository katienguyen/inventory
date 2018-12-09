import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NavBar } from './NavBar';
import banner from '../images/christmas.jpg';
import { login } from '../auth';
const axios = require('axios');

export class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            submitted: false,
            loading: false,
            error: '',
            redirectToReferrer: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        console.log('email:', this.state.email);
        console.log('password:', this.state.password);

        // stop here if form is invalid
        if (!(this.state.email && this.state.email)) {
            return;
        }
        this.setState({ loading: true });
        // axios.post('http://localhost:5000/login', {
        //     email: this.state.email,
        //     password: this.state.password
        //   })
        // .then((response) => {
        //     console.log(response);
        //     if(response.data == 'success'){
        //         this.setState({ redirectToReferrer: true });
        //         console.log('Successfully Login');
        //     }
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

        login(this.state.email, this.state.password)
        .then(() => {
            this.setState({ redirectToReferrer: true });
            console.log('Successfully Login');
        })
        .catch((error) => {
            this.setState({ error: 'Authentication failed!', loading: false });
        })
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });

        console.log('email:', this.state.email);
    }

    render() {
        if (this.state.redirectToReferrer) {
            // return (
            //   <Redirect to='/'/>
            // )
            console.log(this.props.history);
            this.props.history.push('/');
          }
        return(
            <div>
                <section className="login-block">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-4 login-sec">
                        <h2 className="text-center">Login Now</h2>
                            <form className="login-form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (this.state.submitted && !this.state.email ? ' has-error' : '')}>
                                <label htmlFor="exampleInputEmail1" className="text-uppercase text-left" >email</label>
                                <input type="email" className="form-control" placeholder="" value={this.state.email} name="email" onChange={this.handleChange}></input>
                                {this.state.submitted && !this.state.email && <div className="help-block">email is required</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="text-uppercase text-left">Password</label>
                                <input type="password" className="form-control" placeholder="" value={this.state.password} name="password" onChange={this.handleChange}></input>
                                {this.state.submitted && !this.state.password && <div className="help-block">Password is required</div>}
                            </div>
                            <div className="form-check">
                            <label className="form-check-label text-left">
                                <input type="checkbox" className="form-check-input"></input>
                                <small>Remember Me</small>
                            </label>
                            <button type="submit" className="btn btn-login float-right" disabled={this.state.loading}>Submit</button>
                            {this.state.loading &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />}
                            </div>
                            <div className="error-mes">{this.state.error}</div>
                            </form>
                        </div>
                        <div className="col-md-8 banner-sec">
                            <img className="d-block img-fluid" src={banner} alt="First slide"></img>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}