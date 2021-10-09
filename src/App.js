import React from 'react'
import Accordion from './Components/Accordion';
import Floating from './Components/Floating';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Overview from './Components/Overview'
import PicLevels from './Components/PicLevels'
import PriceLocation from './Components/PriceLocation';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 top-section">
          <Header />
          <div className="front-center-text">
            <div><h2>KALPATARU AVANTE</h2></div>
            <div><h5>SANATH NAGAR</h5></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <PriceLocation />
          <Overview />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <PicLevels />
          <Floating/>
          <Accordion/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
