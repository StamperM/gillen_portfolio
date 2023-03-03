import React,{ useState } from "react";
import NavBar from "./NavBar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Contact from "./pages/Contact";


export default function PortfolioMain(){
    console.log('port call')
    // sets home as the default and each time setcurrentPage is called state will update
    const [currentPage,setCurrentPage] = useState('Home');
// this function is to navigate the different components using the navbar

    const renderPage = ()=>{
        if (currentPage === 'Home'){
            return <Home />;
        }
        if (currentPage === 'About'){
            return <About/>;
        }
        if (currentPage === 'Protfolio'){
            return<Portfolio/>;
        
        }
        if(currentPage === 'Resume'){
            return <Resume/>;
        }
        return <Contact/>;
    }

     const pageChange = (page) => setCurrentPage(page);
return(
    <div>
        <NavBar currentPage= {currentPage} PageChange= {PageChange}/> 
        {/* renders page of the current useState */}
        {renderPage()}
    </div>
);
}