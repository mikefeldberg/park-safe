import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
// import Moment from 'react-moment';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navCollapsed: 'collapsed',
            ariaExpanded: false,
            navShow: '',
        };
    }

    toggleBurger = () => {
        if (this.state.navShow === '') {
            this.setState({
                navShow: 'show',
            });
        } else if (this.state.navShow === 'show') {
            this.setState({
                navShow: '',
            });
        }
        if (this.state.navCollapsed === '') {
            this.setState({
                navCollapsed: 'collapsed',
            });
        } else if (this.state.navCollapsed === 'collapsed') {
            this.setState({
                navCollapsed: '',
            });
        }
        if (this.state.ariaExpanded === true) {
            this.setState({
                ariaExpanded: false,
            });
        } else if (this.state.ariaExpanded === false) {
            this.setState({
                ariaExpanded: true,
            });
        }
    };

    render() {
        let nav = this.props.user ? (
            <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="https://www.safeparkingla.org/">
                        <img height="30" alt="" src="https://i.imgur.com/UX1Lx3Z.png" />
                    </a>
                    <button
                        className={['navbar-toggler', this.state.navCollapsed].join(' ')}
                        aria-expanded={this.state.ariaExpanded}
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-label="Toggle navigation"
                        onClick={this.toggleBurger}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={['collapse navbar-collapse', this.state.navShow].join(' ')} id="navbarNavAltMarkup">
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
                                <Link to="" className="NavBar-link" onClick={this.props.handleLogout}>
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
                    <a className="navbar-brand" href="https://www.safeparkingla.org/">
                        <img height="30" alt="" src="https://i.imgur.com/UX1Lx3Z.png" />
                    </a>
                    <button
                        className={['navbar-toggler', this.state.navCollapsed].join(' ')}
                        aria-expanded={this.state.ariaExpanded}
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-label="Toggle navigation"
                        onClick={this.toggleBurger}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={['collapse navbar-collapse', this.state.navShow].join(' ')} id="navbarNavAltMarkup">
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
    }
}

export default NavBar;
