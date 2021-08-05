import React,{useEffect} from 'react';
import about from '../../files/about-us.webp';
import beamPhoto from '../../assets/beam.svg';
import excavatorPhoto from '../../assets/excavator.svg';
import wallPhoto from '../../assets/wall.svg';
import firstAidPhoto from '../../assets/first-aid-kit.svg';
import paperPhoto from '../../assets/paper.svg';
import mailPhoto from '../../assets/mail.svg';
import '../../style/css/about-us/AboutUs.css';
import Footer from '../../components/footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import Bottom from '../../components/bottom/Bottom';
import Button from '../../components/button/Button'

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 
  return (

    <div >
      <div className="AboudUsDiv">
        <img className="AboutUsPhoto" src={about} alt="about-us" />
        <div className="AboutDivGlass">
          <Button>
          <div className="titleAboutUs">
            We are a company with the best approaches and the highest standards in transportation services
            </div>
          </Button> 
        </div> 
      </div>

      <Container className="AboutUsContent">
        <h4 className="TitleStory">CARGO CARRIED - GENERAL FREIGHT</h4>
        <div className="aboutUsText">
        Our mission is to hire best skilled drivers and O/O, retain good safety and be ever more reliable in serving our customers. Cargo Carried: General Freight, Metal, Sheets, Coils, Rolls, Logs, Poles, Beams, Lumber, Building Materials, US Mail, Paper Products, Construction, Hospital Equipment, and more.
        </div>
        <Row>
          <Col className="colItemStyle" md={12} sm={12} lg={3}>
            <div className="parent1">
              <div className="AboutUsPhotoDiv1">
                <p className="AboutUsText1">We care for our drivers and their needs. We are always planning ahead, making sure you are home on time, spending more time with your family.
</p>
              </div>
            </div>
          </Col>
          <Col className="colItemStyle" md={12} sm={12} lg={3}>
            <div className="parent2">
              <div className="AboutUsPhotoDiv2">
                <p className="AboutUsText2">  Everyday we work towards earning the customer trust and confidence and ensuring our employees have high safety standard and competitive pay.</p>
              </div>
            </div>
          </Col>
          <Col  className="colItemStyle" md={12} sm={12} lg={3}>
            <div className="parent">
              <div className="AboutUsPhotoDiv">
                <p className="AboutText3">We have good results because each member of our team works with a lot of passion, commitment and is like a part of our family</p>
              </div>
            </div>
          </Col>
          <Col className="colItemStyle" md={12} sm={12} lg={3}>
            <div className="parent">
              <div className="AboutUsPhotoDiv3">
                <p className="AboutText">Our mission is to hire best skilled drivers and <span className="info">O/O</span>, retain good safety and be ever more reliable in serving our customers.</p>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
      <div className="Materials">
        <Container>
        {/* <Col md={12} sm={12} lg={12}><div className="materialTitle"></div></Col> */}
          {/* <h4 className="MaterialsInfo"></h4> */}
          <Row>
          </Row>
          <Row className="materialRow">
            <Col md={12} sm={12} lg={4}>
              <div className="materialsItem">
                <img className="beamPhoto" src={beamPhoto} alt="" />
                <div><p className="textUnderPhoto">Metal: sheets, coils, rolls</p></div>
              </div>
            </Col>
            <Col md={12} sm={12} lg={4}>
              <div className="materialsItem">
                <img className="beamPhoto" src={excavatorPhoto} alt="" />
                <div><p className="textUnderPhoto">Building Materials</p></div>
              </div>
            </Col>
            <Col md={12} sm={12} lg={4}>
              <div className="materialsItem">
                <img className="beamPhoto" src={wallPhoto} alt="" />
                <div><p className="textUnderPhoto">Construction</p></div>
              </div>
            </Col>
            <Col md={12} sm={12} lg={4}>
              <div className="materialsItem">
                <img className="beamPhoto" src={paperPhoto} alt="" />
                <div><p className="textUnderPhoto"> Paper Products</p></div>
              </div>
            </Col>
            
            <Col md={12} sm={12} lg={4}>
              <div className="materialsItem">
                <img className="beamPhoto" src={mailPhoto} alt="" />
                <div><p className="textUnderPhoto"> US Mail</p></div>
              </div>
            </Col>
            <Col md={12} sm={12} lg={4}>
              <div className="materialsItem">
                <img className="beamPhoto" src={firstAidPhoto} alt="" />
                <div><p className="textUnderPhoto"> Hospital Equipment</p></div>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
      <Footer />
      <Bottom />
    </div>
  )
}
export default AboutUs;
