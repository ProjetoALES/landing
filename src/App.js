import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Landing from "./Sections/Landing/Landing";
import WhatIs from "./Sections/WhatIs/WhatIs";
import Activities from "./Sections/Activities/Activities";
import AboutUs from "./Sections/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <WhatIs />
      <Activities />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
