import React, { Component } from 'react';
import { getAllApplications } from '../../services/api';
import { CSVLink } from "react-csv";

class DownloadPage extends Component {
    constructor(){
        super();
        this.state = {
            applications: []
        }
    }

    componentDidMount(){
        const self = this;
        getAllApplications().then(json => {
            console.log('cdm json', json)
            self.setState({
                applications: json
            })
        })
    }

    render(){
        return(
            <React.Fragment>
                {this.state.applications &&
                <div>
                    <CSVLink data={this.state.applications} >Download Applications</CSVLink>
                </div>
                }
            </React.Fragment>
        )
    }
}
export default DownloadPage;
