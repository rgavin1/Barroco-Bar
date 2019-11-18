import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Notification from './components/Notification';
import Banner from './components/Banner';
import Introduction from './components/Introduction';
import BannerTwo from './components/BannerTwo';
import HappyHourContainer from './components/HappyHourContainer';
import Locations from './components/Locations';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Notification />
      <Banner />
      <Introduction />
      <BannerTwo />
      <HappyHourContainer />
	  <Locations />
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
