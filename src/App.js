
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Home />

      

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
         
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
