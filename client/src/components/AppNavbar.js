import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
import '.././style/css/AppNavbar.css';
import { Navbar, Nav, Container, } from 'react-bootstrap';
import LogoWider from '../assets/wider-v2.svg';
class AppNavbar extends Component {

  render() {
    return (
      <div>
        <div>
          

          <Navbar collapseOnSelect sticky="top"  id="backgroundColor" expand="lg">
          <Container>
        
          
            <Navbar.Brand><Link to="/home"><img className="logoSvg" src={LogoWider} alt="" /></Link></Navbar.Brand>
            <Navbar.Toggle   />
            <Navbar.Collapse    >
            <Nav className="ml-auto">
            <Nav.Item>
            <Nav.Link  className="selected" className="NavbarButton"  eventKey="1" as={Link} to="/home">Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
             <Nav.Link    className="selected" className="NavbarButton" eventKey="2" as={Link} to="/aboutus">About us
    
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
             <Nav.Link    className="selected" className="NavbarButton" eventKey="3" as={Link} to="/carrer">Carrer
    
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
             <Nav.Link    className="selected" className="NavbarButton" className="NavbarButton" eventKey="4" as={Link} to="/contact">Contact
    
            </Nav.Link>
          </Nav.Item>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    )
  }
}
export default AppNavbar;
{/* <Navbar fixed="top" id="backgroundColor" expand="lg">
            
<div className="container">

  <div className="LogoStyle">

    <Navbar.Brand className="Logo" to="/home">Wider Inc</Navbar.Brand>
  </div>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      </Nav>
      <li><NavLink className="NavbarButton" to="/home">Home</NavLink></li>
      <li><NavLink className="NavbarButton" to="/aboutus">About us</NavLink></li>
      <li><NavLink className="NavbarButton" to="/carrer">Carrer</NavLink></li>
      <li><NavLink className="NavbarButton Contact" to="/contact">Contact</NavLink></li>
   
      </Navbar.Collapse> 
</div>

</Navbar> */}