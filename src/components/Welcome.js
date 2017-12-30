import React from 'react';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';

const Welcome = () => {
    return (
        <div className="Welcome accent">
            <div className="Content">
                <h1>Jessica D'Andrea</h1>
                <p>Full Stack Engineer</p>
                <p><FaAngleDoubleDown/></p>
                <p><span class="pulse"><FaAngleDoubleDown/></span></p>
            </div>
        </div>
    )
}

export default Welcome;