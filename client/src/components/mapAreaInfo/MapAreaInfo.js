import React from 'react';
import { Row, Col } from "react-bootstrap";
// import AreaMap from '../../style/css/MapAreaInfo/US-Map_04.png';
import '../../style/css/MapAreaInfo/MapAreaInfo.css'
const MapAreaInfo = () => {
    return(
        <div>
          
                <Row>
                    <Col sm={12} md={12} lg={12}>
                    <div className="arreaTitle">Wider Inc Hiring Area</div>
                    <div className="infoBased">
                    <i className="fas fa-circle Desired"></i>
                    <div>Home Weekly</div>
                    </div>
                   <div className="infoWikkly">
                   <i className="fas fa-circle Weekly"></i>
                   <div>Areas considered based on desired home time </div>
                   </div>
                    <div className="imgMapArea" ></div>
                    </Col>
                </Row>
        
        </div>
    )
}
export default MapAreaInfo;