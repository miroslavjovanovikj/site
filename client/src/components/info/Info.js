import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import '../../style/css/info/Info.css';

const Info =(props)=>{
  return(
    <section className="ListOfServices">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="TitleDiv">WHY YOU SHOULD CHOOSE WIDER INC?</div>
              <div className="textDiv">Drivers in Wider Inc are considered as part of our family. We are always planning ahead, taking care that we make the best home time for you. For us the most important thing is your time to be managed good, so you can be able to spend more time with your family.
In our company, you will never have an issue with the paycheck. We pay with direct deposit and we are never late. You can be sure that the payment here is always on time.
Our drivers and owner-operators are equal. We have 24/7 support and no force dispatch! 
We work hard, but we are always friendly, taking care for you, your safety, and listening to your needs.
You will never be ‘just a number’ or ‘just another driver’ to us!
</div>
            </Col>
            {/* {props.infoItems.map(item=>(
              <Col className="itemsInfo" key={Math.random()} xs={12} md={4} lg={4}>
                    {item.infoItem}
              </Col>
            ))} */}
          </Row>
      </Container>
    </section>
  )
}
export default Info
