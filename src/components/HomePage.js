import React, { Component } from 'react';
import { NavBar } from './NavBar';
import { Route, browserHistory } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { LoginPage } from './LoginPage';

export class HomePage extends Component {
    render() {
        return (
            <div className="containers">
                <NavBar />
                <main>
                    <p>Work in progress</p>
                </main>
            </div>
        );
    }
}