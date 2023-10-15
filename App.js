import React from 'react';
import { Navbar } from './Navbar';
import LoginFooter from './loginFooter';
import LoginHeader from './loginHeader';
import ImageCarousel from './ImgCarousel';
import './App.css';
function App() {
  return (
      <div>
        <Navbar />
        <LoginHeader />
        <ImageCarousel />
        <LoginFooter />
      </div>
  );
}
export default App;