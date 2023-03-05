import React from "react";

export default function NavBar(currentPage,pageChange){
    return(
      <ul className="nav justify-content-end">
        <li className="nav-item">
         
            <a href="#home" 
            onClick={() => pageChange('Home')}
            className={currentPage === 'Home'? 'nav-link active cust-active' : 'nav-link nav-text'}>Home</a> 
        
        </li>
        <li className="nav">
            <a href="#about" 
            onClick={() => pageChange('About')} 
            className={currentPage === 'About'? 'active' : 'nav-link'}>About</a>
        
        </li>
        <li className="nav">
            <a href="#resume" 
            onClick={()=>pageChange('Resume')} 
            
            className={currentPage === 'Resume'? 'nav-link active' : 'nav-link'}>Resume</a>
        
        </li>
        <li className="nav">
            <a href="#contact" 
            onClick={()=>pageChange('Contact')} 
            className={currentPage === 'Contact'? 'nav-link active' : 'nav-link'}>Contact</a>
        
        </li> 
      </ul>  
    );
}