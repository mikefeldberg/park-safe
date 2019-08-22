import React, { Component } from 'react';
// import CreateApplicantPageData from './CreateApplicantPageData';

class TestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reasonUnemployment: false,
            reasonLowIncome: false,
            reasonRelationship: false,
            reasonDisability: false,
            reasonEviction: false,
            reasonOther: false,
            reasonOtherDescription: '',
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

            </div>
        );
    }
}

export default TestPage;
