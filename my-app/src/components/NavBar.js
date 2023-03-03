import React from "react";

export default function NavBar(currentPage,pageChange){
    return(
      <ul className="nav">
        <li className="nav">
         
            <a href="#home" onClick={()=>pageChange('Home') } 
            className={currentPage === 'Home'? 'active' : 'notActive'}>Home</a> 
        
        </li>
        <li className="nav">
            <a href="#about" onClick={()=> pageChange('About') } 
            className={currentPage === 'About'? 'active' : 'notActive'}>About</a>
        
        </li>
        <li className="nav">
            <a href="#resume" onClick={()=>pageChange('Resume') } 
            className={currentPage === 'Resume'? 'active' : 'notActive'}>Resume</a>
        
        </li>
        <li className="nav">
            <a href="#Contact" onClick={()=>pageChange('Contact') } 
            className={currentPage === 'Contact'? 'active' : 'notActive'}>Contact</a>
        
        </li> 
      </ul>  
    );
}