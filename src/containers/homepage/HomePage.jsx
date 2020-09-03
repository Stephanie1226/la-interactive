import React from 'react';
import './HomePage.styles.css';
import HomepageBackground from './images/hpbackground.jpg';
import { InfoCardData } from './data/InfoCardData';

import IntroCardList from '../../components/introcardlist/IntroCardList';
import Interest from '../../components/interest/Interest';
import Strength from '../../components/strength/Strength';
import Credentials from '../../components/credentials/Credentials';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return (
      <div className='homepage-container'>
      	<div 
      		className='hp-container-1' 
      		style={{backgroundImage:`url(${HomepageBackground})`}} 
      	>
	      	<div className='hp-container-1-intro'>
	    			<h1>Lana Asuchak</h1>
	    			<p>Hi, I am a Nationally Certified Fitness Consultant, <br />
	    			   Life Coach, Speaker and the owner of LA Interactive. <br />
	    			   With LA Interactive, I know that I can’t treat everyone the same. <br />
	    			   Your needs, interests, goals and fitness levels are all different.
	    			 </p>
	    		</div>
      	</div>
      	<div className='hp-container-2'>
      		<div className='container-2-child container-2-img'>
      		</div>
      		<div className="container-2-child container-2-introduction">
      			<h2>MA, BPE, AFLCA Trainer, CTI Coach, WCI Coach, John Maxwell Team Certified Coach, Trainer, Speaker</h2>
      		  <p>Lana has worked in the fitness industry and provided quality speaking, training, and workshops, 
      		  with proven results for over 20 years. She started her career in the fitness industry working in a 
      		  myriad of ways from part-time Sessional Instructor at a university to owning and operating her own 
      		  personal training business.<br /><br />
            She stays fit by teaching fitness classes, one of her favourite hobbies with Barre, Pilates and Spin
            as her top workouts. As a trainer of trainers with the AFLCA (Alberta Fitness Leadership Certification
            Association) she conducts workshops on people interested in getting certified in fitness throughout Alberta.
            Lana prides herself in staying current by attending conferences, reading industry journals and taking courses 
            every year.
            </p>
      		</div>
      	</div>
      	<div className='hp-container-3'>
      		<div className ='tc'>
	      		<span style={{ color: `#d597ce` }}>LIVE ACTIVE, </span>
	      		<span style={{ color: `#39375b` }}>BE ACTIVE !</span>
	      		<h3>How would you like to lose weight, boost your metabolism, and tone your entire body faster than you ever thought possible? How would you like to accomplish this in a fun, motivating and supportive environment?</h3>
	      	</div>
	      	<div className='description-cards'>
	      		<IntroCardList cardinfo={InfoCardData}/>
	      	</div>
      	</div>
      	<div className='hp-container-4'>
      		<Interest />
      		<Strength />
      		<Credentials />
      	</div>
      	<Footer />
      </div>
    );
}


export default HomePage;


