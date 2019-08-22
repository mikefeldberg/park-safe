import React, { Component } from 'react';
import DateSelector from '../../components/DateSelector/DateSelector';
// import NewApplicantForm from '../../components/NewApplicantForm/NewApplicantForm';
import { createApplicant } from '../../services/api';
import { Link } from 'react-router-dom';

class CreateApplicantPage extends Component {
    state = {
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

    handleCheck = e => {
        console.log('handling check')
        let value = e.target.checked;
        this.setState({
            [e.target.name]: e.target.value,
        });
        // this.setState({[e.target.name]: !this.state.checked});
    }

    toggleBoolean = e => {
        console.log('toggling boolean')
        console.log(e.target.name)
        console.log(e.target.value)
        const name = e.target.name;
        this.setState(prevState => ({
            [name]: !prevState.name,
        }));
    }

    handleTextChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    // handleBooleanChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // toggleBoolean(e) {
    //     const self = this;
    //     let value = null
    //     console.log(e.target.name)
    //     if (e.target.type === 'checkbox') {
    //         console.log(e.target.checked)
    //         value = e.target.checked
    //     } else {
    //         console.log(e.target.value)
    //         value = e.target.value
    //     }
    //     // const target = e.target;
    //     // const value = target.type === 'checkbox' ? target.checked : target.value;
    //     // const name = target.name;

    //     self.setState({
    //         [e.target.name]: value,
    //     });
    // }



    handleSubmit = e => {
        e.preventDefault();

        const self = this;
        createApplicant(this.state).then(function() {
            self.props.history.push(`/index`);
        });
    };

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={this.handleTextChange}
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
                        onChange={this.handleTextChange}
                    />
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.handleTextChange}
                    />
                </div>
                {/* <div className="form-group">
                    <div>
                        <label for="language">Preferred Language:</label>
                        <input
                            id="language"
                            type="text"
                            className="form-control"
                            name="language"
                            onChange={this.handleTextChange}
                        />
                    </div>
                </div> */}
                {/* <div className="form-group">
                    <label for="language">Preferred Language:</label>
                    <input
                        id="language"
                        type="text"
                        className="form-control"
                        name="language"
                        onChange={this.handleTextChange}
                    />
                </div> */}
                <label>Do you have a valid driver's license?</label>
                <div className="form-check mb20">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="license"
                        onChange={this.toggleBoolean}
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
                        onChange={this.toggleBoolean}
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
                            name="age"
                            id="age1"
                            value="17 or younger"
                            checked
                            onChange={this.handleTextChange}
                        />
                        <label className="form-check-label" for="age1">
                            Under 18
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="age"
                            id="age2"
                            value="18 to 24"
                            checked
                            onChange={this.handleTextChange}
                        />
                        <label className="form-check-label" for="age2">
                            18 - 24
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="age"
                            id="age3"
                            value="25 to 34"
                            checked
                            onChange={this.handleTextChange}
                        />
                        <label className="form-check-label" for="age3">
                            25 - 34
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="age"
                            id="age4"
                            value="35 to 44"
                            checked
                            onChange={this.handleTextChange}
                        />
                        <label className="form-check-label" for="age4">
                            35 - 44
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="age"
                            id="age5"
                            value="45 to 54"
                            checked
                            onChange={this.handleTextChange}
                        />
                        <label className="form-check-label" for="age5">
                            45 - 54
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="age"
                            id="age6"
                            value="55 to 61"
                            checked
                            onChange={this.handleTextChange}
                        />
                        <label className="form-check-label" for="age6">
                            55 - 61
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="age"
                            id="age7"
                            value="62 or older"
                            checked
                            onChange={this.handleTextChange}
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
                            name="multipleOccupants"
                            id="multipleOccupants"
                            onChange={this.toggleBoolean}
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
                                name="children"
                                id="children"
                                placeholder="0"
                                onChange={this.handleTextChange}
                            />
                        </div>
                        <label for="adults" className="col-sm-2 col-form-label text-right">
                            Adults (Age 18 - 61)
                        </label>
                        <div className="col-sm-1">
                            <input
                                type="number"
                                className="form-control"
                                name="adults"
                                id="adults"
                                placeholder="0"
                                onChange={this.handleTextChange}
                            />
                        </div>
                        <label for="seniors" className="col-sm-2 col-form-label text-right">
                            Seniors (62 or older)
                        </label>
                        <div className="col-sm-1">
                            <input
                                type="number"
                                className="form-control"
                                name="seniors"
                                id="seniors"
                                placeholder="0"
                                onChange={this.handleTextChange}
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
                            onChange={this.toggleBoolean}
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
                                name="dogs"
                                id="dogs"
                                placeholder="0"
                                onChange={this.handleTextChange}
                            />
                        </div>
                        <label for="cats" className="col-sm-2 col-form-label text-right">
                            Cats
                        </label>
                        <div className="col-sm-1">
                            <input
                                type="number"
                                className="form-control"
                                name="cats"
                                id="cats"
                                placeholder="0"
                                onChange={this.handleTextChange}
                            />
                        </div>
                        <label for="other" className="col-sm-2 col-form-label text-right">
                            Other
                        </label>
                        <div className="col-sm-1">
                            <input
                                type="number"
                                className="form-control"
                                name="other"
                                id="other"
                                placeholder="0"
                                onChange={this.handleTextChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb30">
                    <label>List the reasons for your current housing situation:</label>
                    <div className="form-check">
                        <input
                            name="reasonUnemployment"
                            className="form-check-input"
                            type="checkbox"
                            id="reasonUnemployment"
                            onChange={this.toggleBoolean}
                        />
                        <label className="form-check-label" for="reasonUnemployment">
                            Unemployment
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            name="reasonIncomeTooLow"
                            className="form-check-input"
                            type="checkbox"
                            id="reasonIncomeTooLow"
                            onChange={this.toggleBoolean}
                        />
                        <label className="form-check-label" for="reasonIncomeTooLow">
                            Employed but insufficient income
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            name="reasonRelationship"
                            className="form-check-input"
                            type="checkbox"
                            id="reasonRelationship"
                            onChange={this.toggleBoolean}
                        />
                        <label className="form-check-label" for="reasonRelationship">
                            Relationship
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            name="reasonHealth"
                            className="form-check-input"
                            type="checkbox"
                            id="reasonHealth"
                            onChange={this.toggleBoolean}
                        />
                        <label className="form-check-label" for="reasonHealth">
                            Health complications
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            name="reasonOther"
                            className="form-check-input"
                            type="checkbox"
                            id="reasonOther"
                            onChange={this.toggleBoolean}
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
                            name="age"
                            id="durationHomeless1"
                            value="Less than one week"
                            checked
                            onChange={this.toggleBoolean}
                        />
                        <label className="form-check-label" for="durationHomeless1">
                            Less than 1 week
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="age"
                            id="durationHomeless2"
                            value="One week to one month"
                            checked
                            onChange={this.toggleBoolean}
                        />
                        <label className="form-check-label" for="durationHomeless2">
                            1 week to 1 month
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="age"
                            id="durationHomeless3"
                            value="One to three months"
                            checked
                            onChange={this.toggleBoolean}
                        />
                        <label className="form-check-label" for="durationHomeless3">
                            1 to 3 months
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="age"
                            id="durationHomeless4"
                            value="Three to six months"
                            checked
                            onChange={this.toggleBoolean}
                        />
                        <label className="form-check-label" for="durationHomeless4">
                            3 to 6 months
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="age"
                            id="durationHomeless5"
                            value="Longer than 6 months"
                            checked
                            onChange={this.toggleBoolean}
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
                        onChange={this.handleTextChange}
                    />
                </div>
                <label>Do you currently have a source of income (not including outside support)?</label>
                <div className="form-check mb20">
                    <input type="checkbox" className="form-check-input" id="receivingSupport" />
                    <label className="form-check-label" for="receivingSupport">
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
                        onChange={this.handleTextChange}
                    />
                </div>
            </form>
        );
    }
}

export default CreateApplicantPage;
