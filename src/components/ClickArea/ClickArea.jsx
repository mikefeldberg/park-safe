import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClickArea extends Component {
    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(e) {
        if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
            this.props.handleClose()
        }
    }

    render() {
        return <div ref={this.setWrapperRef}>{this.props.children}</div>;
    }
}

ClickArea.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ClickArea;
