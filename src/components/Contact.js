import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Row, Col } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaInstagram from 'react-icons/lib/fa/instagram';

import Footer from './Footer';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email: '',
            message: '',
            organization: ''
        }
        this.sendMessage = this.sendMessage.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    sendMessage() {
        fetch('/send', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
        .then(response => console.log(response));
    }

    onChange(e) {
        let form = {}
        form[e.target.name] = e.target.value;
        this.setState(form)
    }

    render() {
        return(
            <div className="Contact">
            {/* <PageHeader bsClass="header">Contact Me</PageHeader> */}
            <div className="Content">
                <div className="form accent">
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/jessica-dandrea/" target="_blank">
                            <FaLinkedinSquare size={42}/>
                        </a>
                        <a href="https://github.com/dandreaj" target="_blank">
                            <FaGithubSquare size={42}href="" target="_blank"/>
                        </a>
                        <a href="https://www.instagram.com/jessica_d.andrea/" target="_blank">
                            <FaInstagram size={42}href="" target="_blank"/>
                        </a> 
                    </div>
                    <Row>
                    <Col xs={6}>
                    <form>
                        <FormGroup className="info"
                        controlId="formBasicText"
                        >
                        <FormControl
                            onChange={this.onChange}
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={this.state.name}
                        />
                        <FormControl
                            onChange={this.onChange}
                            type="text"
                            placeholder="Email address"
                            name="email"
                            value={this.state.email}
                        />
                        <FormControl
                            onChange={this.onChange}
                            type="text"
                            placeholder="Organization"
                            name="organization"
                            value={this.state.organization}
                        />
                        </FormGroup>
                    </form>
                    </Col>
                    <Col xs={6}>
                    <form class="message">
                        <FormControl onChange={this.onChange} className="message" componentClass="textarea" placeholder="Message" name="message" />
                    </form>
                    </Col>
                    </Row>
                    <Row>
                        <Button onClick={this.sendMessage}>Send</Button>
                    </Row>
                </div>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default Contact;