import React from 'react';
import '../styles/Portfolio.css'
import {Link} from 'react-router-dom'
import Weather from '../../images/Weather.png'
import Soccer from '../../images/Soccer.png'
import Caffiends from '../../images/caffiends.png'
import poke from '../../images/poke.png'
import Old from '../../images/OldPortfolio.png'
import Workout from '../../images/workoutsite.png'





export default function  Portfolio(){
    return(
<div className='container'>
<div className="row row-col">
  
  <div className="col card cust-card">
    <img className="card-img-top pimg" src={Soccer} alt='workoutsite' />
    <div className="card-body">
      <h5 className="card-title">New Heights Landing Page</h5>
      <p className="cust-card-text"> <Link to='https://stamperm.github.io/landing-page/' >Deployed Site</Link></p>
      <p className="cust-card-text"><small className="text-muted"><Link to='https://github.com/StamperM/landing-page' >GitHub Repo</Link></small></p>
    </div>
  </div>
  <div className="col card cust-card">
    <img className="card-img-top pimg" src={poke} alt='pokedex' />
    <div className="card-body">
      <h5 className="card-title">PokeDex</h5>
      <p className="cust-card-text"> <Link to='https://stamperm.github.io/velocirapt-vars--pokedex/' >Deployed Site</Link></p>
      <p className="cust-card-text"><small className="text-muted"><Link to='https://github.com/StamperM/velocirapt-vars--pokedex' >GitHub Repo</Link></small></p>
    </div>
  </div>
  <div className="col card cust-card">
    <img className="card-img-top pimg"  src={Caffiends} alt='coffeeShop' />
    <div className="card-body">
      <h5 className="card-title">Caffiends Coffee Shop</h5>
      <p className="cust-card-text"> <Link to ='https://github.com/devAsmi/caffiends'>Deployed Site</Link></p>
      <p className="cust-card-text"><small className="text-muted"><Link to ='https://github.com/StamperM/walkItOut' >GitHub Repo</Link></small></p>
    </div>
</div>

 </div>
 <div className='container'> 
 <div className="row row-col">
  <div className="col card cust-card">
    <img className="card-img-top pimg" src={Weather} alt='weathersite' />
    <div className="card-body">
      <h5 className="card-title">Weather App</h5>
      <p className="cust-card-text"><Link to='https://stamperm.github.io/WhatsTheWeather/' >Deployed Site</Link></p>
      <p className="cust-card-text"><small className="text-muted"> </small><Link to='https://github.com/StamperM/WhatsTheWeather' >GitHub Repo</Link></p>
    </div>
  </div>
  <div className="col card cust-card">
    <img className="card-img-top pimg" src={Workout}alt='workoutsite' />
    <div className="card-body">
      <h5 className="card-title">All Things Fit</h5>
      <p className="cust-card-text"> <Link to='https://homefitwellness.herokuapp.com/' >Deployed Site</Link></p>
      <p className="cust-card-text"><small className="text-muted"> <Link to='https://github.com/StamperM/All-Things-Fit' >GitHub Repo</Link></small></p>
    </div>
  </div>
  <div className="col card cust-card">
    <img className="card-img-top pimg"  src={Old} alt='portfolio' />
    <div className="card-body">
      <h5 className="card-title">Old Portfolio</h5>
      <p className="cust-card-text"><Link to='https://stamperm.github.io/gillen-portfolio-/' >Deployed Site</Link></p>
      <p className="cust-card-text"><small className="text-muted"><Link to='https://github.com/StamperM/gillen-portfolio-' >GitHub Repo</Link> </small></p>
  
    </div>
    </div>
    </div>
    </div>
    </div>
)
}