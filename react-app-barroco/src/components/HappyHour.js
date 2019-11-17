import React from 'react';


const HappyHour = () => {
    return (
        <div className="d-flex justify-content-around" style={{
            padding: '1em',
            height: '500px',
            width: '100%',
            backgroundColor: 'rgb(222,80,33)'
        }}>
		<ul>
			<li>
				<h3 class="hh_heading1">Happy Hours</h3>
					<ul class="hh_menu1">
						<li>MONDAYS - $5 MOJITOS</li>
						<li>TUESDAYS - $5 SANGRIAS,  1/2 PRICED WINE BOTTLES</li>
						<li>WEDNESDAYS - $5 MARGARITAS</li>
						<li>THURSDAYS - $5 PIÑA COLADAS</li>
					</ul>
			</li>
		</ul>
			<div class="fancy_drink"></div>
        </div>
    )
}

export default HappyHour;