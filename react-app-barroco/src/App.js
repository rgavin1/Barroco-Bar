import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Notification from './components/Notification';
import Banner from './components/Banner';
import Introduction from './components/Introduction';
import BannerTwo from './components/BannerTwo';
import HappyHourContainer from './components/HappyHourContainer';
import Locations from './components/Locations';
import LiveMusic from './components/Music';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Notification />
      <Banner />
      <Introduction />
      <BannerTwo />
      <HappyHourContainer />
	  <LiveMusic />
	  <Locations />
	  <Footer />
	  <div className="text-center pb-2 m-auto">© 2018 By Barroco</div>
  </div>
  );
}

export default App;
