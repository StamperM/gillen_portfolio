import React from 'react';
import './App.css';
import PortfolioMain from './components/PortfolioMain';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Portfolio from './components/pages/Portfolio';


function App() {
  return (
   <div>
    <NavBar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PortfolioMain/>} />
      <Route path='/port' element={ <Portfolio/>}/>
    </Routes>
    </BrowserRouter>


   </div>
  
   
  );
}

export default App;
