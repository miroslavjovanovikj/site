import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../../style/css/card-items/CardItems.css';
import Aos from 'aos';

const Card = (props) => {
 

  return (
    <section className="underItemsContainer">
  
        <Row>
          {props.cardItems.map((item, idx) => (

            <Col data-aos="flip-left"   data-aos-duration={2000} id="CardColMargin" key={item.id} xs={12} sm={6} md={6} lg={3}>
           { idx===0 ? <Link to="/drivers"> <div key={item.id} className={item.itemClass} >
                {item.itemText}
                <div className="moreText">{item.moreText}</div>
                <div>
                <i className={`iconsCard ${item.icon}`}></i>
                </div>
                <img  src={item.link} alt="" /> 
              </div></Link> : <div key={item.id} className={item.itemClass} >
                {item.itemText}
                <div className="moreText">{item.moreText}</div>
                <div>
                <i className={`iconsCard ${item.icon}`}></i>
                </div>
                <img className="smartWayImg" src={item.link} alt="" /> 
              </div>}
            </Col>
          ))}
        </Row>
    
    </section>
  )
}

export default Card
