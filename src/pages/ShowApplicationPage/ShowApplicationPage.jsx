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
                highPriority: json.highPriority,
                hasIncome: json.hasIncome,
                incomeDescription: json.incomeDescription,
                emergencyContactPhone: json.emergencyContactPhone,
                emergencyContactName: json.emergencyContactName,
                emergencyContactRelationship: json.emergencyContactRelationship,
                submitted: json.submitted
            });
        });

        // self.setState({ 
        //     plant: json.plant,
        //     nextWaterReminder: json.nextWaterReminder,
        //     nextFertilizeReminder: json.nextFertilizeReminder,
        //     nextRotateReminder: json.nextRotateReminder,
        // });


        // if (this.state.application) {
        //     self.setState({
        //         firstName: this.state.application.firstName,
        //         lastName: this.state.application.lastName,
        //         phone: this.state.application.phone,
        //         email: this.state.application.email,
        //         gender: this.state.application.gender,
        //         language: this.state.application.language,
        //         preferredLocation: this.state.application.preferredLocation,
        //         license: this.state.application.license,
        //         vehicle: this.state.application.vehicle,
        //         ageRange: this.state.application.ageRange,
        //         multipleOccupants: this.state.application.multipleOccupants,
        //         children: this.state.application.children,
        //         adults: this.state.application.adults,
        //         seniors: this.state.application.seniors,
        //         pets: this.state.application.pets,
        //         petsDogs: this.state.application.petsDogs,
        //         petsCats: this.state.application.petsCats,
        //         petsOther: this.state.application.petsOther,
        //         reasonUnemployment: this.state.application.reasonUnemployment,
        //         reasonLowIncome: this.state.application.reasonLowIncome,
        //         reasonRelationship: this.state.application.reasonRelationship,
        //         reasonDisability: this.state.application.reasonDisability,
        //         reasonEviction: this.state.application.reasonEviction,
        //         reasonOther: this.state.application.reasonOther,
        //         reasonOtherDescription: this.state.application.reasonOtherDescription,
        //         veteran: this.state.application.veteran,
        //         receivingSupport: this.state.application.receivingSupport,
        //         sourceOfSupport: this.state.application.sourceOfSupport,
        //         highPriority: this.state.application.highPriority,
        //         hasIncome: this.state.application.hasIncome,
        //         incomeDescription: this.state.application.incomeDescription,
        //         emergencyContactPhone: this.state.application.emergencyContactPhone,
        //         emergencyContactName: this.state.application.emergencyContactName,
        //         emergencyContactRelationship: this.state.application.emergencyContactRelationship,
        //         submitted: this.state.application.submitted,    
        //     });
        // }
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
                                        {this.state.firstName} {this.state.lastName}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Phone</th>
                                    <td>{this.state.phone}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>{this.state.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Age</th>
                                    <td>{this.state.ageRange}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Additional Occupants</th>
                                    <td>
                                        {this.state.children > 0 && (
                                            <span>Children (Under 18): {this.state.children}; </span>
                                        )}
                                        {this.state.adults > 0 && (
                                            <span>Adults (18-61): {this.state.adults}; </span>
                                        )}
                                        {this.state.seniors > 0 && (
                                            <span>Seniors (62+): {this.state.seniors}</span>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Pets</th>
                                    <td>
                                        {this.state.pets || <span>None</span>}
                                        {this.state.petsDogs > 0 && (
                                            <span>Dogs: {this.state.petsDogs}; </span>
                                        )}
                                        {this.state.petsCats > 0 && (
                                            <span>Cats: {this.state.petsCats}; </span>
                                        )}
                                        {this.state.petsOther > 0 && (
                                            <span>Other: {this.state.petsOther}</span>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Valid License</th>
                                    <td>{this.state.license === true || <span>No</span>}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Veteran</th>
                                    <td>{this.state.veteran}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Circumstances</th>
                                    <td>
                                        {this.state.reasonUnemployment && (
                                            <span>Unemployment; {this.state.reasonUnemployment}</span>
                                        )}
                                        {this.state.reasonLowIncome && (
                                            <span>Low Income; {this.state.reasonLowIncome}</span>
                                        )}
                                        {this.state.reasonRelationship && (
                                            <span>Relationship; {this.state.reasonRelationship}</span>
                                        )}
                                        {this.state.reasonDisability && (
                                            <span>Disability; {this.state.reasonDisability}</span>
                                        )}
                                        {this.state.reasonEviction && (
                                            <span>Eviction; {this.state.reasonEviction}</span>
                                        )}
                                        {this.state.reasonOther && (
                                            <span>Other: {this.state.reasonOtherDescription}</span>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Receiving Support</th>
                                    <td>
                                        {this.state.receivingSupport && (
                                            <span>{this.state.sourceOfSupport}</span>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Has Income</th>
                                    <td>
                                        {this.state.hasIncome && (
                                            <span>{this.state.incomeDescription}</span>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Emergency Contact</th>
                                    <td>
                                        {this.state.hasEmergencyContact && (
                                            <span>
                                                {this.state.emergencyContactName};
                                                {this.state.emergencyContactPhone};
                                                {this.state.emergencyContactRelationship}
                                            </span>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Submitted</th>
                                    <td>{this.state.submitted && <span>Yes</span>}</td>
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
