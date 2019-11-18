import React from 'react';
import { Container } from 'react-bootstrap';

const BarrocoInfo = () => {
    return(
        <Container className="text-center m-auto">
		<h2><span class="barroco">Barroco</span> AREPA BAR & CONCERT CAFE</h2>
		<h3>WORK AT BARROCO</h3>
		<p>Send a private message through Facebook with resume</p>
        </Container>
    );
}

const VisitUs = () => {
    return(
        <Container fluid className="text-center">
        <h3 className="py-3">VISIT US</h3>
		<ul className="d-flex justify-content-around flex-wrap">
			<li className="py-4">
                <li><h6>BARROCO LAKEWOOD</h6></li>
				<li>12906 Madison Ave</li>
		        <li>Lakewod, OH 44107</li>
				<li>Tel: 216-221-8127</li>
			</li>
			<li className="py-4">
				<li><h6>BARROCO LARCHMERE</h6></li>
                <li>12718 Larchmere Blvd.</li>
                <li>Cleveland, OH 44120 </li>
                <li>Tel: 216-938-9301</li>
			</li>
			<li className="py-4">
                <li><h6>BARROCO CROCKER PARK
			(COMING SOON)</h6></li>
            <li>287 Crocker Park Blvd.</li>
            <li>Westlake, OH 44145</li>
			</li>
		</ul>
        </Container>
    );
}

const Footer = () => {
    return (
        <div className="footer-wrapper d-flex justify-content-around">
            <BarrocoInfo />
            <VisitUs />
        </div>
    )
}

export default Footer;
