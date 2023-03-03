import React from "react";

export default function NavBar(){
    return(
      <ul>
        <li className="nav">
            <a href="#home" onClick={()=>handlePageChange('Home') } 
            className={currentPage === 'Home'? 'active' : 'notActive'}>Home</a>
        
        </li>
        <li className="nav">
            <a href="#about" onClick={()=>handlePageChange('About') } 
            className={currentPage === 'About'? 'active' : 'notActive'}>About</a>
        
        </li>
        <li className="nav">
            <a href="resume" onClick={()=>handlePageChange('Resume') } 
            className={currentPage === 'Resume'? 'active' : 'notActive'}>Resume</a>
        
        </li>
        <li className="nav">
            <a href="Contact" onClick={()=>handlePageChange('Contact') } 
            className={currentPage === 'Contact'? 'active' : 'notActive'}>Contact</a>
        
        </li>
      </ul>  
    );
}