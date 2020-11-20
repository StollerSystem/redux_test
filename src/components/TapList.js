import React from "react";
import Keg from "./Keg.js"
import PropTypes from "prop-types";



function TapList(props) {
  return (
    <React.Fragment>
      <h2>Currently on Tap:</h2>
      <p>(Click for deatils)</p>
      <hr/>
      {props.availableKegs.map((keg) =>

        <Keg
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        quantity={keg.quantity}
        id={keg.id}
        key={keg.id}
        onKegSelection={props.onKegSelection}
        onPourPint={props.onPourPint}

        />

      )}


      

    </React.Fragment>
  )
}

TapList.propTypes = {
  availableKegs: PropTypes.array,
  onKegSelection: PropTypes.func //dont need?
  
};

export default TapList;