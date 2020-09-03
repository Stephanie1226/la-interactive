import React from 'react';
import './Strength.Styles.css';
import { IconContext } from "react-icons";
import { FaLightbulb } from 'react-icons/fa';

const Strength = () => {
	return (
		<div className='strength-section'>
			<IconContext.Provider value={{ color: "black", className: "lightbulb-icon" }}>
				<div className='tc lightbulb-icon'>
					<FaLightbulb />
				</div>
			</IconContext.Provider>
			<h3 className='tc'>Strength</h3>
			<ul>
				<li>Energy</li>
		    <li>Movitation</li>
		    <li>Accountability</li>
		    <li>Pilates/Core Training</li>
		    <li>Functional Training</li>
		    <li>Rehabilitative Training</li>
		    <li>Training & Coaching that is customized for the individual</li>
		    <li>Body shaping and toning</li>
		    <li>Overcoming fitness and life plateaus</li>
		    <li>Limited time workouts</li>
			</ul>
		</div>
	);
}


export default Strength;