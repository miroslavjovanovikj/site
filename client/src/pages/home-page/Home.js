import React,{useEffect} from "react";
import "../../style/css/home-page/Home.css";
import {Row, Col } from "react-bootstrap";
import Card from "../../components/cart-items/Card";
import Footer from "../../components/footer/Footer";
import Info from "../../components/info/Info";
import HomeBodyInfo from "../../components/body-info/HomeBodyInfo";
import { infoBody } from "../../components/body-info/bodyInfoData";
import Quotes from '../../components/quotes/Quotes'
import { cardItems } from "../../components/cart-items/cardItemsData";
import { infoItems } from "../../components/info/infoItems";
import Bottom from "../../components/bottom/Bottom";
import ContactInfo from '../../components/contactInfo/ContactInfo';
import Button from '../../components/button/Button';
import MapAreaInfo from '../../components/mapAreaInfo/MapAreaInfo';
import {Link} from 'react-router-dom';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 
  return (
    <div>
      <div className="slideshow">
 
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        
          <Button><div id="slideset1">
            <div>
              <h1>OUR MISSION IS TO HIRE BEST SKILLED DRIVERS AND O/O, RETAIN GOOD SAFETY AND BE EVEN MORE RELIABLE IN SERVING OUR CUSTOMERS</h1>
            </div>
            <div>
              <h1>We are offering the best price!! All miles are paid in full</h1>
            </div>
            <div>
              <h1>100% Paid tolls!! Inspection Bonuses!! Call us now</h1>
            </div>
          </div>  </Button>
      
        <p className="ownerMessage">OWNER OPERATORS - NO TRUCK NO PROBLEM!</p>
      </div>
    
      <div>
      <Row>
            <Col xs={12} sm={12} md={4} lg={4}><Link to={"/shippers"}><button className='buttonsSlider'>Shippers</button></Link></Col>
            <Col xs={12} sm={12} md={4} lg={4}><Link to={"/drivers"}><button className='buttonsSlider'>Drivers</button></Link></Col>
            <Col xs={12} sm={12} md={4} lg={4}><Link to={"/contact"}><button className='buttonsSlider'>Contact</button></Link></Col>
          </Row>
      </div>
      <section>
        <div className="AboutUs">
          <HomeBodyInfo bodyInfo={infoBody} />
        </div>
      </section>
      <Card cardItems={cardItems} />

      <Info infoItems={infoItems} />
      {/* <SimpleMap /> */}
      <Quotes/>
      <ContactInfo/>
      <MapAreaInfo />
      <Footer />
      <Bottom />
    </div>
  );
};
export default Home;
