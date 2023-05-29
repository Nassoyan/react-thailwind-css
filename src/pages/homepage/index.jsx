import React from "react";
import Header from "../../components/homepage/header";
import TeamSection from "../../components/homepage/teamsection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <TeamSection />
    </>
  );
}

export default Home;
