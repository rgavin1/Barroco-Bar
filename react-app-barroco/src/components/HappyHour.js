import React from 'react';


const HappyHour = () => {
    return (
        <div style={{
            position: 'relative',
            top: '-22px',
            padding: '1em',
            height: '300px',
            width: '100%',
            backgroundColor: 'rgb(222,80,33)'
        }}>
        <section>
		<ul >
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
		</section>
        </div>
    )
}

export default HappyHour;