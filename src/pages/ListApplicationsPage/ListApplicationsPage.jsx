import React, { Component } from 'react';
import Applications from '../../components/Applications/Applications'

class ListApplicationsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applications: []
        }
    }
    render() { 
        return (
            <Applications></Applications>
        );
    }
}
 
export default ListApplicationsPage;