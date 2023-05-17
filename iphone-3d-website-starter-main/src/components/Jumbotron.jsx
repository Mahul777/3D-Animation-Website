import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png"
const Jumbotron = () => {
   //If we click Learn More of Jumbotron section then it scroll down into SoundSection
   const handleLearnMore=()=>
   {
      //we need to take top element and scroll down
      const element = document.querySelector(".sound-section");
      window.scrollTo({
      top:element?.getBoundingClientRect().top,
      left:0,//we don't want horizontal scrolling
      behaviour:`smooth`
    })
     }
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={Iphone} alt="iPhone 14 Pro" />

      <p className="text">Big and Bigger</p>
      <span className="description">
        From $41.62/mo. for 24 mo. or $999 before trade-in
      </span>

      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>Learn more</a>
        </li>
      </ul>
      <img className= 'iphone-img' src={HoldingIphone} alt="iphone"/>
    </div>
  );
};

export default Jumbotron;
