import React, { Component } from 'react';

class TestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button1: false,
            button2: false,
            button3: false,
            age: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        console.log(event.target.value);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(target);
        console.log(name);
        console.log(value);

        this.setState({
            age: value,
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
