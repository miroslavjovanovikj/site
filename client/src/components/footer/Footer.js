import React from 'react';
import '../../style/css/footer/Footer.css';
import { footerData } from '../../components/footer/footerData'
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <section>
      <Row className='bacgroundCover'>
        <Col xs={12} md={12} lg={12}>
        </Col>
        <Container>
          <Row>{footerData.map(fItem => (
            <Col key={fItem.id} className="FooterDiv" xs={12} md={4} lg={4}>
              <div className="itemsFrame">
                <h5 className="titleFooter">{fItem.title}</h5>
                <p>{fItem.body}</p>
              </div>
            </Col>
          ))}</Row>
        </Container>
      </Row>
    </section>
  )
}
export default Footer;
