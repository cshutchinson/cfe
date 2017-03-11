import React, { Component, PropTypes } from 'react';
import { Colors } from './Colors';
import { FacePositions } from './FacePositions'

export default class Cublet extends Component {

    render() {
        const { color, facePosition } = this.props;

        const colorStyle = {
            backgroundColor: Colors[color]
        };

        const cubletClasses = 'cublet ' + FacePositions[facePosition];

        return (
            <div className={cubletClasses} style={colorStyle} />
        )
    }
}