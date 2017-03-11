import React, { Component, PropTypes } from 'react';

export default class Face extends Component {

    render() {
        return (
            <div className="face">
                {this.props.children}
            </div>
        )
    }
}
