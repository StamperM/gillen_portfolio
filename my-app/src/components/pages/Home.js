import React from 'react';
import '../styles/Home.css';
import me from '../../images/melissa.jpg'

export default function Home(){
    return(
        <div className='container-fluid .custom-container'>
            <div className='row row-col-2 align-items-center'>

           
            <div className='col home-cont'>
            <h2>Hi</h2>
            <h3>I'm Melissa Gillen</h3>
            </div>
            <div className='col pictureContainer home-cont'>
               <img className="about-img" src={me} alt='melissa'/>
            </div>
        </div>
        </div>
    )
}