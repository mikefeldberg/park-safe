import React, { Component } from 'react';
import { getOneApplication, updateApplication } from '../../services/api';
import styles from './ShowApplicationPage.module.css';

class ShowApplicationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageRange: '',
            email: '',
            emergencyContactName: '',
            emergencyContactPhone: '',
            emergencyContactRelationship: '',
            gender: '',
            hasEmergencyContact: false,
            hasIncome: false,
            highPriority: false,
            incomeDescription: '',
            license: false,
            multipleOccupants: false,
            nameFirst: '',
            nameLast: '',
            occupantsAdults: 0,
            occupantsChildren: 0,
            occupantsSeniors: 0,
            pets: false,
            petsCats: 0,
            petsDogs: 0,
            petsOther: 0,
            phone: '',
            preferredLocation: '',
            reasonDisability: false,
            reasonEviction: false,
            reasonLowIncome: false,
            reasonOther: false,
            reasonOtherDescription: '',
            reasonRelationship: false,
            reasonUnemployment: false,
            receivingSupport: false,
            sourceOfSupport: '',
            submitted: false,
            urgency: '',
            vehicle: false,
            veteran: false,
            rw: 'r'
        };
    }

    componentDidMount() {
        const applicationId = this.props.match.params.id;
        const self = this;

        getOneApplication(applicationId).then(json => {
            self.setState({
                application: json.application,
                ageRange: json.ageRange,
                email: json.email,
                emergencyContactName: json.emergencyContactName,
                emergencyContactPhone: json.emergencyContactPhone,
                emergencyContactRelationship: json.emergencyContactRelationship,
                gender: json.gender,
                hasIncome: json.hasIncome,
                highPriority: json.highPriority,
                incomeDescription: json.incomeDescription,
                language: json.language,
                license: json.license,
                multipleOccupants: json.multipleOccupants,
                nameFirst: json.nameFirst,
                nameLast: json.nameLast,
                occupantsAdults: json.occupantsAdults,
                occupantsChildren: json.occupantsChildren,
                occupantsSeniors: json.occupantsSeniors,
                pets: json.pets,
                petsCats: json.petsCats,
                petsDogs: json.petsDogs,
                petsOther: json.petsOther,
                phone: json.phone,
                preferredLocation: json.preferredLocation,
                reasonDisability: json.reasonDisability,
                reasonEviction: json.reasonEviction,
                reasonLowIncome: json.reasonLowIncome,
                reasonOther: json.reasonOther,
                reasonOtherDescription: json.reasonOtherDescription,
                reasonRelationship: json.reasonRelationship,
                reasonUnemployment: json.reasonUnemployment,
                receivingSupport: json.receivingSupport,
                sourceOfSupport: json.sourceOfSupport,
                submitted: json.submitted,
                urgency: json.urgency,
                vehicle: json.vehicle,
                veteran: json.veteran,
            });
        });
    }

    toggleEdit = () => {
        if (this.state.rw === 'w') {
            this.setState({
                rw: 'r',
            });
        } else if (this.state.rw === 'r') {
            this.setState({
                rw: 'w',
            });
        }
    }

    handleInputChange = e => {
        console.log('handlechange in show');
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
                        <i onClick={this.toggleEdit} className="far fa-edit" />
                        {this.state.rw === 'w' && 
                            <span>
                                <span> | </span>
                                <i class="far fa-save"></i>
                            </span>
                        }
                        <span> | </span>
                        {this.state.highPriority && (
                            <i className={['fas fa-exclamation-circle', styles.exclaim].join(' ')} />
                        )}

                        {this.state.rw === 'w' && (
                            <table className="table table-sm">
                                <tbody>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td>
                                            <input
                                                name="nameFirst"
                                                onChange={this.handleInputChange}
                                                value={this.state.nameFirst}
                                            />
                                            <input
                                                name="nameLast"
                                                onChange={this.handleInputChange}
                                                value={this.state.nameLast}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Phone</th>
                                        <td>
                                            <input
                                                name="phone"
                                                onChange={this.handleInputChange}
                                                value={this.state.phone}
                                                pattern="\d*"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email</th>
                                        <td>
                                            <input
                                                name="email"
                                                onChange={this.handleInputChange}
                                                value={this.state.email}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Age</th>
                                        <td>
                                            <input
                                                name="ageRange"
                                                onChange={this.handleInputChange}
                                                value={this.state.ageRange}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Additional Occupants</th>
                                        <td>
                                            <span>
                                                <span>
                                                    Children (Under 18):{' '}
                                                    <input
                                                        name="petsDogs"
                                                        onChange={this.handleInputChange}
                                                        value={this.state.petsDogs}
                                                    />{' '}
                                                </span>
                                                <span>
                                                    Adults (18-61):{' '}
                                                    <input
                                                        name="petsCats"
                                                        onChange={this.handleInputChange}
                                                        value={this.state.petsCats}
                                                    />{' '}
                                                </span>
                                                <span>
                                                    Seniors (62+):{' '}
                                                    <input
                                                        name="petsOther"
                                                        onChange={this.handleInputChange}
                                                        value={this.state.petsOther}
                                                    />
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Pets</th>
                                        <td>
                                            <span>
                                                <span>
                                                    Dogs:{' '}
                                                    <input
                                                        name="petsDogs"
                                                        onChange={this.handleInputChange}
                                                        value={this.state.petsDogs}
                                                    />{' '}
                                                </span>
                                                <span>
                                                    Cats:{' '}
                                                    <input
                                                        name="petsCats"
                                                        onChange={this.handleInputChange}
                                                        value={this.state.petsCats}
                                                    />{' '}
                                                </span>
                                                <span>
                                                    Other:{' '}
                                                    <input
                                                        name="petsOther"
                                                        onChange={this.handleInputChange}
                                                        value={this.state.petsOther}
                                                    />
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Valid License</th>
                                        <td>
                                            <input
                                                name="license"
                                                onChange={this.handleInputChange}
                                                value={this.state.license}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Veteran</th>
                                        <td>
                                            <input
                                                name="veteran"
                                                onChange={this.handleInputChange}
                                                value={this.state.veteran}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Circumstances</th>
                                        <td>
                                            <input
                                                name="reasonUnemployment"
                                                onChange={this.handleInputChange}
                                                value={this.state.reasonUnemployment}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Receiving Support</th>
                                        <td>
                                            <span>
                                                <input
                                                    name="receivingSupport"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.receivingSupport}
                                                />
                                            </span>
                                            <span>
                                                Source:{' '}
                                                <input
                                                    name="sourceOfSupport"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.sourceOfSupport}
                                                />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Has Income</th>
                                        <td>
                                            <span>
                                                <input
                                                    name="hasIncome"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.hasIncome}
                                                />
                                            </span>
                                            <span>
                                                Source:{' '}
                                                <input
                                                    name="incomeDescription"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.incomeDescription}
                                                />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Emergency Contact</th>
                                        <td>
                                            <span>
                                                Name:{' '}
                                                <input
                                                    name="emergencyContactName"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.emergencyContactName}
                                                />
                                                Phone:{' '}
                                                <input
                                                    name="emergencyContactPhone"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.emergencyContactPhone}
                                                />
                                                Relationship:{' '}
                                                <input
                                                    name="emergencyContactRelationship"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.emergencyContactRelationship}
                                                />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Urgency</th>
                                        <td>
                                            <span>
                                                <input
                                                    name="urgency"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.urgency}
                                                />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Preferred Location</th>
                                        <td>
                                            <span>
                                                <input
                                                    name="preferredLocation"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.preferredLocation}
                                                />
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                        {this.state.rw === 'r' && (
                            <table className="table table-sm">
                                <tbody>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td>
                                            {this.state.nameFirst} {this.state.nameLast}
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
                                            {this.state.occupantsChildren > 0 && (
                                                <span>Children (Under 18): {this.state.occupantsChildren}; </span>
                                            )}
                                            {this.state.occupantsAdults > 0 && (
                                                <span>Adults (18-61): {this.state.occupantsAdults}; </span>
                                            )}
                                            {this.state.seniors > 0 && <span>Seniors (62+): {this.state.seniors}</span>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Pets</th>
                                        <td>
                                            {this.state.pets || <span>None</span>}
                                            {this.state.petsDogs > 0 && <span>Dogs: {this.state.petsDogs}; </span>}
                                            {this.state.petsCats > 0 && <span>Cats: {this.state.petsCats}; </span>}
                                            {this.state.petsOther > 0 && <span>Other: {this.state.petsOther}</span>}
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
                                            {this.state.receivingSupport && <span>{this.state.sourceOfSupport}</span>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Has Income</th>
                                        <td>{this.state.hasIncome && <span>{this.state.incomeDescription}</span>}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Emergency Contact</th>
                                        <td>
                                            {this.state.hasEmergencyContact && (
                                                <span>
                                                    {this.state.emergencyContactName};{this.state.emergencyContactPhone}
                                                    ;{this.state.emergencyContactRelationship}
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
                        )}
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default ShowApplicationPage;
