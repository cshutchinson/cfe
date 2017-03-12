import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Face from './Face'
import * as cubeActions from '../actions/actions'


class CubeNet extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount(){
        this.setState({
            cube: {
                "top": "000000000",
                "left": "111111111",
                "right": "222222222",
                "front": "333333333",
                "bottom": "444444444",
                "back": "555555555"
            }
        })

    }

    handleChange() {
        console.log(this.props.store.getState());
    }

    render() {

        const { cube } =  this.state;

        return <div className="cubenet">
            <div className="face emptyface" />
            <Face faceId={5} faceColors={cube.back.split('')} />
            <div className="face emptyface"/>
            <Face faceId={1}  faceColors={cube.left.split('')} />
            <Face faceId={0}  faceColors={cube.top.split('')} />
            <Face faceId={2}  faceColors={cube.right.split('')} />
            <div className="face emptyface" />
            <Face faceId={3}  faceColors={cube.front.split('')} />
            <div className="face emptyface" />
            <div className="face emptyface" />
            <Face faceId={4}  faceColors={cube.bottom.split('')} />
        </div>;
    }
}

const mapStateToProps = (state) => {
    console.log('map state to props state.cube: ', state.cube.cube);
    return {
        cube: fetch
    };
}

export default connect(mapStateToProps)(CubeNet);



