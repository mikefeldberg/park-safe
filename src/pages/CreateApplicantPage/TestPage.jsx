import React, { Component } from 'react';

class TestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reasonUnemployment: false,
            reasonLowIncome: false,
            reasonRelationship: false,
            reasonHealth: false,
            reasonEviction: false,
            reasonOther: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        console.log('clickme');
        console.log(event.target.value);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log('target');
        console.log(target);
        console.log('name');
        console.log(name);
        console.log('value');
        console.log(value);

        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div>
                <h1>We testin now</h1>
                <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-primary active">
                        <input
                            id="reasonUnemployment"
                            autocomplete="off"
                            type="checkbox"
                            name="reasonUnemployment"
                            onChange={this.handleInputChange}
                            checked={this.state.reasonUnemployment}
                            active
                        />{' '}
                        Checked
                    </label>
                </div>
                <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-primary active">
                        <input
                            id="reasonUnemployment"
                            autocomplete="off"
                            type="checkbox"
                            name="reasonUnemployment"
                            onChange={this.handleInputChange}
                            checked={this.state.reasonUnemployment}
                        />{' '}
                        Checked
                    </label>
                </div>
                <div class="btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                        <input type="checkbox" checked autocomplete="off" /> Checked
                    </label>
                </div>
            </div>
        );
    }
}

export default TestPage;
