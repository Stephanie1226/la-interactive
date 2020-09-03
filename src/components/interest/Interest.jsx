import React from 'react';
import './Interest.Styles.css';
import { IconContext } from "react-icons";
import { FaBiking } from 'react-icons/fa';

const Interest = () => {
	return (
		<div className='interest-section'>
			<IconContext.Provider value={{ color: "black", className: "bike-icon" }}>
				<div className='tc bike-icon'>
					<FaBiking />
				</div>
			</IconContext.Provider>
			<h3 className='tc'>Personal Interests</h3>
			<ul><li>Hiking</li>
				  <li>Power Walking</li>
				  <li>X Country Skiing</li>
				  <li>Snow Shoeing</li>
				  <li>Reading</li>
				  <li>Traveling</li>
				  <li>Volunteering (Local & International)</li>
				  <li>Cats</li>
				  <li>People</li>
				  <li>Spirituality</li>
			</ul>
		</div>
	);
}


export default Interest;