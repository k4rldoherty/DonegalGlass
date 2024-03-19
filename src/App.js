import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TwentyFourHour from "./components/TwentyFourHour";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <TwentyFourHour />
    </div>
  );
}

export default App;
