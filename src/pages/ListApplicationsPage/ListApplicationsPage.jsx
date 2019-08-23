import React, { Component } from 'react';
import Applications from '../../components/Applications/Applications';
import { getAllApplications } from '../../services/api';


class ListApplicationsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applications: [],
        };
    }

    componentDidMount() {
        const self = this;

        getAllApplications().then(json => {
            self.setState({
                applications: json,
            });
        });
    }

    handleInputChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.state.applications && (
                    <div>
                        <Applications applications={this.state.applications} handleInputChange={this.handleInputChange} />
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default ListApplicationsPage;
