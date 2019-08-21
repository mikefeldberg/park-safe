import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../src/pages/SignupPage/SignupPage';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import userService from '../src/utils/userService';
import NavBar from '../src/components/NavBar/NavBar';
import HomePage from '../src/pages/HomePage/HomePage'
// import CreateMAINMODELPage from '../CreateMAINMODELPage/CreateMAINMODELPage';
// import ShowMAINMODELPage from '../ShowMAINMODELPage/ShowMAINMODELPage';
// import EditMAINMODELPage from '../EditMAINMODELPage/EditMAINMODELPage';


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

    /*--- Lifecycle Methods ---*/

    // async componentDidMount() {

    // }

    render() {
        return (
            <div className="container">
                <header className='header-footer center'><h1>Home Hack</h1></header>
                <NavBar
                    user={this.state.user}
                    handleLogout={this.handleLogout}
                    className="mb30"
                />
                <Switch>
                    <Route exact path='/index' render={() =>
                        <HomePage
                            user={this.state.user}
                        />
                    } />
                    {/* <Route exact path='/newmainmodel'
                        render={props =>
                            userService.getUser() ? (
                                <CreateMAINMODELPage
                                    {...props}
                                    user={this.state.user}
                                    handleLogOut={this.handleLogOut}
                                />
                            ) : (
                                <Redirect to="/login" />
                            )
                        }
                    />
                    <Route exact path='/mainmodels/:id'
                        render={props =>
                            userService.getUser() ? (
                                <ShowMAINMODELPage
                                    {...props}
                                    user={this.state.user}
                                    handleLogOut={this.handleLogOut}
                                />
                            ) : (
                                <Redirect to="/login" />
                            )
                        }
                    />
                    <Route exact path='/mainmodels/:id/edit'
                        render={props =>
                            userService.getUser() ? (
                                <EditMAINMODELPage
                                    {...props}
                                    user={this.state.user}
                                    handleLogOut={this.handleLogOut}
                                />
                            ) : (
                                <Redirect to="/login" />
                            )
                        }
                    /> */}
                    <Route exact path='/signup'
                        render={({ history }) =>
                            userService.getUser() ? (
                                <Redirect to="/index" />
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
                                <Redirect to="/index" />
                            ) : (
                                <LoginPage
                                    history={history}
                                    handleSignupOrLogin={this.handleSignupOrLogin}
                                />
                            )
                        }
                    />

                    {/* <Route exact path='/signup' render={({ history }) =>
                        <SignupPage
                            history={history}
                            handleSignupOrLogin={this.handleSignupOrLogin}
                        />
                    } />

                    <Route exact path='/login' render={({ history }) =>
                        <LoginPage
                            history={history}
                            handleSignupOrLogin={this.handleSignupOrLogin}
                        />
                    } /> */}
                </Switch>
            </div>
        );
    }
}

export default App;
