import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseAuth } from '../config/constants';
// import { createHashHistory } from 'react-router';
// import {withRouter} from 'react-router';

// export const history = createHashHistory();

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authed: false,
            loading: true,
            redirectToReferrer: false
          }
        this.routeChange = this.routeChange.bind(this);
    }

    componentDidMount () {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({
              authed: true,
              loading: false,
            })
          } else {
            this.setState({
              authed: false,
              loading: false
            })
          }
        })
      }

    componentWillUnmount () {
        this.removeListener()
    }

    routeChange () {
        const { history } = this.props;
        this.setState({ redirectToReferrer: true });
        console.log(history);
        // this.props.history.push('/login');
    }

    render () {
        return (
            <nav className="navbar navber-default bg-primary fixed-top">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Home</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/login">Food Jokes</Link>
                    </li>
                    <li>
                        {this.state.authed
                    ? <Link to="/special">Celebrity Jokes</Link> :  '' }
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                    {/* { 
                        (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
                    } */}
                        <button className="btn btn-info log" onClick={this.routeChange}>Log In</button>
                    </li>
                </ul>
            </nav>
        );
    }
}
// export { NavBar as OriginalNavBar }
// export default withRouter(NavBar);