import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Notification from './components/Notification';
import Banner from './components/Banner';
import Introduction from './components/Introduction';
import BannerTwo from './components/BannerTwo';
import HappyHourContainer from './components/HappyHourContainer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Notification />
      <Banner />
      <Introduction />
      <BannerTwo />
      <HappyHourContainer />
	<section class="loc-wrapper">
		<h2 class="location-heading">LOCATIONS</h2>
		<ul class="locations-container">
			<li class="cir">
				<h3><span class="heading1">Barroco</span> in Birdtown</h3>
				<p>12906 MADISON AVE<br/>
				LAKEWOOD, OH 44107<br/>
				216-221-8127</p>
			<img class="cir" src="https://static.wixstatic.com/media/cb2e86_366d631e05ff463bacb0e51c866eb3cf~mv2.jpg/v1/fill/w_757,h_606,al_l,q_85/cb2e86_366d631e05ff463bacb0e51c866eb3cf~mv2.jpg" />
			</li>
			<li class="cir">
				<h3><span class="heading1">Barroco</span> in Larchmere</h3>
				<p>12718 LARCHMERE BLVD<br/>
				CLEVELAND, OH 44120<br/>
				216-938-9301</p>
				<img class="cir" src="https://static.wixstatic.com/media/cb2e86_de7a586781164a2fb05e923c0f3da2b0~mv2.jpg/v1/fill/w_976,h_778,al_c,q_85,usm_0.66_1.00_0.01/cb2e86_de7a586781164a2fb05e923c0f3da2b0~mv2.jpg" />
			</li>
			<li>
				<h3><span class="heading1">Barroco</span> in Crocker Park (coming soon)</h3>
				<p>287 CROCKER PARK BLVD<br/>
				WESTLAKE, OH 44145<br/>
				COMING SOON</p>
				<img class="cir" src="https://static.wixstatic.com/media/cb2e86_4a123699e56142f9a271e2118987f9a9~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_976,h_778,al_c,q_85,usm_0.66_1.00_0.01/cb2e86_4a123699e56142f9a271e2118987f9a9~mv2_d_4032_3024_s_4_2.jpg" />
			</li>
		</ul>
	</section>
	<section class="live-music">
			<h2>LIVE MUSIC</h2>
				<ul>
					<li>Lakewood: EVERY TUESDAY &  SATURDAY at 7pm</li>
					<li>Larchmere: EVERY MONDAY & FRIDAY at 7pm</li>
					<li>Crocker Park: COMING SOON</li>
				</ul>
			<img src="https://static.wixstatic.com/media/cb2e86_0254f683ccd24e898459a0ad6a1766f6~mv2_d_2048_1356_s_2.jpg/v1/fill/w_2048,h_1169,al_c,q_90/cb2e86_0254f683ccd24e898459a0ad6a1766f6~mv2_d_2048_1356_s_2.jpg" />
</section>
<footer class="footer-wrapper">
	<ul class="footer-content">
		<li>
		<h2><span class="barroco">Barroco</span> AREPA BAR & CONCERT CAFE</h2>
		<h3>WORK AT BARROCO</h3>
		<p>Send a private message through Facebook with resume</p>
			</li>
		<li>
		<h3>VISIT US</h3>
		<ul class="visit-us">
			<li>
				<h4>BARROCO LAKEWOOD</h4>
				<p>12906 Madison Ave<br/>
		Lakewod, OH 44107<br/>
					Tel: 216-221-8127</p>
			</li>
			<li>
				<h4>BARROCO LARCHMERE</h4>
		<p>12718 Larchmere Blvd. <br/>
		Cleveland, OH 44120 <br/>
			Tel: 216-938-9301</p>
			</li>
			<li>
		<h4>BARROCO CROCKER PARK
			(COMING SOON)</h4>
		<p>287 Crocker Park Blvd. <br/>
			Westlake, OH 44145</p>
			</li>
		</ul>
			</li>
	</ul>
	<div>
		© 2018 By Barroco
	</div>
</footer>
  </div>
  );
}

export default App;
