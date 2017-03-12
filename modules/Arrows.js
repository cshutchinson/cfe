import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import * as cubeActions from '../actions/actions'

class Arrow extends Component {
    handleClickCw() {
        const { dispatch, cube , faceId} = this.props;
        dispatch(cubeActions.fetchCube({
            cube: cube.cube,
            face: `${faceId}`,
            direction: '0'
        }));
        console.log('Dispatched CW face: ', {
            cube: cube.cube,
            face: `${faceId}`,
            direction: '0'
        });
    }

    handleClickCcw() {
        const { dispatch, cube , faceId} = this.props;
        dispatch(cubeActions.fetchCube({
            cube: cube.cube,
            face: `${faceId}`,
            direction: '1'
        }));
        console.log('CCW face: ', {
            cube: cube.cube,
            face: `${faceId}`,
            direction: '1'
        });
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

function mapStateToProps (state) {
    return {
        cube: state.cube
    };
}

export default connect(mapStateToProps)(Arrow);