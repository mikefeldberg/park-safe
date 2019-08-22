import React, { Component } from 'react';
import DateSelector from '../../components/DateSelector/DateSelector';
// import NewApplicantForm from '../../components/NewApplicantForm/NewApplicantForm';
import { createApplicant } from '../../services/api';

class CreateApplicantPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            // language: '',
            // location: '',
            license: false,
            vehicle: false,
            age: '',
            multipleOccupants: false,
            children: 0,
            adults: 0,
            seniors: 0,
            pets: false,
            dogs: 0,
            cats: 0,
            other: 0,
            reasonUnemployment: false,
            reasonIncomeTooLow: false,
            reasonRelationship: false,
            reasonHealth: false,
            reasonOther: false,
            veteran: false,
            receivingSupport: false,
            sourceOfSupport: '',
            highPriority: false,
            durationHomeless: '',
            durationInCar: '',
            currentSituation: '',
            hasIncome: false,
            incomeDescription: '',
            emergencyContactPhone: '',
            emergencyContactName: '',
            emergencyContactRelationship: '',
    
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        console.log(event.target.value)
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label for="phone">Phone Number:</label>
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
                    <label for="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.handleInputChange}
                    />
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
                <label>Do you have a functioning vehicle?</label>
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
                <div className="mb20">
                    <label>How old are you?</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="age1"
                            value="17 or younger"
                            name="age"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="age1">
                            Under 18
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="age2"
                            value="18 to 24"
                            name="age"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="age2">
                            18 - 24
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="age3"
                            value="25 to 34"
                            name="age"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="age3">
                            25 - 34
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="age4"
                            value="35 to 44"
                            name="age"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="age4">
                            35 - 44
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="age5"
                            value="45 to 54"
                            name="age"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="age5">
                            45 - 54
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="age6"
                            value="55 to 61"
                            name="age"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="age6">
                            55 - 61
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="age7"
                            value="62 or older"
                            name="age"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="age7">
                            62 or older
                        </label>
                    </div>
                </div>
                <div className="mb30">
                    <label>Does anyone else live in your vehicle with you?</label>
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
                    <div className="form-group row mb20">
                        <label for="children" className="col-sm-2 col-form-label text-right">
                            Children (Under 18)
                        </label>
                        <div className="col-sm-1">
                            <input
                                type="number"
                                className="form-control"
                                id="children"
                                placeholder="0"
                                name="children"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <label for="adults" className="col-sm-2 col-form-label text-right">
                            Adults (Age 18 - 61)
                        </label>
                        <div className="col-sm-1">
                            <input
                                type="number"
                                className="form-control"
                                id="adults"
                                placeholder="0"
                                name="adults"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <label for="seniors" className="col-sm-2 col-form-label text-right">
                            Seniors (62 or older)
                        </label>
                        <div className="col-sm-1">
                            <input
                                type="number"
                                className="form-control"
                                id="seniors"
                                placeholder="0"
                                name="seniors"
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb30">
                    <label>Does any pets live in your vehicle with you?</label>
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
                    <div className="form-group row mb20">
                        <label for="dogs" className="col-sm-2 col-form-label text-right">
                            Dogs
                        </label>
                        <div className="col-sm-1">
                            <input
                                type="number"
                                className="form-control"
                                id="dogs"
                                placeholder="0"
                                name="dogs"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <label for="cats" className="col-sm-2 col-form-label text-right">
                            Cats
                        </label>
                        <div className="col-sm-1">
                            <input
                                type="number"
                                className="form-control"
                                id="cats"
                                placeholder="0"
                                name="cats"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <label for="other" className="col-sm-2 col-form-label text-right">
                            Other
                        </label>
                        <div className="col-sm-1">
                            <input
                                type="number"
                                className="form-control"
                                id="other"
                                placeholder="0"
                                name="other"
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb30">
                    <label>List the reasons for your current housing situation:</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="reasonUnemployment"
                            name="reasonUnemployment"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="reasonUnemployment">
                            Unemployment
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="reasonIncomeTooLow"
                            name="reasonIncomeTooLow"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="reasonIncomeTooLow">
                            Employed but insufficient income
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="reasonRelationship"
                            name="reasonRelationship"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="reasonRelationship">
                            Relationship
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="reasonHealth"
                            name="reasonHealth"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="reasonHealth">
                            Health complications
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="reasonOther"
                            name="reasonOther"
                            onChange={this.handleInputChange}
                        />
                        <label className="form-check-label" for="reasonOther">
                            Other
                        </label>
                    </div>
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
                <label>Are you a veteran?</label>
                <div className="form-check mb20">
                    <input type="checkbox" className="form-check-input" id="veteran" name="veteran" />
                    <label className="form-check-label" for="veteran">
                        Yes
                    </label>
                </div>
                <label>Are you receiving financial or housing support from any other organizations?</label>
                <div className="form-check mb20">
                    <input type="checkbox" className="form-check-input" id="receivingSupport" name="receivingSupport" />
                    <label className="form-check-label" for="receivingSupport">
                        Yes
                    </label>
                </div>
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
                <label>Do you currently have a source of income (not including outside support)?</label>
                <div className="form-check mb20">
                    <input type="checkbox" className="form-check-input" id="hasIncome" name="hasIncome" onChange={this.handleCheck} checked={this.state.hasIncome}/>
                    <label className="form-check-label" for="hasIncome">
                        Yes
                    </label>
                </div>
                <div className="form-group">
                    <label for="incomeDescription">What is your current source of income?</label>
                    <input
                        id="incomeDescription"
                        type="text"
                        className="form-control"
                        name="incomeDescription"
                        onChange={this.handleInputChange}
                    />
                </div>
            </form>
        );
    }
}



export default CreateApplicantPage;
