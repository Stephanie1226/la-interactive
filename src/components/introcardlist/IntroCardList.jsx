import React from 'react';
import './IntroCardList.Styles.css';
import IntroCard from '../introcard/IntroCard';

const IntroCardList = ({ cardinfo }) => {
	return(
		<div className='cardlist-box'>
			{
				cardinfo && cardinfo.map((info, i) => {
					return (
						<IntroCard 
							key={i}
							id={cardinfo[i].id}  
							imgsrc={cardinfo[i].imgurl}
							cardtitle={cardinfo[i].title} 
							cardtext={cardinfo[i].text} 
						/>
					);
				})
			}
	   </div> 
	);
}

export default IntroCardList;