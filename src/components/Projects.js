import React from 'react';
import { Col } from 'react-bootstrap';
import Project from './Project';
import jukebox from '../assets/IMG_1449.JPG';
import habitTracker from '../assets/IMG_1449.JPG';
import geogopher from '../assets/IMG_1449.JPG';

const Projects = () => {
    return (
        <div className="Projects">
            <div>

                    <Col className="card-container" xs={4}>
                        <Project photo={habitTracker} link="http://138.68.227.72:3000/" title="Habit Tracker"/>
                    </Col>
                    <Col className="card-container" xs={4}>
                        <Project photo={jukebox} link="http://138.68.227.72:3000/" title="JukeBox"/>
                    </Col>
                    <Col className="card-container" xs={4}>
                        <Project photo={geogopher} link="http://138.68.227.72:3000/" title="Geogopher"/>
                    </Col>

            </div>
        </div>
    )
}

export default Projects;