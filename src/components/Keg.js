import React from "react";
import PropTypes from "prop-types";


function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.onKegSelection(props.id)}>
        <h4>{props.name}</h4>
        <p>{props.brand}</p>
        <p>${props.price}</p>
        <p>Alcohol content: {props.alcoholContent}</p>
        <p>Quantity: {props.quantity}</p>
      </div>
      <button className="btn btn-outline-light btn-sm" onClick = {() => props.onPourPint(props.id)}>Pour a pint!</button>

    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.number,
  onKegSelection: PropTypes.func,
  onPourPint: PropTypes.func
}

export default Keg;