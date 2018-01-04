import React from 'react';
import FaCopyright from 'react-icons/lib/fa/copyright';
import moment from 'moment';

const Footer = () => {
    const year = moment().year();
    const footerText = "  " + year + " JESSICA D'ANDREA ALL RIHGTS RESERVED.";
    return (
        <div className="Footer accent"><FaCopyright/>{footerText}</div>
    )
}

export default Footer;