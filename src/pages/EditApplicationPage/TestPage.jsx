import React, { Component } from 'react';
// import CreateApplicationPageData from './CreateApplicationPageData';

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

    handleInputChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });

        this.flagHighPriority();
    };

    render() {
        return (
            <div>
                <h1>We testin now</h1>
                <p>
                    <a
                        class="btn btn-primary"
                        data-toggle="collapse"
                        href="#multiCollapseExample1"
                        role="button"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample1"
                    >
                        Toggle first element
                    </a>
                    <button
                        class="btn btn-primary"
                        type="button"
                        data-toggle="collapse"
                        data-target="#multiCollapseExample2"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample2"
                    >
                        Toggle second element
                    </button>
                    <button
                        class="btn btn-primary"
                        type="button"
                        data-toggle="collapse"
                        data-target=".multi-collapse"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample1 multiCollapseExample2"
                    >
                        Toggle both elements
                    </button>
                </p>
                <div class="row">
                    <div class="col">
                        <div class="collapse multi-collapse" id="multiCollapseExample1">
                            <div class="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                sapiente ea proident.
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="collapse multi-collapse" id="multiCollapseExample2">
                            <div class="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                sapiente ea proident.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestPage;
