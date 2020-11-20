import React from "react";
import Keg from "./Keg.js"
import PropTypes from "prop-types";



function TapList(props) {
  return (
    <React.Fragment>
      <h2>Tap List</h2>
      {props.availableKegs.map((keg) =>

        <Keg
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        />

      )}


      

    </React.Fragment>
  )
}

TapList.propTypes = {
  availableKegs: PropTypes.array
  
};

export default TapList;