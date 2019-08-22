import React, { Component } from 'react';
// import DateSelector from '../../components/DateSelector/DateSelector';
// import NewApplicationForm from '../../components/NewApplicationForm/NewApplicationForm';
import { createApplication } from '../../services/api';
import CreateApplicationPageData from './CreateApplicationPageData';

class CreateApplicationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            gender: '',
            // language: '',
            // location: '',
            license: false,
            vehicle: false,
            ageRange: '',
            multipleOccupants: false,
            children: 0,
            adults: 0,
            seniors: 0,
            pets: false,
            dogs: 0,
            cats: 0,
            other: 0,
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
            durationHomeless: '',
            durationInCar: '',
            currentSituation: '',
            hasIncome: false,
            incomeDescription: '',
            hasEmergencyContact: false,
            emergencyContactPhone: '',
            emergencyContactName: '',
            emergencyContactRelationship: '',
            highPriority: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        console.log(event.target.value);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        const self = this;
        createApplication(this.state).then(function() {
            self.props.history.push(`/index`);
        });
    };

    // handleSubmit = e => {
    //     e.preventDefault();

    //     const self = this;
    //     createPlant(this.state).then(function() {
    //         self.props.history.push(`/index`);
    //     });
    // };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstName"
                        onChange={this.handleInputChange}
                    />
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label for="phone">Phone Number</label>
                    <input
                        id="phone"
                        type="text"
                        pattern="\d*"
                        className="form-control"
                        name="phone"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label>Gender</label>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label class="form-check-label" for="inlineRadio1">
                            1
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label class="form-check-label" for="inlineRadio2">
                            2
                        </label>
                    </div>
                </div>

                <div className="mb20">
                    <label>Age</label>
                    <div className="btn-group-toggle btn-row row mb20" data-toggle="buttons">
                        <div className="col-1" />
                        <label
                            className={[
                                'btn btn-secondary col mp5',
                                this.state.ageRange === `${CreateApplicationPageData.ageRanges.ageRange1.value}`
                                    ? 'active'
                                    : '',
                            ].join(' ')}
                        >
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.ageRange}
                                name="ageRange"
                                value={CreateApplicationPageData.ageRanges.ageRange1.value}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.ageRanges.ageRange1.label}
                        </label>
                        <label
                            className={[
                                'btn btn-secondary col mp5',
                                this.state.ageRange === `${CreateApplicationPageData.ageRanges.ageRange2.value}`
                                    ? 'active'
                                    : '',
                            ].join(' ')}
                        >
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.ageRange}
                                name="ageRange"
                                value={CreateApplicationPageData.ageRanges.ageRange2.value}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.ageRanges.ageRange2.label}
                        </label>
                        <label
                            className={[
                                'btn btn-secondary col mp5',
                                this.state.ageRange === `${CreateApplicationPageData.ageRanges.ageRange3.value}`
                                    ? 'active'
                                    : '',
                            ].join(' ')}
                        >
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.ageRange}
                                name="ageRange"
                                value={CreateApplicationPageData.ageRanges.ageRange3.value}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.ageRanges.ageRange3.label}
                        </label>
                        <div className="col-1" />
                    </div>
                    <div className="btn-group-toggle btn-row row" data-toggle="buttons">
                        <div className="col-1" />
                        <label
                            className={[
                                'btn btn-secondary col mp5',
                                this.state.ageRange === `${CreateApplicationPageData.ageRanges.ageRange4.value}`
                                    ? 'active'
                                    : '',
                            ].join(' ')}
                        >
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.ageRange}
                                name="ageRange"
                                value={CreateApplicationPageData.ageRanges.ageRange4.value}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.ageRanges.ageRange4.label}
                        </label>
                        <label
                            className={[
                                'btn btn-secondary col mp5',
                                this.state.ageRange === `${CreateApplicationPageData.ageRanges.ageRange5.value}`
                                    ? 'active'
                                    : '',
                            ].join(' ')}
                        >
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.ageRange}
                                name="ageRange"
                                value={CreateApplicationPageData.ageRanges.ageRange5.value}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.ageRanges.ageRange5.label}
                        </label>
                        <label
                            className={[
                                'btn btn-secondary col mp5',
                                this.state.ageRange === `${CreateApplicationPageData.ageRanges.ageRange6.value}`
                                    ? 'active'
                                    : '',
                            ].join(' ')}
                        >
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.ageRange}
                                name="ageRange"
                                value={CreateApplicationPageData.ageRanges.ageRange6.value}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.ageRanges.ageRange6.label}
                        </label>
                        <div className="col-1" />
                    </div>
                </div>
                <div className="mb30">
                    <label>Additional occupants in vehicle:</label>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="multipleOccupants"
                            name="multipleOccupants"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="multipleOccupants">
                            Yes
                        </label>
                    </div>
                    {this.state.multipleOccupants && (
                        <div className="form-group mb20">
                            <div className="row mb5">
                                <label for="children" className="col col-form-label">
                                    Children (Under 18)
                                </label>
                                <div className="col-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="children"
                                        placeholder="0"
                                        name="children"
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb5">
                                <label for="adults" className="col col-form-label">
                                    Adults (Age 18 - 61)
                                </label>
                                <div className="col-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="adults"
                                        placeholder="0"
                                        name="adults"
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb5">
                                <label for="seniors" className="col col-form-label">
                                    Seniors (62 or older)
                                </label>
                                <div className="col-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="seniors"
                                        placeholder="0"
                                        name="seniors"
                                        onChange={this.handleInputChange}
                                    />
                                    {/* <hr /> */}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="mb30">
                    <label>Pets in vehicle:</label>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="pets"
                            name="pets"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="pets">
                            Yes
                        </label>
                    </div>
                    {this.state.pets && (
                        <div className="form-group mb20">
                            <div className="row mb5">
                                <label for="dogs" className="col col-form-label">
                                    Dogs
                                </label>
                                <div className="col-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="dogs"
                                        placeholder="0"
                                        name="dogs"
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb5">
                                <label for="cats" className="col col-form-label">
                                    Cats
                                </label>
                                <div className="col-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="cats"
                                        placeholder="0"
                                        name="cats"
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb5">
                                <label for="other" className="col col-form-label">
                                    Other
                                </label>
                                <div className="col-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="other"
                                        placeholder="0"
                                        name="other"
                                        onChange={this.handleInputChange}
                                    />
                                    {/* <hr /> */}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <label>Do you have a valid driver's license?</label>
                <div className="form-check mb20">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="license"
                        name="license"
                        onChange={this.handleInputChange}
                    />
                    <label className="form-check-label" for="license">
                        Yes
                    </label>
                </div>
                <label>Is your car in working condition?</label>
                <div className="form-check mb20">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="vehicle"
                        name="vehicle"
                        onChange={this.handleInputChange}
                    />
                    <label className="form-check-label" for="vehicle">
                        Yes
                    </label>
                </div>

                <div className="mb30">
                    <label>Add emergency contact?</label>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="hasEmergencyContact"
                            name="hasEmergencyContact"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="hasEmergencyContact">
                            Yes
                        </label>
                    </div>
                    {this.state.hasEmergencyContact && (
                        <div className="form-group mb20">
                            <div className="row mb5">
                                <label for="emergencyContactPhone" className="col col-form-label">
                                    Phone
                                </label>
                                <div className="col-6">
                                    <input
                                        type="text"
                                        pattern="\d*"
                                        className="form-control"
                                        id="emergencyContactPhone"
                                        name="emergencyContactPhone"
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb5">
                                <label for="emergencyContactName" className="col col-form-label">
                                    Name
                                </label>
                                <div className="col-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="emergencyContactName"
                                        name="emergencyContactName"
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb5">
                                <label for="emergencyContactRelationship" className="col col-form-label">
                                    Relationship
                                </label>
                                <div className="col-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="emergencyContactRelationship"
                                        name="emergencyContactRelationship"
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mb30">
                    <label>
                        What circumstances contributed to your current housing situation? (Please select all that
                        apply):
                    </label>
                    <div className="btn-group-toggle btn-row row mb10" data-toggle="buttons">
                        <div className="col-1" />
                        <label
                            className={[
                                'btn btn-secondary col mp5',
                                this.state.reasonUnemployment === true ? 'active' : '',
                            ].join(' ')}
                        >
                            <input
                                id={CreateApplicationPageData.circumstances.circumstance1.nameAndId}
                                autocomplete="off"
                                type="checkbox"
                                name={CreateApplicationPageData.circumstances.circumstance1.nameAndId}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.circumstances.circumstance1.label}
                        </label>
                        <label
                            className={[
                                'btn btn-secondary col mp5',
                                this.state.reasonLowIncome === true ? 'active' : '',
                            ].join(' ')}
                        >
                            <input
                                id={CreateApplicationPageData.circumstances.circumstance2.nameAndId}
                                autocomplete="off"
                                type="checkbox"
                                name={CreateApplicationPageData.circumstances.circumstance2.nameAndId}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.circumstances.circumstance2.label}
                        </label>
                        <div className="col-1" />
                    </div>
                    <div className="btn-group-toggle btn-row row mb10" data-toggle="buttons">
                        <div className="col-1" />
                        <label
                            className={[
                                'btn btn-secondary col mp5',
                                this.state.reasonRelationship === true ? 'active' : '',
                            ].join(' ')}
                        >
                            <input
                                id={CreateApplicationPageData.circumstances.circumstance3.nameAndId}
                                autocomplete="off"
                                type="checkbox"
                                name={CreateApplicationPageData.circumstances.circumstance3.nameAndId}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.circumstances.circumstance3.label}
                        </label>
                        <label
                            className={[
                                'btn btn-secondary col mp5',
                                this.state.reasonDisability === true ? 'active' : '',
                            ].join(' ')}
                        >
                            <input
                                id={CreateApplicationPageData.circumstances.circumstance4.nameAndId}
                                autocomplete="off"
                                type="checkbox"
                                name={CreateApplicationPageData.circumstances.circumstance4.nameAndId}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.circumstances.circumstance4.label}
                        </label>
                        <div className="col-1" />
                    </div>
                    <div className="btn-group-toggle btn-row row mb10" data-toggle="buttons">
                        <div className="col-1" />
                        <label
                            className={[
                                'btn btn-secondary col mp5',
                                this.state.reasonEviction === true ? 'active' : '',
                            ].join(' ')}
                        >
                            <input
                                id={CreateApplicationPageData.circumstances.circumstance5.nameAndId}
                                autocomplete="off"
                                type="checkbox"
                                name={CreateApplicationPageData.circumstances.circumstance5.nameAndId}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.circumstances.circumstance5.label}
                        </label>
                        <label
                            className={[
                                'btn btn-secondary col mp5',
                                this.state.reasonOther === true ? 'active' : '',
                            ].join(' ')}
                        >
                            <input
                                id={CreateApplicationPageData.circumstances.circumstance6.nameAndId}
                                autocomplete="off"
                                type="checkbox"
                                name={CreateApplicationPageData.circumstances.circumstance6.nameAndId}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.circumstances.circumstance6.label}
                        </label>
                        <div className="col-1" />
                    </div>
                    {this.state.reasonOther && (
                        <React.Fragment>
                            <div className="row">
                                <div className="col-1" />
                                <label>If 'other', please explain:</label>
                                <div className="col-1" />
                            </div>
                            <div className="row">
                                <div className="col-1" />
                                <textarea
                                    className="form-control col"
                                    name="reasonOtherDescription"
                                    onChange={this.handleInputChange}
                                />
                                <div className="col-1" />
                            </div>
                        </React.Fragment>
                    )}
                </div>
                <div className="mb20">
                    <label>How long have you been without permanent housing?</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="durationHomeless1"
                            value="Less than one week"
                            name="durationHomeless"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="durationHomeless1">
                            Less than 1 week
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="durationHomeless2"
                            value="One week to one month"
                            name="durationHomeless"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="durationHomeless2">
                            1 week to 1 month
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="durationHomeless3"
                            value="One to three months"
                            name="durationHomeless"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="durationHomeless3">
                            1 to 3 months
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="durationHomeless4"
                            value="Three to six months"
                            name="durationHomeless"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="durationHomeless4">
                            3 to 6 months
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="durationHomeless5"
                            value="Longer than 6 months"
                            name="durationHomeless"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="durationHomeless5">
                            Over 6 months
                        </label>
                    </div>
                </div>
                {/* <hr /> */}
                <label>Are you a veteran?</label>
                <div className="form-check mb20">
                    <input type="checkbox" className="form-check-input" id="veteran" name="veteran" />
                    <label className="form-check-label" for="veteran">
                        Yes
                    </label>
                </div>
                <label>Are you receiving financial or housing support from any other organizations?</label>
                <div className="form-check mb20">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="receivingSupport"
                        name="receivingSupport"
                        onChange={this.handleInputChange}
                    />
                    <label className="form-check-label" for="receivingSupport">
                        Yes
                    </label>
                </div>
                {this.state.receivingSupport && (
                    <div className="form-group">
                        <label for="sourceOfSupport">
                            Which organizations are you currently receiving assistance from?
                        </label>
                        <input
                            id="sourceOfSupport"
                            type="text"
                            className="form-control"
                            name="sourceOfSupport"
                            onChange={this.handleInputChange}
                        />
                    </div>
                )}
                <label>Do you currently have a source of income (not including outside support?</label>
                <div className="form-check mb20">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="hasIncome"
                        name="hasIncome"
                        onChange={this.handleInputChange}
                        checked={this.state.hasIncome}
                    />
                    <label className="form-check-label" for="hasIncome">
                        Yes
                    </label>
                </div>
                {this.state.hasIncome && (
                    <div className="form-group">
                        <label for="incomeDescription">What is your current source of income?</label>
                        <textarea
                            id="incomeDescription"
                            type="text"
                            className="form-control"
                            name="incomeDescription"
                            onChange={this.handleInputChange}
                        />
                    </div>
                )}
                <div className="text-center">
                    <button className="btn btn-success">Submit Application</button>
                </div>
            </form>
        );
    }
}

export default CreateApplicationPage;
