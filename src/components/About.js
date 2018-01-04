import React from 'react';
import { Image, Col } from 'react-bootstrap';
import me from '../assets/profile.JPG'

const About = () => {
    return (
        <div className="About">
            <div className="About-Content">
            <Col xs={12} md={5}>
                <Image className="Profile" src={me}/>
            </Col>
            <Col xs={12} md={7}>
                <p className="Profile">Hi there! My name is Jessica D'Andrea and I am a self-taught full stack engineer. I am currently a Technologist at PwC within their New Ventures organzation. I spend most of my free time teaching myself new things or chasing my fur-child (Wally) around. Don't forget to check out some of my latest personal projects!</p>
            </Col>
            </div>
        </div>
    )
}

export default About;