import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Scroll from 'react-scroll';
import Welcome from './components/Welcome';
import ParallaxDiv from './components/Parallax';
import image from './assets/parallax1.jpeg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      test: 'test'
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({ isTop: window.scrollY < 300 })
    });
  }
  render() {
    let Link = Scroll.Link;
    let Element = Scroll.Element;

    return (
      <div className="App">
          <Navbar.Collapse>
              <Nav className={this.state.isTop ? 'Nav init' : 'Nav'} justified>
                  <NavItem componentClass="span">
                    <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={1500}
                    onSetActive={this.handleSetActive}>PROJECTS</Link>
                  </NavItem>
                  <NavItem componentClass="span">
                    <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={1500}
                    onSetActive={this.handleSetActive}>ABOUT</Link>
                  </NavItem>
                  <NavItem componentClass="span">
                    <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={1500}
                    onSetActive={this.handleSetActive}>CONTACT</Link>
                  </NavItem>
              </Nav>
            </Navbar.Collapse>
        <Element name="welcome" className="Section pt0">
          <Welcome/>
        </Element>
        <ParallaxDiv image={image}></ParallaxDiv>
        <Element name="about" className="Section">
          <About/>
        </Element>
        <ParallaxDiv image={image}></ParallaxDiv>
        <Element name="projects" className="Section">
          <Projects/>
        </Element>
        <ParallaxDiv image={image}></ParallaxDiv>
        <Element name="contact" className="Section">
          <Contact/>
        </Element>
      </div>
    );
  }
}

export default App;