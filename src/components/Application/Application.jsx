import React, { Component } from 'react';
import Moment from 'react-moment';
import styles from './Application.module.css';

class Application extends Component {
    state = {
        inputActive: false,
        noteValue: this.props.note,
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            inputActive: !prevState.inputActive,
            noteValue: this.props.note,
        }));
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value,
        });
    }

    confirmEdit = e => {
        this.props.handleApplicationUpdate(this.props.id, this.state.noteValue);
        this.setState(prevState => ({
            inputActive: !prevState.inputActive,
        }));
    }

    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <span>
                            <Moment format="MMM DD, YYYY">
                                {this.props.date}
                            </Moment>
                        </span>
                    </div>
                    <div className="col-sm">
                        <div>
                            <div>
                                <span className="mr5">
                                    <i className={["fas fa-tint mr5", styles.water].join(' ')}/>
                                </span>
                                <span>thi sused to be event type</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        {this.state.inputActive &&
                            <input
                                type="text"
                                name="noteValue"
                                className={styles.input}
                                value={this.state.noteValue}
                                onChange={this.handleChange}
                            />
                        }
                        {!this.state.inputActive &&
                            <span>{this.props.note}</span>
                        }
                    </div>
                    <div className="col-1">
                        {this.state.inputActive &&
                            <React.Fragment>
                                <i onClick={this.toggleEdit}className="fas fa-times-circle"></i>
                                <i onClick={this.confirmEdit} className="fas fa-check-circle"></i>
                            </React.Fragment>
                        }
                        {!this.state.inputActive &&
                            <i onClick={this.toggleEdit} className="far fa-edit"></i>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Application;