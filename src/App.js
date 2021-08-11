import React from "react";
// IMPORT COMPONENTS
import "./style/app.scss"

// import Aside from "./components/Aside"
// import Center from "./components/Center"
// import Right from "./components/Right"


import Aside from "../src/components/Aside"
import Center from "../src/components/Center"
import Right from "../src/components/Right"


function App() {
  return (
    <div className="App">
    <Aside/>
     <Center/>
  <Right/>
    </div>
  );
}

export default App;
