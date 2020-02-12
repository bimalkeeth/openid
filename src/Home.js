import React from 'react';
import {Link} from "react-router-dom";

const Home = (props) => {
    const {isAuthenticated,login} =props.auth;
    return (
        <div>
            <h1>Home</h1>
            {props.auth.isAuthenticated?(<Link to="/profile">Profile</Link>):
                (<button onClick={props.auth.login}>Log In</button>)}

        </div>
    );
};

export default Home;

