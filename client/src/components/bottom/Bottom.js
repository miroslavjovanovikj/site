import React from "react";
import "../../style/css/bottom/Bottom.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoBottom from '../../style/css/bottom/Wider-Inc-v2.svg'
const Bottom = () => {
  return (
    <Row>
      <div className="Bottom">
        <Container>
          <Row>
            <Col className="bottomItems" xs={12} sm={12} md={12} lg={5}>
              <p className="reachUs">Reach Us</p>
            
              <p className="adressBottom" >
              <i className="fas fa-map-marker-alt "></i>
                836 S Arlington Heights Rd Unit 264 Elk Grove Village, IL 60007
              </p>
              <p className="adressBottom" >
                <i className="far fa-clock"></i>Monday till Friday from 7:00
                a.m. to 5:00 p.m
              </p>
              <p className="adressBottom" >
                <i className="far fa-envelope"></i>info@widerinc.net
              </p>
              <p className="adressBottom" >
                <i className="fas fa-phone-alt"></i>  773 733 4231
              </p>
            </Col>
            <Col className="bottomLogo" xs={12} sm={12} md={12} lg={2}>
              <div className="logoBottom"><img className="logoBottom" src={logoBottom} alt="" /></div>
           
            </Col>
            <Col className="bottomLinks"xs={12} sm={12} md={12} lg={5}>
            <p className="quickLinks">Quick Links</p>
            <p className="navItem">
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  HOME
                </Link>
              </p>
              <p className="navItem">
                <Link
                  to="/aboutus"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  ABOUT US
                </Link>
              </p>
              <p className="navItem">
                <Link
                  to="/carrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  CARRER
                </Link>
              </p>
              <p className="navItem">
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  CONTACT
                </Link>
              </p>
            </Col>
          </Row>
          <Row>

          </Row>
        </Container>
      </div>

      <Col xs={12} md={12} lg={12}>
      <div className="FooterEnd">
      <div >© 2017 Wider Inc. | All Rights Reserved
       
       </div>
       <div> <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fwiderinc%3Figshid%3D1j1ggo42y497r%26fbclid%3DIwAR3AR-nsynNdohL_xrbkPD_rkz6rWLcEThPdikDK2bAKIDCeU12oj8Y2834&h=AT1jxdCdRdZyOvyXWg62QZVArODbrw8S693SOhEzjkdonX7S-ZPz54dhFHMINw_6hChHEfLL-V-0GsHk4pU3Xg0PzUL_nYeDXFHf3coCx6GBXH9eDM0OpKxNUVSIxXQ8PaCjgA"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/Wider-Inc-110979590694083/"> <i className="fab fa-facebook-square"></i></a></div>
      </div>
      </Col>
    </Row>
  );
};
export default Bottom;
