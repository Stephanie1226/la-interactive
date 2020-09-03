import React from 'react';
import './IntroCard.Styles.css';

const IntroCard = ({ id, imgsrc, cardtitle, cardtext }) => {
  return(
  	<div className='dib br3 pa1 ma3 grow bw2 shadow-5 card-container'>
  		<img alt='intro-card' src={require("" + imgsrc)} />
  		<div>
    		<h3>{cardtitle}</h3>
    		<p>{cardtext}</p>
  		</div>
	  </div>
	);
}

export default IntroCard;