import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxDiv = (props) => {
    return (
      <div  className="Parallax pt0">
        <Parallax bgImage={props.image} className="image" strength={100}>
        </Parallax>
      </div>
    )
}

export default ParallaxDiv;