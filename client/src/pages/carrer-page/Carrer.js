import React,{useEffect} from 'react';
import '../../style/css/carrer-page/Carrer.css'
import { Row, Col } from 'react-bootstrap';
import Footer from '../../components/footer/Footer';
import Bottom from "../../components/bottom/Bottom";

const Carrer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 
    return(
        <div>
        <div className="CoverDivCarrer">
           <div className="CoverDivGlassCarrer">
              CHOOSE AS FOR YOUR BETERR FUTURE
            </div>
          </div>
           <Row>
              <Col sm={12} md={12} lg={12}>
                  <h1 className='carrerItemT'>HIRING</h1>
                    <div className="carrerTextPage" >
                      Out drivers are considered as part of our family.
                      We are never late with the payment, you will be paid weekly, by direct deposit.
                      We have bonuses for clean inspection and referal bonuses.
                      We transport: Sheets, coils, rolls, building matherials, constructions and more...
                      Dont hesitate - Apply for the job!
                  </div>
                    </Col>
                </Row>
           <Row>
                    <Col sm={12} md={12} lg={12}>
                    <div className="arreaTitleCarrer">Wider Inc Hiring Area</div>
                    <div className="infoBasedCarrer">
                    <i className="fas fa-circle Desired"></i>
                    <div>Home Weekly</div>
                    </div>
                   <div className="infoWikkly">
                   <i className="fas fa-circle Weekly"></i>
                   <div>Areas considered based on desired home time </div>
                   </div>
                    <div className="imgMapAreaCarrer" ></div>
                    </Col>
                </Row>
           <Col md={12} sm={12} lg={12} xs={12}></Col>
        <Footer/>
        <Bottom />
        </div>
    )

}
export default Carrer;
