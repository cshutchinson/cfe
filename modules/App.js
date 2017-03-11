import React from 'react'
import Cublet from './Cublet'
import Face from './Face'

export default React.createClass({
  render() {
    return (
        <Face>
            <Cublet color={0} facePosition={0} />
            <Cublet color={1} facePosition={1} />
            <Cublet color={2} facePosition={2} />
            <Cublet color={3} facePosition={3} />
            <Cublet color={4} facePosition={4} />
            <Cublet color={5} facePosition={5} />
            <Cublet color={0} facePosition={6} />
            <Cublet color={1} facePosition={7} />
            <Cublet color={2} facePosition={8} />
        </Face>
    )
  }
})
