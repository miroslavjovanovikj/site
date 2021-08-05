import React,{useEffect} from 'react';
import '../../style/css/shippers/Shippers.css';
import { Row, Col } from 'react-bootstrap';
import Footer from '../../components/footer/Footer';
import Bottom from "../../components/bottom/Bottom";
import LogoWider from '../../assets/wider-v2.svg';
const Shippers = () =>{
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 
    return(
        <div>
           <div className="CoverDivShipper">
           <div className="CoverDivGlassShipper">
             A COMPANY YOU CAN TRUST
             <div className="logoCoverPhoto"><img className="logoShippers" src={LogoWider}/></div>
         </div>
         
          </div>
          <Row>
            <Col sm={12} md={12} lg={12}>
            <h1 className='shiperItemT'>WE OFFER</h1>
                <div className="shippersText">
                   We are a professional team, developing true partnership with our shippers.
                   We have a team of experienced drivers and experienced dispachers who can handle every situation and answer all your needs.
                   The safety of the drivers and the items we haul is most important for us.
                   We haul: General Freight; Metal: Sheets, Coils, Rolls; Logs, Poles, Beams, Lumber, Building Materials, US Mail, Paper Products, Construction, Hospital Equipment, and more.
                   Our team is always on time!
                   Call us and see what can we offer you!
                </div>
             </Col>
           </Row>
           <Footer/>
           <Bottom />
        </div>
    )
}
export default Shippers;