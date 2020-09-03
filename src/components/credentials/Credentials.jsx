import React from 'react';
import './Credentials.Styles.css';
import { IconContext } from "react-icons";
import { FaTrophy } from 'react-icons/fa';

const Credentials = () => {
	return (
		<div className='credentials-section'>
			<IconContext.Provider value={{ color: "black", className: "trophy-icon" }}>
				<div className='tc trophy-icon'>
					<FaTrophy />
				</div>
			</IconContext.Provider>
			<h3 className='tc'>Credentials</h3>
			<ul>
				<li>Masters of Arts in Exercise Psychology</li>
				<li>Bachelor of Physical Education</li>
				<li>Certified Coach with CTI, WCI & John Maxwell</li>
				<li>TRX (Suspension and Rip Trainer Certified)</li>
				<li>Pilates Mat certified</li>
				<li>Alberta Fitness Leadership Certification Association</li>
				<li>Chek Nutrition and Lifestyle Coach Level II</li>
				<li>IDEA Member - International Fitness Professionals Organization</li>
				<li>Attendance at global fitness conferences</li>
				<li>Certified Coach with CTI, WCI and John Maxwell</li>
			</ul>
		</div>
	);
}


export default Credentials;