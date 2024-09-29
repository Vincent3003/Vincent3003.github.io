import React from 'react';
import "./App.css";
import MainNav from './components/navbar/MainNav';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import DarkMode from "./components/darkmode/DarkMode";
// import ScrollUp from './components/scrollup/ScrollUp';


const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <DarkMode />
        <MainNav/>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
