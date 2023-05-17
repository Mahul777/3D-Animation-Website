import React from 'react'

const DisplaySection = ({triggerPreview}) => {

  const handleScrollToTop =() =>
{
 window.scrollTo({top:0,left:0,behaviour:"smooth"})

}
  
  return (
     <div className='display-section wrapper'>
       <h2 className='title'>New</h2>
       <p className='text'>Brillant </p>
       <spam className='description'>
       A display that's up to 2x brighter in the sun
        </spam>
 
      <button className ="button" onClick={triggerPreview}>Try me!</button>
      <button className ="back-button" onClick={handleScrollToTop}>Top</button>
      </div>
  );
}

export default DisplaySection
