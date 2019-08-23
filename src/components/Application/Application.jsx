import React, { Component } from 'react';
import Moment from 'react-moment';
import styles from './Application.module.css';

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
                <div className="row">
                    <div className="col-4">
                        <div>{this.props.firstName} {this.props.lastName}</div>
                    </div>
                    <div className="col-2">
                        <div>{this.props.phone}</div>
                    </div>
                    <div className="col-1">
                        <div>{this.props.gender}</div>
                    </div>
                    <div className="col-2">
                        <div>{this.props.ageRange}</div>
                    </div>
                    <div className="col-1">
                        <div className="text-center">{this.props.highPriority}</div>
                    </div>
                    <div className="col-2">
                        <div className="text-center">
                            <Moment format="MMM DD, YYYY">{this.props.createdAt}</Moment>
                        </div>
                    </div>
                    {/* <div className="col-1">
                        {this.state.inputActive && (
                            <React.Fragment>
                                <i onClick={this.toggleEdit} className="fas fa-times-circle" />
                                <i onClick={this.confirmEdit} className="fas fa-check-circle" />
                            </React.Fragment>
                        )}
                        {!this.state.inputActive && <i onClick={this.toggleEdit} className="far fa-edit" />}
                    </div>
                    <div className="col-1">
                        {this.state.inputActive && (
                            <React.Fragment>
                                <i onClick={this.toggleEdit} className="fas fa-times-circle" />
                                <i onClick={this.confirmEdit} className="fas fa-check-circle" />
                            </React.Fragment>
                        )}
                        {!this.state.inputActive && <i onClick={this.toggleEdit} className="far fa-edit" />}
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Application;
