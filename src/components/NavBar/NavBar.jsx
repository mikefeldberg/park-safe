import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Moment from 'react-moment';

const NavBar = props => {
    let nav = props.user ? (
        <div>
            <span className="NavBar-welcome">Welcome, {props.user.name}</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span className="NavBar-welcome">
                <Moment format="YYYY/MM/DD">{new Date()}</Moment>
            </span>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/index" className="NavBar-link">
                home
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/newapplicant" className="NavBar-link">
                new applicant
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/applicants" className="NavBar-link">
                Download applications
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="" className="NavBar-link" onClick={props.handleLogout}>
                log out
            </Link>

        </div>
    ) : (
        <div>
            <span className="NavBar-welcome">
                <Moment format="YYYY/MM/DD">{new Date()}</Moment>
            </span>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/login" className="NavBar-link">
                log in
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/signup" className="NavBar-link">
                sign up
            </Link>
        </div>
    );

    return <div className="NavBar">{nav}</div>;
};

export default NavBar;
