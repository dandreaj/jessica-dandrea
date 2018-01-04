import React from 'react';
import { Image } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import frenchie from '../assets/happy_frenchie.png';

class Project extends React.Component {
    constructor(props) {
        super();
        this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        this.setState({ isFlipped: !this.state.isFlipped });
    }
    render() {
        return(
            <section onClick={()=> window.open(this.props.link, "_blank")}>
                <ReactCardFlip className="card" isFlipped={this.state.isFlipped}>
                    <div onMouseEnter={this.handleClick} key="back">
                        <Image  src={frenchie} circle responsive/>
                    </div>
                    <div onMouseLeave={this.handleClick} key="front">
                        <p className="circle">{this.props.title}</p>
                    </div>                    
                </ReactCardFlip>
            </section>
        )
    }
}

export default Project;