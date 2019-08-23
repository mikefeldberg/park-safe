import React, { Component } from 'react';
// import DateSelector from '../../components/DateSelector/DateSelector';
import { createApplication, createPartialApplication } from '../../services/api';
import CreateApplicationPageData from './CreateApplicationPageData';

class CreateApplicationPage extends Component {
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
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });

        this.flagHighPriority();
    };

    handleSubmit = e => {
        e.preventDefault();

        const self = this;
        createApplication(this.state).then(function() {
            self.props.history.push(`/index`);
        });
    };

    flagHighPriority = () => {
        if (
            this.state.ageRange === '17 or younger' ||
            this.state.ageRange === '18 to 24' ||
            this.state.ageRange === '62 or older' ||
            this.state.occupantsChildren > 0 ||
            this.state.occupantsSeniors > 0
        ) {
            this.setState({
                highPriority: true,
            });
        } else {
            this.setState({
                highPriority: false,
            });
        }
    };

    componentDidMount = () => {
        const self = this;

        document.addEventListener('mousedown', this.flagHighPriority);
        window.addEventListener('beforeunload', e => {
            e.preventDefault();
            if (this.state.phone) {
                createPartialApplication(self.state).then(function() {});
            }
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group questionSpacing">
                    <label for="nameFirst">First Name</label>
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        name="nameFirst"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="form-group questionSpacing">
                    <label for="nameLast">Last Name</label>
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        name="nameLast"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="form-group questionSpacing">
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
                <div className="form-group questionSpacing">
                    <label for="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="questionSpacing">
                    <label className="mr10">Gender</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="gender" value="M" />
                        <label className="form-check-label" for="inlineRadio1">
                            <span className="labelMarginLeft">M</span>
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="gender" value="F" />
                        <label className="form-check-label" for="inlineRadio2">
                            <span className="labelMarginLeft">F</span>
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="gender" value="O" />
                        <label className="form-check-label" for="inlineRadio2">
                            <span className="labelMarginLeft">Not listed/prefer not to disclose</span>
                        </label>
                    </div>
                </div>

                <div className="questionSpacing">
                    <label>Age</label>
                    <div className="btn-group-toggle btn-row row mb10" data-toggle="buttons">
                        <div className="col-1" />
                        <label
                            className={[
                                'btn btn-safepark col mp5',
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
                                'btn btn-safepark col mp5',
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
                                'btn btn-safepark col mp5',
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
                                'btn btn-safepark col mp5',
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
                                'btn btn-safepark col mp5',
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
                                'btn btn-safepark col mp5',
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
                <div className="questionSpacing">
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
                            <span className="labelMarginLeft">Yes</span>
                        </label>
                    </div>
                    {this.state.multipleOccupants && (
                        <div className="form-group questionSpacing mb20">
                            <div className="row mb5">
                                <label for="occupantsChildren" className="col col-form-label">
                                    Children (Under 18)
                                </label>
                                <div className="col-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="occupantsChildren"
                                        placeholder="0"
                                        name="occupantsChildren"
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb5">
                                <label for="occupantsAdults" className="col col-form-label">
                                    Adults (Age 18 - 61)
                                </label>
                                <div className="col-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="occupantsAdults"
                                        placeholder="0"
                                        name="occupantsAdults"
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb5">
                                <label for="occupantsSeniors" className="col col-form-label">
                                    Seniors (62 or older)
                                </label>
                                <div className="col-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="occupantsSeniors"
                                        placeholder="0"
                                        name="occupantsSeniors"
                                        onChange={this.handleInputChange}
                                    />
                                    {/* <hr /> */}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="questionSpacing">
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
                            <span className="labelMarginLeft">Yes</span>
                        </label>
                    </div>
                    {this.state.pets && (
                        <div className="form-group questionSpacing mb20">
                            <div className="row mb5">
                                <label for="petsDogs" className="col col-form-label">
                                    Dogs
                                </label>
                                <div className="col-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="petsDogs"
                                        placeholder="0"
                                        name="petsDogs"
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb5">
                                <label for="petsCats" className="col col-form-label">
                                    Cats
                                </label>
                                <div className="col-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="petsCats"
                                        placeholder="0"
                                        name="petsCats"
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb5">
                                <label for="petsOther" className="col col-form-label">
                                    Other
                                </label>
                                <div className="col-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="petsOther"
                                        placeholder="0"
                                        name="petsOther"
                                        onChange={this.handleInputChange}
                                    />
                                    {/* <hr /> */}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <label>Do you have a valid driver's license?</label>
                <div className="form-check questionSpacing">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="license"
                        name="license"
                        onChange={this.handleInputChange}
                    />
                    <label className="form-check-label" for="license">
                        <span className="labelMarginLeft">Yes</span>
                    </label>
                </div>
                <label>Is your car in working condition?</label>
                <div className="form-check questionSpacing">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="vehicle"
                        name="vehicle"
                        onChange={this.handleInputChange}
                    />
                    <label className="form-check-label" for="vehicle">
                        <span className="labelMarginLeft">Yes</span>
                    </label>
                </div>

                <div className="questionSpacing">
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
                            <span className="labelMarginLeft">Yes</span>
                        </label>
                    </div>
                    {this.state.hasEmergencyContact && (
                        <div className="form-group questionSpacing mb20">
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
                <label>Are you a veteran?</label>
                <div className="form-check questionSpacing">
                    <input type="checkbox" className="form-check-input" id="veteran" name="veteran" />
                    <label className="form-check-label" for="veteran">
                        <span className="labelMarginLeft">Yes</span>
                    </label>
                </div>
                <label>Do you currently have a source of income (not including outside support)?</label>
                <div className="form-check questionSpacing">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="hasIncome"
                        name="hasIncome"
                        onChange={this.handleInputChange}
                        checked={this.state.hasIncome}
                    />
                    <label className="form-check-label" for="hasIncome">
                        <span className="labelMarginLeft">Yes</span>
                    </label>
                </div>
                {this.state.hasIncome && (
                    <div className="form-group questionSpacing">
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

                <div className="questionSpacing">
                    <label>
                        What circumstances contributed to your current housing situation? (Please select all that
                        apply):
                    </label>
                    <div className="btn-group-toggle btn-row row mb10" data-toggle="buttons">
                        <div className="col-1" />
                        <label
                            className={[
                                'btn btn-safepark col mp5',
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
                                'btn btn-safepark col mp5',
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
                                'btn btn-safepark col mp5',
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
                                'btn btn-safepark col mp5',
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
                                'btn btn-safepark col mp5',
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
                                'btn btn-safepark col mp5',
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
                <div className="questionSpacing">
                    <label>How soon will you need safe parking?</label>
                    <div className="btn-group-toggle btn-row row mb10" data-toggle="buttons">
                        <div className="col-1" />
                        <label
                            className={[
                                'btn btn-safepark col mp5',
                                this.state.urgency === `${CreateApplicationPageData.urgency.urgency1.value}`
                                    ? 'active'
                                    : '',
                            ].join(' ')}
                        >
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.urgency}
                                name="urgency"
                                value={CreateApplicationPageData.urgency.urgency1.value}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.urgency.urgency1.label}
                        </label>
                        <label
                            className={[
                                'btn btn-safepark col mp5',
                                this.state.urgency === `${CreateApplicationPageData.urgency.urgency2.value}`
                                    ? 'active'
                                    : '',
                            ].join(' ')}
                        >
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.urgency}
                                name="urgency"
                                value={CreateApplicationPageData.urgency.urgency2.value}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.urgency.urgency2.label}
                        </label>
                        <div className="col-1" />
                    </div>
                    <div className="btn-group-toggle btn-row row mb10" data-toggle="buttons">
                        <div className="col-1" />
                        <label
                            className={[
                                'btn btn-safepark col mp5',
                                this.state.urgency === `${CreateApplicationPageData.urgency.urgency3.value}`
                                    ? 'active'
                                    : '',
                            ].join(' ')}
                        >
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.urgency}
                                name="urgency"
                                value={CreateApplicationPageData.urgency.urgency3.value}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.urgency.urgency3.label}
                        </label>
                        <label
                            className={[
                                'btn btn-safepark col mp5',
                                this.state.urgency === `${CreateApplicationPageData.urgency.urgency4.value}`
                                    ? 'active'
                                    : '',
                            ].join(' ')}
                        >
                            <input
                                id="option1"
                                type="radio"
                                autocomplete="off"
                                checked={this.state.urgency}
                                name="urgency"
                                value={CreateApplicationPageData.urgency.urgency4.value}
                                onChange={this.handleInputChange}
                            />
                            {CreateApplicationPageData.urgency.urgency4.label}
                        </label>
                        <div className="col-1" />
                    </div>
                </div>
                <div className="questionSpacing">
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
                            <span className="labelMarginLeft">Yes</span>
                        </label>
                    </div>
                </div>
                {this.state.receivingSupport && (
                    <div className="form-group questionSpacing">
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
                <div className="questionSpacing">
                    <label>Where would you prefer to park overnight?</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="location1"
                            value={CreateApplicationPageData.locations.location1.value}
                            name="preferredLocation"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="location1">
                            <span className="labelMarginLeft">
                                {CreateApplicationPageData.locations.location1.label}
                            </span>
                            <span className="secondaryText">
                                {' '}
                                {CreateApplicationPageData.locations.location1.sublabel}
                            </span>
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="location2"
                            value={CreateApplicationPageData.locations.location2.value}
                            name="preferredLocation"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="location2">
                            <span className="labelMarginLeft">
                                {CreateApplicationPageData.locations.location2.label}
                            </span>
                            <span className="secondaryText">
                                {' '}
                                {CreateApplicationPageData.locations.location2.sublabel}
                            </span>
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="location3"
                            value={CreateApplicationPageData.locations.location3.value}
                            name="preferredLocation"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="location3">
                            <span className="labelMarginLeft">
                                {CreateApplicationPageData.locations.location3.label}
                            </span>
                            <span className="secondaryText">
                                {' '}
                                {CreateApplicationPageData.locations.location3.sublabel}
                            </span>
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="location4"
                            value={CreateApplicationPageData.locations.location4.value}
                            name="preferredLocation"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="location4">
                            <span className="labelMarginLeft">
                                {CreateApplicationPageData.locations.location4.label}
                            </span>
                            <span className="secondaryText">
                                {' '}
                                {CreateApplicationPageData.locations.location4.sublabel}
                            </span>
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="location5"
                            value={CreateApplicationPageData.locations.location5.value}
                            name="preferredLocation"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="location5">
                            <span className="labelMarginLeft">
                                {CreateApplicationPageData.locations.location5.label}
                            </span>
                            <span className="secondaryText">
                                {' '}
                                {CreateApplicationPageData.locations.location5.sublabel}
                            </span>
                        </label>
                    </div>
                </div>
                <div className="text-center mb10">
                    <button className="btn btn-safepark-alt">SUBMIT</button>
                </div>
            </form>
        );
    }
}

export default CreateApplicationPage;
