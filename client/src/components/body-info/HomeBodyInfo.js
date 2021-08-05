import React,{useLayoutEffect, useState } from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import blueTrack from '../../files/truck-blue-cleared.png';
import redTrack from '../../files/truck-red-cleared.png';
import Aos from 'aos';
import {Link} from 'react-router-dom';
import '../../style/css/HomeBodyInfo/HomeBodyInfo.css';

const HomeBodyInfo = (props) =>{

    Aos.init();
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    
  return(
    <div>
       
      <Container>
         <Row>
           <Col data-aos="fade-up"  data-aos-duration={1000} className="AboutUsText" xs={12} md={12} lg={12}>
             {props.bodyInfo.bodyTitle}
             <p className="AboutUsNote">{props.bodyInfo.aboutUsText}</p>
           </Col>
           {size[0] < 980 ?
            <Col data-aos="zoom-out-down"  data-aos-duration={1000} className="AboutUsText" xs={12} md={12} lg={12}>
            <Link style={{ textDecoration: 'none' }} className="buttonAppl" to="/contact">Apply Now</Link></Col>:
            <React.Fragment>
                   <Col data-aos="fade-right"
                 data-aos-offset="300"
                 data-aos-duration={600}
                 data-aos-easing="ease-in-sine" xs={12} md={12} lg={6}>
             <img className="AboutUsImg" src={blueTrack} alt="truck" />
             </Col>
             <Col data-aos="fade-left"
             data-aos="fade-left"
                  data-aos-duration={600}
             data-aos-offset="300"
             data-aos-easing="ease-in-sine " xs={12} md={12} lg={6}>
               <img className="AboutUsImg2" src={redTrack} alt="truck" />
           
             </Col>
           
    </React.Fragment>
             }
             <Col data-aos="zoom-out-down"  data-aos-duration={1000}  xs={12} md={12} lg={12}>
           </Col>
         </Row>
     </Container>
    </div>
  )
}
export default HomeBodyInfo;
