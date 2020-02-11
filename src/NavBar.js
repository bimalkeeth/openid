import React, {Component} from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App container">
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/profile">Profile</Link></li>
              </ul>

            </div>
        );
    }
}

export default NavBar;