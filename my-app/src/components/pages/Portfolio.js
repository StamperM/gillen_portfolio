import React from 'react';
import '../styles/Portfolio.css'
export default function  Portfolio(){
    return(
<div className='container'>
<div className="row row-col">
  
  <div className="col card">
    <img className="card-img-top pimg" src='./newHeights2.png' alt='workoutsite' />
    <div className="card-body">
      <h5 className="card-title">New Heights Landing Page</h5>
      <p className="card-text"> <a href='https://stamperm.github.io/landing-page/' >Deployed Site</a></p>
      <p className="card-text"><small className="text-muted"><a href='https://github.com/StamperM/landing-page' >GitHub Repo</a></small></p>
    </div>
  </div>
  <div className="col card">
    <img className="card-img-top pimg" src='./poke.png' alt='pokedex' />
    <div className="card-body">
      <h5 className="card-title">PokeDex</h5>
      <p className="card-text"> <a href='https://stamperm.github.io/velocirapt-vars--pokedex/' >Deployed Site</a></p>
      <p className="card-text"><small className="text-muted"><a href='https://github.com/StamperM/velocirapt-vars--pokedex' >GitHub Repo</a></small></p>
    </div>
  </div>
  <div className="col card">
    <img className="card-img-top pimg"  src='./coming-soon.jpg' alt='coming soon' />
    <div className="card-body">
      <h5 className="card-title">Coming Soon</h5>
      <p className="card-text"> <a href='https://stamperm.github.io/walkItOut/'>Deployed Site</a></p>
      <p className="card-text"><small className="text-muted"><a href='https://github.com/StamperM/walkItOut' >GitHub Repo</a></small></p>
    </div>
</div>

 </div>
 <div className='container'> 
 <div className="row row-col">
  <div className="col card">
    <img className="card-img-top pimg" src='./weatherApp.png' alt='weathersite' />
    <div className="card-body">
      <h5 className="card-title">Weather App</h5>
      <p className="card-text"><a href='https://stamperm.github.io/WhatsTheWeather/' >Deployed Site</a></p>
      <p className="card-text"><small class="text-muted"> </small><a href='https://github.com/StamperM/WhatsTheWeather' >GitHub Repo</a></p>
    </div>
  </div>
  <div className="col card">
    <img className="card-img-top pimg" src='./workoutsite.png' alt='workoutsite' />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text"> <a href='https://homefitwellness.herokuapp.com/' >Deployed Site</a></p>
      <p className="card-text"><small class="text-muted"> <a href='https://github.com/StamperM/All-Things-Fit' >GitHub Repo</a></small></p>
    </div>
  </div>
  <div className="col card">
    <imgc className="card-img-top pimg"  src='./OldPortfolio.png' alt='portfolio' />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text"><a href='https://stamperm.github.io/gillen-portfolio-/' >Deployed Site</a></p>
      <p className="card-text"><small className="text-muted"><a href='https://github.com/StamperM/gillen-portfolio-' >GitHub Repo</a> </small></p>
  
    </div>
    </div>
    </div>
    </div>
    </div>
)
}