import React, { Component } from 'react';
import { getOneApplication } from '../../services/api';

class ShowApplicationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            gender: '',
            license: false,
            vehicle: false,
            ageRange: '',
            multipleOccupants: false,
            children: 0,
            adults: 0,
            seniors: 0,
            pets: false,
            petsDogs: 0,
            petsCats: 0,
            petsOther: 0,
            reasonUnemployment: false,
            reasonLowIncome: false,
            reasonRelationship: false,
            reasonDisability: false,
            reasonEviction: false,
            reasonOther: false,
            reasonOtherDescription: '',
            veteran: false,
            receivingSupport: false,
            sourceOfSupport: '',
            hasIncome: false,
            incomeDescription: '',
            hasEmergencyContact: false,
            emergencyContactPhone: '',
            emergencyContactName: '',
            emergencyContactRelationship: '',
            preferredLocation: '',
            highPriority: false,
            urgency: '',
            submitted: false,
        };
    }

    componentDidMount() {
        const applicationId = this.props.match.params.id;
        const self = this;

        getOneApplication(applicationId).then(json => {
            self.setState({
                application: json.application,
                firstName: json.firstName,
                lastName: json.lastName,
                phone: json.phone,
                email: json.email,
                gender: json.gender,
                language: json.language,
                preferredLocation: json.preferredLocation,
                license: json.license,
                vehicle: json.vehicle,
                ageRange: json.ageRange,
                multipleOccupants: json.multipleOccupants,
                children: json.children,
                adults: json.adults,
                seniors: json.seniors,
                pets: json.pets,
                petsDogs: json.petsDogs,
                petsCats: json.petsCats,
                petsOther: json.petsOther,
                reasonUnemployment: json.reasonUnemployment,
                reasonLowIncome: json.reasonLowIncome,
                reasonRelationship: json.reasonRelationship,
                reasonDisability: json.reasonDisability,
                reasonEviction: json.reasonEviction,
                reasonOther: json.reasonOther,
                reasonOtherDescription: json.reasonOtherDescription,
                veteran: json.veteran,
                receivingSupport: json.receivingSupport,
                sourceOfSupport: json.sourceOfSupport,
                urgency: json.urgency,
                highPriority: json.highPriority,
                hasIncome: json.hasIncome,
                incomeDescription: json.incomeDescription,
                emergencyContactPhone: json.emergencyContactPhone,
                emergencyContactName: json.emergencyContactName,
                emergencyContactRelationship: json.emergencyContactRelationship,
                submitted: json.submitted
            });
        });
    }

    handleInputChange = e => {
        console.log('handlechange in show')
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.state.application && (
                    <div>
                        <table class="table table-sm">
                            <tbody>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td>
                                        <input name="firstName" onChange={this.handleInputChange} value={this.state.firstName}></input>
                                        <input name="lastName" onChange={this.handleInputChange} value={this.state.lastName}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Phone</th>
                                    <td><input name="phone" onChange={this.handleInputChange} value={this.state.phone} pattern="\d*"></input></td>
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td><input name="email" onChange={this.handleInputChange} value={this.state.email}></input></td>
                                </tr>
                                <tr>
                                    <th scope="row">Age</th>
                                    <td><input name="ageRange" onChange={this.handleInputChange} value={this.state.ageRange}></input></td>
                                </tr>
                                <tr>
                                    <th scope="row">Additional Occupants</th>
                                    <td>
                                        <span>
                                            <span>Children (Under 18): <input name="petsDogs" onChange={this.handleInputChange} value={this.state.petsDogs}></input> </span>
                                            <span>Adults (18-61): <input name="petsCats" onChange={this.handleInputChange} value={this.state.petsCats}></input> </span>
                                            <span>Seniors (62+): <input name="petsOther" onChange={this.handleInputChange} value={this.state.petsOther}></input></span>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Pets</th>
                                    <td>
                                        <span>
                                            <span>Dogs: <input name="petsDogs" onChange={this.handleInputChange} value={this.state.petsDogs}></input> </span>
                                            <span>Cats: <input name="petsCats" onChange={this.handleInputChange} value={this.state.petsCats}></input> </span>
                                            <span>Other: <input name="petsOther" onChange={this.handleInputChange} value={this.state.petsOther}></input></span>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Valid License</th>
                                    <td><input name="license" onChange={this.handleInputChange} value={this.state.license}></input></td>
                                </tr>
                                <tr>
                                    <th scope="row">Veteran</th>
                                    <td><input name="veteran" onChange={this.handleInputChange} value={this.state.veteran}></input></td>
                                </tr>
                                <tr>
                                    <th scope="row">Circumstances</th>
                                    <td>
                                        <input name="reasonUnemployment" onChange={this.handleInputChange} value={this.state.reasonUnemployment}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Receiving Support</th>
                                    <td>
                                        <span><input name="receivingSupport" onChange={this.handleInputChange} value={this.state.receivingSupport}></input></span>
                                        <span>Source: <input name="sourceOfSupport" onChange={this.handleInputChange} value={this.state.sourceOfSupport}></input></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Has Income</th>
                                    <td>
                                        <span><input name="hasIncome" onChange={this.handleInputChange} value={this.state.hasIncome}></input></span>
                                        <span>Source: <input name="incomeDescription" onChange={this.handleInputChange} value={this.state.incomeDescription}></input></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Emergency Contact</th>
                                    <td>
                                        <span>
                                            Name: <input name="emergencyContactName" onChange={this.handleInputChange} value={this.state.emergencyContactName}></input>
                                            Phone: <input name="emergencyContactPhone" onChange={this.handleInputChange} value={this.state.emergencyContactPhone}></input>
                                            Relationship: <input name="emergencyContactRelationship" onChange={this.handleInputChange} value={this.state.emergencyContactRelationship}></input>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Urgency</th>
                                    <td>
                                        <span>
                                            <input name="urgency" onChange={this.handleInputChange} value={this.state.urgency}></input>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Preferred Location</th>
                                    <td>
                                        <span>
                                            <input name="preferredLocation" onChange={this.handleInputChange} value={this.state.preferredLocation}></input>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    // <div>
                    //     <table class="table table-sm">
                    //         <tbody>
                    //             <tr>
                    //                 <th scope="row">Name</th>
                    //                 <td>
                    //                     {this.state.firstName} {this.state.lastName}
                    //                 </td>
                    //             </tr>
                    //             <tr>
                    //                 <th scope="row">Phone</th>
                    //                 <td>{this.state.phone}</td>
                    //             </tr>
                    //             <tr>
                    //                 <th scope="row">Email</th>
                    //                 <td>{this.state.email}</td>
                    //             </tr>
                    //             <tr>
                    //                 <th scope="row">Age</th>
                    //                 <td>{this.state.ageRange}</td>
                    //             </tr>
                    //             <tr>
                    //                 <th scope="row">Additional Occupants</th>
                    //                 <td>
                    //                     {this.state.children > 0 && (
                    //                         <span>Children (Under 18): {this.state.children}; </span>
                    //                     )}
                    //                     {this.state.adults > 0 && (
                    //                         <span>Adults (18-61): {this.state.adults}; </span>
                    //                     )}
                    //                     {this.state.seniors > 0 && (
                    //                         <span>Seniors (62+): {this.state.seniors}</span>
                    //                     )}
                    //                 </td>
                    //             </tr>
                    //             <tr>
                    //                 <th scope="row">Pets</th>
                    //                 <td>
                    //                     {this.state.pets || <span>None</span>}
                    //                     {this.state.petsDogs > 0 && (
                    //                         <span>Dogs: {this.state.petsDogs}; </span>
                    //                     )}
                    //                     {this.state.petsCats > 0 && (
                    //                         <span>Cats: {this.state.petsCats}; </span>
                    //                     )}
                    //                     {this.state.petsOther > 0 && (
                    //                         <span>Other: {this.state.petsOther}</span>
                    //                     )}
                    //                 </td>
                    //             </tr>
                    //             <tr>
                    //                 <th scope="row">Valid License</th>
                    //                 <td>{this.state.license === true || <span>No</span>}</td>
                    //             </tr>
                    //             <tr>
                    //                 <th scope="row">Veteran</th>
                    //                 <td>{this.state.veteran}</td>
                    //             </tr>
                    //             <tr>
                    //                 <th scope="row">Circumstances</th>
                    //                 <td>
                    //                     {this.state.reasonUnemployment && (
                    //                         <span>Unemployment; {this.state.reasonUnemployment}</span>
                    //                     )}
                    //                     {this.state.reasonLowIncome && (
                    //                         <span>Low Income; {this.state.reasonLowIncome}</span>
                    //                     )}
                    //                     {this.state.reasonRelationship && (
                    //                         <span>Relationship; {this.state.reasonRelationship}</span>
                    //                     )}
                    //                     {this.state.reasonDisability && (
                    //                         <span>Disability; {this.state.reasonDisability}</span>
                    //                     )}
                    //                     {this.state.reasonEviction && (
                    //                         <span>Eviction; {this.state.reasonEviction}</span>
                    //                     )}
                    //                     {this.state.reasonOther && (
                    //                         <span>Other: {this.state.reasonOtherDescription}</span>
                    //                     )}
                    //                 </td>
                    //             </tr>
                    //             <tr>
                    //                 <th scope="row">Receiving Support</th>
                    //                 <td>
                    //                     {this.state.receivingSupport && (
                    //                         <span>{this.state.sourceOfSupport}</span>
                    //                     )}
                    //                 </td>
                    //             </tr>
                    //             <tr>
                    //                 <th scope="row">Has Income</th>
                    //                 <td>
                    //                     {this.state.hasIncome && (
                    //                         <span>{this.state.incomeDescription}</span>
                    //                     )}
                    //                 </td>
                    //             </tr>
                    //             <tr>
                    //                 <th scope="row">Emergency Contact</th>
                    //                 <td>
                    //                     {this.state.hasEmergencyContact && (
                    //                         <span>
                    //                             {this.state.emergencyContactName};
                    //                             {this.state.emergencyContactPhone};
                    //                             {this.state.emergencyContactRelationship}
                    //                         </span>
                    //                     )}
                    //                 </td>
                    //             </tr>
                    //             <tr>
                    //                 <th scope="row">Submitted</th>
                    //                 <td>{this.state.submitted && <span>Yes</span>}</td>
                    //             </tr>
                    //         </tbody>
                    //     </table>
                    // </div>
                )}
            </React.Fragment>
        );
    }
}

export default ShowApplicationPage;
