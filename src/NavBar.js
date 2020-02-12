import React, {Component} from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const {isAuthenticated,Login,Logout}=this.props.auth;
        return (
            <div className="App container">
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/profile">Profile</Link></li>
                  <li><button onClick={this.props.auth.isAuthenticated()? this.props.auth.logout:this.props.auth.login}>
                      {this.props.auth.isAuthenticated()? "Logout":"LogIn"}
                  </button> </li>
              </ul>

            </div>
        );
    }
}

export default NavBar;