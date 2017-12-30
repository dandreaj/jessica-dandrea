import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import logo from './logo.svg';
import './App.scss';
import NavbarInstance from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Scroll from 'react-scroll'; // Imports all Mixins
import Welcome from './components/Welcome';
import ParallaxOne from './components/Parallax';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      test: 'test'
    }
    // this.scrollToTop = this.scrollToTop.bind(this);
  }
  // scrollToTop() {
  //   Scroll.animateScroll.scrollToTop();
  // }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({ isTop: window.scrollY < 300 })
    });
        // Scroll.Events.scrollEvent.register('begin', function(to, element) {
        //   console.log("begin", arguments);
        // });
        // Scroll.Events.scrollEvent.register('end', function(to, element) {
        //   console.log("end", arguments);
        // }); 
        // Scroll.scrollSpy.update();
      }
  render() {
    let Link = Scroll.Link;
    let Element = Scroll.Element;

    return (
      <div className="App">
          <Navbar.Collapse>
              <Nav className={this.state.isTop ? 'Nav init' : 'Nav'} justified>
                  <NavItem>
                    <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={1500}
                    onSetActive={this.handleSetActive}>Projects</Link>
                  </NavItem>
                  <NavItem>
                    <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={1500}
                    onSetActive={this.handleSetActive}>About</Link>
                  </NavItem>
                  <NavItem>
                    <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={1500}
                    onSetActive={this.handleSetActive}>Contact</Link>
                  </NavItem>
              </Nav>
            </Navbar.Collapse>
        <Element name="welcome" className="Section pt0">
          <Welcome/>
        </Element>
        <Element name="about" className="Section">
          <About/>
        </Element>
        <Element name="projects" className="Section">
          <Projects/>
        </Element>
        <Element name="contact" className="Section">
          <Contact/>
        </Element>

      </div>
    );
  }
}

export default App;