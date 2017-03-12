import React, { Component, PropTypes } from 'react';

export default class Arrow extends Component {
    handleClickCw() {
        console.log('CW face: ', this.props.faceId);
    }

    handleClickCcw() {
        console.log('CCW face: ', this.props.faceId);
    }

    render() {
        return (
            <div>
                <a className="ccw" onClick={() => {this.handleClickCcw()}}>↺</a>
                <a className="cw" onClick={() => {this.handleClickCw()}}>↻</a>
            </div>
        )
    }
}