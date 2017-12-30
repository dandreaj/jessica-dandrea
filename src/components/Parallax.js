import React from 'react';
import { Parallax } from 'react-parallax';
// import jukebox from '../assets/IMG_1126.JPG'

const ParallaxOne = () => {
    return (
      <div  className="Parallax pt0">
        <Parallax className="image" strength={400}>
        </Parallax>
      </div>
    )
}

export default ParallaxOne;