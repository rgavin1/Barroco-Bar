import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import HeroImage from '../assets/alcohol-ale-bar-bg.jpg';
import BarrocoLogo from '../assets/baccoro-logo.png';

const Banner = () => {
    return (
        <Jumbotron style={{
            backgroundImage: `url(${HeroImage})`,
            maxWidth: '100%',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            margin: '0',
            padding: '0'
        }} fluid>
        <Container className="d-flex flex-column align-items-center" style={{
            height: 'inherit',
            padding: '30px 0'
        }}>
            <div style={{
                    backgroundImage: `url(${BarrocoLogo})`,
                    height: '200px',
                    width: '400px',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    marginTop: 'auto',
                    marginBottom: 0,
                    paddingBottom: 0
                }}>
            </div>
            <div className="mb-auto text-uppercase" style={{
                fontSize: '16px',
                color: 'white'
            }}>Arepa Bar + Concert Cafe</div>
        </Container>
        </Jumbotron>
    )
}

export default Banner;