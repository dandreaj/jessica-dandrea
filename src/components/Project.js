import React from 'react';
import { Image } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';

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
                    <div onMouseEnter={this.handleClick} key="front">
                        <Image  src={this.props.photo} circle responsive/>
                    </div>
                    <div onMouseLeave={this.handleClick} key="back">
                        <p className="circle">{this.props.title}</p>
                    </div>                    
                </ReactCardFlip>
            </section>
        )
    }
}

export default Project;