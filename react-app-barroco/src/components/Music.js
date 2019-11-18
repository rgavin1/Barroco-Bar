import React from 'react';
import { Container } from 'react-bootstrap';

const Music = () => {
    return (
        <div className="d-flex justify-content-around flex-wrap">
			<ul className="m-auto text-center py-5" >
             <li><h3 className="text-center">LIVE MUSIC</h3></li>
			 <li>Lakewood: EVERY TUESDAY &  SATURDAY at 7pm</li>
			 <li>Larchmere: EVERY MONDAY & FRIDAY at 7pm</li>
			 <li>Crocker Park: COMING SOON</li>
			</ul>
            <div>    
			<img style={{
                maxWidth: '450px',
                minWidth: '300px',
                height: 'auto'

            }} src="https://static.wixstatic.com/media/cb2e86_0254f683ccd24e898459a0ad6a1766f6~mv2_d_2048_1356_s_2.jpg/v1/fill/w_2048,h_1169,al_c,q_90/cb2e86_0254f683ccd24e898459a0ad6a1766f6~mv2_d_2048_1356_s_2.jpg" />
            </div>
        </div>
    )
}

export default Music;