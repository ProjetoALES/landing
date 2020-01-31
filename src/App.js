import React from "react";
import "./App.css";

import Landing from "./Sections/Landing/Landing";
import WhatIs from "./Sections/WhatIs/WhatIs";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <WhatIs />
    </div>
  );
}

export default App;
