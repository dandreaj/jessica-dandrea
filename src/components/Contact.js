import React from 'react';
import { Button, FormGroup, FormControl, Col } from 'react-bootstrap';
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
            <div className="Content">
                <div className="form accent">
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/jessica-dandrea/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinSquare size={42}/>
                        </a>
                        <a href="https://github.com/dandreaj" target="_blank"rel="noopener noreferrer">
                            <FaGithubSquare size={42}href="" target="_blank"/>
                        </a>
                        <a href="https://www.instagram.com/jessica_d.andrea/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={42}href="" target="_blank"/>
                        </a> 
                    </div>
                    <Col xs={12} sm={6}>
                    <form>
                        <FormGroup className="info"
                        controlId="formBasicText"
                        >
                        <FormControl
                            onChange={this.onChange}
                            type="text"
                            placeholder="NAME"
                            name="name"
                            value={this.state.name}
                        />
                        <FormControl
                            onChange={this.onChange}
                            type="text"
                            placeholder="EMAIL ADDRESS"
                            name="email"
                            value={this.state.email}
                        />
                        <FormControl
                            onChange={this.onChange}
                            type="text"
                            placeholder="ORGANIZATION"
                            name="organization"
                            value={this.state.organization}
                        />
                        </FormGroup>
                    </form>
                    </Col>
                    <Col xs={12} sm={6}>
                    <form className="message">
                        <FormControl onChange={this.onChange} className="message" componentClass="textarea" placeholder="MESSAGE" name="message" />
                    </form>
                    </Col>
                    <Button onClick={this.sendMessage}>SEND</Button>
                </div>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default Contact;