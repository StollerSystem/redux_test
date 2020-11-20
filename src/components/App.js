import React from "react";
import Header from "./Header";
import TapControl from "./TapControl";


function App(){
  return ( 
    <React.Fragment>
      <div className="container">
        <Header />
        <TapControl />   
      </div>
    </React.Fragment>
  );
}

export default App;
