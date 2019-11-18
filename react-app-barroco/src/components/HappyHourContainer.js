import React from 'react';
import { Container } from 'react-bootstrap';
import HappyHrImageOne from '../assets/happyhourImg1.jpg';


const HappyHourMenuOne = () => {
	return (
		<Container fluid className="d-flex justify-content-between" style={{
            padding: '0',
			minHeight: '300px',
			maxHeight: '360px',
            width: '100%',
            backgroundColor: 'rgb(222,80,33)'
        }}>
		<Container className="m-auto">
		<h3 class="hh_heading1">Happy Hours</h3>
		<ul class="hh_menu1">
			<li>MONDAYS - $5 MOJITOS</li>
			<li>TUESDAYS - $5 SANGRIAS,  1/2 PRICED WINE BOTTLES</li>
			<li>WEDNESDAYS - $5 MARGARITAS</li>
			<li>THURSDAYS - $5 PIÑA COLADAS</li>
		</ul>
	</Container>
		<div style={{
			backgroundImage: `url(${HappyHrImageOne})`,
			width: '100%',
			height: 'inherit',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'
		}}></div>
		</Container>
	);
}

const HappyHourMenuTwo = () => {
	return (
		<div><div class="fancy_drink2"></div>
		<ul class="hh_menu2">
			<h4>MON-FRI 3PM-6PM</h4>
			<li>$5 COCKTAILS</li>
			<li>$4 DRAFTS</li>
			<li>1/2 PRICED APPETIZERS</li>
			<li>20% OFF LARGE GROUP APPETIZERS</li>
			<li>Our cocktails are all handmade, with mixes and fresh juices made in house.</li>
		</ul>
		</div>
	);
}

const HappyHourContainer = () => {
    return (
		<div>
			<HappyHourMenuOne />
			<HappyHourMenuTwo />
		</div>
    );
}

export default HappyHourContainer;