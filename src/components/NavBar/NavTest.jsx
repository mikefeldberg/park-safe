import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
// import Moment from 'react-moment';

const NavTest = props => {
    let nav = props.user ? (
        <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.safeparkingla.org/"><img height="30" alt="" src="https://i.imgur.com/UX1Lx3Z.png"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link" href="#">
                    <Link to="/applications" className="NavBar-link">
                        See All Applications
                    </Link>
                </a>
                <a className="nav-item nav-link" href="#">
                    <Link to="/download" className="NavBar-link">
                        Download Applications
                    </Link>
                </a>
                <a className="nav-item nav-link" href="#">
                    <Link to="" className="NavBar-link" onClick={props.handleLogout}>
                        Log Out
                    </Link>
                </a>
                </div>
            </div>
            </nav>
        </div>
    ) : (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.safeparkingla.org/"><img height="30" alt="" src="https://i.imgur.com/UX1Lx3Z.png"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link" href="#">
                    <Link to="/application" className="NavBar-link">
                        Application Form
                    </Link>
                </a>
                <a className="nav-item nav-link" href="#">
                    <Link to="/login" className="NavBar-link">
                        Staff Log In
                    </Link>
                </a>
                </div>
            </div>
            </nav>

        </div>
    );

    return <div className="NavBar">{nav}</div>;
};

export default NavTest;
