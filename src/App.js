import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../src/pages/SignupPage/SignupPage';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import userService from '../src/utils/userService';
import NavBar from '../src/components/NavBar/NavBar';
import HomePage from '../src/pages/HomePage/HomePage'
import CreateApplicationPage from '../src/pages/CreateApplicationPage/CreateApplicationPage';
import DownloadPage from '../src/pages/DownloadPage/DownloadPage'
import ListApplicationsPage from '../src/pages/ListApplicationsPage/ListApplicationsPage'
import ShowApplicationPage from '../src/pages/ShowApplicationPage/ShowApplicationPage'
import SubmissionPage from '../src/pages/SubmissionPage/SubmissionPage'
import TestPage from '../src/pages/CreateApplicationPage/TestPage'
// import ClickArea from '../src/components/ClickArea/ClickArea'

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: userService.getUser()
        };
    }

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
    }

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
    }

    render() {
        return (
            <div className="container">
                {/* <header className='header-footer center'><h1>Home Hack</h1></header> */}

                <NavBar
                    user={this.state.user}
                    handleLogout={this.handleLogout}
                    className="mb30"
                />
                <Switch>
                    <Route exact path='/application' render={({ history }) =>
                        <CreateApplicationPage
                            history={history}
                        />
                    } />
                    <Route exact path='/' render={() =>
                        <HomePage
                            user={this.state.user}
                        />
                    } />
                    <Route exact path='/submitted' render={() =>
                        <SubmissionPage
                            user={this.state.user}
                        />
                    } />
                    <Route exact path='/applications'
                        render={props =>
                            userService.getUser() ? (
                                <ListApplicationsPage
                                    {...props}
                                    user={this.state.user}
                                />
                            ) : (
                                    <Redirect to="/login" />
                                )
                        }
                    />
                    <Route exact path='/applications/:id'
                        render={props =>
                            userService.getUser() ? (
                                <ShowApplicationPage
                                    {...props}
                                    user={this.state.user}
                                />
                            ) : (
                                    <Redirect to="/login" />
                                )
                        }
                    />
                    <Route exact path='/signup'
                        render={({ history }) =>
                            userService.getUser() ? (
                                <Redirect to="/" />
                            ) : (
                                    <SignupPage
                                        history={history}
                                        handleSignupOrLogin={this.handleSignupOrLogin}
                                    />
                                )
                        }
                    />
                    <Route exact path='/login'
                        render={({ history }) =>
                            userService.getUser() ? (
                                <Redirect to="/" />
                            ) : (
                                    <LoginPage
                                        history={history}
                                        handleSignupOrLogin={this.handleSignupOrLogin}
                                    />
                                )
                        }
                    />
                    <Route exact path='/test' render={({ history }) =>
                        <TestPage />
                    } />
                    <Route exact path='/download' render={({ history }) =>
                        <DownloadPage />
                    } />
                </Switch>
            </div>
        );
    }
}

export default App;
