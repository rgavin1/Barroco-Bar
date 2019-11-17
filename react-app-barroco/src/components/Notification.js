import React from 'react';
import { Container } from 'react-bootstrap';

const Notification = () => {
    return (
        <Container className="bg-warning d-flex m-auto" fluid>
            <ul className="d-flex m-auto flex-wrap justify-content-around" >
			<li>Birdtown (Lakewood, OH) - Larchmere (Cleveland, OH) - Crocker Park (coming soon)</li>
			<li className="mx-4">Open daily at 11am</li>
			<li>No Reservations</li>
		    </ul>
        </Container>
    )
}

export default Notification;
