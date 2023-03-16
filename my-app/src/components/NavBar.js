import React from "react";
import'../components/styles/NavBar.css'
import {Link} from 'react-router-dom'

export default function NavBar(currentPage,pageChange){
    return(
      <ul className="nav justify-content-end">
        <li className="nav-item">
         
            <Link to ="/" 
           
            className={currentPage === 'Home'? 'nav-link active cust-active' : 'nav-link nav-text'}>Home</Link> 
        
        </li>
        <li className="nav">
            <Link to="/about" 
           
            className={currentPage === 'About'? 'active' : 'nav-link'}>About</Link>
        
        </li>
        <li className="nav">
            <Link to ="/portfolio" 
           
            className={currentPage === 'Portfolio'? 'active' : 'nav-link'}>Portfolio</Link>
        
        </li>
        <li className="nav">
            <Link to ="/resume" 
            
            
            className={currentPage === 'Resume'? 'nav-link active' : 'nav-link'}>Resume</Link>
        
        </li>
        <li className="nav">
            <Link to ="/contact"
           
            className={currentPage === 'Contact'? 'nav-link active' : 'nav-link'}>Contact</Link>
        
        </li> 
      </ul>  
      
    );
}