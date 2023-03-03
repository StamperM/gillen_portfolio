import React,{ useState } from "react";
import NavBar from "./NavBar";
import About from "./pages/";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";

export default function PortfolioMain(){
    const [currentPage,setCurrentPage] = useState('Home');

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
}







const handlePageChange = (page)=> setCurrentPage(page);
return(
    <div>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
    </div>
);
}