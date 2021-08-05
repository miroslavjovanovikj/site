import React from 'react';
import {Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../style/css/contactInfo/ContactInfo.css'
const ContactInfo = () =>{
    return(
        <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
                
                <div className="ContactInfo">
                    BE ALWAYS ON TIME IN EVERY PLACE WHERE PEOPLE NEED YOUR PRODUCTS 
                    <p className="infoUnder">BEST WAY FOR BUSINESSES TO DELIVER STUFF</p>
                    <h5>CALL US</h5>
                    <p className="contactNumber"> < Link to='/home' style={{ textDecoration: 'none', color:'white' }} > 773 733 4231</Link></p>
                </div>
            </Col>
        </Row>
    )
}
export default ContactInfo;