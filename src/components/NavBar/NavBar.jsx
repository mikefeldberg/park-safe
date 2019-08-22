import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
// import Moment from 'react-moment';

const NavBar = props => {
    let nav = props.user ? (
        <div>
            <span className="NavBar-welcome">Welcome, {props.user.name}</span>
            {/* &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span className="NavBar-welcome">
                <Moment format="YYYY/MM/DD">{new Date()}</Moment>
            </span> */}
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/download" className="NavBar-link">
                Download Applications
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/applications" className="NavBar-link">
                See All Applications
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="" className="NavBar-link" onClick={props.handleLogout}>
                Log Out
            </Link>
        </div>
    ) : (
        <div>
            <Link to="/application" className="NavBar-link">
                Application Form
            </Link>
            {/* &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span className="NavBar-welcome">
                <Moment format="YYYY/MM/DD">{new Date()}</Moment>
            </span> */}
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/login" className="NavBar-link">
                Staff Log In
            </Link>
            {/* &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/signup" className="NavBar-link">
                sign up
            </Link> */}
        </div>
    );

    return <div className="NavBar">{nav}</div>;
};

export default NavBar;
