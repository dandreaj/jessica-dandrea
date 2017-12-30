import React from 'react';
import { Grid,Col, Image, Row, PageHeader } from 'react-bootstrap';
import Project from './Project';
import jukebox from '../assets/IMG_1449.JPG';
import fitstop from '../assets/IMG_1449.JPG'


const Projects = () => {
    return (
        <div className="Projects">
            <PageHeader bsClass="header">Projects</PageHeader>
            <div className="Content">
                {/* <Grid> */}
                    <Row>
                        <Project className="test" classStyle="overlay" photo={jukebox} link="http://138.68.227.72:3000/" title="Habit Tracker"/>
                        <Project classStyle="overlay" photo={jukebox} link="http://138.68.227.72:3000/" title="JukeBox"/>
                        <Project classStyle="overlay" photo={fitstop} link="http://138.68.227.72:3000/" title="FitStop"/>
                        <Project classStyle="not-deployed" photo={jukebox} link="http://138.68.227.72:3000/" title="Geogopher" subtitle="Coming Jan 2018"/>
                        <Project classStyle="not-deployed" photo={jukebox} link="http://138.68.227.72:3000/" title="Noon Hours Foods" subtitle="Coming Soon"/>
                        <Project classStyle="not-deployed" photo={jukebox} link="http://138.68.227.72:3000/" title="Project 6" subtitle="Coming Soon"/>
                    </Row>
                {/* </Grid> */}
            </div>
        </div>
    )
}

export default Projects;