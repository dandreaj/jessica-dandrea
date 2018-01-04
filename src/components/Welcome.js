import React from 'react';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';
import styled, { keyframes } from 'styled-components';
import { flash } from 'react-animations';

const flashAnimation = keyframes`${flash}`;

const DoubleArrow = styled.div`
    animation: 6s ${flashAnimation} infinite;
`;

const Welcome = () => {

    return (
        <div className="Welcome accent">
            <div className="Content">
                <h1>JESSICA D'ANDREA</h1>
                <p>FULL STACK ENGINEER</p>
                <div><DoubleArrow><FaAngleDoubleDown/></DoubleArrow></div>
            </div>
        </div>
    )
}

export default Welcome;