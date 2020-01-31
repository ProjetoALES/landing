import React from "react";
import "./App.css";

import Landing from "./Sections/Landing/Landing";
import WhatIs from "./Sections/WhatIs/WhatIs";
import Activities from "./Sections/Activities/Activities";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <WhatIs />
      <Activities />
    </div>
  );
}

export default App;
