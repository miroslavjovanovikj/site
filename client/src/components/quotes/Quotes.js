import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import quoteIcon from './ribbon.svg';
import quotesIcon from '../../assets/quotation-mark.svg'
import '../../style/css/quotes/Quotes.css'
// const slideImages = [
//   '/slide_2.jpg',
//   'images/slide_3.jpg',
//   'images/slide_4.jpg'
// ];
const style = {
    textAlign: "center",
    paddingTop: "40px",
    paddingBottom:"80px",
    width:"70%",
    margin:"0 auto",
    fontSize: "30px",
    marginBottom:"20px",

  };
  const profilePhoto ={
    height:"160px",
    width:"160px",
    marginTop:"30px"
  }
 
  const customerName={
      padding:"10px",
      fontSize:"18px"
  }
const Quotes = () => {
    return (
      <div className="slide-container">
        <Slide className="quotes">
          <div className="each-slide">
          <img style={{...profilePhoto}}src={quoteIcon} alt="" />
          <div style={{...customerName}} className="quoteUser">Nemanja Rakic</div>
            <div style={{...style, 'backgroundImage': `url(${'https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg'})`}}>
              <div>  <img src={quotesIcon} alt="" /></div>
              <span className="quoteUser">I work for Wider Inc 4 years, all employees are professionals in the job. I can't remember a day when I was with NO load. And, i never had an issue with the paycheck in these 4 years.</span>
            </div>
          </div>
          <div className="each-slide">
          <img style={{...profilePhoto}}src={quoteIcon} alt="" />
          <div style={{...customerName}}  className="quoteUser">Carlos Dickey</div>
            <div style={{...style, 'backgroundImage': `url(${'https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg'})`}}>
              <div>  <img src={quotesIcon} alt="" /></div>
              <span className="quoteUser"> This is one of the best trucking companies where i have worked, it's very professional, there are nice people to work for, who always do what they say. Your paycheck is always on time and the most important is that they care about their drivers. So, if you are looking for a good company to drive for, this is the one.</span>
            </div>
          </div>
          <div className="each-slide">
          <img style={{...profilePhoto}}src={quoteIcon} alt="" />
          <div style={{...customerName}} className="quoteUser">Mirko Popovic</div>
            <div style={{...style, 'backgroundImage': `url(${'https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg'})`}}>
            <div>  <img src={quotesIcon} alt="" /></div>
              <span className="quoteUser">My first and current company since late 2014. In 2018 i worked elsewhere, but comeback. You can do your own research. I am happy here.</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Quotes;
