import React from "react";
import Header from "../../components/homepage/header";
import TeamSection from "../../components/homepage/teamsection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PriceSection from "../../components/homepage/priceSection/PriceSection";

function Home() {
  


  return (
    <>
      <Header />
      <PriceSection/>
      <TeamSection  />
    </>
  );
}

export default Home;
