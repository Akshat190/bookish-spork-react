import React from "react";
import "./assets/css/margins-paddings.css";
import MainPage from "./components/pages/MainPage";
import {BrowserRouter , Routes , Route , useLocation } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import './assets/css/aos.css'
import headerData from "./data/header.json"
import footerData from "./data/footer.json"


function ScrollToTop(){
  const {pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {  
  const {header}=headerData;
  const {footer}=footerData;

  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className="section-wrapper">
      <div id="preLoader">
        <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<MainPage header={header} footer={footer}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
