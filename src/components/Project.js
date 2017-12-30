import React from 'react';
import { Image, Col, Thumbnail } from 'react-bootstrap';

const Project = (props) => {
    
    return (
        <Col xs={6} md={4}>
            <Image src={props.photo} rounded responsive/>
            <div className={props.classStyle}>{props.title}</div>
        </Col>
    )
}

export default Project;