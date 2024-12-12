
import Hero from "./component/Hero";
import SubHero from "./component/Subhero";
import Slides from "./component/Slides";
import Products from "./component/Products";
import Footer from "./component/Footer"; 
import React from "react";
import Banner from "./component/Banner";

export default function Home(){
  return (
    <>
  <div>
    <Hero/>
    <SubHero/>
    <Products/>
    <Slides/>
    <Footer/>
    <Banner/>
    </div>
    </>
  )
}





