import React, { Component } from 'react';
import { getOneApplication } from '../../services/api';

class ShowApplicationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const applicationId = this.props.match.params.id;
        const self = this;

        getOneApplication(applicationId).then(json => {
            self.setState({
                application: json,
            });
        });
    }

    render() {
        console.log(this.state.application)
        return (
            <React.Fragment>
                {this.state.application && (
                    <div>
                        <table class="table table-sm">
                            <tbody>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td>{this.state.application.firstName} {this.state.application.lastName}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Phone</th>
                                    <td>{this.state.application.phone}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>{this.state.application.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Age</th>
                                    <td>{this.state.application.ageRange}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Additional Occupants</th>
                                    {this.state.application.children > 0 && 
                                        <td>{this.state.application.children}</td>
                                    }
                                    
                                    {this.state.application.adults > 0 && 
                                        <td>{this.state.application.adults}</td>
                                    }
                                    
                                    {this.state.application.seniors > 0 && 
                                        <td>{this.state.application.seniors}</td>
                                    }
                                </tr>
                                <tr>
                                    <th scope="row">Pets</th>
                                    {this.state.application.petsDogs > 0 && 
                                        <td>{this.state.application.petsDogs}</td>
                                    }
                                    
                                    {this.state.application.petsCats > 0 && 
                                        <td>{this.state.application.petsCats}</td>
                                    }
                                    
                                    {this.state.application.petsOther > 0 && 
                                        <td>{this.state.application.petsOther}</td>
                                    }
                                </tr>

                            </tbody>
                        </table>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default ShowApplicationPage;
