import React, { Component } from 'react';
import { CSVLink } from 'react-csv';

const csvData = [
    ['firstname', 'lastname', 'email'],
    ['John', 'Doe', 'john.doe@xyz.com'],
    ['Jane', 'Doe', 'jane.doe@xyz.com'],
];

class ApplicantsPage extends Component {
    render() {
        return (
            <div>
                <CSVLink data={csvData}>Download Applications</CSVLink>
            </div>
        );
    }
}
export default ApplicantsPage;
