import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
// import Moment from 'react-moment';

const NavBar = props => {
    let nav = props.user ? (
        <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.safeparkingla.org/"><img height="30" alt="" src="https://i.imgur.com/UX1Lx3Z.png"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={["collapse navbar-collapse ${show}"].join(' ')} id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <div className="nav-item nav-link">
                        <Link to="/applications" className="NavBar-link">
                            See All Applications
                        </Link>
                    </div>
                    <div className="nav-item nav-link">
                        <Link to="/download" className="NavBar-link">
                            Download Applications
                        </Link>
                    </div>
                    <div className="nav-item nav-link">
                        <Link to="" className="NavBar-link" onClick={props.handleLogout}>
                            Log Out
                        </Link>
                    </div>
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
                <div className="nav-item nav-link">
                    <Link to="/application" className="NavBar-link">
                        Application Form
                    </Link>
                </div>
                <div className="nav-item nav-link">
                    <Link to="/login" className="NavBar-link">
                        Staff Log In
                    </Link>
                </div>
                </div>
            </div>
            </nav>

        </div>
    );

    return <div className="NavBar">{nav}</div>;
};

export default NavBar;
