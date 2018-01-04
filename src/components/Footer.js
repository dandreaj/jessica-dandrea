import React from 'react';
import FaCopyright from 'react-icons/lib/fa/copyright';
import moment from 'moment';

const Footer = () => {
    const year = moment().year();
    const footerText = "  " + year + " Jessica D'Andrea All rights reserved.";
    return (
        <div className="Footer accent"><FaCopyright/>{footerText}</div>
    )
}

export default Footer;