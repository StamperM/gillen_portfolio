import React from "react";
import'../components/styles/NavBar.css'
export default function NavBar(currentPage,pageChange){
    return(
      <ul className="nav justify-content-end">
        <li className="nav-item">
         
            <a href="/" 
           
            className={currentPage === 'Home'? 'nav-link active cust-active' : 'nav-link nav-text'}>Home</a> 
        
        </li>
        <li className="nav">
            <a href="/about" 
           
            className={currentPage === 'About'? 'active' : 'nav-link'}>About</a>
        
        </li>
        <li className="nav">
            <a href="/portfolio" 
           
            className={currentPage === 'Portfolio'? 'active' : 'nav-link'}>Portfolio</a>
        
        </li>
        <li className="nav">
            <a href="/resume" 
            
            
            className={currentPage === 'Resume'? 'nav-link active' : 'nav-link'}>Resume</a>
        
        </li>
        <li className="nav">
            <a href="/contact"
           
            className={currentPage === 'Contact'? 'nav-link active' : 'nav-link'}>Contact</a>
        
        </li> 
      </ul>  
    );
}