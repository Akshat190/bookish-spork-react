import React from "react";
import Header from "../global/Header"
import Hero from "../hero";
import Achieve from "../achieve";
import Chapter from "../chapter";
import Chapterpreview from "../chapter-preview";
import Author from "../author";
import Achievement from '../achievements'
import Funfacts from "../fun-fact";
import Books from "../books"
import Ctav5 from "../ctav5";
import Ctav4 from "../ctav4";
import Contact from "../contact";
import Footer from "../global/footer";

const MainPage = ({header , footer}) => { 
  const {menu}=footer;

  return (
    <>
      <Header header={header} />
      <Hero isBg='yes' />
      <Achieve isBg=''/>
      <Chapter isBg='yes'/>
      <Chapterpreview isBg=''/>
      <Author isBg=''/>
      <Achievement isBg='yes' />
      <Funfacts isBg=''/>
      <Books isBg='yes'/>
      <Ctav5 isBg=''/>
      <Ctav4 isBg=''/>
      <Contact isBg='' />
      <Footer isBg='yes' menu={menu}/>
    </>  
  );
}

export default MainPage;