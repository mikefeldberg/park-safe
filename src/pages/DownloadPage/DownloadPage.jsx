import React, { Component } from 'react';
import { getAllApplicants } from '../../services/api';
import { CSVLink } from "react-csv";

// [
//     ['firstname', 'lastname', 'email'] ,
//     ['John', 'Doe' , 'john.doe@xyz.com'] ,
//     ['Jane', 'Doe' , 'jane.doe@xyz.com']
//   ];


class DownloadPage extends Component {
    constructor(){
        super();
        this.state = {
            applications: []
        }
    }

    componentDidMount(){
        const self = this;
        getAllApplicants().then(json => {
            console.log('cdm json', json)
            self.setState({
                applications: json
            })
        })

        // var apps = ''
        // apps = await getAllApplicants()
        // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$apps')
        // console.log(apps)
        // this.setState({applications: apps})
        // console.log('##########################this.state.applications')
        // console.log(this.state.applications)
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