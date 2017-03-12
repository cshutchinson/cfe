import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Face from './Face'

class CubeNet extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            cube: {
                top: "000000000",
                left: "111111111",
                right: "222222222",
                front: "333333333",
                bottom: "444444444",
                back: "555555555"
            }
        };
    }

    render() {
        const { cube } =  this.state;
        return (
            <div className="cubenet">
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
            </div>
        )
    }
}

function mapStateToProps (state, ownProps) {
    return {
        cube: state.cube
    };
}

export default connect(mapStateToProps)(CubeNet);



