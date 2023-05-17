import React from "react";

const SoundSection = () => {
  const handleLearnMore=()=>
{
  const element = document.querySelector(".display-section");
   window.scrollTo({
    top:element?.getBoundingClientRect().bottom,
    left:0, //we don't horizontal scroll
    behavior:"smooth"
 })
}
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound System</h2>
          <p className="text">Fell the base.</p>
          <span className="description">
            For $41.62/mo. for 24 mo. or $999 before trade-in
          </span>
          
          <ul className="link">
          <li style={{ display: 'inline-block' }}>
              <button className="button">Buy</button>
            </li>
            <li style={{ display: 'inline-block' }}>
              <a className="link" onClick={handleLearnMore}>Learn more</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoundSection;
