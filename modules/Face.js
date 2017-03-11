import React, { Component, PropTypes } from 'react';
import Cublet from './Cublet'


export default class Face extends Component {
    handleClick() {
        console.log(this.props.id);
    }

    render() {
        const { faceColors } = this.props;
        return (
            <div className="face" onClick={this.handleClick}>
                <Cublet color={faceColors[0]} facePosition={0} />
                <Cublet color={faceColors[1]} facePosition={1} />
                <Cublet color={faceColors[2]} facePosition={2} />
                <Cublet color={faceColors[3]} facePosition={3} />
                <Cublet color={faceColors[4]} facePosition={4} />
                <Cublet color={faceColors[5]} facePosition={5} />
                <Cublet color={faceColors[6]} facePosition={6} />
                <Cublet color={faceColors[7]} facePosition={7} />
                <Cublet color={faceColors[8]} facePosition={8} />
            </div>
        )
    }
}
