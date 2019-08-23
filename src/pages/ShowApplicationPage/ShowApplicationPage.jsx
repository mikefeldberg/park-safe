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
        console.log(this.state.application);
        return (
            <React.Fragment>
                {this.state.application && (
                    <div>
                        <table class="table table-sm">
                            <tbody>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td>
                                        {this.state.application.firstName} {this.state.application.lastName}
                                    </td>
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
                                    <td>
                                    {this.state.application.children > 0 && <span>Children (Under 18): {this.state.application.children}; </span>}
                                    {this.state.application.adults > 0 && <span>Adults (18-61): {this.state.application.adults}; </span>}
                                    {this.state.application.seniors > 0 && <span>Seniors (62+): {this.state.application.seniors}</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Pets</th>
                                    <td>
                                    {this.state.application.pets || <span>None</span>}
                                    {this.state.application.petsDogs > 0 && <span>Dogs: {this.state.application.petsDogs}; </span>}
                                    {this.state.application.petsCats > 0 && <span>Cats: {this.state.application.petsCats}; </span>}
                                    {this.state.application.petsOther > 0 && <span>Other: {this.state.application.petsOther}</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Valid License</th>
                                    <td>{this.state.application.license === true || <span>No</span>}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Veteran</th>
                                    <td>{this.state.application.veteran}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Circumstances</th>
                                    <td>
                                        {this.state.application.reasonUnemployment && <span>Unemployment; {this.state.application.reasonUnemployment}</span>}
                                        {this.state.application.reasonLowIncome && <span>Low Income; {this.state.application.reasonLowIncome}</span>}
                                        {this.state.application.reasonRelationship && <span>Relationship; {this.state.application.reasonRelationship}</span>}
                                        {this.state.application.reasonDisability && <span>Disability; {this.state.application.reasonDisability}</span>}
                                        {this.state.application.reasonEviction && <span>Eviction; {this.state.application.reasonEviction}</span>}
                                        {this.state.application.reasonOther && <span>Other: {this.state.application.reasonOtherDescription}</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Receiving Support</th>
                                    <td>
                                        {this.state.application.receivingSupport && <span>{this.state.application.sourceOfSupport}</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Has Income</th>
                                    <td>
                                        {this.state.application.hasIncome && <span>{this.state.application.incomeDescription}</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Emergency Contact</th>
                                    <td>
                                        {this.state.application.hasEmergencyContact && 
                                            <span>
                                                {this.state.application.emergencyContactName};
                                                {this.state.application.emergencyContactPhone};
                                                {this.state.application.emergencyContactRelationship}
                                            </span>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Submitted</th>
                                    <td>
                                        {this.state.application.submitted && <span>Yes</span>}
                                    </td>
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
