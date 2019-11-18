import React from 'react';
import { Container } from 'react-bootstrap';

const BirdTown = () => {
    return(
        <div className="d-flex flex-column text-center" >
            <ul className="d-flex flex-column text-center">
                <li><h4><span class="heading1">Barroco</span> in Birdtown</h4></li>
                <li>12906 MADISON AVE</li>
                <li>LAKEWOOD, OH 44107</li>
                <li>216-221-8127</li>
                <li><img className="mt-2" style={{
                height: '100px',
                width: '100px',
                borderRadius: '100%'
                }}
            src="https://static.wixstatic.com/media/cb2e86_366d631e05ff463bacb0e51c866eb3cf~mv2.jpg/v1/fill/w_757,h_606,al_l,q_85/cb2e86_366d631e05ff463bacb0e51c866eb3cf~mv2.jpg" /></li>
            </ul>
        </div>
    )
}

const Larchmere = () => {
    return(
        <div className="d-flex flex-column text-center" >
            <ul className="d-flex flex-column text-center">
                <li><h4><span class="heading1">Barroco</span> in Larchmere</h4></li>
                <li>12718 LARCHMERE BLVD</li>
                <li>CLEVELAND, OH 44120</li>
                <li>216-938-9301</li>
                <li><img className="mt-2" style={{
                height: '100px',
                width: '100px',
                borderRadius: '100%'
                }}
            src="https://static.wixstatic.com/media/cb2e86_de7a586781164a2fb05e923c0f3da2b0~mv2.jpg/v1/fill/w_976,h_778,al_c,q_85,usm_0.66_1.00_0.01/cb2e86_de7a586781164a2fb05e923c0f3da2b0~mv2.jpg" /></li>
            </ul>
        </div>
    );
}

const CrockerPark = () => {
    return(
        <div className="d-flex flex-column text-center" >
            <ul className="d-flex flex-column text-center">
                <li><h4><span class="heading1">Barroco</span> in Crocker Park (coming soon)</h4></li>
                <li>287 CROCKER PARK BLVD</li>
                <li>WESTLAKE, OH 44145</li>
                <li>COMING SOON</li>
                <li><img className="mt-2" style={{
                height: '100px',
                width: '100px',
                borderRadius: '100%'
                }}
            src="https://static.wixstatic.com/media/cb2e86_4a123699e56142f9a271e2118987f9a9~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_976,h_778,al_c,q_85,usm_0.66_1.00_0.01/cb2e86_4a123699e56142f9a271e2118987f9a9~mv2_d_4032_3024_s_4_2.jpg" /></li>
            </ul>
        </div>
    );
}

const Locations = () => {
    return (
        <Container fluid>
        <h2 className="location-heading text-center py-5">LOCATIONS</h2>
        <Container className="d-flex flex-wrap justify-content-around">
            <BirdTown className="my-2" />
            <CrockerPark className="my-2" />
            <Larchmere className="my-2" />
        </Container>
        </Container>
    )
}

export default Locations;