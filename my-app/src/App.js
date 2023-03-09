import React from 'react';
import './App.css';
import PortfolioMain from './components/PortfolioMain';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Portfolio from './components/pages/Portfolio';
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Footer from "./components/pages/Footer";
import Contact from './components/pages/Contact';

function App() {
  return (
   <div>
    <NavBar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PortfolioMain/>} />
      <Route path='./portfolio' element={ <Portfolio/>}/>
      <Route path='./about' element={<About/>}/>
       <Route path= './resume' element={<Resume/>}/> 
      <Route path ='./contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>


   </div>
  
   
  );
}

export default App;
