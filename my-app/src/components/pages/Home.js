import React from 'react';
import '../styles/Home.css';


export default function Home(){
    return(
        <div className='container-fluid .custom-container'>
            <div className='row row-col-2 align-items-center'>

           
            <div className='col'>
            <h2>Hi</h2>
            <h3>I'm Melissa Gillen</h3>
            </div>
            <div className='col pictureContainer'>
               <img className="about-img" src='./melissa.jpg' alt='melissa'/>
            </div>
        </div>
        </div>
    )
}