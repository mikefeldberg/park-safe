import React, { Component } from 'react';
import Moment from 'react-moment';
import styles from './Application.module.css';
import { Link } from 'react-router-dom';

class Application extends Component {
    state = {
        inputActive: false,
    };

    toggleEdit = () => {
        this.setState(prevState => ({
            inputActive: !prevState.inputActive,
        }));
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    };

    confirmEdit = e => {
        this.props.handleApplicationUpdate(this.props.id, this.state.noteValue);
        this.setState(prevState => ({
            inputActive: !prevState.inputActive,
        }));
    };

    render() {
        return (
            <div className="container">

                
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

                

                <div className="row">
                    <div className="col-3">
                        <div>
                            {this.props.firstName} {this.props.lastName}
                        </div>
                    </div>
                    <div className="col-2">
                        <div>{this.props.phone}</div>
                    </div>
                    <div className="col-1">
                        <div className="text-center">{this.props.gender}</div>
                    </div>
                    <div className="col-2">
                        <div>{this.props.ageRange}</div>
                    </div>
                    <div className="col-1">
                        <div className="text-center">
                            {this.props.highPriority && (
                                <i className={['fas fa-exclamation-circle', styles.exclaim].join(' ')} />
                            )}
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="text-center">
                            <Moment format="MMM DD, YYYY">{this.props.createdAt}</Moment>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="text-center">
                            <Link
                                to={{
                                    pathname: `/applications/${this.props.applicationId}`,
                                    appication: this.props.application,
                                }}
                            >
                                <i className={['fas fa-file-alt', styles.document].join(' ')} />
                            </Link>
                            <span className="sm10">|</span>
                            <Link
                                to={{
                                    pathname: `/applications/${this.props.applicationId}`,
                                    appication: this.props.application,
                                }}
                            >
                                <i className={['fas fa-file-download', styles.download].join(' ')} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Application;
