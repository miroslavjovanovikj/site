import React, { Component } from "react";
import "../../style/css/about-us/AboutUs.css";
import { Container, Row, Col } from "react-bootstrap"
import Footer from "../../components/footer/Footer";
import Bottom from "../../components/bottom/Bottom";
import "../../style/css/contact/ContactPage.css";
import photoHeader from "../../style/css/contact/header_businessinsurance.webp";
import FormPage  from '../../components/form/FormPage';
import LogoWider2 from './wider-v2.svg';
class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {

    return (
      <div>
        <div className="AboudUsDiv">
          <img className="AboutUsPhoto" src={photoHeader} alt="about-us" />
          <div className="AboutDivGlassContact">
            <Container className="aboutContainer">
              <Row>
                <Col sm={12} md={4} lg={4}>
                  <i className="fas fa-map-marker-alt contactPage"></i>
                  <p className="infoHeder">General Support</p>
                  <span className="contactInfoColor">info@widerinc.net</span>
                </Col>
                <Col sm={12} md={4} lg={4}>
                  <i className="far fa-envelope"></i>
                  <p className="infoHeder">Address</p>
                  836 S Arlington Heights Rd Unit 264 Elk Grove Village, IL
                  60007
                </Col>
                <Col sm={12} md={4} lg={4}>
                  <i className="fas fa-phone-alt"></i>
                  <p className="infoHeder">Lets Talk</p>
                  <span className="contactInfoColor"> 773 733 4231 </span>
                </Col>
              </Row>
            </Container>
            <div className="titleContact"></div>
          </div>
        </div>

        <div>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className="contactInfo">
                <div className="contactInfoItems">
                  <div className="contactTitle">General information: </div>
                  <div className="allItemsInfo">
                  <div className="itemsInfo"><i className="fas fa-envelope"></i> info@widerinc.net</div>
                  <div className="itemsInfo"><i className="fas fa-phone-square-alt"></i>  [OFFICE] 773 733 4231</div>
                  <div className="itemsInfo"><i className="fas fa-mobile-alt"></i> [CELL] 312 802 6400</div>
                  <div className="itemsInfo"><i className="fas fa-fax"></i> [FAX] 773 437 8468</div>
                  </div>
                </div>
                <div>
                <div className="contactInfoItems">
                  <div className="contactTitle">Recruiter:</div>
                  <div className="allItemsInfo">
                  <div className="itemsInfo"><i className="fas fa-envelope"></i> recruiter@widerinc.net</div>
                  <div className="itemsInfo"><i className="fas fa-phone-square-alt"></i>  [OFFICE] 773 733 4231</div>
                  <div className="itemsInfo"><i className="fas fa-mobile-alt"></i> [CELL] 312 802 6400</div>
                  <div className="itemsInfo"><i className="fas fa-fax"></i> [FAX] 773 437 8468</div>
                  </div>
                </div>
                </div>
                <div className="contactInfoItems">
                  <div className="contactTitle">Accounting:</div>
                  <div className="allItemsInfo">
                  <div className="itemsInfo"><i className="fas fa-envelope"></i> accounting@widerinc.net</div>
                  <div className="itemsInfo"><i className="fas fa-mobile-alt"></i> [CELL] 312 802 6400</div>
                  <div className="itemsInfo"><i className="fas fa-fax"></i> [FAX] 773 437 8468</div>
                  </div>
                </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
              <div className="underFormDiv">
                  <div className=" formDiv">
                    <div className="formTitle ">Fill out our quick application form 
                    </div>
                    <FormPage/>
                  </div>
                </div>
              </Col>
               
           
            </Row>
          </Container>

          <Row>
            <Col xs={12} sm={12} md={5} lg={5} className="contactPadding">
              <div className="divOverCont">
              <i className="far fa-clock"></i>
                <div className="divContact"> WORKING HOURS</div>
                <div className="contactContent">Monday till Friday from 8:00 a.m. to 7:00 p.m.</div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2} className="contactPadding1">
              <div className="divOverContMiddle">
              
                <div className="divContact"></div>
                <img className="logoWiderInc"src={LogoWider2}></img>
                
              </div>
            </Col>
            <Col xs={12} sm={12} md={5} lg={5} className="contactPadding">
              <div className="divOverCont">
              <i className="fas fa-map-marker-alt"></i>
                <div className="divContact">LOCATION</div>
                <div className="contactContent">836 S Arlington Heights Rd Unit 264 Elk Grove Village, IL 60007</div>
              </div>
            </Col>
          </Row>

          <Footer />
          <Bottom />
        </div>
      </div>
    );
  }
}
export default Contact;
