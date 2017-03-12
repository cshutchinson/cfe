import React, { Component, PropTypes } from 'react';
import Face from './Face'

export default class IsometricCube extends Component {

    render() {
        return (
            <div className="cubenet">
                <div className="face emptyface" />
                <Face faceId={5} faceColors={[0,0,0,0,0,0,0,0,0]} />
                <div className="face emptyface"/>
                <Face faceId={1}  faceColors={[1,1,1,1,1,1,1,1,1]} />
                <Face faceId={0}  faceColors={[2,2,2,2,2,2,2,2,2]} />
                <Face faceId={2}  faceColors={[3,3,3,3,3,3,3,3,3]} />
                <div className="face emptyface" />
                <Face faceId={3}  faceColors={[4,4,4,4,4,4,4,4,4]} />
                <div className="face emptyface" />
                <div className="face emptyface" />
                <Face faceId={4}  faceColors={[5,5,5,5,5,5,5,5,5]} />
            </div>
        )
    }
}
