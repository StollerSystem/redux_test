import React from "react";
// import ship from "./ClipartKey_1391822.png/"


function Header() {
  return (    
    <React.Fragment>
      <br/><br/>
      <div className="container header">
        {/* <img src={ship}/> */}
        <img src={require('./ClipartKey_1391822.png')} />
        <h1>VIKING SHIP TAP HALL</h1>
        <p>(Wimps and posers: leave the hall)</p>
      </div>
    </React.Fragment>
  );
}

export default Header;