import React, {useState, useEffect} from 'react';
import arrowIcon from './down-chevron.svg';
import { Container, Row, Col } from 'react-bootstrap';
import FormPage  from '../../components/form/FormPage';
import Footer from '../../components/footer/Footer';
import Bottom from "../../components/bottom/Bottom";
import logoApply from '../../style/css/carrer-page/Wider-inc-bl.svg';

import '../../style/css/Drivers/Drivers.css';
const Drivers = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 
  const [applyForm1, setApplyForm1] = useState(false);
  const [applyForm2, setApplyForm2] = useState(false);
  const [applyForm3, setAppleyForm3] = useState(false);
  const [callNow, setCallNow] = useState(false);
  const [callNow1, setCallNow1] = useState(false);
  const [callNow2, setCallNow2] = useState(false);



  const handleApply =() =>{
    setApplyForm1(true)
  }
  const hadleCancelApply =() =>{
    setApplyForm1(false)
  }
  const handleApply1 =() =>{
    setApplyForm2(true)
  }
  const hadleCancelApply1 =() =>{
    setApplyForm2(false)
  }
 
  const hadleCall =()=>{
    setCallNow(true)
  }
  const handleCall1 = () => {
    setCallNow1(true)
  }
  const hadnleApplye2 = () => {
    setAppleyForm3(true)
  }
  const hadleCancelApply2 =() =>{
    setAppleyForm3(false)
  }
  const handleCall2 = () => {
    setCallNow2(true)
  }
    return(
        <div>
          <div className="CoverDiv">
          <div className="CoverDivGlass">
            WE OFFER TOP PAY, REGULAR PAY INCREASES AND GOOD DEALS ON TRUCK LEASE
          </div>
       </div>
      <Container>

      <div className="firstForm">
      <h2 className="applyNowCarrerTitle">Apply now</h2>
      {/* <i className="fas fa-chevron-down"></i> */}
      <img src={arrowIcon} className="arrowDown"alt="arrow"/>
          <Row>   
          
              <Col xs={12} sm={12} md={12} lg={4}>
                <div className="myFirstApply">
                {applyForm2 ? <div className="formCarrer">
                <p className="titleCarrerForm">Apply Now</p>
                  <FormPage><button className="closeButtonCarrer" onClick={hadleCancelApply1}>cancel</button></FormPage>
              </div> :
              <div className="carrerText">
                <div className="applyHeaderPhoto"></div>
                 <div className="titleApply1">
                 OWNER OPERATORS
                </div>
                <div className="itemsApply">
            
                </div>
                <div className="descJob paddingApplyDesc">
                    We are accepting trucks that pass DOT inspection and accept ELD.
                    We have 24/7 support and no force dispach. 
                    You will have bonuses for clean inspection and an open fuel card.
                    Up to 82% - The more you stay, the more you get paid!
                </div>
                <Row>
                <Col className="applyNowCarrer" xs={6} sm={6} md={6} lg={6}><button className="applyNowCarrer" onClick={handleApply1}>Apply Now</button></Col>
                <Col className="callNowCarrer" xs={6} sm={6} md={6} lg={6}><button className="callNowCarrer" onClick={handleCall1}>{!callNow1 ? "Call Now" : "773 733 4231"}</button></Col>
                </Row>
               <div className="LogoCarrer"><img src={logoApply} alt="" /></div>
              </div>}
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4}>
                  <div className="myFirstApply">
                  {applyForm1 ? <div className="formCarrer">
                  <p className="titleCarrerForm">Apply Now</p>
                 <FormPage><button className="closeButtonCarrer" onClick={hadleCancelApply}>cancel</button></FormPage>
              </div> :
              <div className="carrerText">
                <div className="applyHeaderPhoto"></div>
                <p className="titleApply">HIRING - LEASE TO PURCHASE</p>
                <div className="itemsApply">
                </div>
                <div className="descJob paddingApplyDesc">
                No truck - No problem for us! You can become part of our team with $0 payment. No credit score is needed. All you need to have is will to work, and we will take care for the rest!
                </div>
                <Row>
                <Col className="applyNowCarrer" xs={6} sm={6} md={6} lg={6}><button className="applyNowCarrer" onClick={handleApply}>Apply Now</button></Col>
                <Col className="callNowCarrer" xs={6} sm={6} md={6} lg={6}><button className="callNowCarrer"  onClick={hadleCall}>{!callNow ? "Call Now" : "773 733 4231"}</button></Col>
                </Row>
               <div className="LogoCarrer"><img src={logoApply} alt="" /></div>
              </div>}
                  </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4}>
                <div className="myFirstApply">
                {applyForm3 ? <div className="formCarrer">
                  <p className="titleCarrerForm">Apply Now</p>
                  <FormPage><button className="closeButtonCarrer" onClick={hadleCancelApply2}>cancel</button></FormPage>
              </div> :
              <div className="carrerText">
                <div className="applyHeaderPhoto"></div>
                 <div className="titleApply1">
                 COMPANY DRIVERS
                </div>
                <div className="itemsApply">

                </div>
                <div className="descJob paddingApplyDesc">
                    As part of our team, you will be paid weekly by direct deposite.
                    The payment is always on time, we are never late.
                    We offer bonuses for clean inspection and referal bonuses.
                    You will have a fuel card and I-pass.
                    You can rely on us!
                </div>
                <Row>
                <Col className="applyNowCarrer" xs={6} sm={6} md={6} lg={6}><button className="applyNowCarrer" onClick={hadnleApplye2}>Apply Now</button></Col>
                <Col className="callNowCarrer" xs={6} sm={6} md={6} lg={6}><button className="callNowCarrer" onClick={handleCall2}>{!callNow2 ? "Call Now" : "773 733 4231"}</button></Col>
                </Row>
               <div className="LogoCarrer"><img src={logoApply} alt="" /></div>
              </div>}
                </div>
              </Col>
          </Row>
          </div>
        </Container>
        <Footer/>
        <Bottom />
        </div>
    )

}
export default Drivers;