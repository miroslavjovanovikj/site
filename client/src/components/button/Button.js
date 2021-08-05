import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../style/css/button/Button.css";
const Button = ({ children, ...props }) => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div>
      {size[0] < 940 ? (
        <div className="ApplyNowPhone">
          Call us from Monday till Friday from 7:00 a.m. to 5:00 p.m
          <div className="appNowPhone">
            <a href="tel:7737334213">
              <i className="fas fa-phone-alt phoneIcon"></i> 773 733 4231
            </a>
          </div>
        </div>
      ) : (
        <div className="ApplyNow">
          {children}
          <div className="appNow">
            <Link to="/contact">Apply now</Link>
          </div>
          <div className="appNowCall">
            <a href="tel:7737334213">
              <i className="fas fa-phone-alt phoneIcon"></i> 773 733 4231
            </a>
          </div>
          <div className="slider-wrapper"></div>
        </div>
      )}  
    </div>
  );
};
export default Button;
