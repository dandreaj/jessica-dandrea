import React from 'react';
import { PageHeader, Image, Grid, Col, Row } from 'react-bootstrap';
import me from '../assets/IMG_1449.JPG'

const About = () => {
    return (
        <div className="About">
            <PageHeader bsClass="header">About</PageHeader>
            <div className="Content">
            <Col xs={12} md={4}>
                <Image className="Profile" src={me} circle/>
            </Col>
            <Col xs={12} md={8}>
                <p className="Profile">Hi there! My name is Jessica D'Andrea and I am a self-taught full stack engineer. I am currently a Technologist at PwC within their New Ventures organzation. I spend most of my free time teaching myself new things or chasing my fur-child (Wally) around. Don't forget to check out some of my latest personal projects!</p>
            </Col>    
                {/* <Grid>
                    <Row>
                        <Col xs={12} md={4}>
                            <Image className="Profile" src={me} responsive circle/>
                        </Col>
                        <Col xs={12} md={8}>
                            <p>Hi there! My name is Jessica D'Andrea and I am a self-taught full stack engineer. I am currently a Technologist at PwC within their New Ventures organzation. I spend most of my free time teaching myself new things or chasing my fur-child (Wally) around. Don't forget to check out some of my latest personal projects!</p>
                        </Col>
                    </Row>
                </Grid> */}
            </div>
        </div>
    )
}

export default About;