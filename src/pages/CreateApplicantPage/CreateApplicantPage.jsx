import React, { Component } from 'react';
import DateSelector from '../../components/DateSelector/DateSelector';
// import NewApplicantForm from '../../components/NewApplicantForm/NewApplicantForm';
import { createApplicant } from '../../services/api';
import { Link } from 'react-router-dom';

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
    }

    handleChange = e => {
        this.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    toggleBoolean = e => {
        const name = e.target.name;
        this.setState(prevState => ({
            [name]: !prevState.name,
        }));
    }

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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.handleChange}
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
                            onChange={this.handleChange}
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
                        onChange={this.handleChange}
                    />
                </div> */}
                <label>Do you have a valid driver's license?</label>
                <div className="form-check mb20">
                    <input type="checkbox" class="form-check-input" id="license" />
                    <label class="form-check-label" for="license">Yes</label>
                </div>
                <label>Do you have a functioning vehicle?</label>
                <div className="form-check mb20">
                    <input type="checkbox" class="form-check-input" id="vehicle" />
                    <label class="form-check-label" for="vehicle">Yes</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="age" id="exampleRadios1" value="17 or younger" checked />
                    <label class="form-check-label" for="exampleRadios1">Under 18</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="age" id="exampleRadios1" value="18 to 24" checked />
                    <label class="form-check-label" for="exampleRadios1">18 - 24</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="age" id="exampleRadios1" value=" to y" checked />
                    <label class="form-check-label" for="exampleRadios1">25 - 34</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="age" id="exampleRadios1" value=" to y" checked />
                    <label class="form-check-label" for="exampleRadios1">35 - 44</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="age" id="exampleRadios1" value=" to y" checked />
                    <label class="form-check-label" for="exampleRadios1">45 - 54</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="age" id="exampleRadios1" value=" to y" checked />
                    <label class="form-check-label" for="exampleRadios1">55 - 62</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="age" id="exampleRadios1" value=" to y" checked />
                    <label class="form-check-label" for="exampleRadios1">62 or older</label>
                </div>
                <div className="form-group">
                    <div>
                        <label for="light">Light:</label>
                        <select
                            id="light"
                            className="form-control"
                            name="light"
                            onChange={this.handleChange}
                        >
                            <option value="Direct Sun">Direct Sun</option>
                            <option value="Indirect/Diffuse Sun">Indirect/Diffuse Sun</option>
                            <option value="Shade">Shade</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        <label for="skillLevel">Skill Level:</label>
                        <select
                            id="skillLevel"
                            className="form-control"
                            name="skillLevel"
                            onChange={this.handleChange}
                        >
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Expert">Expert</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        <label for="waterInterval">Water every:</label>
                        <select
                            id="waterInterval"
                            className="form-control"
                            name="waterInterval"
                            onChange={this.handleChange}
                            defaultValue="14"
                        >
                            <option value="0">Don't water</option>
                            <option value="7">1 week</option>
                            {
                                [2, 3, 4, 5, 6].map(val =>
                                    <option value={val * 7}>{val} weeks</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        <label for="fertilizeInterval">Fertilize every:</label>
                        <select
                            id="fertilizeInterval"
                            className="form-control"
                            name="fertilizeInterval"
                            onChange={this.handleChange}
                            defaultValue="14"
                        >
                            <option value="0">Don't fertilize</option>
                            <option value="7">1 week</option>
                            {
                                [2, 3, 4, 5, 6].map(val =>
                                    <option value={val * 7}>{val} weeks</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        <label for="rotateInterval">Rotate every:</label>
                        <select
                            id="rotateInterval"
                            className="form-control"
                            name="rotateInterval"
                            onChange={this.handleChange}
                            defaultValue="7"
                        >
                            <option value="0">Don't rotate</option>
                            <option value="7">1 week</option>
                            {
                                [2, 3, 4, 5, 6].map(val =>
                                    <option value={val * 7}>{val} weeks</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        <label for="firstReminder">Start reminding me on:</label>
                        <DateSelector
                            firstReminder={this.state.firstReminder}
                            handleFirstReminder={this.handleFirstReminder}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        <label for="imageUrl">Image URL:</label>
                        <input
                            id="imageUrl"
                            type="text"
                            className="form-control"
                            name="imageUrl"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        <label for="note">Note:</label>
                        <textarea
                            id="note"
                            className="form-control"
                            name="note"
                            onChange={this.handleChange}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12 text-center">
                        <button className="btn btn-default">Save Applicant</button>
                        &nbsp;&nbsp;
                        <Link to="/">Cancel</Link>
                    </div>
                </div>
            </form>
            // <form>
            //     <div class="form-group row">
            //         <label for="inputName" class="col-sm-2 col-form-label">Name:</label>
            //         <div class="col-sm-10">
            //         <input type="text" class="form-control" id="inputName" placeholder="Name" />
            //         </div>
            //     </div>
            //     <div class="form-group row">
            //         <label for="inputPhone3" class="col-sm-2 col-form-label">Phone:</label>
            //         <div class="col-sm-10">
            //         <input type="text" class="form-control" id="inputPhone3" placeholder="Phone" pattern="\d*"/>
            //         </div>
            //     </div>
            //     <div class="form-group row">
            //         <label for="inputEmail3" class="col-sm-2 col-form-label">Email:</label>
            //         <div class="col-sm-10">
            //         <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
            //         </div>
            //     </div>
            //     <div class="form-group row">
            //         <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
            //         <div class="col-sm-10">
            //         <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
            //         </div>
            //     </div>
            //     <fieldset class="form-group">
            //         <div class="row">
            //         <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
            //         <div class="col-sm-10">
            //             <div class="form-check">
            //             <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
            //             <label class="form-check-label" for="gridRadios1">
            //                 First radio
            //             </label>
            //             </div>
            //             <div class="form-check">
            //             <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
            //             <label class="form-check-label" for="gridRadios2">
            //                 Second radio
            //             </label>
            //             </div>
            //             <div class="form-check disabled">
            //             <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
            //             <label class="form-check-label" for="gridRadios3">
            //                 Third disabled radio
            //             </label>
            //             </div>
            //         </div>
            //         </div>
            //     </fieldset>
            //     <div class="form-group row">
            //         <div class="col-sm-2">Do you have a valid driver's license?</div>
            //         <div class="col-sm-10">
            //         <div class="form-check">
            //             <input class="form-check-input" type="checkbox" id="gridCheck1" />
            //             <label class="form-check-label" for="gridCheck1">
            //             Yes
            //             </label>
            //         </div>
            //         </div>
            //     </div>
            //     <div class="form-group row">
            //         <div class="col-sm-2">Do you have a functioning vehicle?</div>
            //         <div class="col-sm-10">
            //         <div class="form-check">
            //             <input class="form-check-input" type="checkbox" id="gridCheck1" />
            //             <label class="form-check-label" for="gridCheck1">
            //             Yes
            //             </label>
            //         </div>
            //         </div>
            //     </div>
            //     <div class="form-group row">
            //         <div class="col-sm-10">
            //         <button type="submit" class="btn btn-primary">Sign in</button>
            //         </div>
            //     </div>
            // </form>
        );
    }
}

export default CreateApplicantPage;
