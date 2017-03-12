import React, { Component, PropTypes } from 'react';
import Cublet from './Cublet'
import Arrows from './Arrows'


export default class Face extends Component {
    render() {
        const { faceColors , xtraClass} = this.props;

        const faceClass = 'face ' + xtraClass ;

        return (
            <div className={faceClass}>
            <Cublet color={faceColors[0]} facePosition={0} />
                <Cublet color={faceColors[1]} facePosition={1} />
                <Cublet color={faceColors[2]} facePosition={2} />
                <Cublet color={faceColors[3]} facePosition={3} />
                <Cublet color={faceColors[4]} facePosition={4}>
                    <Arrows faceId={this.props.faceId} />
                </Cublet>
                <Cublet color={faceColors[5]} facePosition={5} />
                <Cublet color={faceColors[6]} facePosition={6} />
                <Cublet color={faceColors[7]} facePosition={7} />
                <Cublet color={faceColors[8]} facePosition={8} />
            </div>
        )
    }
}
