import React, { Component } from 'react';
import { getOneApplication } from '../../services/api';

class ShowApplicationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const applicationId = this.props.match.params.id;
        const self = this;

        getOneApplication(applicationId).then(json => {
            self.setState({
                application: json,
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.application && (
                    <div>
                        <table class="table table-sm">
                            <tbody>
                                <tr>
                                    {/* <th scope="row">{this.state.application.firstName}</th> */}
                                    <td>Mark</td>
                                    <td>Otto</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default ShowApplicationPage;
