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

    render() {
        let cube;
        if(this.props.cube===undefined){
             cube = this.state.cube;
        } else {
            cube = this.props.cube;
        }

        return <div className="cubenet">
            <div className="face emptyface" />
            <Face faceId={5} xtraClass={'rotate180'} faceColors={cube.back.split('')} />
            <div className="face emptyface"/>
            <Face faceId={1} xtraClass={'rotate90'} faceColors={cube.left.split('')} />
            <Face faceId={0}  faceColors={cube.top.split('')} />
            <Face faceId={2} xtraClass={'rotate270'} faceColors={cube.right.split('')} />
            <div className="face emptyface" />
            <Face faceId={3}  faceColors={cube.front.split('')} />
            <div className="face emptyface" />
            <div className="face emptyface" />
            <Face faceId={4}  faceColors={cube.bottom.split('')} />
        </div>;
    }
}

const mapStateToProps = (state) => {
    return { ...state, cube: state.cube.cube
    };
}

export default connect(mapStateToProps)(CubeNet);



